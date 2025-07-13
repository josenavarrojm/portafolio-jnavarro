"use client";

import { useEffect, useState } from "react";
import { SocialIcon, SocialIconProps } from "react-social-icons";

interface SocialLink {
  url: string;
  fallback?: {
    color: string;
    path: string;
  };
}

const socialLinks: SocialLink[] = [
  {
    url: "https://www.linkedin.com/in/jose-navarro-meneses-913b62338/",
    fallback: { color: "#fA66C2", path: "/icons/linkedin.svg" },
  },
  {
    url: "https://github.com/josenavarrojm",
    fallback: { color: "#171515", path: "/icons/github.svg" },
  },
];

export default function SocialIcons() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="flex space-x-4 self-end">
      {socialLinks.map((link, idx) => {
        const props: SocialIconProps = {
          url: link.url,
          target: "_blank",
          rel: "noopener noreferrer",
          style: { height: 40, width: 40 },
          fgColor: isDarkMode ? "white" : "black",
          bgColor: "transparent",
        };

        if (link.fallback) {
          props.fallback = {
            color: link.fallback.color,
            path: link.fallback.path,
          };
        }
        return (
          <div
            key={idx}
            className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-white hover:invert dark:hover:bg-black p-1 hover:animate-pulse hover:animate-infinite hover:animate-duration-[1500ms] hover:animate-delay-200 hover:animate-ease-out"
          >
            <SocialIcon {...props} />
          </div>
        );
      })}
    </div>
  );
}
