"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
}

export function ImageModal({ isOpen, onClose, imageUrl }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[min(calc(100%-1.5rem),720px)] max-w-none gap-0 overflow-hidden p-0">
        <DialogTitle className="sr-only">Photo</DialogTitle>
        <div className="relative h-[min(70dvh,720px)] w-full bg-secondary">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="Achievement certificate or event photo"
            fill
            className="object-contain p-3 pt-14"
            sizes="(min-width: 768px) 720px, 100vw"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
