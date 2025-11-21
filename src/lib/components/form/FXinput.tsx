import React from "react";

import { UseFormRegister } from "react-hook-form";

interface FXinputProps {
  label?: string;
  variant?: string;
  p?: string;
  width?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  name: string; 
  register?: UseFormRegister<any>;
}

export default function FXinput({
  label = "",
  variant = "border border-white/40",
  p = "px-4 py-2",
  width = "w-full",
  required = false,
  placeholder = "Enter your information",
  type = "text",
  className = "",
  onChange,
  value,
  name,
  register, 
}: FXinputProps) {
  return (
    <div className={`flex flex-col gap-1 ${width}`}>
      {label && (
        <label className="text-sm text-gray-300">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        {...(register ? register(name) : {})}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`${variant} ${p} rounded-lg bg-transparent text-white outline-none ${className}`}
      />
    </div>
  );
}
