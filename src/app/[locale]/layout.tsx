import type { Metadata } from "next";
import "@/app/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ClientLayout from "@/components/ClientLayout";
import ThemeClientProvider from "@/components/ThemeClientProvider";

export const metadata: Metadata = {
  title: "Jose Navarro Portfolio",
  description: "Personal Website of Jose Navarro",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <ThemeClientProvider>
      <NextIntlClientProvider>
        <ClientLayout>{children}</ClientLayout>
      </NextIntlClientProvider>
    </ThemeClientProvider>
  );
}
