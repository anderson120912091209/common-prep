'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [switcherRef]);

  return (
    <div className="relative" ref={switcherRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
      >
        <Image src="/globe.svg" alt="Language" width={16} height={16} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 w-40 rounded-lg border border-white/10 bg-zinc-900/80 backdrop-blur-lg shadow-lg overflow-hidden
                     origin-top-right transition-all duration-200 ease-in-out"
          style={{ transform: 'scale(0.95)', opacity: 0, animation: 'fadeInScaleUp 0.2s forwards' }}
        >
          <ul className="py-1">
            <li>
              <button className="w-full text-left px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors">
                English
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors">
                繁體中文
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
} 