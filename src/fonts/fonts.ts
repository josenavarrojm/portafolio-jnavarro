import {
  Geist,
  Geist_Mono,
  Bebas_Neue,
  Anton,
  Space_Grotesk,
  Archivo_Black,
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

export { geistMono, geistSans, bebasNeue, anton, archivoBlack, spaceGrotesk };
