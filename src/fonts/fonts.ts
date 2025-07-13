import {
  Geist,
  Geist_Mono,
  Bebas_Neue,
  Anton,
  Space_Grotesk,
  Archivo_Black,
  Oswald,
  League_Spartan,
  Barlow_Condensed,
  Archivo_Narrow,
  Teko,
} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivoBlack",
});

// Oswald: Condensada y versátil
export const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

// League Spartan: Moderna y geométrica
export const leagueSpartan = League_Spartan({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-leagueSpartan",
});

// Barlow Condensed: Muy flexible, hasta 900
export const barlowCondensed = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlowCondensed",
});

// Archivo Narrow: Profesional y estilizada
export const archivoNarrow = Archivo_Narrow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivoNarrow",
});

// Teko: Compacta y con impacto
export const teko = Teko({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-teko",
});

export { geistMono, geistSans, bebasNeue, anton, archivoBlack, spaceGrotesk };
