// components/FormField.tsx
import type { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

type FormFieldProps<T extends FieldValues> = Readonly<{
  label: string;
  id: string;
  name: Path<T>; // pega a key corretamente do form
  register: UseFormRegister<T>;
  error?: FieldError;
  className?: string;
  registerOptions?: Parameters<UseFormRegister<T>>[1];
}> & React.InputHTMLAttributes<HTMLInputElement>;

export function FormField<T extends FieldValues>({
  label,
  id,
  name,
  register,
  error,
  className = "",
  registerOptions,
  ...props
}: FormFieldProps<T>) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        {...register(name, registerOptions)}
        {...props}
        className={`
          w-full px-4 py-2 border border-gray-200 rounded-lg
          bg-white text-gray-900 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500
          transition-colors duration-200
          ${error ? "border-red-400" : ""}
        `}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
