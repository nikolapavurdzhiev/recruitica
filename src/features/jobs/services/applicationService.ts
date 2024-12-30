import { supabase } from '../../../lib/supabase';
import { sendEmail } from '../../../lib/email/service';
import { generateApplicationEmail } from '../../../lib/email/templates/applicationEmail';

export async function submitJobApplication({
  jobId,
  candidateId,
  coverLetter,
  resumeUrl
}: {
  jobId: string;
  candidateId: string;
  coverLetter?: string;
  resumeUrl?: string;
}) {
  try {
    // Get job and company details
    const { data: job } = await supabase
      .from('jobs')
      .select(`
        *,
        company:companies(
          *,
          hiring_manager:profiles(email)
        )
      `)
      .eq('id', jobId)
      .single();

    if (!job) throw new Error('Job not found');

    // Get candidate profile
    const { data: candidate } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', candidateId)
      .single();

    if (!candidate) throw new Error('Candidate profile not found');

    // Create application record
    const { data: application, error } = await supabase
      .from('job_applications')
      .insert({
        job_id: jobId,
        candidate_id: candidateId,
        cover_letter: coverLetter,
        resume_url: resumeUrl,
        status: 'pending'
      })
      .select()
      .single();

    if (error) throw error;

    // Send email notification to hiring manager
    const hiringManagerEmail = job.company.hiring_manager?.email;
    if (hiringManagerEmail) {
      const emailContent = generateApplicationEmail({
        candidate,
        jobTitle: job.title,
        company: job.company.name,
        coverLetter,
        resumeUrl
      });

      await sendEmail({
        to: hiringManagerEmail,
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text
      });
    }

    return application;
  } catch (error) {
    console.error('Error submitting application:', error);
    throw error;
  }
}