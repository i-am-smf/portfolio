import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Database, Globe, MapPin, Server, Smartphone, Users, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/site/page-frame"
import { ProjectCard } from "@/components/site/project-card"
import { currentProjects, experience, profile } from "@/lib/profile"

const skills = [
  {
    title: "Application design",
    description:
      "Workflow design, screen and page design, and process mapping so a product's steps are clear before they are built.",
    icon: Workflow,
  },
  {
    title: "Python and APIs",
    description:
      "Python and Flask for APIs, automation tools, and secure communication systems, turning a planned workflow into working software.",
    icon: Server,
  },
  {
    title: "Web development",
    description: "React and Next.js for product websites and application interfaces, including PostgreSQL-backed sites.",
    icon: Globe,
  },
  {
    title: "Mobile development",
    description: "Flutter and Dart for mobile application structure, screen layouts, and shopping or service workflows.",
    icon: Smartphone,
  },
  {
    title: "Database management",
    description: "SQL, MySQL, and PostgreSQL, including database schema design for the products I work on.",
    icon: Database,
  },
  {
    title: "Client and team work",
    description: "Client management, leadership, and collaboration across design and development through full project delivery.",
    icon: Users,
  },
]

const education = [
  {
    institution: "M.I.E.T. Engineering College",
    detail: "B.E. Computer Science · CGPA 7.30",
    duration: "Jun 2020 – Apr 2024",
  },
  {
    institution: "Sairam Matric Hr. Sec. School",
    detail: "12th Grade · 63.5%",
    duration: "Jun 2019 – Mar 2020",
  },
]

const achievements = [
  {
    title: "1st Prize, Code Battle",
    detail: "Technoholix'23, NPR College of Engineering & Technology, Dindigul",
    date: "February 17, 2023",
  },
  {
    title: "1st Place, Miniathon",
    detail: "Arcane 2K23, B.S. Abdul Rahman Crescent Institute of Science and Technology, Chennai",
    date: "September 13, 2023",
  },
  {
    title: "2nd Place, Zoom in Zoom out",
    detail: "Analytiixfest2k23, Bishop Heber College, Tiruchirappalli",
    date: "February 2, 2023",
  },
]

const certificates = [
  {
    title: ".NET Using C# Language",
    detail: "Ameya Cloud",
    date: "May 2022",
  },
  {
    title: "RDBMS Using MySQL",
    detail: "GFS India",
    date: "Sep 2022",
  },
  {
    title: "DevOps on AWS",
    detail: "M.I.E.T. Engineering College",
    date: "Mar 2023",
  },
]

const toolBadges = ["Python", "Dart", "React", "Next.js", "Flask", "Flutter", "SQL", "PostgreSQL", "MySQL", "Git", "AWS"]

export default function Page() {
  return (
    <div className="fade-in bg-background text-foreground">
      <section className="py-12 md:py-20">
        <div className="page-frame grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div className="min-w-0">
            <h1 className="max-w-[18ch] font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.08] tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-foreground">{profile.role}</p>
            <p className="mt-3 inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location} {profile.postalCode}
            </p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              <li className="py-3 text-sm">Senior Software Developer, Nexudo Tech Solutions</li>
              <li className="py-3 text-sm">Freelance full-stack websites, 2023–2025</li>
              <li className="py-3 text-sm">B.E. Computer Science, CGPA 7.30</li>
            </ul>
            <p className="mt-8 max-w-[70ch] text-base leading-relaxed text-muted-foreground">{profile.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {toolBadges.map((tool) => (
                <li key={tool} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm">
                  {tool}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="/Shaik_Mohamed_Fahad_Resume.pdf" download="Shaik_Mohamed_Fahad_Resume.pdf">
                  Download resume
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#work">View work</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[320px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-secondary">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Shaik Mohamed Fahad T"
                fill
                className="object-cover"
                priority
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 border-t border-border py-14 md:py-20">
        <div className="page-frame">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle>Experience</SectionTitle>
            <Link href="/experience" className="inline-flex min-h-11 items-center text-sm font-medium text-primary">
              View experience
            </Link>
          </div>
          <ol className="mt-8 divide-y divide-border border-y border-border">
            {experience.map((item) => (
              <li key={item.role} className="py-5">
                <p className="text-sm text-muted-foreground">{item.duration}</p>
                <h3 className="mt-1 font-serif text-2xl font-semibold leading-snug">{item.role}</h3>
                {item.organization ? <p className="mt-1">{item.organization}</p> : null}
                {item.status ? <p className="mt-1 text-sm text-muted-foreground">{item.status}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 border-t border-border py-14 md:py-20">
        <div className="page-frame">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle>Selected work</SectionTitle>
            <Link href="/projects" className="inline-flex min-h-11 items-center text-sm font-medium text-primary">
              View all projects
            </Link>
          </div>
          <p className="mt-4 max-w-[62ch] text-muted-foreground">
            Client products designed at Nexudo Tech Solutions. Each one covers the database structure, application
            structure, and the screens people use.
          </p>
          <div className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
            {currentProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card px-5 py-4">
            <p className="max-w-[48ch] text-base">Need a similar system built for your team or business?</p>
            <Button asChild>
              <Link href="/contact">Start a project</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-14 md:py-20">
        <div className="page-frame">
          <SectionTitle>What I can build</SectionTitle>
          <div className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <article key={skill.title} className="min-w-0 rounded-lg border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="min-w-0 font-serif text-xl font-semibold leading-snug">{skill.title}</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{skill.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-14 md:py-20">
        <div className="page-frame">
          <SectionTitle>Credentials</SectionTitle>
          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            <CredentialColumn title="Education" href="/education" linkLabel="View education">
              {education.map((item) => (
                <CredentialRow
                  key={item.institution}
                  title={item.institution}
                  detail={item.detail}
                  meta={item.duration}
                />
              ))}
            </CredentialColumn>
            <CredentialColumn title="Achievements" href="/achievements" linkLabel="View achievements">
              {achievements.map((item) => (
                <CredentialRow key={item.title} title={item.title} detail={item.detail} meta={item.date} />
              ))}
            </CredentialColumn>
            <CredentialColumn title="Certificates" href="/certificates" linkLabel="View certificates">
              {certificates.map((item) => (
                <CredentialRow key={item.title} title={item.title} detail={item.detail} meta={item.date} />
              ))}
            </CredentialColumn>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/70 py-14 md:py-20">
        <div className="page-frame grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-end">
          <div>
            <SectionTitle>Contact</SectionTitle>
            <p className="mt-4 max-w-[42ch] text-muted-foreground">
              {profile.location} {profile.postalCode}
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <a href="mailto:fahadguy8@gmail.com" className="inline-flex min-h-11 items-center break-all text-base">
              fahadguy8@gmail.com
            </a>
            <a href="tel:+917373675313" className="inline-flex min-h-11 items-center text-base">
              +91 73736 75313
            </a>
            <Button asChild className="mt-3 w-fit">
              <Link href="/contact">Contact page</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function CredentialColumn({
  title,
  href,
  linkLabel,
  children,
}: {
  title: string
  href: string
  linkLabel: string
  children: ReactNode
}) {
  return (
    <div className="min-w-0">
      <h3 className="font-serif text-2xl font-semibold">{title}</h3>
      <div className="mt-4 divide-y divide-border border-y border-border">{children}</div>
      <Link href={href} className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-primary">
        {linkLabel}
      </Link>
    </div>
  )
}

function CredentialRow({ title, detail, meta }: { title: string; detail: string; meta: string }) {
  return (
    <div className="py-4">
      <p className="font-medium leading-snug">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
      <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
    </div>
  )
}
