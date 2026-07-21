import React from 'react';

export function Badge({ children, variant = 'indigo', className = '', ...props }) {
  // variants: 'indigo' | 'cyan' | 'emerald' | 'pink' | 'glass'
  return (
    <span 
      className={`badge-custom badge-${variant} ${className}`} 
      {...props}
    >
      <span className="badge-dot"></span>
      {children}
    </span>
  );
}

export default Badge;
