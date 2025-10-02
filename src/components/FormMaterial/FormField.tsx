// components/FormField.tsx
import type { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { smartCapitalize } from '../../utils/textUtils';

type BaseFormFieldProps<T extends FieldValues> = {
  label: string;
  id: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  className?: string;
  registerOptions?: Parameters<UseFormRegister<T>>[1];
  multiline?: boolean;
  enableAutoCapitalize?: boolean; // Renomeado para evitar conflito
};

type FormFieldProps<T extends FieldValues> = BaseFormFieldProps<T> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BaseFormFieldProps<T>> &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, keyof BaseFormFieldProps<T>>;

export function FormField<T extends FieldValues>({
  label,
  id,
  name,
  register,
  error,
  className = '',
  registerOptions,
  multiline = false,
  enableAutoCapitalize = true, // Renomeado
  ...props
}: FormFieldProps<T>) {
  const baseClasses = `
    w-full px-4 py-2 border border-gray-200 rounded-lg
    bg-white text-gray-900 placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500
    transition-colors duration-200
    ${error ? 'border-red-400' : ''}
  `;

  const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const el = e.currentTarget;

    if (
      enableAutoCapitalize &&
      el.value &&
      (el instanceof HTMLTextAreaElement || el.type === 'text')
    ) {
      const start = el.selectionStart ?? el.value.length;
      const end = el.selectionEnd ?? el.value.length;

      el.value = smartCapitalize(el.value);

      if (typeof el.setSelectionRange === 'function') {
        el.setSelectionRange(start, end);
      }
    }

    if (props.onInput) {
      props.onInput(e as any);
    }
  };

  const registeredField = register(name, registerOptions);

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-gray-700 text-[14px] font-medium mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          {...registeredField}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          rows={4}
          onInput={handleInput}
          className={`${baseClasses} resize-vertical min-h-[100px]`}
        />
      ) : (
        <input
          id={id}
          {...registeredField}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          onInput={handleInput}
          className={baseClasses}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
