import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200";
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:opacity-90 shadow-lg shadow-violet-500/25",
    outline: "border border-current text-current hover:bg-white/10",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
