-- Create sample articles with unique slugs
INSERT INTO articles (
  title,
  content,
  author_id,
  slug,
  published,
  created_at
) VALUES
(
  'The Future of AI in Recruitment: 2024 Trends',
  E'Artificial Intelligence is revolutionizing the recruitment industry, transforming how we source, screen, and engage with candidates. Here''s what every recruiter needs to know about AI in 2024 and beyond.\n\n## Key AI Trends in Recruitment\n\n### 1. Automated Candidate Screening\nAI-powered tools are becoming increasingly sophisticated at screening resumes and matching candidates to job requirements. This technology not only saves time but also helps reduce unconscious bias in the initial screening process.\n\n### 2. Predictive Analytics\nRecruiters are now using AI to predict candidate success, time-to-hire, and even candidate engagement levels. These insights help make more informed hiring decisions.\n\n### 3. Chatbots and Candidate Experience\nAI chatbots are evolving to provide better candidate experience through instant responses and personalized interactions.\n\n## Best Practices for Implementation\n\n1. Start small and scale gradually\n2. Focus on data quality\n3. Maintain the human touch\n4. Regular system audits\n\n## The Human Element\n\nWhile AI brings numerous benefits, the human element remains crucial. Successful recruiters will be those who can effectively combine AI capabilities with human insight and relationship-building skills.',
  (SELECT id FROM auth.users WHERE email = 'system@rec2rec.example.com'),
  'future-of-ai-in-recruitment-2024-trends',
  true,
  now() - interval '2 days'
),
(
  'Building High-Performance Recruitment Teams in 2024',
  E'Creating and maintaining a successful recruitment team requires careful planning, strong leadership, and effective processes. Here''s a comprehensive guide to building high-performance recruitment teams.\n\n## Key Components of Success\n\n### 1. Team Structure\n- Clear roles and responsibilities\n- Balanced workload distribution\n- Specialization vs. generalization\n\n### 2. Performance Metrics\n- Quality of hire\n- Time-to-fill\n- Candidate satisfaction\n- Client feedback\n\n### 3. Training and Development\n- Regular skill updates\n- Industry knowledge sharing\n- Technology training\n\n## Best Practices\n\n1. Regular team meetings\n2. Transparent communication\n3. Continuous feedback\n4. Recognition programs\n\n## Technology Integration\n\nLeverage the right tools to enhance team performance:\n- ATS optimization\n- CRM utilization\n- Analytics dashboards\n- Communication platforms',
  (SELECT id FROM auth.users WHERE email = 'system@rec2rec.example.com'),
  'building-high-performance-recruitment-teams-2024',
  true,
  now() - interval '5 days'
),
(
  'The Ultimate Guide to Remote Recruitment in 2024',
  E'Remote recruitment has become a permanent fixture in the hiring landscape. Here''s how to excel in virtual hiring and create an effective remote recruitment strategy.\n\n## Essential Elements\n\n### 1. Virtual Interviewing\n- Platform selection\n- Technical setup\n- Interview structure\n\n### 2. Candidate Assessment\n- Online assessments\n- Virtual assignments\n- Reference checks\n\n### 3. Onboarding\n- Digital documentation\n- Virtual orientation\n- Remote team integration\n\n## Best Practices\n\n1. Clear communication\n2. Structured process\n3. Technology optimization\n4. Candidate experience focus\n\n## Tools and Resources\n\nRecommended tools for remote recruitment:\n- Video interviewing platforms\n- Digital assessment tools\n- E-signature solutions\n- Virtual onboarding systems',
  (SELECT id FROM auth.users WHERE email = 'system@rec2rec.example.com'),
  'ultimate-guide-remote-recruitment-2024',
  true,
  now() - interval '7 days'
);

-- Add sample comments
INSERT INTO article_comments (article_id, user_id, content)
SELECT 
  articles.id,
  auth.users.id,
  'Great insights on the future of recruitment technology. The section about maintaining the human element is particularly important.'
FROM articles
CROSS JOIN auth.users
WHERE articles.slug = 'future-of-ai-in-recruitment-2024-trends'
AND auth.users.email = 'system@rec2rec.example.com'
LIMIT 1;

-- Add sample likes
INSERT INTO article_likes (article_id, user_id)
SELECT 
  articles.id,
  auth.users.id
FROM articles
CROSS JOIN auth.users
WHERE articles.slug = 'future-of-ai-in-recruitment-2024-trends'
AND auth.users.email = 'system@rec2rec.example.com'
LIMIT 1;