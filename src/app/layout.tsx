import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Header from './components/Header'
import ReduxProvider from './components/ReduxProvider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ecommerce',
  description: 'ecommerce-wb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#ffffff] text-black`}
      >
        <ReduxProvider>
          <Toaster position='top-center' reverseOrder={false} />
          <NextTopLoader showSpinner={false} height={3} color='#0000FF' />

          <Header />

          <main className='flex-1 bg-[#ffffff] text-black'>{children}</main>

          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
