"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CATFACE_TAGLINE } from "@/lib/copy";

export default function CatfaceHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -80]);
  const rotate = useTransform(scrollYProgress, [0, 0.35], [0, 8]);

  return (
    <section
      id="planet"
      className="relative isolate min-h-screen overflow-hidden bg-[#020405] px-5 py-20 md:px-8"
      aria-label="Catface Planet hero"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(27,95,167,.32),transparent_20rem),radial-gradient(circle_at_70%_60%,rgba(109,190,69,.16),transparent_24rem)]" />
      <div className="absolute inset-0" aria-hidden>
        {Array.from({ length: 44 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-bone/70"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
              opacity: index % 3 === 0 ? 0.35 : 0.85
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <div className="order-2 md:order-1">
          <motion.p
            className="font-body text-sm uppercase tracking-[.46em] text-signal"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Broadcast Archive 00
          </motion.p>
          <motion.h2
            className="mt-4 max-w-2xl font-display text-6xl uppercase leading-[0.9] text-bone md:text-8xl lg:text-[9.5rem]"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            CATFACE
            <br />
            PLANET
          </motion.h2>
          <motion.p
            className="mt-6 max-w-md font-body text-2xl uppercase leading-tight tracking-[.05em] text-bone/76 md:text-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            {CATFACE_TAGLINE}
          </motion.p>
        </div>

        <motion.div
          style={{ y, rotate }}
          className="order-1 mx-auto w-full max-w-[760px] md:order-2"
        >
          <div className="soft-animal-mask relative aspect-square overflow-hidden rounded-full bg-black shadow-[0_0_110px_rgba(27,95,167,.52)]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/catface/catface-earth.png"
            >
              <source src="/assets/catface/catface-earth.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 rounded-full shadow-[inset_34px_-40px_70px_rgba(0,0,0,.7),inset_-20px_20px_55px_rgba(169,216,255,.15)]" />
          </div>
          <div className="mx-auto mt-4 grid max-w-xl grid-cols-3 gap-2 rounded-full border border-signal/15 bg-blackground/42 px-4 py-3 font-body text-[10px] uppercase tracking-[.22em] text-signal/75 backdrop-blur-md">
            <span>Lat: purr</span>
            <span className="text-center">Orbital Catline</span>
            <span className="text-right">Signal: live</span>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b0a05]" />
    </section>
  );
}
