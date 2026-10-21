"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Instagram, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageFrame, PageTitle } from "@/components/site/page-frame"
import { CopyDiscordUsername } from "@/components/site/copy-discord"
import { ContactForm } from "@/components/site/contact-form"

export default function ContactPage() {
  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame>
        <PageTitle>Contact</PageTitle>
        <p className="mt-4 max-w-[52ch] text-muted-foreground">
          Shaik Mohamed Fahad is a software developer in Chennai and is currently serving notice as Senior Software
          Developer at Nexudo Tech Solutions. Use any option below to get in touch.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <section className="min-w-0 rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-2xl font-semibold">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The form emails me directly. Include what you want built and how to reach you.
            </p>
            <ContactForm />
          </section>

          <section className="min-w-0 rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-2xl font-semibold">How to reach me</h2>
            <div className="mt-6 flex flex-col">
              <a href="mailto:fahadguy8@gmail.com" className="inline-flex min-h-11 items-center gap-3 break-all">
                <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Email</span>
                  fahadguy8@gmail.com
                </span>
              </a>
              <p className="inline-flex min-h-11 items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Location</span>
                  Chennai, Tamil Nadu 600042, India
                </span>
              </p>
            </div>

            <h2 className="mt-8 font-serif text-2xl font-semibold">Profiles and resume</h2>
            <div className="mt-6 grid gap-2">
              <ProfileLink href="https://github.com/i-am-smf" label="GitHub" icon={Github} />
              <ProfileLink
                href="https://www.linkedin.com/in/shaik-mohamed-fahad-826971178"
                label="LinkedIn"
                icon={Linkedin}
              />
              <ProfileLink href="https://www.instagram.com/i_am_smf_/" label="Instagram" icon={Instagram} />
              <CopyDiscordUsername />
            </div>
            <Button asChild className="mt-6">
              <a href="/Shaik_Mohamed_Fahad_Resume.pdf" download="Shaik_Mohamed_Fahad_Resume.pdf">
                <FileText className="h-4 w-4" />
                Download resume
              </a>
            </Button>
          </section>
        </div>
      </PageFrame>
    </div>
  )
}

function ProfileLink({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: typeof Github
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-3 rounded-md px-2"
    >
      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      {label}
    </Link>
  )
}
