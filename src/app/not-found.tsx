import GridBackground from "@/components/GridBg";
import { MessageCircleWarning } from "lucide-react";
import Link from "next/link";
import "./globals.css";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <GridBackground>
      <div className="py-10 flex flex-col w-screen h-screen justify-center items-center text-center">
        <h1 className="md:text-[8rem] text-[5rem] flex flex-row justify-center items-center font-bold mb-4 w-full">
          404 <MessageCircleWarning size={50} />
        </h1>
        <h2 className="font-light text-[2rem] tracking-wider -mt-8 mb-8">
          {t("nopage")}
        </h2>
        <p className="text-lg mb-6">{t("sorry")}</p>
        <Link href="/" className="text-blue-600 hover:underline">
          {t("goback")}
        </Link>
      </div>
    </GridBackground>
  );
}
