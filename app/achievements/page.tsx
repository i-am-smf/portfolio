"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { ImageModal } from "@/components/ui/image-modal"

interface AchievementItem {
  title: string
  event: string
  date: string
  details: string
  badge: string
  images?: string[]
  link?: string
}

const AchievementRow: React.FC<AchievementItem> = ({ title, event, date, details, badge, images, link }) => {
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
              <Badge className="mb-2">{badge}</Badge>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-muted-foreground">{event}</p>
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
                <p className="text-muted-foreground">{details}</p>
                {images && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedImage(image)
                        }}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Achievement image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
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
                    View on LinkedIn
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

export default function AchievementsPage() {
  const achievementsData: AchievementItem[] = [
    {
      title: "Miniathon Event",
      event: "Arcane 2K23 National Level Technical Symposium",
      date: "September 13, 2023",
      details: `Participated and won First Place in the Miniathon competition at BSA Crescent Institute of Science and Technology. The event was a 60-minute rapid development challenge where teams received project titles on the spot and had to develop functional prototypes.

Key Highlights:
• On-the-spot project title assignment and development
• Code verification and live Q&A with judges
• Evaluated on innovation, efficiency, and teamwork
• Successfully completed the challenge under pressure

The event provided an excellent opportunity to demonstrate technical agility, creativity, and problem-solving skills in a competitive environment.`,
      badge: "1st Place",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1694786522783-jq4AgLM5FVeTHgLo1eCR0c7daK2VMp.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1694786536728-NtHlaWJrhYOTKHbJ7nsQQwUWzlI4jO.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1694786559250-3grZlicKT5O74NKyML4tgd8YgtSxCI.jpeg",
      ],
      link: "https://www.linkedin.com/posts/shaik-mohamed-fahad-826971178_arcane-2k23-was-held-on-september-13th-2023-activity-7108450051168890881-bX33",
    },
    {
      title: "Code Battle Event",
      event: "Technoholix'23, National Level Technical Symposium",
      date: "February 17, 2023",
      details: `Secured 1st place in the Code Battle event at NPR College of Engineering and Technology, Dindigul. The competition challenged participants with problem statements and expected outputs, requiring the development of correct code solutions within strict time constraints.

Key Aspects:
• Algorithmic problem-solving under time pressure
• Efficient code implementation
• Competitive programming challenge
• Analysis and optimization of solutions

This achievement demonstrates strong problem-solving abilities, coding efficiency, and performance under competitive conditions.`,
      badge: "1st Prize",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980929.jpg-FfXxaXe6ez1dJPzpU2CSOP099Euz90.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20230217_161152.jpg-i0xokOGelwAUhrGLglQvDI1aO0I5sQ.jpeg",
      ],
    },
    {
      title: "Zoom in Zoom out Event",
      event: "Analytiixfest2k23 State Level Technical Symposium",
      date: "February 2, 2023",
      details: `Secured 2nd place in the Zoom In Zoom Out event at Bishop Heber College, Tiruchirappalli. The event, organized by the Department of Data Science, tested participants' debugging skills, code analysis, and logical reasoning abilities.

Key Components:
• Identifying and removing unwanted code segments
• Detecting and fixing hidden bugs
• Analyzing and explaining expected outputs
• Code optimization and improvement

This achievement demonstrates strong debugging capabilities, analytical thinking, and deep understanding of code logic and execution flow.`,
      badge: "2nd Place",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980905.jpg-8U2gLcycSFSMgQl3XgHb5lEdFSmphF.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980914.jpg-zdQLJsVF7rWcG4pVVmvEOCuTpZcxaP.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20230202-WA0006.jpg-r15b2YFwEP006G32WqK56dy6ZDTOm1.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20230202-WA0008.jpg-0mFhTlqh2YiHlYWt6OmZSjfPdgoh9D.jpeg",
      ],
    },
    {
      title: "TechVein Event",
      event: "TechQuest'23, National Level Technical Symposium",
      date: "September 15, 2023",
      details: `Secured 3rd place in the TechVein event at Mount Zion College, Pudukkottai. The competition focused on project presentation and evaluation based on innovation, implementation, and impact.

Key Highlights:
• Presented the Automated Shutdown System project
• Demonstrated practical functionality and efficiency
• Evaluated on innovation and real-world impact
• Successfully showcased technical implementation

This achievement demonstrates the ability to develop meaningful projects and effectively communicate technical solutions to a professional audience.`,
      badge: "3rd Place",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1739869980921.jpg-Gc0CD5zdCL3x2FkvlIunvGM5ud7E2Y.jpeg",
      ],
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
        <h1 className="text-4xl font-bold mb-12">Achievements</h1>
        <div className="space-y-6">
          {achievementsData.map((item, index) => (
            <AchievementRow key={index} {...item} />
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
