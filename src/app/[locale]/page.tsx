"use client";
import { Link } from "@/i18n/routing";
import "./index.css";
import {
  BrainCircuit,
  CircleUserRound,
  CircuitBoard,
  FolderRoot,
  // MapPin,
  NotebookPen,
  ScatterChart,
  Send,
  Workflow,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import GridBackground from "@/components/GridBg";
import { useLoader } from "@/components/LoaderContext";

export default function Page() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const t = useTranslations("HomePage");
  const { done } = useLoader();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!done) return null; // si querés que espere

  return (
    <GridBackground>
      <NavBar />
      <main className="child-main flex flex-col md:flex-row md:justify-around justify-around items-center md:pb-14 pb-[10em] md:w-[90%] w-full h-full">
        <section className="flex flex-col justify-center items-center space-y-4 w-full md:w-[50%] md:h-full">
          <div className="mb-12">
            <h1
              className={`md:text-[6em] text-[3.8em] uppercase font-bold text-transparent bg-clip-text title-gradient ${
                isDark
                  ? "drop-shadow-[1px_1px_0_rgba(255,255,255,0.1)]"
                  : "drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]"
              }  animate-fade-down animate-ease-in-out animate-delay-250 tracking-wider `}
            >
              {t("name")}
            </h1>

            <p className="font-(family-name:--font-spaceGrotesk) italic md:text-[1.2em] md:px-4 px-12 -mt-4 text-[0.7em] animate-fade-down animate-ease-in-out animate-delay-600">
              {t("tagline")}
            </p>
          </div>
          <section className="flex flex-col justify-center items-center">
            <ul className="grid grid-cols-2 gap-4 md:text-[1em] text-[0.80em] md:w-full w-[85%] animate-fade-down animate-ease-in-out animate-delay-200 font-(family-name:--font-oswald) font-normal uppercase">
              <li
                className={`flex flex-row justify-start items-center h-[3rem] px-2 py-3 rounded-md border-l-4 ${
                  isDark ? "border-green-400" : "border-green-700"
                } animate-fade-right animate-ease-in-out animate-delay-500`}
              >
                <CircuitBoard /> <h1 className="ml-1">{t("title1")} </h1>
              </li>
              <li
                className={`flex flex-row justify-start items-center h-[3rem] px-2 py-3 rounded-md border-l-4 ${
                  isDark ? "border-red-400" : "border-yellow-700"
                } animate-fade-right animate-ease-in-out animate-delay-[600ms]`}
              >
                <ScatterChart />
                <h1 className="ml-1">{t("title2")}</h1>
              </li>
              <li
                className={`flex flex-row justify-start items-center h-[3rem] px-2 py-3 rounded-md border-l-4 ${
                  isDark ? "border-amber-400" : "border-amber-700"
                } animate-fade-right animate-ease-in-out animate-delay-[700ms]`}
              >
                <Workflow />
                <h1 className="ml-1">{t("title3")}</h1>
              </li>
              <li
                className={`flex flex-row justify-start items-center h-[3rem] px-2 py-3 rounded-md border-l-4 ${
                  isDark ? "border-blue-400" : "border-blue-700"
                } animate-fade-right animate-ease-in-out animate-delay-[800ms]`}
              >
                <BrainCircuit /> <h1 className="ml-1">{t("title4")}</h1>
              </li>
            </ul>
          </section>
        </section>

        <section className="flex flex-col justify-center items-center x">
          <section className="grid grid-cols-2 gap-4 md:w-max  md:text-[1.4em] text-[1.4em]">
            <Link
              href="/"
              className="button-link flex flex-row justify-start items-center  backdrop-blur-3xl animate-fade-left animate-ease-in-out animate-delay-500"
            >
              <FolderRoot />
              <h1 className="ml-2">{t("projects")} </h1>
            </Link>
            <Link
              href="/"
              className="button-link flex flex-row justify-start items-center backdrop-blur-3xl animate-fade-left animate-ease-in-out animate-delay-[600ms]"
            >
              <NotebookPen />
              <h1 className="ml-2">{t("blog")} </h1>
            </Link>
            <Link
              href="/about"
              className="button-link flex flex-row justify-start items-center backdrop-blur-3xl animate-fade-left animate-ease-in-out animate-delay-[700ms]"
            >
              <CircleUserRound />
              <h1 className="ml-2">{t("info")} </h1>
            </Link>
            <Link
              href="/contact"
              className="button-link flex flex-row justify-start items-center  backdrop-blur-3xl animate-fade-left animate-ease-in-out animate-delay-[800ms]"
            >
              <Send />
              <h1 className="ml-2">{t("contact")} </h1>
            </Link>
          </section>
        </section>
      </main>
    </GridBackground>
  );
}
