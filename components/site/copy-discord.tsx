"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export const discordUsername = "i_am_smf_.py"

export function CopyDiscordUsername({
  variant = "row",
}: {
  variant?: "row" | "footer"
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(discordUsername)
    } catch {
      const field = document.createElement("textarea")
      field.value = discordUsername
      field.setAttribute("readonly", "")
      field.style.position = "fixed"
      field.style.left = "-9999px"
      document.body.appendChild(field)
      field.select()
      document.execCommand("copy")
      field.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  if (variant === "footer") {
    return (
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Discord username copied" : `Copy Discord username ${discordUsername}`}
        className="inline-flex min-h-11 items-center px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span aria-live="polite">{copied ? "Copied" : "Discord"}</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn("inline-flex min-h-11 w-full items-center gap-3 rounded-md px-2 text-left")}
    >
      <MessageCircle className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
      <span className="min-w-0">
        <span className="block text-sm text-muted-foreground">Discord</span>
        <span className="block font-medium">{discordUsername}</span>
      </span>
      <span className="ml-auto text-sm font-medium text-primary" aria-live="polite">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  )
}
