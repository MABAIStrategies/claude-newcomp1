import { ContactFormData, EmailTemplateData } from './types';

const SITE_EMAIL = process.env.WEBFORM3_RECIPIENT_EMAIL || 'mark@mabaistrategies.com';

/**
 * Send contact form confirmation email to user
 * Note: This is a placeholder - actual email sending requires a service like SendGrid, Mailgun, etc.
 * To be implemented with email service provider in production.
 */
export async function sendContactConfirmation(
  formData: ContactFormData
): Promise<{ success: boolean }> {
  // Placeholder for email service integration
  console.log('📧 Sending confirmation email to:', formData.email);

  // TODO: Implement actual email sending with a service like SendGrid
  // Uncomment when email service is configured:
  // const emailData: EmailTemplateData = {
  //   recipientEmail: formData.email,
  //   recipientName: formData.name,
  //   subject: 'Thank you for contacting MAB AI Strategies',
  //   templateType: 'contact-confirmation',
  //   data: {
  //     name: formData.name,
  //     message: formData.message,
  //     expectedResponse: '24 hours',
  //   },
  // };
  // await sendgrid.send({
  //   to: emailData.recipientEmail,
  //   from: SITE_EMAIL,
  //   subject: emailData.subject,
  //   html: generateConfirmationEmailHTML(emailData),
  // });

  return { success: true };
}

/**
 * Send internal notification to MAB team
 */
export async function sendInternalNotification(
  formData: ContactFormData
): Promise<{ success: boolean }> {
  console.log('📧 Sending internal notification to:', SITE_EMAIL);
  console.log('Form data:', formData);

  // TODO: Implement actual email sending with a service like SendGrid
  // Uncomment when email service is configured:
  // const emailData: EmailTemplateData = {
  //   recipientEmail: SITE_EMAIL,
  //   recipientName: 'MAB Team',
  //   subject: `New Contact Form Submission from ${formData.name}`,
  //   templateType: 'internal-notification',
  //   data: {
  //     name: formData.name,
  //     email: formData.email,
  //     phone: formData.phone || 'Not provided',
  //     company: formData.company || 'Not provided',
  //     service: formData.service || 'Not specified',
  //     budget: formData.budget || 'Not specified',
  //     message: formData.message,
  //   },
  // };

  return { success: true };
}

/**
 * Generate HTML email template for confirmation
 */
export function generateConfirmationEmailHTML(data: EmailTemplateData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Inter', Arial, sans-serif; background-color: #000C1F; color: #F8F9FA; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
          .header { text-align: center; margin-bottom: 40px; }
          .logo { width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, #D4AF37, #FFD700); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
          .logo-text { font-size: 36px; font-weight: bold; color: #000C1F; font-family: 'Cinzel', serif; }
          .title { font-size: 32px; font-weight: bold; color: #D4AF37; margin-bottom: 16px; }
          .content { background: rgba(11, 26, 48, 0.5); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; padding: 32px; }
          .message { font-size: 16px; line-height: 1.6; margin-bottom: 24px; }
          .footer { text-align: center; margin-top: 40px; color: rgba(248, 249, 250, 0.6); font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">
              <div class="logo-text">MAB</div>
            </div>
            <h1 class="title">Thank You for Reaching Out</h1>
          </div>
          <div class="content">
            <p class="message">Hi ${data.recipientName},</p>
            <p class="message">Thank you for contacting MAB AI Strategies. We've received your message and will get back to you within ${data.data.expectedResponse}.</p>
            <p class="message">In the meantime, feel free to explore our services and case studies on our website.</p>
            <p class="message">Best regards,<br><strong>Mark Anthony Barrameda</strong><br>MAB AI Strategies</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} MAB AI Strategies. All rights reserved.</p>
            <p>${SITE_EMAIL}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
