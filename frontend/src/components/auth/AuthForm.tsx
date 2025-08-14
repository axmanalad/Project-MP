import type { AuthFormProps } from '../../types/auth';
import '../../styles/pages/auth/error.css';

/* This component renders a simple authentication form with email and password fields by default. 

Can be modified if other auth forms may want to customize it by adding more fields or changing the layout */
function AuthForm<T>(props: AuthFormProps<T>) {
  const { formData, handleChange, handleSubmit, submitButtonText, fields, errors = null } = props;

  // Handle field errors (if any)
  const getFieldError = (fieldName: string): string | undefined => {
    return errors?.find(error => error.field === fieldName)?.message;
  };

  // Handle form submission
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {fields.map((field) => {
        const fieldError = getFieldError(field.name);
        return (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={String(formData[field.name as keyof T]) || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
            className={fieldError ? 'form-input-error' : ''}
          />
          {fieldError && <span className="form-error-message">{fieldError}</span>}
        </div>
        );
      })}

      <button type="submit" className="login-form-button">{submitButtonText}</button>
    </form>
  );
}

export default AuthForm;