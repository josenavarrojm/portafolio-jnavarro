"use client";
import BtnHome from "@/components/BtnHome";
import GridBackground from "@/components/GridBg";
import NavBar from "@/components/NavBar";
import { ArrowRight, MailPlus, Podcast } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  const t = useTranslations("Contact");

  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";
  return (
    <GridBackground>
      <NavBar />
      <div className="md:-mt-6 -mt-[1rem] pb-[1rem] w-screen">
        <h1 className="animate-fade-down animate-delay-400 md:text-[4rem] text-[3rem]">
          {t("contact")}
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center md:px-14 px-8 w-full h-full">
        <section className="w-full md:h-full pb-4">
          <section className="w-[9rem] flex flex-row items-center md:text-[2rem] text-[1.5rem] font-(family-name:--font-spaceGrotesk) animate-fade-right animate-delay-600">
            <h1 className="mr-2">{t("email")}</h1>
            <MailPlus size={30} />
          </section>
          <a
            href="mailto:josenavarrojmx@gmail.com"
            className={`relative inline-block mt-8 font-light md:text-[2rem] text-[1.5rem] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
              isDarkMode
                ? "border-[rgba(124,123,123)]"
                : "border-[rgba(150,150,50)]"
            } md:border-0 border-b-2  font-(family-name:--font-teko) tracking-widest animate-fade-down animate-delay-700`}
          >
            josenavarrojmx@gmail.com
          </a>
        </section>

        <section className="flex flex-col justify-start pt-8 items-center w-full h-full">
          <section className=" animate-fade-right animate-delay-800 w-max self-start flex flex-row items-center justify-start md:text-[2rem] text-[1.5rem] font-(family-name:--font-spaceGrotesk)">
            <h1
              className={`font-(family-name:--font-spaceGrotesk) w-full h-max tracking-widest md:text-[2rem] text-[1.5rem] text-start`}
            >
              {t("socialmedia")}
            </h1>
            <Podcast size={30} />
          </section>
          <div className="">
            <SocialContacts isDarkMode={isDarkMode} />
          </div>
        </section>

        <BtnHome />
      </div>
    </GridBackground>
  );
}

type Props = {
  isDarkMode: boolean;
};
function SocialContacts({ isDarkMode }: Props) {
  const iconStyle = {
    height: 50,
    width: 50,
  };

  const fgColor = isDarkMode ? "white" : "black";
  const bgColor = "transparent";

  const delayClasses = [
    "animate-delay-[900ms]",
    "animate-delay-[1000ms]",
    "animate-delay-[1100ms]",
    "animate-delay-[1200ms]",
  ];

  const socials: { network: string; url: string; label: string }[] = [
    {
      network: "linkedin",
      url: "https://www.linkedin.com/in/jose-navarro-meneses-913b62338/",

      label: "LinkedIn",
    },
    {
      network: "whatsapp",
      url: "https://wa.me/573002694067",
      label: "WhatsApp",
    },
    {
      network: "instagram",
      url: "http://instagram.com/jose_jrnm07",
      label: "Instagram",
    },
    {
      network: "x",
      url: "https://x.com/jose_JrNm",
      label: "Twitter (X)",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 self-start w-full">
      {socials.map((link, idx) => (
        <div
          key={idx}
          onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
          role="link"
          tabIndex={0}
          aria-label={`Link to ${link.label}`}
          title={link.label}
          className={`cursor-pointer flex justify-between items-center gap-3 rounded-xl p-2 transition-transform duration-300 hover:scale-105 group
    ${isDarkMode ? "hover:bg-black" : "hover:bg-[#eeee9a]"}
    animate-fade-left animate-ease-in-out ${delayClasses[idx]}
  `}
        >
          <SocialIcon
            network={link.network}
            style={iconStyle}
            fgColor={fgColor}
            bgColor={bgColor}
          />
          <span
            className={`text-xl font-medium tracking-widest font-(family-name:--font-teko) `}
          >
            {link.label}
          </span>
          <div className="transition-transform duration-300 group-hover:-rotate-45">
            <ArrowRight className={isDarkMode ? "text-white" : "text-black"} />
          </div>
        </div>
      ))}
    </div>
  );
}
