'use client'

import { ThemeProvider } from 'next-themes'
import { CartProvider } from '@/components/cart-provider'
import { ToastProvider } from '@/components/toast-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <CartProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </CartProvider>
    </ThemeProvider>
  )
}