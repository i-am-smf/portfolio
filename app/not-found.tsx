import type { Metadata } from "next"
import { StatusPage } from "@/components/site/status-page"

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist on Shaik Mohamed Fahad's site.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      title="Page not found"
      description="That address does not match a page on this site. You will be taken back to the home page."
    />
  )
}
