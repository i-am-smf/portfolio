import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shaik Mohamed Fahad T in Chennai, Tamil Nadu 600042. Phone +91 73736 75313, email fahadguy8@gmail.com. He is currently serving notice as Senior Software Developer at Nexudo Tech Solutions.",
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
