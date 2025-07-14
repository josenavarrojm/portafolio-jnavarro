"use client";

import { useTheme } from "next-themes";
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
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

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
            className={`rounded-full transition-all duration-300 hover:scale-110 p-1 hover:invert
              ${isDarkMode ? "hover:bg-black" : "hover:bg-white"}
              ${
                idx % 2 == 0 ? "animate-fade-down" : "animate-fade-up"
              } animate-ease-in-out animate-delay-[1000ms] hover:animate-duration-[1500ms] hover:animate-delay-200 hover:animate-ease-out`}
          >
            <SocialIcon {...props} />
          </div>
        );
      })}
    </div>
  );
}
