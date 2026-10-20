"use client"

import { useEffect } from "react"
import { Source_Sans_3, Source_Serif_4 } from "next/font/google"
import { StatusPage } from "@/components/site/status-page"
import "@/styles/globals.css"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <StatusPage
          code="500"
          title="Something went wrong"
          description="This page ran into an unexpected problem. You can try again, or wait to be taken back to the home page."
          onRetry={reset}
        />
      </body>
    </html>
  )
}
