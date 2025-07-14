// src/components/ClientLayout.tsx
"use client";

import { useEffect, useState } from "react";
import Loader from "./loader";
import { AnimatePresence, motion } from "framer-motion";
import { LoaderContext } from "./LoaderContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderContext.Provider value={{ done: !loading }}>
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: loading ? 0.2 : 0 }}
        className={loading ? "pointer-events-none" : ""}
      >
        {children}
      </motion.div>
    </LoaderContext.Provider>
  );
}
