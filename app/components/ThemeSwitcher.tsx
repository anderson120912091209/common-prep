"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-background text-foreground"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size= {20} />}
    </button>
  );
} 