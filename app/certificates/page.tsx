"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { PageFrame, PageTitle } from "@/components/site/page-frame"
import { ImageModal } from "@/components/ui/image-modal"

const certificatesData = [
  {
    title: "DevOps on AWS",
    organization: "M.I.E.T. Engineering College",
    date: "Mar 20, 2023 – Mar 29, 2023",
    details:
      "Practiced various Git commands and DevOps tools on AWS. Learned about CI/CD pipelines, containerization, and cloud infrastructure management.",
    link: "https://miet.edu",
    image: "/certificates/devops-on-aws.jpeg",
  },
  {
    title: "RDBMS Using MySQL",
    organization: "GFS India",
    date: "Sep 19, 2022 – Sep 26, 2022",
    details:
      "Gained hands-on experience with SQL queries. Learned database design principles, normalization, and practical implementation of relational database concepts using MySQL.",
    link: "https://gfsindia.com",
    image: "/certificates/rdbms-using-mysql.jpeg",
  },
  {
    title: ".NET Using C# Language",
    organization: "Ameya Cloud",
    date: "May 24, 2022 – Jun 1, 2022",
    details:
      "Learned to create applications using .NET with Microsoft Visual Studio. Gained practical experience in C# programming and understanding of the .NET framework ecosystem.",
    link: "https://ameyacloud.com",
    image: "/certificates/dotnet-using-csharp.jpeg",
  },
]

export default function CertificatesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame>
        <PageTitle>Certificates</PageTitle>
        <ol className="mt-10 space-y-12 border-l border-border pl-6">
          {certificatesData.map((item) => (
            <li key={item.title} className="relative min-w-0">
              <span
                className="absolute -left-[1.7rem] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-primary">{item.organization}</p>
              <h2 className="mt-1 font-serif text-2xl font-semibold leading-snug">{item.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{item.date}</p>
              <p className="mt-4 max-w-[70ch] leading-relaxed text-muted-foreground">{item.details}</p>
              <div className="mt-5 grid max-w-sm gap-3">
                <button
                  type="button"
                  className="relative aspect-[4/3] min-h-11 overflow-hidden rounded-lg border border-border bg-secondary"
                  onClick={() => setSelectedImage(item.image)}
                  aria-label={`Open certificate image for ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="(min-width: 640px) 384px, 100vw"
                  />
                </button>
              </div>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"
              >
                View organization
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
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
