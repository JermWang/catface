"use client";

import type { ReservePlacement, Specimen } from "@/lib/specimens";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type SpecimenHotspotProps = {
  specimen: Specimen;
  placement: ReservePlacement;
  index: number;
  onSelect: (specimen: Specimen) => void;
};

export default function SpecimenHotspot({
  specimen,
  placement,
  index,
  onSelect
}: SpecimenHotspotProps) {
  const style: CSSProperties = {
    left: placement.x,
    top: placement.y,
    width: placement.width,
    zIndex: placement.z + 30
  };

  return (
    <motion.button
      type="button"
      style={style}
      className="group absolute block -translate-y-1/2 text-left focus:outline-none"
      onClick={() => onSelect(specimen)}
      initial={{ opacity: 0, y: 44, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      aria-label={`Open dossier for ${specimen.name}`}
    >
      <span className="pointer-events-none absolute -left-2 -top-11 z-30 rounded-full border border-moss/25 bg-blackground/65 px-4 py-2 font-body text-xs uppercase tracking-[.16em] text-bone opacity-0 shadow-organic backdrop-blur-md transition group-hover:opacity-100 group-focus:opacity-100">
        {specimen.name}
      </span>
      <span className="absolute left-1/2 top-[54%] z-30 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-bone bg-moss/90 shadow-glow" />
      <span className="absolute left-1/2 top-[54%] z-20 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-moss/15 opacity-0 transition group-hover:opacity-100 group-focus:opacity-100" />
      {specimen.cutout ? (
        <span className="relative block aspect-[1.18/1] bg-transparent">
          <img
            src={specimen.cutout}
            alt=""
            className="specimen-cut h-full w-full object-contain drop-shadow-[0_30px_34px_rgba(0,0,0,.65)] transition duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-[5%] left-[16%] right-[16%] h-[12%] rounded-full bg-blackground/70 blur-xl" />
        </span>
      ) : (
        <span className="sighting-mask terrain-shadow relative block aspect-[1.18/1] overflow-hidden bg-transparent">
          <img
            src={specimen.image}
            alt=""
            className="specimen-cut h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-blackground/48 via-transparent to-transparent mix-blend-multiply" />
        </span>
      )}
    </motion.button>
  );
}
