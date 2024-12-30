import { supabase } from './supabase';

export const sso = {
  // Initialize SSO
  init: async () => {
    // Check for SSO token in URL
    const params = new URLSearchParams(window.location.search);
    const ssoToken = params.get('sso_token');
    
    if (ssoToken) {
      try {
        // Verify and set session
        const { data, error } = await supabase.auth.setSession(ssoToken);
        if (error) throw error;
        return data;
      } catch (error) {
        console.error('SSO Error:', error);
        throw error;
      }
    }
  },

  // Generate SSO URL for Recruitica main platform
  getMainPlatformUrl: (returnTo?: string) => {
    const baseUrl = 'https://www.recruitica.io';
    const params = new URLSearchParams();
    if (returnTo) params.append('return_to', returnTo);
    return `${baseUrl}/sso?${params.toString()}`;
  }
};