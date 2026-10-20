"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const REDIRECT_SECONDS = 30

export function StatusPage({
  code,
  title,
  description,
  onRetry,
}: {
  code: "404" | "500"
  title: string
  description: string
  onRetry?: () => void
}) {
  const [remaining, setRemaining] = useState(REDIRECT_SECONDS)

  useEffect(() => {
    if (code !== "500") return
    document.title = "Something went wrong | Shaik Mohamed Fahad"
  }, [code])

  useEffect(() => {
    const started = Date.now()
    const timer = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - started) / 1000)
      const next = Math.max(REDIRECT_SECONDS - elapsed, 0)
      setRemaining(next)
      if (next === 0) {
        window.clearInterval(timer)
        window.location.replace("/")
      }
    }, 250)

    return () => window.clearInterval(timer)
  }, [])

  const announced =
    remaining === REDIRECT_SECONDS || remaining === 10 || remaining <= 5
      ? `Redirecting to the home page in ${remaining} ${remaining === 1 ? "second" : "seconds"}.`
      : ""

  return (
    <section className="fade-in flex min-h-[calc(100dvh-4rem)] items-center bg-background text-foreground">
      <div className="page-frame w-full py-12 md:py-16">
        <p className="font-serif text-[clamp(56px,12vw,96px)] font-semibold leading-none tracking-tight text-primary">
          {code}
        </p>
        <h1 className="mt-4 max-w-[18ch] font-serif text-[clamp(32px,4vw,48px)] font-semibold leading-[1.15] tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-muted-foreground">{description}</p>

        <div className="mt-8 max-w-md">
          <p className="text-base text-foreground">
            Redirecting to the home page in{" "}
            <span className="font-semibold tabular-nums">{remaining}</span>{" "}
            {remaining === 1 ? "second" : "seconds"}.
          </p>
          <div
            className="mt-3 h-2 overflow-hidden rounded-full bg-secondary"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={REDIRECT_SECONDS}
            aria-valuenow={remaining}
            aria-label="Seconds remaining before redirect"
          >
            <div className="h-full bg-primary" style={{ width: `${(remaining / REDIRECT_SECONDS) * 100}%` }} />
          </div>
          <p className="sr-only" aria-live="polite">
            {announced}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">Go to home</Link>
          </Button>
          {onRetry ? (
            <Button type="button" variant="outline" onClick={onRetry}>
              Try again
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
