"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./loader";
import { LoaderContext } from "./LoaderContext";
import CustomCursor from "./CustomCursor";
import AOSInit from "./AOS_INIT";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const previousPath = useRef<string | null>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  // Detectar si vamos hacia adelante o atrás
  useEffect(() => {
    if (previousPath.current) {
      const prev = previousPath.current;
      const current = pathname;

      // Aquí puedes personalizar el orden "lógico" de tus rutas
      const routeOrder = ["/", "/about", "/projects", "/contact"];
      const prevIndex = routeOrder.indexOf(prev);
      const currIndex = routeOrder.indexOf(current);

      if (currIndex > prevIndex) {
        setDirection("forward");
      } else {
        setDirection("backward");
      }
    }
    previousPath.current = pathname;
  }, [pathname]);

  // Loader inicial
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Bloqueamos scroll mientras hay animación (opcional)
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  // Variants de animación por dirección
  const variants = {
    forward: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
    },
    backward: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
    },
  };

  return (
    <LoaderContext.Provider value={{ done: !loading }}>
      <CustomCursor />
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transición de páginas con dirección */}
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key={pathname}
            initial={variants[direction].initial}
            animate={variants[direction].animate}
            exit={variants[direction].exit}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <AOSInit />
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </LoaderContext.Provider>
  );
}
