"use client";

import HabitatSwitcher from "@/components/HabitatSwitcher";
import SpecimenDossierModal from "@/components/SpecimenDossierModal";
import SpecimenHotspot from "@/components/SpecimenHotspot";
import { habitats, type HabitatId, type Specimen } from "@/lib/specimens";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type WildlifeReserveProps = {
  specimens: Specimen[];
};

export default function WildlifeReserve({ specimens }: WildlifeReserveProps) {
  const [activeHabitat, setActiveHabitat] = useState<HabitatId>("savanna");
  const [selectedSpecimen, setSelectedSpecimen] = useState<Specimen | null>(null);

  const habitat = habitats.find((item) => item.id === activeHabitat) ?? habitats[0];
  const visibleSpecimens = useMemo(
    () =>
      specimens
        .filter((specimen) => specimen.cutout && specimen.placements[activeHabitat])
        .sort((a, b) => (a.placements[activeHabitat]?.z ?? 0) - (b.placements[activeHabitat]?.z ?? 0)),
    [activeHabitat, specimens]
  );

  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-[#071006] px-0 py-16 md:py-24"
      aria-label="Interactive CATFACE wildlife reserve"
    >
      {/* Organic wave top */}
      <div className="organic-wave-top">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 70L0 30C240 0 480 60 720 25C960 -10 1200 50 1440 20L1440 70Z" fill="#071006" />
        </svg>
      </div>

      <div className={`absolute inset-0 bg-gradient-to-b ${habitat.palette} opacity-40`} />
      <div className="nature-glow absolute left-[5%] top-[30%] h-[400px] w-[400px] bg-moss/10" />
      <div className="nature-glow absolute right-[10%] bottom-[20%] h-[300px] w-[300px] bg-earth/10" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 md:px-8">
        {/* Header + Habitat Switcher — stacked cleanly */}
        <div className="mb-10 space-y-6 md:mb-12">
          <div>
            <motion.p
              className="font-body text-sm uppercase tracking-[.42em] text-moss"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Wildlife Reserve
            </motion.p>
            <motion.h2
              className="mt-3 max-w-4xl font-display text-5xl uppercase leading-[.92] text-bone md:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              {habitat.title}
            </motion.h2>
            <p className="mt-4 max-w-lg font-body text-lg uppercase tracking-[.06em] text-bone/50">
              {habitat.dek}
            </p>
          </div>
          <HabitatSwitcher habitats={habitats} active={activeHabitat} onChange={setActiveHabitat} />
        </div>

        {/* Reserve viewport */}
        <div
          id="reserve-stage"
          className="living-stage relative min-h-[600px] overflow-hidden bg-black/80 md:min-h-[780px]"
          role="tabpanel"
          aria-label={`${habitat.label} habitat`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={habitat.id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src={habitat.background}
                alt=""
                className="h-full w-full scale-[1.03] object-cover opacity-80 saturate-[1.05]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_42%,transparent_0_30%,rgba(5,7,5,.18)_56%,rgba(5,7,5,.65)_100%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-blackground/90 via-blackground/5 to-blackground/20" />
            </motion.div>
          </AnimatePresence>

          {/* Top-left channel badge */}
          <div className="absolute left-5 top-5 z-30 flex items-center gap-3 rounded-full border border-white/8 bg-black/40 px-4 py-2 backdrop-blur-xl md:left-7 md:top-7">
            <span className="h-2 w-2 rounded-full bg-moss animate-glow-pulse" />
            <span className="font-body text-[10px] uppercase tracking-[.22em] text-bone/70">{habitat.channel}</span>
            <span className="font-body text-xs font-bold uppercase tracking-[.12em] text-bone">{habitat.label}</span>
          </div>

          {/* Top-right hint */}
          <div className="absolute right-5 top-5 z-30 hidden rounded-full border border-white/6 bg-black/30 px-4 py-2 font-body text-[10px] uppercase tracking-[.22em] text-bone/40 backdrop-blur-xl md:right-7 md:top-7 md:block">
            Click a specimen to learn more
          </div>

          <div className="leaf-vignette" />

          <AnimatePresence mode="popLayout">
            {visibleSpecimens.map((specimen, index) => {
              const placement = specimen.placements[activeHabitat];
              if (!placement) return null;

              return (
                <SpecimenHotspot
                  key={`${activeHabitat}-${specimen.id}`}
                  specimen={specimen}
                  placement={placement}
                  index={index}
                  onSelect={setSelectedSpecimen}
                />
              );
            })}
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-blackground via-blackground/20 to-transparent" />
          <div className="grassline" />
        </div>
      </div>
      <SpecimenDossierModal specimen={selectedSpecimen} onClose={() => setSelectedSpecimen(null)} />
    </section>
  );
}
