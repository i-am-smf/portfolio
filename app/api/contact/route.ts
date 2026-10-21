import { NextResponse } from "next/server"
import { Resend } from "resend"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function cleanLine(value: unknown, max: number) {
  if (typeof value !== "string") return ""
  return value.replace(/[\u0000-\u001F\u007F]/g, "").replace(/\s+/g, " ").trim().slice(0, max)
}

function cleanMessage(value: unknown) {
  if (typeof value !== "string") return ""
  return value.replace(/\r\n/g, "\n").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, 4000)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Enter your name, email, and message." }, { status: 400 })
  }

  const payload = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {}

  if (cleanLine(payload.company, 200)) {
    return NextResponse.json({ ok: true })
  }

  const name = cleanLine(payload.name, 100)
  const email = cleanLine(payload.email, 254).toLowerCase()
  const message = cleanMessage(payload.message)

  if (name.length < 2) {
    return NextResponse.json({ error: "Enter your name." }, { status: 400 })
  }
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 })
  }
  if (message.length < 10) {
    return NextResponse.json({ error: "Write a message of at least 10 characters." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_MAIL_ID
  const from = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "The contact form is not ready yet. Email me directly instead." },
      { status: 503 },
    )
  }

  const resend = new Resend(apiKey)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>")

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Portfolio message from ${safeName}</title>
  </head>
  <body style="margin:0;padding:0;background:#faf8f5;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f5;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e7e5e4;border-radius:8px;">
            <tr>
              <td style="background:#1f3451;color:#ffffff;padding:16px 20px;font-family:Georgia,serif;font-size:20px;line-height:1.3;">
                New message from your portfolio
              </td>
            </tr>
            <tr>
              <td style="padding:20px;font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#1c1917;">
                <p style="margin:0 0 16px;"><strong>Name</strong><br>${safeName}</p>
                <p style="margin:0 0 16px;"><strong>Email</strong><br><a href="mailto:${safeEmail}" style="color:#1f3451;">${safeEmail}</a></p>
                <p style="margin:0;"><strong>Message</strong><br>${safeMessage}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  })

  if (error) {
    return NextResponse.json(
      { error: "The message could not be sent. Try again or email me directly." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
