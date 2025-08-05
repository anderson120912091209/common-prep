'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ThemeSwitcher } from './ThemeSwitcher';

const Navigation = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div className="flex items-center justify-between px-8 py-2.5 rounded-full border dark:border-white/15 border-gray-200 backdrop-blur-xl dark:bg-white/5 bg-white/70 shadow-lg backdrop-saturate-150">
        {/* Logo */}
        <Link href="/" className="font-medium text-lg tracking-wide whitespace-nowrap">
          <Image src="/TextLogoWhite.svg" alt="Common Prep" width={180} height={100} className="dark:brightness-100 brightness-0" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/platform" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-colors text-sm">Services</Link>
          <Link href="/features" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-colors text-sm">Features</Link>
          <Link href="/pricing" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-colors text-sm">Pricing</Link>
          <Link href="/tutors" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-colors text-sm">Consultants & Tutors</Link>
          <Link href="/about" className="dark:text-white/70 text-black/70 dark:hover:text-white hover:text-black transition-colors text-sm">About</Link>
        </div>

        {/* Auth Buttons & Language Switcher */}
        <div className="flex items-center space-x-4">
          <Link href="/get-started" className="px-5 py-1.5 rounded-full border dark:border-white/25 border-gray-300 dark:text-white text-gray-700 text-sm backdrop-blur-sm dark:hover:bg-white/10 hover:bg-gray-100 transition-colors">
            Get Started
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default Navigation