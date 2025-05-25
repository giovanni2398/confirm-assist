import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="font-medium text-sm text-gray-700">{label}</label>
    )}
    <input
      className={`px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
    {error && <span className="text-xs text-red-600">{error}</span>}
  </div>
);

export default Input;
