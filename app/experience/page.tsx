import type { Metadata } from "next"
import { PageFrame, PageTitle } from "@/components/site/page-frame"
import { experience, type ExperiencePoint } from "@/lib/profile"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Shaik Mohamed Fahad is a Senior Software Developer at Nexudo Tech Solutions and freelanced as a full-stack developer from 2023 to 2025.",
  alternates: { canonical: "/experience" },
}

function ExperiencePointText({ point }: { point: ExperiencePoint }) {
  if (typeof point === "string") {
    return <span>{point}</span>
  }

  return (
    <span>
      {point.before}
      <a
        href={point.href}
        target="_blank"
        rel="noopener noreferrer"
        className="break-words font-medium text-primary underline decoration-1 underline-offset-4"
      >
        {point.label}
      </a>
      {point.after}
    </span>
  )
}

export default function ExperiencePage() {
  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame className="max-w-[760px]">
        <PageTitle>Experience</PageTitle>
        <p className="mt-4 max-w-[62ch] text-muted-foreground">
          Shaik Mohamed Fahad designs application workflows and builds them in Python, Flask, React, Next.js, and
          Flutter. He is currently a Senior Software Developer at Nexudo Tech Solutions and is serving notice.
        </p>
        <ol className="mt-10 space-y-10 border-l border-border pl-6">
          {experience.map((item) => (
            <li key={item.role} className="relative min-w-0">
              <span
                className="absolute -left-[1.7rem] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />
              <p className="text-sm text-muted-foreground">{item.duration}</p>
              <h2 className="mt-1 font-serif text-2xl font-semibold leading-snug">{item.role}</h2>
              {item.organization ? <p className="mt-1 text-base">{item.organization}</p> : null}
              {item.status ? <p className="mt-1 text-sm text-muted-foreground">{item.status}</p> : null}
              <ul className="mt-4 max-w-[70ch] list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">
                {item.points.map((point) => (
                  <li key={typeof point === "string" ? point : point.label}>
                    <ExperiencePointText point={point} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </PageFrame>
    </div>
  )
}
