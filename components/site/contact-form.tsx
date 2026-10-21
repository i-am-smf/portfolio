"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const fieldClass = "min-h-11 text-base"
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldErrors = {
  name?: string
  email?: string
  message?: string
}

function validateFields(name: string, email: string, message: string): FieldErrors {
  const errors: FieldErrors = {}
  if (!name.trim()) errors.name = "Name is required."
  else if (name.trim().length < 2) errors.name = "Enter your name."

  if (!email.trim()) errors.email = "Email is required."
  else if (!emailPattern.test(email.trim())) errors.email = "Enter a valid email address."

  if (!message.trim()) errors.message = "Message is required."
  else if (message.trim().length < 10) errors.message = "Write a message of at least 10 characters."

  return errors
}

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [company, setCompany] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateFields(name, email, message)
    setFieldErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error")
      setError("Fill in every field before sending.")
      return
    }

    setStatus("sending")
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      })
      const data = (await response.json().catch(() => null)) as { error?: string } | null

      if (!response.ok) {
        setStatus("error")
        setError(data?.error || "The message could not be sent. Try again or email me directly.")
        return
      }

      setName("")
      setEmail("")
      setMessage("")
      setCompany("")
      setFieldErrors({})
      setStatus("sent")
    } catch {
      setStatus("error")
      setError("The message could not be sent. Try again or email me directly.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4" noValidate>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">
          Name <RequiredMark />
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
        />
        {fieldErrors.name ? <FieldError id="name-error" message={fieldErrors.name} /> : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">
          Email <RequiredMark />
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          aria-required="true"
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          maxLength={254}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
        />
        {fieldErrors.email ? <FieldError id="email-error" message={fieldErrors.email} /> : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">
          Message <RequiredMark />
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          aria-required="true"
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          minLength={10}
          maxLength={4000}
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-32 text-base"
        />
        {fieldErrors.message ? <FieldError id="message-error" message={fieldErrors.message} /> : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
        <p className="text-sm" role="status" aria-live="polite">
          {status === "sent" ? "Message sent. I’ll reply by email." : null}
          {status === "error" ? <span className="text-destructive">{error}</span> : null}
        </p>
      </div>
    </form>
  )
}

function RequiredMark() {
  return (
    <span className="text-destructive" aria-hidden="true">
      *
    </span>
  )
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="text-sm text-destructive" role="alert">
      {message}
    </p>
  )
}
