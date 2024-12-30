import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import type { EmailOptions, EmailResponse } from '../types';

// Only initialize SES client if credentials are available
const getSESClient = () => {
  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    return null;
  }

  return new SESClient({
    region: 'us-east-1', // Default region
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  });
};

export async function sendWithSES(options: EmailOptions): Promise<EmailResponse> {
  const sesClient = getSESClient();
  
  if (!sesClient) {
    throw new Error('AWS SES not configured');
  }

  try {
    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: [options.to]
      },
      Message: {
        Body: {
          Text: { Data: options.text || '' },
          Html: options.html ? { Data: options.html } : undefined
        },
        Subject: { Data: options.subject || 'Message from Recruitica' }
      },
      Source: 'notifications@recruitica.com'
    });

    await sesClient.send(command);

    return {
      success: true,
      message: 'Email sent successfully via AWS SES',
      provider: 'aws-ses'
    };
  } catch (error) {
    console.error('AWS SES error:', error);
    throw error;
  }
}