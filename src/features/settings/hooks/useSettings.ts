import { useState } from 'react';
import { supabase } from '../../../lib/supabase';

export function useSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const updateSettings = async (section: string, data: any) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('user_settings')
        .upsert({ section, data });

      if (error) throw error;

      setToast({
        message: 'Settings updated successfully',
        type: 'success'
      });
    } catch (error) {
      setToast({
        message: 'Failed to update settings',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    toast,
    setToast,
    updateSettings
  };
}