import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import '../../styles/pages/auth/login.css';
import { type ValidationError, type AuthFormField, type BaseAuthFormData } from '../../types/auth';
import { validateLoginForm } from '../../utils/auth/validation';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<BaseAuthFormData>({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const navigate = useNavigate();

  const loginFields: AuthFormField[] = [
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
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateLoginForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle the login logic, e.g., API call
    console.log('Login submitted:', formData);
    // If login is successful, navigate to the home page or another page
    void navigate('/my-games');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (errors.length > 0) {
      // Clear errors when user starts typing
      setErrors(errors.filter(error => error.field !== e.target.name));
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-header">Login to MaiPon</h2>
        <AuthForm<BaseAuthFormData>
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitButtonText="Login"
          fields={loginFields}
          errors={errors}
        />

        <div className="auth-footer">
          <p className="auth-text">Don't have an account?
            <Link to="/register" className="auth-link">Register</Link>
          </p>
          <Link to="/" className="auth-link">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;