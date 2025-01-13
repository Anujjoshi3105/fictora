"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const bannerVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledThreshold, setHasScrolledThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition >= viewportHeight && !hasScrolledThreshold) {
        setHasScrolledThreshold(true);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledThreshold]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 shadow-lg z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={bannerVariants}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 ">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              We use our own cookies as well as third-party cookies on our
              websites to enhance your experience, analyze our traffic, and for
              security and marketing. Select Accept All to allow them to be
              used. Read our Cookie Policy.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="bg-background hover:bg-accent"
                aria-label="Accept all cookies"
                onClick={handleDismiss}>
                Accept All
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                aria-label="Accept only necessary cookies"
                onClick={handleDismiss}>
                Necessary Only
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
