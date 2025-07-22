"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorSize = 32;
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 900 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    const handleMouseEnter = () => setHoveringInteractive(true);
    const handleMouseLeave = () => setHoveringInteractive(false);

    const addListeners = (root: ParentNode) => {
      const interactiveElements = root.querySelectorAll(
        "button, a, .cursor-interactive"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    const removeListeners = (root: ParentNode) => {
      const interactiveElements = root.querySelectorAll(
        "button, a, .cursor-interactive"
      );

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Agrega listeners iniciales
    addListeners(document);

    // Observa nuevos elementos que se agreguen al DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            addListeners(node);
          }
        });

        mutation.removedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            removeListeners(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", moveCursor);
      removeListeners(document);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`fixed  z-[9999] pointer-events-none rounded-full
        ${
          hoveringInteractive
            ? "md:w-8 h-8 md:top-0 md:left-0 md:bg-[rgba(20,20,155,0)] md:shadow-[0px_0px_5px_5px_rgba(200,200,155)] md:backdrop-blur-[0px]"
            : "md:w-[1px] md:h-[1px] md:top-0 md:left-0 md:bg-[rgba(254,51,23,0)] md:shadow-[0px_0px_300px_50px_rgba(0,0,255,0.4)]"
        }
        mix-blend-difference transition-all duration-0`}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    />
  );
}
