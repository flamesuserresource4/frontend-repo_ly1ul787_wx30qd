import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function ThemeToggle() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = stored ? stored === 'dark' : prefersDark
    setEnabled(shouldDark)
    document.documentElement.classList.toggle('dark', shouldDark)
  }, [])

  const toggle = () => {
    const next = !enabled
    setEnabled(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative inline-flex h-9 w-16 items-center rounded-full bg-gray-200 dark:bg-nx.bgDark2 transition-colors"
    >
      <span
        className={`inline-block h-7 w-7 transform rounded-full bg-white dark:bg-nx.purple transition-transform ml-1 ${enabled ? 'translate-x-7' : ''}`}
      />
    </button>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const navLink = (to, label) => (
    <Link
      key={to}
      to={to}
      onClick={() => setOpen(false)}
      className={`px-3 py-2 rounded-md text-sm font-medium hover:text-nx.purple transition-colors ${location.pathname === to ? 'text-nx.purple' : 'text-gray-700 dark:text-gray-200'}`}
    >
      {label}
    </Link>
  )

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 dark:bg-nx.bgDark/60 border-b border-gray-200/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-nx.purple to-nx.blue animate-spin-slow" />
            <Link to="/" className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">NeuronX</Link>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {navLink('/', 'Home')}
            {navLink('/about', 'About')}
            {navLink('/services', 'Services')}
            {navLink('/contact', 'Contact')}
            {navLink('/test', 'Status')}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-1">
              {navLink('/', 'Home')}
              {navLink('/about', 'About')}
              {navLink('/services', 'Services')}
              {navLink('/contact', 'Contact')}
              {navLink('/test', 'Status')}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
