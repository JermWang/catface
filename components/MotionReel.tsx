"use client";

import type { Specimen } from "@/lib/specimens";
import { motion } from "framer-motion";
import { Clapperboard } from "lucide-react";

type MotionReelProps = {
  specimens: Specimen[];
};

export default function MotionReel({ specimens }: MotionReelProps) {
  const clips = specimens.filter((specimen) => specimen.video).slice(0, 7);

  return (
    <section className="relative overflow-hidden bg-[#060a05] px-4 py-20 md:px-8 md:py-28" aria-label="CATFACE motion reel">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(124,182,98,.08),transparent_24rem),radial-gradient(circle_at_80%_65%,rgba(27,95,167,.1),transparent_24rem)]" />
      <div className="nature-glow absolute right-[10%] top-[20%] h-[300px] w-[300px] bg-amber/8" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10">
          <motion.p
            className="font-body text-sm uppercase tracking-[.42em] text-amber"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Field Footage
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-5xl uppercase leading-none text-bone md:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Motion Reel
          </motion.h2>
          <p className="mt-4 max-w-lg font-body text-lg uppercase tracking-[.06em] text-bone/50">
            Recovered footage from the world&apos;s least necessary ecosystem.
          </p>
        </div>

        <div className="overflow-x-auto py-4">
          <div className="flex min-w-max gap-5">
            {clips.map((clip, index) => (
              <motion.article
                key={clip.id}
                className="w-[78vw] max-w-[520px] shrink-0 overflow-hidden rounded-2xl bg-black shadow-organic md:w-[480px]"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={clip.image}
                  >
                    <source src={clip.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-moss/25 bg-blackground/60 px-3 py-2 font-body text-[10px] uppercase tracking-[.24em] text-moss backdrop-blur-sm">
                    <Clapperboard size={14} />
                    Reel {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-moss/10 px-5 py-4 font-body uppercase tracking-[.16em]">
                  <h3 className="text-sm text-bone">{clip.name}</h3>
                  <span className="text-[10px] text-moss/60">Documentary clip</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {["CATFACE PLANET ORIGINALS", "LIVE FROM THE RESERVE", "NATURE HAS BEEN CORRECTED"].map((label) => (
            <motion.div
              key={label}
              className="rounded-2xl border border-moss/12 bg-jungle/8 p-6 transition hover:border-moss/25"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-display text-4xl uppercase leading-none text-bone">{label}</p>
              <p className="mt-4 font-body text-xs uppercase tracking-[.24em] text-moss/60">
                Coming soon
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
