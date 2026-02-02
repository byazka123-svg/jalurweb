import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'normal' | 'thin';
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'normal', children, leftIcon, className, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-6 font-semibold text-base rounded-lg shadow-md transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none';

  const sizeClasses = {
    normal: 'py-3',
    thin: 'py-2',
  };

  const variantClasses = {
    primary: 'bg-brand-orange text-white hover:bg-orange-600 focus:ring-brand-orange',
    secondary: 'bg-brand-blue text-white hover:bg-blue-700 focus:ring-brand-blue',
    outline: 'bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-blue-50',
  };

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className || ''}`} {...props}>
      {leftIcon}
      {children}
    </button>
  );
};

export default Button;
