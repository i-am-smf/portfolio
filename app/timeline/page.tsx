import type { Metadata } from "next"
import Link from "next/link"
import { PageFrame, PageTitle } from "@/components/site/page-frame"
import { timeline } from "@/lib/timeline"

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Timeline of Shaik Mohamed Fahad’s education, courses, symposium awards, freelance work, and role at Nexudo Tech Solutions.",
}

export default function TimelinePage() {
  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame className="max-w-[760px]">
        <PageTitle>Timeline</PageTitle>
        <p className="mt-4 max-w-[62ch] text-muted-foreground">
          Education, courses, awards, and work, from the present back to school.
        </p>
        <ol className="mt-10 space-y-8 border-l border-border pl-6">
          {timeline.map((item) => (
            <li key={`${item.date}-${item.title}`} className="relative min-w-0">
              <span
                className="absolute -left-[1.7rem] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />
              <p className="text-sm text-muted-foreground">{item.date}</p>
              <p className="mt-1 text-sm font-medium text-primary">{item.kind}</p>
              <h2 className="mt-1 font-serif text-2xl font-semibold leading-snug">{item.title}</h2>
              <p className="mt-2 max-w-[70ch] leading-relaxed text-muted-foreground">{item.detail}</p>
              <Link href={item.href} className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-primary">
                {item.kind === "Work"
                  ? "View experience"
                  : item.kind === "Education"
                    ? "View education"
                    : item.kind === "Certificate"
                      ? "View certificates"
                      : "View achievements"}
              </Link>
            </li>
          ))}
        </ol>
      </PageFrame>
    </div>
  )
}
