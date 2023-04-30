import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (Event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className="w-full rounded-md border-2 border-neutral-300 bg-slate-800 p-4 text-lg text-white outline-none transition focus:border-2 focus:border-blue-400 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:opacity-70"
    />
  );
};
