'use client';

import Link from "next/link";
import Image from "next/image";
///import { useLanguage } from "../contexts/LanguageContext";
///import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  ///const { t } = useLanguage();
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 shadow-lg">
        <div className="relative flex items-center">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center group"
            >
              <Image 
                src="/Logo2.svg" 
                alt="CommonPrep" 
                width={160} 
                height={50} 
                className="h-6 w-auto transition-all duration-300 ease-out group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Center Navigation Links - Absolutely centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6">
            <Link 
              href="/services" 
              className="nav-link-premium text-xs font-serif tracking-wide"
            >
              Services
            </Link>
            <Link 
              href="/ai-evaluation" 
              className="nav-link-premium text-xs font-serif tracking-wide"
            >
              AI Evaluation
            </Link>
            <Link 
              href="/diagnostic" 
              className="nav-link-premium text-xs font-serif tracking-wide"
            >
              Diagnostic
            </Link>
            <Link 
              href="/tutors" 
              className="nav-link-premium text-xs font-serif tracking-wide"
            >
              Tutors
            </Link>
          </div>

          {/* Get Started Button & Language Switcher - Right */}
          <div className="flex items-center ml-auto space-x-4">
            <Link 
              href="/contact" 
              className="bg-blue-400/80 hover:bg-blue-500/90 text-white font-medium px-4 py-1.5 rounded-full text-xs transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              Get Started
            </Link>
            {/*<LanguageSwitcher />*/}
          </div>
        </div>
      </div>
    </nav>
  );
} 