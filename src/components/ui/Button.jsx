import React from 'react'

// Lightweight Button without external deps so dev runs without additional installs.
export default function Button({ className = '', variant = 'default', size = 'md', children, ...props }){
  const base = 'btn'
  const ghost = 'btn secondary'
  const variantClass = variant === 'ghost' ? ghost : base

  // size handling: small tweak using inline styles for simplicity
  const sizeStyle = size === 'sm' ? { padding: '6px 10px', fontSize: '0.9rem' } : size === 'lg' ? { padding: '10px 16px', fontSize: '1rem' } : {}

  return (
    <button className={`${variantClass} ${className}`} style={sizeStyle} {...props}>
      {children}
    </button>
  )
}
