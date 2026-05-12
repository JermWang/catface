"use client";

import { motion } from "framer-motion";
import { Leaf, Trees } from "lucide-react";

export default function OutroCTA() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-blackground px-5 py-20 md:px-8">
      {/* Organic wave top */}
      <div className="organic-wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 80L0 40C300 10 600 70 900 30C1100 5 1300 50 1440 25L1440 80Z" fill="#050705" />
        </svg>
      </div>

      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20 saturate-[1.1]"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/catface/catface-banner.png"
      >
        <source src="/assets/catface/cat-crowd.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-blackground via-blackground/50 to-blackground" />

      {/* Nature glows */}
      <div className="nature-glow absolute left-[20%] top-[30%] h-[400px] w-[400px] bg-moss/10" />
      <div className="nature-glow absolute right-[15%] bottom-[25%] h-[300px] w-[300px] bg-amber/8" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col items-center justify-center text-center">
        <motion.img
          src="/assets/catface/catface-banner.png"
          alt="CATFACE"
          className="mb-8 w-full max-w-md rounded-3xl border border-moss/15 bg-blackground/40 object-cover shadow-organic"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="font-body text-sm uppercase tracking-[.44em] text-moss"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The ecosystem awaits
        </motion.p>
        <motion.h2
          className="mt-4 font-display text-6xl uppercase leading-[.88] text-bone md:text-9xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          Join
          <br />
          <span className="text-moss">Catface Planet</span>
        </motion.h2>
        <p className="mt-6 max-w-xl font-body text-2xl uppercase leading-tight tracking-[.06em] text-bone/55">
          Nature has finally been corrected.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#reserve"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-moss bg-moss px-7 py-4 font-body text-sm font-bold uppercase tracking-[.22em] text-blackground transition hover:bg-bone hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-bone"
          >
            <Trees size={17} />
            Enter the Reserve
          </a>
          <a
            href="#hero"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-bone/20 bg-blackground/50 px-7 py-4 font-body text-sm font-bold uppercase tracking-[.22em] text-bone backdrop-blur-sm transition hover:border-moss hover:text-moss focus:outline-none focus:ring-2 focus:ring-bone"
          >
            <Leaf size={17} />
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}
