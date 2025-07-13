"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, SunDim } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const themes = [
    {
      name: "light",
      icon: <SunDim size={20} />,
    },
    {
      name: "dark",
      icon: <Moon size={20} />,
    },
    {
      name: "system",
      icon: <Monitor size={20} />,
    },
  ];

  return (
    <div className="flex gap-2">
      {themes.map(({ name, icon }) => {
        const isActive =
          theme === name || (name === "system" && theme === "system");

        return (
          <button
            key={name}
            onClick={() => setTheme(name)}
            aria-label={`Activar tema ${name}`}
            aria-pressed={isActive}
            className={`
              p-3 rounded-full transition-all duration-300
              hover:scale-110 hover:invert
              ${isDark ? "hover:bg-black" : "hover:bg-white"}
              ${isActive ? "ring-2 ring-offset-2 ring-blue-500" : ""}
              hover:animate-pulse hover:animate-infinite
              hover:animate-duration-[1500ms] hover:animate-delay-200 hover:animate-ease-out
            `}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
}
