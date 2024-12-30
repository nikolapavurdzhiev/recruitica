import { sendWithSendGrid } from './providers/sendgrid';
import type { EmailOptions, EmailResponse } from './types';

export async function sendEmail(options: EmailOptions): Promise<EmailResponse> {
  try {
    // Only use SendGrid for now since it's our default provider
    return await sendWithSendGrid(options);
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}