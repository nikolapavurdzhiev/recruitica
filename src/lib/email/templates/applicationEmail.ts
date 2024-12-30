import { Profile } from '../../types';

export function generateApplicationEmail(application: {
  candidate: Profile;
  jobTitle: string;
  company: string;
  coverLetter?: string;
  resumeUrl?: string;
}) {
  const { candidate, jobTitle, company, coverLetter, resumeUrl } = application;

  return {
    subject: `New Application: ${jobTitle} - ${candidate.full_name}`,
    html: `
      <h2>New Job Application Received</h2>
      
      <p>A new application has been submitted for the ${jobTitle} position.</p>
      
      <h3>Candidate Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${candidate.full_name}</li>
        <li><strong>Email:</strong> ${candidate.email}</li>
        ${candidate.title ? `<li><strong>Current Title:</strong> ${candidate.title}</li>` : ''}
        ${candidate.location ? `<li><strong>Location:</strong> ${candidate.location}</li>` : ''}
      </ul>

      ${coverLetter ? `
        <h3>Cover Letter:</h3>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${coverLetter}
        </div>
      ` : ''}

      ${resumeUrl ? `
        <p><strong>Resume:</strong> <a href="${resumeUrl}">Download Resume</a></p>
      ` : ''}

      <p>You can review this application in your dashboard at <a href="https://recruitica.com/dashboard/applications">Recruitica Dashboard</a>.</p>
    `,
    text: `
      New Job Application Received

      A new application has been submitted for the ${jobTitle} position.

      Candidate Details:
      - Name: ${candidate.full_name}
      - Email: ${candidate.email}
      ${candidate.title ? `- Current Title: ${candidate.title}` : ''}
      ${candidate.location ? `- Location: ${candidate.location}` : ''}

      ${coverLetter ? `
        Cover Letter:
        ${coverLetter}
      ` : ''}

      ${resumeUrl ? `Resume: ${resumeUrl}` : ''}

      Review this application in your dashboard: https://recruitica.com/dashboard/applications
    `
  };
}