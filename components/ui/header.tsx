"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certificates", label: "Certificates" },
  { href: "/timeline", label: "Timeline" },
]

const resumeHref = "/resume"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const panel = panelRef.current
    if (!panel) return

    const getFocusable = () =>
      Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")).filter(
        (element) => !element.hasAttribute("disabled") && element.tabIndex !== -1,
      )

    const focusable = getFocusable()
    focusable[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== "Tab") return

      const items = getFocusable()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isMobileMenuOpen])

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background pt-[env(safe-area-inset-top)]">
      <div className="page-frame flex h-16 items-center justify-between gap-3">
        <Link href="/" className="inline-flex min-h-11 min-w-11 items-center font-serif text-lg font-semibold tracking-tight">
          <span className="min-[1440px]:hidden">SMF</span>
          <span className="hidden min-[1440px]:inline">Shaik Mohamed Fahad T</span>
        </Link>

        <nav className="hidden items-center gap-1 min-[1180px]:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center px-2.5 text-sm text-foreground/80",
                  active && "font-semibold text-primary underline decoration-2 underline-offset-8",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden min-[420px]:inline-flex">
            <Link href={resumeHref} aria-current={pathname === resumeHref ? "page" : undefined}>
              Resume
            </Link>
          </Button>
          <Button asChild className="hidden min-[1180px]:inline-flex">
            <Link href="/contact">Hire me</Link>
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border min-[1180px]:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls={menuId}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="min-[1180px]:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-foreground/20"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            ref={panelRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-background pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          >
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <p className="font-serif text-lg font-semibold">Menu</p>
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm"
                onClick={closeMenu}
              >
                <X className="h-5 w-5" />
                Close menu
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Mobile">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center rounded-md px-3 text-base",
                      active ? "font-semibold text-primary" : "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <div className="flex flex-col gap-3 border-t border-border p-4">
              <Button asChild variant="outline">
                <Link href={resumeHref} aria-current={pathname === resumeHref ? "page" : undefined}>
                  Resume
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Hire me</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
