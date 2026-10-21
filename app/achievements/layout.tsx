import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Awards won by Shaik Mohamed Fahad: first prize at Technoholix'23 and Arcane 2K23, and second place at Analytiixfest2k23.",
  alternates: { canonical: "/achievements" },
}

export default function AchievementsLayout({ children }: { children: ReactNode }) {
  return children
}
