"use client";
import { HomeIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BtnHome() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";
  return (
    <Link
      className={`fixed flex flex-col justify-center items-center bottom-12 right-12 w-[3rem] h-[3em] rounded-4xl transition-all duration-300 cursor-pointer animate-fade-up animate-delay-600
      ${
        isDarkMode
          ? "hover:bg-[rgba(20,20,45)] hover:shadow-[0px_0px_10px_rgba(10,10,85)]"
          : "hover:bg-[rgba(250,250,165)] hover:shadow-[0px_0px_10px_rgba(180,180,25)]"
      }`}
      href={"/"}
    >
      <HomeIcon />
    </Link>
  );
}
