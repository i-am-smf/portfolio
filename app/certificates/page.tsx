"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import Image from "next/image"
import { ImageModal } from "@/components/ui/image-modal"

interface CertificateItem {
  title: string
  organization: string
  date: string
  details: string
  link?: string
  image?: string
}

const CertificateRow: React.FC<CertificateItem> = ({ title, organization, date, details, link, image }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <Card
        className="mb-4 transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <Badge className="mb-2">Certificate</Badge>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-muted-foreground">{organization}</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm text-muted-foreground mb-2">{date}</p>
              {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-4"
              >
                <p className="text-muted-foreground mb-4">{details}</p>
                {image && (
                  <div
                    className="relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(image)
                    }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Certificate for ${title}`}
                      fill
                      className="object-contain bg-muted"
                    />
                  </div>
                )}
                {link && (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
      {selectedImage && (
        <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageUrl={selectedImage} />
      )}
    </>
  )
}

export default function CertificatesPage() {
  const certificatesData: CertificateItem[] = [
    {
      title: ".NET using C# language",
      organization: "Ameya Cloud",
      date: "May 24, 2022 – Jun 1, 2022",
      details:
        "Learned to create applications using .NET with Microsoft Visual Studio. Gained practical experience in C# programming and understanding of the .NET framework ecosystem.",
      link: "https://ameyacloud.com",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980871.jpg-YL0g3FWZTgDJSYXYOiXvjZSS20wjCu.jpeg",
    },
    {
      title: "RDBMS using MySQL",
      organization: "GFS India",
      date: "Sep 19, 2022 – Sep 26, 2022",
      details:
        "Gained hands-on experience with SQL queries. Learned database design principles, normalization, and practical implementation of relational database concepts using MySQL.",
      link: "https://gfsindia.com",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980885.jpg-zcQSO1Q3nHVkI7BWhLuYjXurBff2KI.jpeg",
    },
    {
      title: "DevOps on AWS",
      organization: "M.I.E.T. Engineering College",
      date: "Mar 20, 2023 – Mar 29, 2023",
      details:
        "Practiced various Git commands and DevOps tools on AWS. Learned about CI/CD pipelines, containerization, and cloud infrastructure management.",
      link: "https://miet.edu",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980877.jpg-1OUDvkvP01abfrC8Af9vKKSLDFFM9b.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container max-w-3xl mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-12">Certificates</h1>
        <div className="space-y-6">
          {certificatesData.map((item, index) => (
            <CertificateRow key={index} {...item} />
          ))}
        </div>
        <div className="mt-12">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
