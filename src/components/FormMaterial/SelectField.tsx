// components/SelectField.tsx
import type { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

type SelectFieldProps<T extends FieldValues> = Readonly<{
  label: string;
  id: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  options: { value: string; label: string }[];
  className?: string;
}> & React.SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField<T extends FieldValues>({
  label,
  id,
  name,
  register,
  error,
  options,
  className = "",
  ...props
}: SelectFieldProps<T>) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-gray-700 font-medium mb-2">
        {label}
      </label>
      <select
        id={id}
        {...register(name)}
        {...props}
        className={`
          w-full px-4 mr-2 py-2 border border-gray-200 rounded-lg
          bg-white text-gray-900 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500
          transition-colors duration-200
          ${error ? "border-red-400" : ""}
        `}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
