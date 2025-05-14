import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'rounded-lg font-medium transition-all duration-200 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/20',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white',
    accent: 'bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white shadow-lg shadow-pink-500/20',
    ghost: 'bg-transparent hover:bg-slate-800/50 text-white',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${disabledClasses}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;