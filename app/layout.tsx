import type { Metadata, Viewport } from "next"
import type React from "react"
import "@/styles/globals.css"
import { Source_Sans_3, Source_Serif_4 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()

const shareTitle = "Shaik Mohamed Fahad T | Software Developer in Chennai"
const shareDescription =
  "Software developer in Chennai who designs application workflows and builds them with Python, Flask, React, Next.js, and Flutter."
const shareAlt = "Shaik Mohamed Fahad T, software developer in Chennai"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1f3451",
}

export const metadata: Metadata = {
  title: {
    default: "Shaik Mohamed Fahad T | Software Developer in Chennai",
    template: "%s | Shaik Mohamed Fahad",
  },
  description:
    "Shaik Mohamed Fahad T is a software developer in Chennai who designs application workflows and builds them in Python, Flask, React, Next.js, and Flutter.",
  authors: [{ name: "Shaik Mohamed Fahad T" }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    type: "website",
    siteName: "Shaik Mohamed Fahad",
    images: [
      {
        url: "/og/16x9.png",
        width: 1672,
        height: 941,
        alt: shareAlt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [
      {
        url: "/og/16x9.png",
        width: 1672,
        height: 941,
        alt: shareAlt,
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shaik Mohamed Fahad T",
  alternateName: "Shaik Mohamed Fahad",
  jobTitle: "Senior Software Developer",
  description:
    "Software developer with hands-on experience designing application workflows, screens, and processes, alongside Python development for APIs, automation tools, and secure communication systems.",
  email: "mailto:fahadguy8@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600042",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Nexudo Tech Solutions",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "M.I.E.T. Engineering College",
    },
  ],
  knowsAbout: [
    "Python",
    "Dart",
    "React",
    "Next.js",
    "Flask",
    "Flutter",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Workflow design",
  ],
  sameAs: [
    "https://github.com/i-am-smf",
    "https://www.linkedin.com/in/shaik-mohamed-fahad-826971178",
  ],
}

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
