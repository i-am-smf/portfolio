"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { PageFrame, PageTitle } from "@/components/site/page-frame"
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

const achievementsData: AchievementItem[] = [
  {
    title: "Miniathon",
    event:
      "Arcane 2K23 National Level Technical Symposium, B.S. Abdul Rahman Crescent Institute of Science and Technology, Chennai",
    date: "September 13, 2023",
    details: `Participated and won First Place in the Miniathon competition at B.S. Abdul Rahman Crescent Institute of Science and Technology, Chennai. The event was a 60-minute rapid development challenge where teams received project titles on the spot and had to develop functional prototypes.

Key Highlights:
• On-the-spot project title assignment and development
• Code verification and live Q&A with judges
• Evaluated on innovation, efficiency, and teamwork
• Successfully completed the challenge under pressure

The event provided an excellent opportunity to demonstrate technical agility, creativity, and problem-solving skills in a competitive environment.`,
    badge: "1st Place",
    images: [
      "/achievements/arcane-2k23/certificate.jpeg",
      "/achievements/arcane-2k23/stage-photo-1.jpeg",
      "/achievements/arcane-2k23/stage-photo-2.jpeg",
    ],
    link: "https://www.linkedin.com/posts/shaik-mohamed-fahad-826971178_arcane-2k23-was-held-on-september-13th-2023-activity-7108450051168890881-bX33",
  },
  {
    title: "Code Battle",
    event: "Technoholix'23 National Level Technical Symposium, NPR College of Engineering & Technology, Dindigul",
    date: "February 17, 2023",
    details: `Secured 1st place in the Code Battle event at NPR College of Engineering & Technology, Dindigul. The competition challenged participants with problem statements and expected outputs, requiring the development of correct code solutions within strict time constraints.

Key Aspects:
• Algorithmic problem-solving under time pressure
• Efficient code implementation
• Competitive programming challenge
• Analysis and optimization of solutions

This achievement demonstrates strong problem-solving abilities, coding efficiency, and performance under competitive conditions.`,
    badge: "1st Prize",
    images: [
      "/achievements/technoholix-23/certificate.jpeg",
      "/achievements/technoholix-23/prize-pose.jpeg",
    ],
  },
  {
    title: "Zoom in Zoom out",
    event: "Analytiixfest2k23 State Level Technical Symposium, Bishop Heber College, Tiruchirappalli",
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
      "/achievements/analytiixfest2k23/achievement-certificate.jpeg",
      "/achievements/analytiixfest2k23/participation-certificate.jpeg",
      "/achievements/analytiixfest2k23/stage-photo-1.jpeg",
      "/achievements/analytiixfest2k23/stage-photo-2.jpeg",
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
    images: ["/achievements/techquest-23/certificate.jpeg"],
  },
]

export default function AchievementsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame>
        <PageTitle>Achievements</PageTitle>
        <ol className="mt-10 space-y-12 border-l border-border pl-6">
          {achievementsData.map((item) => (
            <li key={item.title} className="relative min-w-0">
              <span
                className="absolute -left-[1.7rem] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-primary">{item.badge}</p>
              <h2 className="mt-1 font-serif text-2xl font-semibold leading-snug">{item.title}</h2>
              <p className="mt-1 text-muted-foreground">{item.event}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.date}</p>
              <p className="mt-4 max-w-[70ch] whitespace-pre-line leading-relaxed text-muted-foreground">{item.details}</p>
              {item.images ? (
                <div className="mt-5 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr))]">
                  {item.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-secondary"
                      onClick={() => setSelectedImage(image)}
                      aria-label={`Open photo ${index + 1} from ${item.title}`}
                    >
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 240px, 100vw"
                      />
                    </button>
                  ))}
                </div>
              ) : null}
              {item.link ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"
                >
                  View on LinkedIn
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </PageFrame>
      {selectedImage ? (
        <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageUrl={selectedImage} />
      ) : null}
    </div>
  )
}
