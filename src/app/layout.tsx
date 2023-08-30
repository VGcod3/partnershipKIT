'use client'
import './globals.css'
import type { Metadata } from 'next'

import { Provider } from 'react-redux'

import store from '@/redux/store'

import { roboto_light } from './fonts'

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
      <Provider store={store}>
        <body className={`${roboto_light.className} bg-bec-bg`}>{children}</body>
      </Provider>
    </html>
  )
}
