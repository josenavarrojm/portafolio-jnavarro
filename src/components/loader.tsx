"use client";
import { useTheme } from "next-themes";

import {
  cubicBezier,
  cubicBezierAsString,
  easeInOut,
  motion,
} from "framer-motion";
import GridBackground from "./GridBg";
import { useEffect, useState } from "react";

const loaderVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: {
      duration: 1.2,
      cubicBezierAsString: cubicBezierAsString,
      delay: 3,
    },
  },
  exit: { opacity: 0 },
};

const letterVariant = {
  initial: { opacity: 0, y: 10 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      cubicBezier: cubicBezier,
    },
  }),
};

const floatingVariant = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

const name = "JOSE NAVARRO".split(""); // letras individuales
const subtitle = "PORTFOLIO";

export default function Loader() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <GridBackground>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#00000010] backdrop-blur-xs"
        variants={loaderVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div
          className={`flex space-x-1 md:text-6xl text-5xl font-teko uppercase tracking-widest mb-2 ${
            isDark ? "text-green-200" : "text-blue-900"
          }`}
        >
          {name.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariant}
              initial="initial"
              animate="animate"
              className="inline-block"
            >
              <motion.span variants={floatingVariant} animate="animate">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </motion.span>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: name.length * 0.05 + 0.2 }}
          className={`text-3xl uppercase font-teko tracking-widest ${
            isDark ? "text-gray-200" : "text-gray-900"
          }`}
        >
          {subtitle}
        </motion.h2>
      </motion.div>
    </GridBackground>
  );
}
