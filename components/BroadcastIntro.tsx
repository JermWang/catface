"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Copy, Check } from "lucide-react";
import { useState } from "react";

const CONTRACT_ADDRESS = "PASTE_YOUR_TOKEN_CONTRACT_ADDRESS_HERE";

export default function BroadcastIntro() {
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const { scrollYProgress } = useScroll();
  const videoScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.25], [0.35, 0.7]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

  const scrollToExplore = () => {
    document.getElementById("ecosystem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="CATFACE Planet hero"
    >
      {/* Full-screen CATFACE PLANET video background */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/catface/catface-planet-logo.png"
        >
          <source src="/assets/catface/catface-planet-ident.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Organic gradient overlays */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: overlayOpacity }}
      >
        <div className="h-full w-full bg-gradient-to-b from-blackground/60 via-transparent to-blackground" />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_20%,rgba(5,7,5,.5)_70%)]" />

      {/* Soft nature glow accents */}
      <div className="nature-glow absolute left-[10%] top-[20%] h-[300px] w-[300px] bg-moss/20" />
      <div className="nature-glow absolute bottom-[15%] right-[15%] h-[250px] w-[250px] bg-amber/15" />

      {/* Title content */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center"
        style={{ y: titleY }}
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="mb-5 font-body text-sm uppercase tracking-[.5em] text-moss"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          A Nature Documentary, Corrected
        </motion.p>
        <h1 className="font-display text-7xl uppercase leading-[0.84] text-bone drop-shadow-[0_4px_60px_rgba(0,0,0,.6)] md:text-[10rem] lg:text-[13rem]">
          CATFACE
          <br />
          <span className="text-moss">PLANET</span>
        </h1>
        <motion.p
          className="mt-6 max-w-lg text-balance font-body text-xl uppercase tracking-[.08em] text-bone/70 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          All animals. All cats. Even the planet.
        </motion.p>

        {/* Token contract address – glassmorphic pill */}
        <motion.button
          type="button"
          onClick={copyCA}
          className="mt-8 flex items-center gap-3 rounded-2xl border border-bone/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-moss/30 hover:bg-white/10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          title="Click to copy contract address"
        >
          <span className="font-body text-[10px] uppercase tracking-[.2em] text-bone/40">CA</span>
          <span className="max-w-[200px] truncate font-body text-xs tracking-wider text-bone/70 md:max-w-none">
            {CONTRACT_ADDRESS}
          </span>
          {copied ? (
            <Check size={14} className="shrink-0 text-moss" />
          ) : (
            <Copy size={14} className="shrink-0 text-bone/40" />
          )}
        </motion.button>

        <motion.button
          type="button"
          onClick={scrollToExplore}
          className="group mt-12 flex flex-col items-center gap-2 font-body text-xs uppercase tracking-[.3em] text-bone/50 transition hover:text-moss"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span>Explore</span>
          <ChevronDown size={20} className="animate-float" />
        </motion.button>
      </motion.div>

      {/* Bottom organic fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blackground via-blackground/60 to-transparent" />

      {/* Organic bottom wave */}
      <div className="organic-wave-bottom">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 40C180 80 360 10 540 50C720 90 900 20 1080 55C1260 90 1350 30 1440 50L1440 100L0 100Z" fill="#050705" />
        </svg>
      </div>
    </section>
  );
}
