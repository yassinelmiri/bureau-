'use client';

import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
