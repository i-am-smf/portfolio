"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "@/components/ui/image-modal"
import { galleryImages } from "@/lib/gallery"

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <ul className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
        {galleryImages.map((image, index) => (
          <li key={image.src} className="min-w-0">
            <button
              type="button"
              className="block w-full overflow-hidden rounded-lg border border-border bg-secondary text-left"
              onClick={() => setSelectedImage(image.src)}
              aria-label={`Open ${image.alt}`}
            >
              <span className="relative block aspect-[4/3]">
                <Image
                  src={image.src}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 320px, 100vw"
                  priority={index < 2}
                />
              </span>
            </button>
            <p className="mt-3 font-medium leading-snug">{image.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{image.caption}</p>
            <p className="mt-1 text-sm text-muted-foreground">{image.date}</p>
          </li>
        ))}
      </ul>
      {selectedImage ? (
        <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageUrl={selectedImage} />
      ) : null}
    </>
  )
}
