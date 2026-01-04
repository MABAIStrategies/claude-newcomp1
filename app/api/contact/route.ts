import { NextRequest, NextResponse } from 'next/server';
import { submitToWebform3, validateContactForm, trackFormSubmission } from '@/lib/api/leads';
import { sendContactConfirmation, sendInternalNotification } from '@/lib/api/email';
import { ContactFormData } from '@/lib/api/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formData: ContactFormData = body;

    // Get source page from request
    const source = body.source || request.headers.get('referer') || 'unknown';

    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Submit to Webform3
    const webform3Result = await submitToWebform3(formData, source);
    if (!webform3Result.success) {
      console.error('Webform3 submission failed:', webform3Result.error);
      // Continue anyway - don't block on third-party service
    }

    // Send confirmation email to user
    try {
      await sendContactConfirmation(formData);
    } catch (emailError) {
      console.error('Confirmation email failed:', emailError);
      // Continue - don't block on email failure
    }

    // Send internal notification
    try {
      await sendInternalNotification(formData);
    } catch (emailError) {
      console.error('Internal notification failed:', emailError);
      // Continue - don't block on email failure
    }

    // Track analytics event
    trackFormSubmission('contact_form', formData);

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you within 24 hours.',
    });
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}
