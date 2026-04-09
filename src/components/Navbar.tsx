import { useEffect, useState } from "react"
import { COURSE_CONFIG } from "../data/courseData"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-dark/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-brand-yellow text-xl tracking-tight">
          CLAUDE COWORK
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#curriculum" className="font-body text-brand-warm/70 hover:text-brand-warm text-sm transition-colors">
            Curriculum
          </a>
          <a href="#skills" className="font-body text-brand-warm/70 hover:text-brand-warm text-sm transition-colors">
            Skills
          </a>
          <a href="#pricing" className="font-body text-brand-warm/70 hover:text-brand-warm text-sm transition-colors">
            ราคา
          </a>
          <a
            href={COURSE_CONFIG.registerUrl}
            className="font-body font-semibold text-sm px-5 py-2.5 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-200"
          >
            จองที่นั่ง Early Bird
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-warm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="เมนู"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="#curriculum" className="font-body text-brand-warm/80 text-sm" onClick={() => setMenuOpen(false)}>Curriculum</a>
          <a href="#skills" className="font-body text-brand-warm/80 text-sm" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#pricing" className="font-body text-brand-warm/80 text-sm" onClick={() => setMenuOpen(false)}>ราคา</a>
          <a
            href={COURSE_CONFIG.registerUrl}
            className="font-body font-semibold text-sm px-5 py-2.5 border border-brand-orange text-brand-orange text-center"
            onClick={() => setMenuOpen(false)}
          >
            จองที่นั่ง Early Bird
          </a>
        </div>
      )}
    </nav>
  )
}
