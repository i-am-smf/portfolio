"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isNavHovered, setIsNavHovered] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/education", label: "Education" },
    { href: "/achievements", label: "Achievements" },
    { href: "/certificates", label: "Certificates" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/50 backdrop-blur-sm border-b" : "bg-transparent",
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            SMF
          </Link>
          <nav
            className="hidden md:block relative"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => {
              setIsNavHovered(false)
              setActiveItem(null)
            }}
          >
            <AnimatePresence>
              {isNavHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-full fire-outline"
                />
              )}
            </AnimatePresence>
            <div className="relative px-3 py-1.5">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-white/90 rounded-full transition-colors"
                    onMouseEnter={() => setActiveItem(item.label)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <AnimatePresence>
                      {isNavHovered && activeItem === item.label && (
                        <motion.span
                          layoutId="bubble"
                          className="absolute inset-0 bg-white/10 rounded-full -z-10 fire-outline-item"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </AnimatePresence>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMobileMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-[400px] bg-background border-l z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-lg font-semibold">Menu</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-muted/50 rounded-lg">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex-1 overflow-y-auto">
                  <div className="flex flex-col p-4 space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
