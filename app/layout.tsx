import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
const poppins = Poppins({display: "auto", weight: "500", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'SlayerDev',
  description: '18 Years Old Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
