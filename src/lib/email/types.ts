export interface EmailOptions {
  to: string;
  subject?: string;
  text?: string;
  html?: string;
  templateId?: string;
  templateData?: Record<string, unknown>;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  provider?: 'sendgrid' | 'aws-ses';
  error?: string;
}