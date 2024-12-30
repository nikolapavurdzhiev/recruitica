import type { Job } from '../../jobs/types';
import type { Company } from '../../companies/types';

export function formatJobResponse(jobs: Job[]) {
  if (!jobs.length) return 'No matching jobs found at the moment.';
  
  return jobs.map(job => `
# ${job.title}

• **Company:** ${job.company}
• **Location:** ${job.location}
• **Salary:** ${job.salary}
• **Type:** ${job.type}

### Description
${job.description ? job.description.slice(0, 150) + '...' : 'Contact us for more details.'}

[View Job Details](/jobs/${job.id})
`).join('\n\n---\n\n');
}

export function formatCompanyResponse(companies: Company[]) {
  if (!companies?.length) return 'No matching companies found at the moment.';
  
  return companies.map(company => {
    const headquarters = company.company_locations?.find(loc => loc.is_headquarters);
    const location = headquarters || company.company_locations?.[0];
    const locationText = location 
      ? `${location.city}, ${location.country}${headquarters ? ' (HQ)' : ''}`
      : 'Multiple locations';

    return `
# ${company.name}

• **Industry:** ${company.industry || 'Various industries'}
• **Size:** ${company.company_size || 'Company size not specified'}
• **Location:** ${locationText}

### About
${company.description ? company.description.slice(0, 150) + '...' : 'Contact us for more information.'}

[View Company Profile](/companies/${company.id})
`;
  }).join('\n\n---\n\n');
}