"use client";

import { cn } from "@/lib/utils";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import React, { useId, useEffect, useState, useCallback } from "react";

interface SparklesCoreProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  id,
  className,
  background = "#0d47a1",
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 120,
}) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(
    async (container?: Container) => {
      if (container) {
        await controls.start({
          opacity: 1,
          transition: { duration: 1 },
        });
      }
    },
    [controls]
  );

  const options: ISourceOptions = {
    background: {
      color: { value: background },
    },
    fullScreen: { enable: false, zIndex: 1 },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: false, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: particleColor },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: { min: 0.1, max: 1 },
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: particleDensity,
      },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
          enable: true,
          speed: speed,
          sync: false,
        },
      },
      shape: { type: "circle" },
      size: {
        value: { min: minSize, max: maxSize },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn("opacity-0", className)}>
      <Particles
        id={id || generatedId}
        className={cn("h-full w-full")}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </motion.div>
  );
};
