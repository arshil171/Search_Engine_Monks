import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'glass' | 'glow'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon = null,
  iconPosition = 'right', // 'left' | 'right'
  className = '',
  ...props 
}) {
  const baseClass = 'btn-custom';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const iconSpacingClass = Icon ? (iconPosition === 'left' ? 'btn-icon-left' : 'btn-icon-right') : '';

  return (
    <button 
      className={`${baseClass} ${variantClass} ${sizeClass} ${iconSpacingClass} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <span className="btn-icon">
          <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
        </span>
      )}
      <span className="btn-text">{children}</span>
      {Icon && iconPosition === 'right' && (
        <span className="btn-icon btn-icon-animate">
          <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
        </span>
      )}
    </button>
  );
}

export default Button;
