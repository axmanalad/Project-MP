import type { BaseAuthFormData, RegisterFormData, ValidationError } from "../../types/auth";

export const validateRegisterForm = (formData: RegisterFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (formData.password !== formData.confirmPassword) {
    errors.push({
      field: 'confirmPassword',
      message: 'Passwords do not match'
    })
  }

  if (formData.password.length < 6) {
    errors.push({
      field: 'password',
      message: 'Password must be at least 6 characters long'
    })
  }

  if (formData.username.length < 3) {
    errors.push({
      field: 'username',
      message: 'Username must be at least 3 characters long'
    })
  }

  return errors;
};

export const validateLoginForm = (formData: BaseAuthFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!formData.email) {
    errors.push({
      field: 'email',
      message: 'Email is required'
    });
  }

  if (!formData.password) {
    errors.push({
      field: 'password',
      message: 'Password is required'
    });
  }

  return errors;
};
