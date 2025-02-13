import "./globals.css"
import type { Metadata } from "next"
import { playfair, inter } from "./fonts"
import type React from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://ristorante-arca.vercel.app"),
  title: {
    default: "Ristorante Pizzeria ARCA",
    template: "%s | Ristorante Pizzeria ARCA",
  },
  description: "Gustate la cucina italiana con una vista mozzafiato sul Lago di Garda al Ristorante Pizzeria ARCA",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20Arca-IZhKpNDGNr6X80HiR8mHx97H9BSsHv.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'