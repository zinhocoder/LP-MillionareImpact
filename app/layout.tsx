import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Impacto Milionário | Mentoria Comercial de Alta Performance",
  description:
    "Mentoria comercial de alta performance para empresários B2B que querem escalar com método, alavancar o faturamento e transformar esforço em lucro previsível.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}
