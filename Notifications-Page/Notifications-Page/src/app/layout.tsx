import { Plus_Jakarta_Sans as plusJakartaSans } from 'next/font/google'
import React from 'react'
import './globals.css'

const jakartaSans = plusJakartaSans({ subsets: ['latin'] })

export const metadata = {
  title: 'Notifications',
  description: 'Notifications Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakartaSans.className}>{children}</body>
    </html>
  )
}
