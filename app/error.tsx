"use client"

import { useEffect } from "react"
import { StatusPage } from "@/components/site/status-page"

export default function Error({
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
    <StatusPage
      code="500"
      title="Something went wrong"
      description="This page ran into an unexpected problem. You can try again, or wait to be taken back to the home page."
      onRetry={reset}
    />
  )
}
