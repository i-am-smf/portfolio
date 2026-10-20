import type React from "react"
import { cn } from "@/lib/utils"

export function PageFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn("page-frame py-12 md:py-16", className)}>{children}</div>
}

export function PageTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={cn(
        "font-serif text-[clamp(32px,4vw,44px)] font-semibold leading-[1.15] tracking-tight",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2 className={cn("font-serif text-[clamp(28px,3vw,36px)] font-semibold leading-tight", className)}>
      {children}
    </h2>
  )
}
