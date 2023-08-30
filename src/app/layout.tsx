import './globals.css'
import type { Metadata } from 'next'

import { roboto_light } from './fonts'

import Providers from '@/redux/Providers'

export const metadata: Metadata = {
  title: 'Partnership BEC 2023',
  description: 'Best Engeneering Competition partnership broshure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto_light.className} bg-bec-bg`}>{children}</body>
    </html>
  )
}
