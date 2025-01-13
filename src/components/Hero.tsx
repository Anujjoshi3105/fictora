"use client";

import { Icons } from "./icons";
import { SparkButton } from "./ui/SparkButton";
import { SparklesCore } from "./ui/SparklesCore";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-col items-center justify-center max-w-5xl w-11/12 md:w-full z-10">
        <SparkButton />
        <motion.h1
          className="text-center font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <span className="block mb-2 relative group text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Explore <span className="text-primary">Fiction</span>
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
            Without Boundaries
          </span>
          <Icons.Brush className="h-8 w-64 -mt-4 -z-10 mx-auto fill-current text-primary/40" />
        </motion.h1>
        <motion.p
          className="my-2 text-center text-base md:text-lg font-medium text-foreground/80 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Explore the world of movies, books, and anime that sparks your
          imagination and fuel your passions!
        </motion.p>
        <motion.div
          className="mt-8 flex items-center justify-center gap-x-4 md:gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <Button asChild size="lg" className="group">
            <Link href="/">
              Join Now
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            effect="shine"
            size="lg"
            variant="outline"
            className="hidden md:inline-flex group">
            <Link href="/">
              Explore More
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
