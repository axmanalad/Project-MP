import React from 'react';

export interface BaseAuthFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends BaseAuthFormData {
  username: string;
  confirmPassword: string;
}

export type AuthFormData = BaseAuthFormData | RegisterFormData;

export interface AuthFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  required?: boolean;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface AuthFormProps<T = AuthFormData> {
  formData: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  submitButtonText: string;
  fields: AuthFormField[];
  errors?: ValidationError[];
}

export type User = {
  id: string;
  email: string;
  username: string;
};

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (email: string, username: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
};