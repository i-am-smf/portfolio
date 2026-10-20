import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Certificates held by Shaik Mohamed Fahad: .NET Using C# Language from Ameya Cloud (May 2022), RDBMS Using MySQL from GFS India (September 2022), and DevOps on AWS from M.I.E.T. Engineering College (March 2023).",
}

export default function CertificatesLayout({ children }: { children: ReactNode }) {
  return children
}
