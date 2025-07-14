"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale(); // Actual locale
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const newLocale = locale === "en" ? "es" : "en";

  // Reemplaza el primer segmento (/en o /es) por el nuevo locale
  const newPath = (() => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // Cambia el locale
    return segments.join("/");
  })();

  return (
    <button
      onClick={() => startTransition(() => router.push(newPath))}
      disabled={isPending}
      className={`flex flex-col justify-center items-center cursor-pointer md:pt-[0.1em] pt-[0.2em] md:text-[1.5em] text-[1.5em] w-8 h-8 rounded-md transition-all
        hover:scale-105 font-(family-name:--font-teko) animate-fade-down animate-ease-in-out animate-delay-[800ms]
        ${isPending ? "opacity-50 cursor-not-allowed" : ""}
      `}
      aria-label={`Cambiar idioma a ${newLocale}`}
    >
      {newLocale.toUpperCase()}
    </button>
  );
}
