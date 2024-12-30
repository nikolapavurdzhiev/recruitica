import { supabase } from './supabase';

// Shared API endpoints between platforms
export const api = {
  // Authentication
  auth: {
    // Get session from either platform
    getSession: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      return { session, error };
    },
    
    // Sync login state between platforms
    syncLogin: async (token: string) => {
      const { data, error } = await supabase.auth.setSession(token);
      return { data, error };
    }
  },

  // Data synchronization
  sync: {
    // Sync user profile between platforms
    syncProfile: async (userId: string) => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      return { data, error };
    }
  }
};