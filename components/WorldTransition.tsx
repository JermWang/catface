"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function WorldTransition() {
  const { scrollYProgress } = useScroll();
  const sunScale = useTransform(scrollYProgress, [0.18, 0.42], [0.9, 1.12]);
  const hazeY = useTransform(scrollYProgress, [0.2, 0.48], [60, -40]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#120b04]" aria-label="Sunrise over the CATFACE reserve">
      <motion.div
        className="absolute inset-0"
        style={{ scale: sunScale }}
      >
        <img
          src="/assets/catface/catface-sunrise.png"
          alt="Cat-faced sun rising over a savanna reserve"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050705] via-transparent to-[#050705]" />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(242,138,26,.38),transparent_55%)] blur-2xl"
        style={{ y: hazeY }}
      />
      <div className="relative z-10 flex min-h-screen items-end px-5 pb-16 md:px-8 md:pb-24">
        <div className="max-w-5xl">
          <p className="font-body text-sm uppercase tracking-[.42em] text-signal">
            Descent Sequence
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.92] text-bone md:text-8xl">
            Sunrise over the reserve
          </h2>
          <p className="mt-5 max-w-xl font-body text-xl uppercase tracking-[.06em] text-bone/78 md:text-2xl">
            Field footage from the world&apos;s least necessary ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
