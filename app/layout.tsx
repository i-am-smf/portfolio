import type { Metadata, Viewport } from "next"
import type React from "react"
import Script from "next/script"
import "@/styles/globals.css"
import { Source_Sans_3, Source_Serif_4 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { getSiteUrl } from "@/lib/site"

const siteUrl = getSiteUrl()
const gtmId = "GTM-MTL46X6T"

const shareDescription =
  "Shaik Mohamed Fahad T is a software developer in Dubai who designs workflows and builds them with Python, Flask, React, Next.js, and Flutter."
const shareAlt = "Shaik Mohamed Fahad T, software developer in Dubai"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1f3451",
}

export const metadata: Metadata = {
  title: {
    default: "Shaik Mohamed Fahad T | Software Developer in Dubai",
    template: "%s | Shaik Mohamed Fahad",
  },
  description: shareDescription,
  applicationName: "Shaik Mohamed Fahad",
  authors: [{ name: "Shaik Mohamed Fahad T", url: siteUrl }],
  creator: "Shaik Mohamed Fahad T",
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Shaik Mohamed Fahad",
    images: [
      {
        url: "/og/16x9.jpg",
        width: 1200,
        height: 630,
        alt: shareAlt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/og/16x9.jpg",
        width: 1200,
        height: 630,
        alt: shareAlt,
        type: "image/jpeg",
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
  "@graph": [
    {
  "@type": "WebSite",
  name: "Shaik Mohamed Fahad",
  url: siteUrl,
  inLanguage: "en",
  description: shareDescription,
    },
    {
  "@type": "Person",
  name: "Shaik Mohamed Fahad T",
  alternateName: "Shaik Mohamed Fahad",
  url: siteUrl,
  image: `${siteUrl}/og/16x9.jpg`,
  jobTitle: "Senior Software Developer",
  description:
    "Software developer with hands-on experience designing application workflows, screens, and processes, alongside Python development for APIs, automation tools, and secure communication systems.",
  email: "mailto:fahadguy8@gmail.com",
  telephone: "+971566005720",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hor Al Anz",
    addressLocality: "Deira",
    addressRegion: "Dubai",
    addressCountry: "AE",
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
    "https://www.instagram.com/i_am_smf_/",
  ],
    },
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
