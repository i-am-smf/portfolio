export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")

  return raw.replace(/\/$/, "")
}

export function clampMetaDescription(text: string, max = 155) {
  const cleaned = text.replace(/\s+/g, " ").trim()
  if (cleaned.length <= max) return cleaned

  const slice = cleaned.slice(0, max)
  const lastSpace = slice.lastIndexOf(" ")
  const trimmed = (lastSpace > 80 ? slice.slice(0, lastSpace) : slice).trimEnd().replace(/[.,;:]+$/, "")
  return trimmed
}
