import { ContactFormData, LeadData, ApiResponse } from './types';

const WEBFORM3_API_KEY = process.env.WEBFORM3_API_KEY;
const WEBFORM3_ENDPOINT = process.env.WEBFORM3_ENDPOINT;
const WEBFORM3_RECIPIENT = process.env.WEBFORM3_RECIPIENT_EMAIL || 'mark@mabaistrategies.com';

/**
 * Submit lead to Webform3
 */
export async function submitToWebform3(
  formData: ContactFormData,
  source: string = 'website'
): Promise<ApiResponse> {
  try {
    // If no API key configured, return mock success for development
    if (!WEBFORM3_API_KEY || !WEBFORM3_ENDPOINT) {
      console.warn('Webform3 not configured. Skipping submission.');
      return {
        success: true,
        message: 'Development mode: Lead captured locally',
        data: { formData, source },
      };
    }

    const leadData: LeadData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source,
    };

    const response = await fetch(WEBFORM3_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${WEBFORM3_API_KEY}`,
      },
      body: JSON.stringify({
        recipient: WEBFORM3_RECIPIENT,
        lead: leadData,
        metadata: {
          source: 'MAB AI Strategies Website',
          page: source,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Webform3 API error: ${response.statusText}`);
    }

    const result = await response.json();

    return {
      success: true,
      message: 'Lead submitted successfully',
      data: result,
    };
  } catch (error) {
    console.error('Webform3 submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit lead',
    };
  }
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  // Required fields
  if (!data.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!data.message?.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  // Optional phone validation
  if (data.phone && data.phone.trim() && !/^[\d\s\-\+\(\)]+$/.test(data.phone)) {
    errors.phone = 'Invalid phone number format';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Track event with analytics
 */
export function trackEvent(eventName: string, eventData?: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
}

/**
 * Track form submission
 */
export function trackFormSubmission(formType: string, formData: Partial<ContactFormData>): void {
  trackEvent('form_submission', {
    form_type: formType,
    service_interest: formData.service,
    budget_range: formData.budget,
  });
}
