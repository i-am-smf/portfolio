import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Awards won by Shaik Mohamed Fahad: 1st prize in Code Battle at Technoholix'23, 1st place in Miniathon at Arcane 2K23, and 2nd place in Zoom in Zoom out at Analytiixfest2k23.",
}

export default function AchievementsLayout({ children }: { children: ReactNode }) {
  return children
}
