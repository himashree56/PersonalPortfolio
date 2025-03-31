import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  type = 'button',
  className = '',
  as: Component = 'button',
  ...props 
}) => {
  return (
    <Component
      type={Component === 'button' ? type : undefined}
      className={`button button-${variant} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button