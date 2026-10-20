import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProjectCard({
  id,
  title,
  description,
  sourceUrl,
  technologies,
  meta,
}: {
  id: string
  title: string
  description: string
  sourceUrl?: string
  technologies?: string[]
  meta?: string
}) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-lg border border-border bg-card p-6">
      {meta ? <p className="text-sm text-muted-foreground">{meta}</p> : null}
      <h3 className="mt-1 font-serif text-xl font-semibold leading-snug">{title}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{description}</p>
      {technologies && technologies.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech} className="rounded-md bg-secondary px-2.5 py-1 text-sm text-foreground">
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <Link href={`/projects/${id}`}>View project</Link>
        </Button>
        {sourceUrl ? (
          <Button asChild variant="outline">
            <Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
              View source
            </Link>
          </Button>
        ) : null}
      </div>
    </article>
  )
}
