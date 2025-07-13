// import {useTranslations} from 'next-intl';
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import "./index.css";
import SocialIcons from "@/components/SocialIcon";
import {
  BrainCircuit,
  CircleUserRound,
  CircuitBoard,
  FolderRoot,
  MapPin,
  NotebookPen,
  ScatterChart,
  Send,
  Workflow,
} from "lucide-react";

export default async function Page() {
  const t = await getTranslations("HomePage");

  return (
    <div className="div-parent h-screen w-full flex flex-col justify-between items-end text-center font-(family-name:--font-bebas)">
      <div className="flex flex-row md:justify-end justify-between items-center pt-8 px-10 space-x-4 self-end w-full animate-fade-down animate-ease-out animate-duration-[1100ms]">
        <div className="flex flex-row h-8 items-center justify-center">
          <MapPin size={20} />
          <h2 className="self-end ml-0.5">Colombia</h2>
        </div>
        <SocialIcons />
      </div>
      <main className="child-main flex flex-col md:flex-row md:justify-around justify-around items-center md:pb-14 pb-[10em] md:w-[90%] w-full h-full">
        <section className="flex flex-col justify-center items-center space-y-4 w-full md:w-[50%] md:h-full">
          <div className="mb-12">
            <h1 className="md:text-[6em] text-[3.8em] uppercase font-bold text-transparent bg-clip-text title-gradient drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)] dark:drop-shadow-[1px_1px_0_rgba(255,255,255,0.1)] animate-fade-down animate-ease-in-out animate-delay-100 tracking-wider">
              {t("name")}
            </h1>

            <p className="font-(family-name:--font-spaceGrotesk) italic md:text-[1.2em] md:px-4 px-12 -mt-4 text-[0.7em] animate-fade-down animate-ease-in-out animate-delay-100">
              {t("tagline")}
            </p>
          </div>
          <section className="flex flex-col justify-center items-center">
            <ul className="grid grid-cols-2 gap-4 md:text-[1em] text-[0.80em] md:w-full w-[85%] animate-fade-down animate-ease-in-out animate-delay-200 font-(family-name:--font-oswald) font-normal uppercase">
              <li className="flex flex-row justify-start items-center h-[3rem] px-2 py-3 rounded-md border-l-4 border-green-700 dark:border-green-400">
                <CircuitBoard /> <h1 className="ml-1">{t("title1")} </h1>
              </li>
              <li className="flex flex-row justify-start items-center h-[3rem] px-2 py-3 rounded-md border-l-4 border-yellow-700 dark:border-red-400">
                <ScatterChart />
                <h1 className="ml-1">{t("title2")}</h1>
              </li>
              <li className="flex flex-row justify-start items-center h-[3rem] px-2 py-3 rounded-md border-l-4 border-amber-700 dark:border-amber-400">
                <Workflow />
                <h1 className="ml-1">{t("title3")}</h1>
              </li>
              <li className="flex flex-row justify-start items-center h-[3rem] px-2 py-3 rounded-md border-l-4 border-blue-700 dark:border-blue-400">
                <BrainCircuit /> <h1 className="ml-1">{t("title4")}</h1>
              </li>
            </ul>
          </section>
        </section>

        <section className="flex flex-col justify-center items-center x">
          <section className="grid grid-cols-2 gap-4 animate-fade-up md:w-max animate-ease-in-out animate-delay-500 md:text-[1.4em] text-[1.4em]">
            <Link
              href="/"
              className="button-link flex flex-row justify-start items-center hover:animate-pulse"
            >
              <FolderRoot />
              <h1 className="ml-2">{t("projects")} </h1>
            </Link>
            <Link
              href="/"
              className="button-link flex flex-row justify-start items-center hover:animate-pulse"
            >
              <NotebookPen />
              <h1 className="ml-2">{t("blog")} </h1>
            </Link>
            <Link
              href="/"
              className="button-link flex flex-row justify-start items-center hover:animate-pulse"
            >
              <CircleUserRound />
              <h1 className="ml-2">{t("info")} </h1>
            </Link>
            <Link
              href="/"
              className="button-link flex flex-row justify-start items-center hover:animate-pulse"
            >
              <Send />
              <h1 className="ml-2">{t("contact")} </h1>
            </Link>
          </section>
        </section>
      </main>
    </div>
  );
}
