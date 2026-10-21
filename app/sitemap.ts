import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"

const projectIds = [
  "aayisha-collection-ecommerce",
  "speed-eagle-pest-control",
  "vibezon-academy",
  "miles-away-cargo",
  "food-delivery-subscriptions",
  "lifefine-crm",
  "afk-monitoring-system",
  "secure-chat-api",
  "infinity-developer-discord-bot",
  "vegetable-shop-pos",
]

const paths = [
  "/",
  "/experience",
  "/projects",
  "/education",
  "/achievements",
  "/certificates",
  "/timeline",
  "/gallery",
  "/resume",
  "/contact",
  ...projectIds.map((id) => `/projects/${id}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return paths.map((path) => ({
    url: path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/projects/") ? 0.6 : 0.8,
  }))
}
