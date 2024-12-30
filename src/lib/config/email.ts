// Email configuration with safe defaults
export const emailConfig = {
  defaultProvider: 'sendgrid' as const,
  sendgrid: {
    fromEmail: 'notifications@recruitica.com'
  }
} as const;