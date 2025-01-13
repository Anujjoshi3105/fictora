import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SparkButton() {
  return (
    <motion.button
      className="group relative grid overflow-hidden rounded-full mb-8 px-4 py-2 shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}>
      <span className="spark mask-gradient absolute inset-0 h-full w-full animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      <span className="backdrop absolute inset-[1px] rounded-full dark:bg-primary/80 bg-primary/90 transition-colors duration-150 group-hover:bg-primary/70" />
      <span className="z-10 py-1 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 text-primary-foreground">
        ✨ Unleash the Power of Stories
        <ArrowRight className="w-4 h-4 animate-pulse" />
      </span>
    </motion.button>
  );
}
