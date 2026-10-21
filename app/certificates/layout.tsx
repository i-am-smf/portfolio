import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Certificates held by Shaik Mohamed Fahad in .NET with C#, MySQL, and DevOps on AWS, earned from 2022 to 2023.",
  alternates: { canonical: "/certificates" },
}

export default function CertificatesLayout({ children }: { children: ReactNode }) {
  return children
}
