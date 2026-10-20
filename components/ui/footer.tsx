import Link from "next/link"
import { CopyDiscordUsername } from "@/components/site/copy-discord"

const links = [
  { href: "https://github.com/i-am-smf", label: "GitHub" },
  { href: "https://www.linkedin.com/in/shaik-mohamed-fahad-826971178", label: "LinkedIn" },
  { href: "https://www.instagram.com/i_am_smf_/", label: "Instagram" },
  { href: "mailto:fahadguy8@gmail.com", label: "Email" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-background pb-[env(safe-area-inset-bottom)] text-foreground">
      <div className="page-frame py-8 md:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <Link href="/" className="inline-flex min-h-11 items-center font-serif text-lg font-semibold">
              Shaik Mohamed Fahad T
            </Link>
            <p className="text-sm text-muted-foreground">Software developer in Chennai</p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5">
            {links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex min-h-11 items-center px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <CopyDiscordUsername variant="footer" />
            </li>
          </ul>
        </div>

        <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
          © {year} Shaik Mohamed Fahad T. All rights reserved.
          <span className="hidden sm:inline" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <span className="mt-1 block sm:mt-0 sm:inline">
            Developed and maintaining by <span className="font-medium text-foreground">i_am_smf_.py</span>
          </span>
        </p>
      </div>
    </footer>
  )
}
