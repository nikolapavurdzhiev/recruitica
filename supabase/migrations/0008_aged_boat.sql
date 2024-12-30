/*
  # Add sample blog articles

  1. Changes
    - Create system author if not exists
    - Add sample articles with realistic content
  
  2. Security
    - Only creates user/profile if they don't exist
    - Uses proper foreign key relationships
*/

DO $$
DECLARE
  system_user_id uuid;
BEGIN
  -- First try to find existing system user
  SELECT id INTO system_user_id
  FROM auth.users
  WHERE email = 'system@rec2rec.example.com'
  LIMIT 1;

  -- If system user doesn't exist, create it
  IF system_user_id IS NULL THEN
    INSERT INTO auth.users (
      id,
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      raw_app_meta_data,
      raw_user_meta_data,
      is_super_admin,
      role
    ) VALUES (
      gen_random_uuid(),
      'system@rec2rec.example.com',
      crypt('system-password-never-used', gen_salt('bf')),
      now(),
      now(),
      now(),
      '{"provider":"email","providers":["email"]}',
      '{}',
      false,
      'authenticated'
    )
    RETURNING id INTO system_user_id;
  END IF;

  -- Check if profile exists before creating
  IF NOT EXISTS (
    SELECT 1 FROM profiles WHERE id = system_user_id
  ) THEN
    INSERT INTO public.profiles (
      id,
      email,
      full_name,
      user_type
    ) VALUES (
      system_user_id,
      'system@rec2rec.example.com',
      'Rec2Rec Editorial Team',
      'admin'
    );
  END IF;

  -- Insert sample articles only if they don't exist
  IF NOT EXISTS (
    SELECT 1 FROM articles WHERE slug = 'future-of-tech-recruitment'
  ) THEN
    INSERT INTO articles (
      title,
      content,
      author_id,
      slug,
      published,
      created_at
    ) VALUES
    (
      'The Future of Tech Recruitment: AI and Human Touch',
      E'The recruitment industry is evolving rapidly with the integration of artificial intelligence. While AI-powered tools are revolutionizing how we source and screen candidates, the human element remains crucial. Successful recruiters are those who can leverage technology while maintaining meaningful relationships with both clients and candidates.\n\nKey trends shaping the future:\n- AI-powered candidate matching\n- Predictive analytics for hiring success\n- Automated initial screening\n- Enhanced candidate experience through technology',
      system_user_id,
      'future-of-tech-recruitment',
      true,
      now() - interval '2 days'
    ),
    (
      'Building High-Performance Recruitment Teams',
      E'Creating and maintaining a successful recruitment team requires careful planning and ongoing development. The key lies in combining diverse skills, implementing effective processes, and fostering a culture of collaboration.\n\nEssential elements:\n- Clear performance metrics\n- Ongoing training and development\n- Strong team communication\n- Technology adoption and best practices\n- Regular feedback and improvement cycles',
      system_user_id,
      'building-recruitment-teams',
      true,
      now() - interval '5 days'
    ),
    (
      'Remote Recruitment: Best Practices for 2024',
      E'As remote work continues to shape the employment landscape, recruiters must adapt their strategies. Virtual interviewing, digital onboarding, and remote assessment techniques have become essential skills.\n\nBest practices include:\n- Structured virtual interview processes\n- Digital tools for candidate assessment\n- Remote onboarding strategies\n- Building virtual relationships\n- Managing distributed teams effectively',
      system_user_id,
      'remote-recruitment-best-practices',
      true,
      now() - interval '7 days'
    );
  END IF;
END $$;