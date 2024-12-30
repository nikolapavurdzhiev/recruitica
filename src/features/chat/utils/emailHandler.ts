import { generateEmailContent, sendEmail } from '../../../lib/email/service';

export async function handleEmailRequest(email: string, query: string) {
  try {
    // Generate email content using AI
    const content = await generateEmailContent(query);

    // Send the email
    const response = await sendEmail({
      to: email,
      subject: 'Your Recruitica Job Search Results',
      text: content
    });

    return response;
  } catch (error) {
    console.error('Email handling error:', error);
    return {
      success: false,
      message: 'Failed to process email request'
    };
  }
}