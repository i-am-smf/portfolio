"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone, Instagram, MessageCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageFrame, PageTitle } from "@/components/site/page-frame"
import { CopyDiscordUsername } from "@/components/site/copy-discord"

const phoneNumber = "917373675313"

export default function ContactPage() {
  const openWhatsApp = () => {
    const message = "Hi, I'd like to connect with you!"
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fade-in bg-background text-foreground">
      <PageFrame>
        <PageTitle>Contact</PageTitle>
        <p className="mt-4 max-w-[52ch] text-muted-foreground">
          Shaik Mohamed Fahad is a software developer in Chennai and is currently serving notice as Senior Software
          Developer at Nexudo Tech Solutions. Use any option below to get in touch.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section className="min-w-0 rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-2xl font-semibold">How to reach me</h2>
            <div className="mt-6 flex flex-col">
              <a href="tel:+917373675313" className="inline-flex min-h-11 items-center gap-3">
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Phone</span>
                  +91 73736 75313
                </span>
              </a>
              <a href="mailto:fahadguy8@gmail.com" className="inline-flex min-h-11 items-center gap-3 break-all">
                <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Email</span>
                  fahadguy8@gmail.com
                </span>
              </a>
              <button type="button" onClick={openWhatsApp} className="inline-flex min-h-11 items-center gap-3 text-left">
                <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">WhatsApp</span>
                  Message +91 73736 75313
                </span>
              </button>
              <p className="inline-flex min-h-11 items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-muted-foreground">Location</span>
                  Chennai, Tamil Nadu 600042, India
                </span>
              </p>
            </div>
          </section>

          <section className="min-w-0 rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-2xl font-semibold">Profiles and resume</h2>
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
