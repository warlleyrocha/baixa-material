// components/FormField.tsx
import type { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

type FormFieldProps<T extends FieldValues> = Readonly<{
  label: string;
  id: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  className?: string;
  registerOptions?: Parameters<UseFormRegister<T>>[1];
  multiline?: boolean; // Nova prop para textarea
}> &
  (React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>);

export function FormField<T extends FieldValues>({
  label,
  id,
  name,
  register,
  error,
  className = '',
  registerOptions,
  multiline = false,
  ...props
}: FormFieldProps<T>) {
  const baseClasses = `
    w-full px-4 py-2 border border-gray-200 rounded-lg
    bg-white text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500
    transition-colors duration-200
    ${error ? 'border-red-400' : ''}
  `;

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-gray-700 text-[14px] font-medium mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          {...register(name, registerOptions)}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          rows={4}
          className={`${baseClasses} resize-vertical min-h-[100px]`}
        />
      ) : (
        <input
          id={id}
          {...register(name, registerOptions)}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          className={baseClasses}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
