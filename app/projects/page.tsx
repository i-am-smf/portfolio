import type { Metadata } from "next"
import { PageFrame, PageTitle, SectionTitle } from "@/components/site/page-frame"
import { ProjectCard } from "@/components/site/project-card"
import { currentProjects, earlierProjects } from "@/lib/profile"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software Shaik Mohamed Fahad built at Nexudo Tech Solutions, including e-commerce, pest control, academy, cargo, and food delivery apps.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame>
        <PageTitle>Projects</PageTitle>
        <p className="mt-4 max-w-[62ch] text-muted-foreground">
          These products were developed at Nexudo Tech Solutions for the named clients. The work covers database
          schema, application structure, screen layouts, and the workflows each product needs.
        </p>
        <div className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <SectionTitle className="mt-16">Earlier projects</SectionTitle>
        <p className="mt-4 max-w-[62ch] text-muted-foreground">
          Python tools for operations, automation, and secure communication, built before the current client work.
        </p>
        <div className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
          {earlierProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </PageFrame>
    </div>
  )
}
