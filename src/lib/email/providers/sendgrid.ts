import sgMail from '@sendgrid/mail';
import type { EmailOptions, EmailResponse } from '../types';
import { emailConfig } from '../../config/email';

sgMail.setApiKey(emailConfig.sendgrid.apiKey);

export async function sendWithSendGrid(options: EmailOptions): Promise<EmailResponse> {
  try {
    await sgMail.send({
      to: options.to,
      from: emailConfig.sendgrid.fromEmail,
      subject: options.subject || 'Message from Recruitica',
      text: options.text,
      html: options.html
    });

    return {
      success: true,
      message: 'Email sent successfully via SendGrid',
      provider: 'sendgrid'
    };
  } catch (error) {
    console.error('SendGrid error:', error);
    throw error;
  }
}