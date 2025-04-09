"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
}

export function ImageModal({ isOpen, onClose, imageUrl }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] p-0">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="Achievement certificate or event photo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
