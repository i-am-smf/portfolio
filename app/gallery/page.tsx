import type { Metadata } from "next"
import { PageFrame, PageTitle } from "@/components/site/page-frame"
import { GalleryGrid } from "@/components/site/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Certificates and symposium photos for Shaik Mohamed Fahad, from the .NET course in 2022 through TechQuest 2023.",
}

export default function GalleryPage() {
  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame>
        <PageTitle>Gallery</PageTitle>
        <p className="mt-4 max-w-[62ch] text-muted-foreground">
          Course certificates and symposium photos, newest first.
        </p>
        <GalleryGrid />
      </PageFrame>
    </div>
  )
}
