'use client'

import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function GlassCard({ children, className = '', hover = false, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`glass-card dark:glass-card-dark ${
        hover ? 'hover:shadow-xl hover:scale-105' : ''
      } transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
