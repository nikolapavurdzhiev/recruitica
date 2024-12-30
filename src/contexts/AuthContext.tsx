import React, { createContext, useContext } from 'react';
import { useAuth as useSupabaseAuth } from '../hooks/useAuth';

const AuthContext = createContext<ReturnType<typeof useSupabaseAuth> | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useSupabaseAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}