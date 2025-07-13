"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, SunDim } from "lucide-react";
import { useEffect, useState } from "react";

const icons = {
  light: <SunDim size={25} />,
  dark: <Moon size={25} />,
  system: <Monitor size={25} />,
};

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const currentIcon = icons[theme as keyof typeof icons] ?? (
    <Monitor size={25} />
  );

  return (
    <div className="relative group inline-block text-left">
      {/* Botón principal que muestra el tema actual */}
      <button
        className={`p-3 rounded-full transition-all duration-300
          hover:scale-110 hover:invert
          ${isDark ? "hover:bg-black" : "hover:bg-white"}
          hover:animate-pulse hover:animate-infinite
          hover:animate-duration-[1500ms] hover:animate-delay-200 hover:animate-ease-out
        `}
        aria-label="Abrir selector de tema"
      >
        {currentIcon}
      </button>

      {/* Dropdown visible al hacer hover */}
      <div
        className={`absolute z-10 mt-2 w-32 origin-top-right rounded-xl  shadow-xs ${
          isDark
            ? "bg-[#000000] shadow-[#6bff6b92]"
            : "bg-[#ffffff] shadow-[#1212ab3f]"
        }  opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto`}
      >
        <div className="flex flex-col">
          {["light", "dark", "system"].map((option) => (
            <button
              key={option}
              onClick={() => setTheme(option)}
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 text-sm w-full text-left
                 ${isDark ? "hover:bg-neutral-800" : "hover:bg-gray-200"}
                 ${
                   option === "light"
                     ? "rounded-t-xl"
                     : option === "system"
                     ? "rounded-b-xl"
                     : ""
                 }
                
                ${
                  theme === option
                    ? `font-normal tracking-wider ${
                        isDark ? "text-blue-300" : "text-blue-800"
                      }`
                    : ""
                }
              `}
              aria-label={`Cambiar a tema ${option}`}
            >
              {icons[option as keyof typeof icons]}
              <span className="capitalize">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
