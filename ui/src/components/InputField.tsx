import React from "react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  loading?: boolean; // added
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  loading = false, // default false
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-5 py-4 text-lg",
  };

  return (
    <div className="w-full">
      {label && <label className="block mb-1 font-medium text-gray-700">{label}</label>}

      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled || loading}
          className={`
            rounded-2xl border focus:outline-none focus:ring-2
            transition-all duration-200
            ${sizeClasses[size]}
            ${variant === "filled" ? "bg-gray-100 border-gray-300" : ""}
            ${variant === "outlined" ? "bg-white border-gray-400" : ""}
            ${variant === "ghost" ? "bg-transparent border-none" : ""}
            ${invalid ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"}
            ${disabled || loading ? "bg-gray-200 cursor-not-allowed" : ""}
          `}
        />

        {loading && (
          <div className="absolute left-46 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {helperText && !errorMessage && <p className="text-sm text-gray-500 mt-1">{helperText}</p>}
      {errorMessage && <p className="text-sm text-red-500 mt-1">{errorMessage}</p>}
    </div>
  );
};
