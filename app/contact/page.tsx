"use client"

import Link from "next/link"
import { GithubIcon } from "@animateicons/react/lucide/github-icon"
import { LinkedinIcon } from "@animateicons/react/lucide/linkedin-icon"
import { MailIcon } from "@animateicons/react/lucide/mail-icon"
import { PhoneIcon } from "@animateicons/react/lucide/phone-icon"
import { WhatsappIcon } from "@animateicons/react/huge/whatsapp-icon"
import { MapPinIcon } from "@animateicons/react/lucide/map-pin-icon"
import { InstagramIcon } from "@animateicons/react/lucide/instagram-icon"
import { FileTextIcon } from "@animateicons/react/lucide/file-text-icon"
import { Button } from "@/components/ui/button"
import { PageFrame, PageTitle } from "@/components/site/page-frame"
import { CopyDiscordUsername } from "@/components/site/copy-discord"
import { ContactForm } from "@/components/site/contact-form"
import { profile } from "@/lib/profile"

export default function ContactPage() {
  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame>
        <PageTitle>Contact</PageTitle>
        <p className="mt-4 max-w-[52ch] text-muted-foreground">
          Shaik Mohamed Fahad is a software developer in Hor Al Anz, Deira, Dubai. He was a Senior Software
          Developer at Nexudo Tech Solutions until October 2026. Use any option below to get in touch.
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
              <a href={`tel:${profile.phoneHref}`} className="inline-flex min-h-11 items-center gap-3">
                <PhoneIcon size={20} className="shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Mobile</span>
                  {profile.phone}
                </span>
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3"
              >
                <WhatsappIcon size={20} className="shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">WhatsApp</span>
                  {profile.phone}
                </span>
              </a>
              <a href="mailto:fahadguy8@gmail.com" className="inline-flex min-h-11 items-center gap-3 break-all">
                <MailIcon size={20} className="shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Email</span>
                  fahadguy8@gmail.com
                </span>
              </a>
              <div className="inline-flex min-h-11 items-center gap-3">
                <MapPinIcon size={20} className="shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Location</span>
                  Hor Al Anz, Deira, Dubai
                </span>
              </div>
            </div>

            <h2 className="mt-8 font-serif text-2xl font-semibold">Profiles and resume</h2>
            <div className="mt-6 grid gap-2">
              <ProfileLink href="https://github.com/i-am-smf" label="GitHub" icon={GithubIcon} />
              <ProfileLink
                href="https://www.linkedin.com/in/shaik-mohamed-fahad-826971178"
                label="LinkedIn"
                icon={LinkedinIcon}
              />
              <ProfileLink href="https://www.instagram.com/i_am_smf_/" label="Instagram" icon={InstagramIcon} />
              <CopyDiscordUsername />
            </div>
            <Button asChild className="mt-6">
              <a href="/Shaik_Mohamed_Fahad_Resume.pdf" download="Shaik_Mohamed_Fahad_Resume.pdf">
                <FileTextIcon size={16} />
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
  icon: typeof GithubIcon
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-3 rounded-md px-2"
    >
      <Icon size={20} className="text-primary" aria-hidden="true" />
      {label}
    </Link>
  )
}
