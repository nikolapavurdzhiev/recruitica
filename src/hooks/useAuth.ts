import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

interface SignUpParams {
  email: string;
  password: string;
  metadata?: {
    userType: 'candidate' | 'company';
    companyName?: string;
  };
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password
    });
    if (error) throw error;
  };

  const signUp = async (params: SignUpParams) => {
    const { error } = await supabase.auth.signUp({
      email: params.email.trim().toLowerCase(),
      password: params.password,
      options: {
        data: {
          userType: params.metadata?.userType,
          ...(params.metadata?.userType === 'company' ? { companyName: params.metadata?.companyName } : {})
        }
      }
    });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut
  };
}