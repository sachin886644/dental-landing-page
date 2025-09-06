import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try { localStorage.setItem('theme', theme) } catch (_) { /* ignore */ }
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow border-b border-gray-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md' : 'py-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md'}`}>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center font-bold text-xl text-primary select-none">
            <span className="text-3xl mr-2">🦷</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline">Ambica Dental Hospital</span>
          </div>
          {/* Desktop Nav */}
          <nav className={`hidden md:block ${isMobileMenuOpen ? '' : ''}`} aria-label="Primary navigation">
            <ul className="flex list-none gap-2 lg:gap-6">
              {['home','about','services','team','gallery','results','testimonials','contact'].map(item => (
                <li key={item}>
                  <button onClick={() => scrollToSection(item)} className="relative text-sm font-medium px-3 py-2 rounded-full text-gray-700 dark:text-slate-300 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition">
                    {item.charAt(0).toUpperCase()+item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {/* Actions (desktop) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <button onClick={toggleTheme} aria-label="Toggle dark mode" className="w-10 h-10 rounded-full border border-primary/20 dark:border-slate-600 flex items-center justify-center text-lg hover:bg-primary/10 dark:hover:bg-slate-700 transition">
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            <a href="tel:+1234567890" className="text-primary font-semibold flex items-center gap-1 px-3 lg:px-4 py-2 rounded-full hover:bg-primary/10 transition">
              📞 (123) 456-7890
            </a>
          </div>
          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <button onClick={toggleTheme} aria-label="Toggle dark mode" className="w-10 h-10 rounded-full border border-primary/20 dark:border-slate-600 flex items-center justify-center text-lg hover:bg-primary/10 dark:hover:bg-slate-700 transition">
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            <button aria-label="Toggle navigation" aria-expanded={isMobileMenuOpen} aria-controls="mobile-nav" onClick={() => setIsMobileMenuOpen(o=>!o)} className="relative flex flex-col justify-center w-11 h-11 p-2 group rounded-xl border border-primary/20 dark:border-slate-600 bg-white/70 dark:bg-slate-800/70 backdrop-blur shadow-sm active:scale-95 transition">
              <span className={`h-0.5 w-6 bg-primary dark:bg-slate-200 rounded transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-primary dark:bg-slate-200 rounded my-1 transition-all ${isMobileMenuOpen ? 'opacity-0 -translate-x-3' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-primary dark:bg-slate-200 rounded transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
            </button>
          </div>
        </div>
        {/* Overlay */}
        {isMobileMenuOpen && <div onClick={()=>setIsMobileMenuOpen(false)} className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden animate-fadeIn" />}
        {/* Mobile Nav Panel */}
        <nav id="mobile-nav" aria-label="Mobile navigation" className={`md:hidden absolute left-0 right-0 origin-top mt-3 z-50 ${isMobileMenuOpen ? 'animate-scaleIn' : 'pointer-events-none opacity-0'} px-4`}> 
          <ul className="flex flex-col gap-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-xl p-4 max-h-[75vh] overflow-y-auto">
            {['home','about','services','team','gallery','results','testimonials','contact'].map(item => (
              <li key={item}>
                <button onClick={() => scrollToSection(item)} className="w-full text-left px-4 py-3 rounded-lg text-gray-700 dark:text-slate-300 hover:bg-primary/10 dark:hover:bg-primary/25 hover:text-primary font-medium text-sm transition">
                  {item.charAt(0).toUpperCase()+item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
