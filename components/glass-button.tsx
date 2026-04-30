'use client'

import { ReactNode } from 'react'

interface GlassButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'glass'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function GlassButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  type = 'button',
}: GlassButtonProps) {
  const variants = {
    primary: 'bg-accent hover:bg-amber-600 text-white font-semibold',
    secondary: 'bg-foreground/10 hover:bg-foreground/20 text-foreground font-medium',
    glass: 'glass-button dark:glass-button-dark font-medium',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
