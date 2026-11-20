import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Shaik Mohamed Fahad T in Hor Al Anz, Deira, Dubai by email at fahadguy8@gmail.com.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
