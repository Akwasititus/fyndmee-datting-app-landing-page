"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Globe, Menu, MessageCircle, Moon, Send, Sparkles, Sun, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"

const navItems = [
  { id: "why-choose", label: "Why Fynd Mee", href: "/#why-choose-heading" },
  { id: "pricing", label: "Products", href: "/products-pricing-info" },
  { id: "newsroom", label: "News Room", href: "/blog" },
  { id: "download", label: "Download", href: "/download" },
]

const socials = [
  {
    name: "Waitlist",
    icon: Globe,
    link: "https://forms.gle/D721gVxuZd8eP2E66",
    color: "bg-black",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    link: "https://whatsapp.com/channel/0029VbCI5w6HQbSD0g2SAp3Y",
    color: "bg-[#25D366]",
  },
  {
    name: "Telegram",
    icon: Send,
    link: "https://t.me/fyndmee1",
    color: "bg-[#0088cc]",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("")
  const [showSocials, setShowSocials] = useState(false)
  const [mounted, setMounted] = useState(false)
  const reduceMotion = useReducedMotion()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const closeMenus = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        setShowSocials(false)
      }
    }

    window.addEventListener("keydown", closeMenus)
    return () => window.removeEventListener("keydown", closeMenus)
  }, [])

  const transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 360, damping: 30 }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6"
      >
        <Link
          href="/"
          aria-label="Fynd Mee home"
          className="group flex min-h-11 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7899] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <motion.img
            src="/images/new-logo-white.svg"
            alt=""
            className="h-8 w-8 rounded-md object-contain drop-shadow-lg"
            style={{ filter: "brightness(0) invert(1)" }}
            whileHover={reduceMotion ? undefined : { rotate: -5, scale: 1.08 }}
            transition={transition}
          />
          <span className="text-xl font-bold text-white/90 drop-shadow-lg md:text-2xl">
            Fynd Mee
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`group relative flex min-h-11 items-center text-sm font-semibold drop-shadow-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7899] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${
                active === item.id ? "text-[#ff7899]" : "text-white/90 hover:text-[#fff]"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute bottom-1 left-0 h-0.5 rounded-full bg-[#ff7899] transition-[width,opacity] duration-300 ease-out ${
                  active === item.id
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Change theme"}
            className="h-11 w-11 cursor-pointer rounded-full text-[#fff] transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#ff7899] motion-reduce:hover:scale-100"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mounted ? theme : "loading"}
                initial={reduceMotion ? false : { opacity: 0, rotate: -35, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, rotate: 35, scale: 0.8 }}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
              >
                {mounted && theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </motion.span>
            </AnimatePresence>
          </Button>

          <div className="relative">
            <Button
              onClick={() => setShowSocials((value) => !value)}
              aria-expanded={showSocials}
              aria-controls="community-menu"
              className="flex min-h-11 cursor-pointer items-center gap-2 border-none bg-[#AB1E3E] text-white/90 shadow-lg transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#8B1830] hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#ff7899] motion-reduce:hover:translate-y-0"
            >
              <Sparkles aria-hidden="true" size={18} />
              Join the Community
            </Button>

            <AnimatePresence>
              {showSocials && (
                <motion.div
                  id="community-menu"
                  initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -5, scale: 0.98 }}
                  transition={transition}
                  className="absolute right-0 z-50 mt-3 w-52 origin-top-right rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl"
                >
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-12 items-center gap-3 rounded-xl px-3 text-gray-700 transition-[background-color,transform] duration-200 hover:translate-x-0.5 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1E3E] motion-reduce:hover:translate-x-0"
                    >
                      <span className={`${social.color} rounded-lg p-2 transition-transform duration-200 group-hover:scale-105 motion-reduce:group-hover:scale-100`}>
                        <social.icon aria-hidden="true" className="text-[#fff]" size={18} />
                      </span>
                      <span className="font-semibold">{social.name}</span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[#fff] transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7899] md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.75 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.75 }}
              transition={{ duration: reduceMotion ? 0 : 0.16 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#16090f]/92 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile navigation" className="container mx-auto flex flex-col gap-1 px-4 py-5">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.035, duration: 0.22 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActive(item.id)
                      setIsOpen(false)
                    }}
                    className={`flex min-h-12 items-center rounded-xl px-4 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7899] ${
                      active === item.id
                        ? "bg-white/12 text-[#fff]"
                        : "text-white/80 hover:bg-white/8 hover:text-[#fff]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <button
                onClick={toggleTheme}
                className="mt-2 flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border-t border-white/10 px-4 text-left font-medium text-white/80 transition-colors hover:bg-white/8 hover:text-[#fff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7899]"
              >
                {mounted && theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                Switch to {mounted && theme === "light" ? "Dark" : "Light"} Mode
              </button>

              <p className="mb-2 mt-4 px-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Join our community
              </p>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center gap-3 rounded-xl px-4 font-medium text-white/85 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7899]"
                >
                  <span className={`${social.color} rounded-lg p-2`}>
                    <social.icon aria-hidden="true" className="text-[#fff]" size={18} />
                  </span>
                  {social.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
