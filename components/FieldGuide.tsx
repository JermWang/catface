"use client";

import SpecimenDossierModal from "@/components/SpecimenDossierModal";
import type { Specimen } from "@/lib/specimens";
import { motion } from "framer-motion";
import { FileSearch } from "lucide-react";
import { useState } from "react";

type FieldGuideProps = {
  specimens: Specimen[];
};

export default function FieldGuide({ specimens }: FieldGuideProps) {
  const [selectedSpecimen, setSelectedSpecimen] = useState<Specimen | null>(null);

  return (
    <section id="archive" className="relative overflow-hidden bg-blackground px-4 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(124,182,98,.1),transparent_30rem),radial-gradient(ellipse_at_70%_70%,rgba(232,168,73,.06),transparent_26rem)]" />
      <div className="nature-glow absolute left-[15%] top-[10%] h-[350px] w-[350px] bg-moss/8" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <motion.p
              className="font-body text-sm uppercase tracking-[.42em] text-moss"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Specimen Archive
            </motion.p>
            <motion.h2
              className="mt-3 font-display text-5xl uppercase leading-none text-bone md:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Field Guide
            </motion.h2>
          </div>
          <p className="max-w-md font-body text-lg uppercase leading-snug tracking-[.06em] text-bone/55">
            A corrupted wildlife database for animals that should not have domestic cat faces, yet do.
          </p>
        </div>

        <motion.div
          className="flex cursor-grab gap-5 overflow-x-auto pb-8 active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -1120, right: 0 }}
        >
          {specimens.map((specimen, index) => (
            <motion.button
              key={specimen.id}
              type="button"
              onClick={() => setSelectedSpecimen(specimen)}
              className="group min-w-[285px] overflow-hidden rounded-3xl border border-moss/10 bg-blackground/60 text-left shadow-organic backdrop-blur-sm transition hover:border-moss/35 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-bone md:min-w-[350px]"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={specimen.image}
                  alt=""
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-36 blur-sm transition duration-700 group-hover:scale-125"
                />
                <img
                  src={specimen.cutout ?? specimen.image}
                  alt={specimen.name}
                  className={`relative z-10 h-full w-full transition duration-700 group-hover:scale-105 ${
                    specimen.cutout
                      ? "object-contain p-4 drop-shadow-[0_24px_30px_rgba(0,0,0,.65)]"
                      : "soft-animal-mask object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blackground/82 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 rounded-full border border-moss/25 bg-blackground/55 px-3 py-1 font-body text-[10px] uppercase tracking-[.22em] text-moss backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")} / {specimen.environment}
                </div>
              </div>
              <div className="p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-4xl uppercase leading-none text-bone">
                      {specimen.name}
                    </h3>
                    <p className="mt-2 font-body text-xs uppercase tracking-[.2em] text-moss/70">
                      {specimen.coordinates}
                    </p>
                  </div>
                  <FileSearch className="mt-1 shrink-0 text-moss/60" size={20} />
                </div>
                <p className="font-body text-sm uppercase leading-relaxed tracking-[.07em] text-bone/55">
                  {specimen.notes}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <SpecimenDossierModal specimen={selectedSpecimen} onClose={() => setSelectedSpecimen(null)} />
    </section>
  );
}
