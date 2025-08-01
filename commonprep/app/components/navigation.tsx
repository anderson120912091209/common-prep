'use client'

import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

const Navigation = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div className="flex items-center justify-between px-8 py-2.5 rounded-full border border-white/15 backdrop-blur-xl bg-white/5 shadow-lg backdrop-saturate-150">
        {/* Logo */}
        <Link href="/" className="text-white font-medium text-lg tracking-wide whitespace-nowrap">
          <Image src="/TextLogoWhite.svg" alt="Common Prep" width={180} height={100} />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/platform" className="text-white/70 hover:text-white transition-colors text-sm">Services</Link>
          <Link href="/features" className="text-white/70 hover:text-white transition-colors text-sm">Features</Link>
          <Link href="/pricing" className="text-white/70 hover:text-white transition-colors text-sm">Pricing</Link>
          <Link href="/tutors" className="text-white/70 hover:text-white transition-colors text-sm">Consultants & Tutors</Link>
          <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">About</Link>
        </div>

        {/* Auth Buttons & Language Switcher */}
        <div className="flex items-center space-x-4">
          <Link href="/get-started" className="px-5 py-1.5 rounded-full border border-white/25 text-white text-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
            Get Started
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default Navigation