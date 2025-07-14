import GridBackground from "@/components/GridBg";
import NavBar from "@/components/NavBar";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <GridBackground>
      <NavBar />
      <div className="h-full w-full p-12 bg-amber-700">
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </GridBackground>
  );
}
