import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '@/components/navbar'
import { ToastProvider } from '@/components/toast-provider'
import { CartProvider } from '@/components/cart-provider'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brevita Café - Premium Coffee Experience',
  description:
    'Discover the finest specialty coffee at Brevita Café. Premium beans, artisan craftsmanship, and a warm atmosphere.',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',

  icons: {
    icon: '/cafe logo.png',
    apple: '/cafe logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            <ToastProvider>
              <Navbar />
              <main className="min-h-screen">{children}</main>
              {process.env.NODE_ENV === 'production' && <Analytics />}
            </ToastProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}