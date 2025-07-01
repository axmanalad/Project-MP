import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import type { AuthFormField, RegisterFormData, ValidationError } from '../../types/auth';
import { validateRegisterForm } from '../../utils/auth/validation';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<ValidationError[]>([]);
  const navigate = useNavigate();

  const registerFields: AuthFormField[] = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      required: true
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm your password',
      required: true
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateRegisterForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      console.log('Validation errors:', validationErrors);
    } else {
      // Handle the registration logic, e.g., API call
      console.log('Registration submitted:', formData);
      // If registration is successful, navigate to the login page or another page
      void navigate('/login');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (errors.length > 0) {
      setErrors(errors.filter(error => error.field !== e.target.name));
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-header">Register to MaiPon</h2>
        <AuthForm<RegisterFormData>
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitButtonText="Register"
          fields={registerFields}
          errors={errors}
        />

        <div className="auth-footer">
          <p className="auth-text">Already have an account?
            <Link to="/login" className="auth-link">Login</Link>
          </p>
          <Link to="/" className="auth-link">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;