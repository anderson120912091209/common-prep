"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full border dark:border-white/10 border-gray-300 backdrop-blur-sm dark:hover:bg-white/10 hover:bg-gray-100 transition-colors"
    >
      {theme === 'dark' ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-black" />}
    </button>
  );
} 