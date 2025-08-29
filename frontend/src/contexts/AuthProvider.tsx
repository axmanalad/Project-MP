import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { login as apiLogin, register as apiRegister, logout as apiLogout, getCurrentUser, isAuthenticated } from '../api/authService';
import type { User } from '../types/auth';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in

    try {
      const user = getCurrentUser();
      setUser(user);
      // console.log(user); FOR DEBUGGING
      setAuthenticated(isAuthenticated());
      setLoading(false);
    } catch (err) {
      console.error('User not logged in:', err);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await apiLogin(email, password);
      if (response.success) {
        setUser(response.data.user);
        setAuthenticated(true);
        return { success: true };
      }
      return { success: false, message: response.data.message };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false };
    }
  }, []);

  const register = useCallback(async (email: string, username: string, password: string) => {
    try {
      const response = await apiRegister(email, username, password);
      if (response.success) {
        setUser(response.data.user);
        setAuthenticated(true);
        return { success: true };
      }
      return { success: false, message: response.data.message };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false };
    }
  }, []);

  const logout = useCallback(() => {
    apiLogout();
    setUser(null);
    setAuthenticated(false);
  }, []);

  const contextValue = useMemo(() => ({
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: authenticated
  }), [user, loading, login, register, logout, authenticated]);

  return (
    <AuthContext value={contextValue}>
      {children}
    </AuthContext>
  );
};

// Remove useAuth from this file and move it to a new file named useAuth.ts
