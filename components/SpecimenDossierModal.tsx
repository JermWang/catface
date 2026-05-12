"use client";

import type { Specimen } from "@/lib/specimens";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type SpecimenDossierModalProps = {
  specimen: Specimen | null;
  onClose: () => void;
};

export default function SpecimenDossierModal({
  specimen,
  onClose
}: SpecimenDossierModalProps) {
  useEffect(() => {
    if (!specimen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose, specimen]);

  if (!specimen) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-blackground/80 px-4 py-8 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close dossier"
        onClick={onClose}
      />
      <motion.div
        className="relative z-10 grid max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-moss/20 bg-[#071006] shadow-organic md:grid-cols-[1fr_.86fr]"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
      >
        <div className="relative min-h-[360px] overflow-hidden rounded-l-3xl bg-black">
          {specimen.video ? (
            <video
              className="h-full min-h-[360px] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={specimen.image}
            >
              <source src={specimen.video} type="video/mp4" />
            </video>
          ) : (
            <img src={specimen.image} alt={specimen.name} className="h-full min-h-[360px] w-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071006]/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="font-body text-xs uppercase tracking-[.3em] text-moss/70">
              Field documentation
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden p-6 md:p-8">
          <div className="nature-glow absolute right-0 top-0 h-[200px] w-[200px] bg-moss/5" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-moss/20 bg-blackground/60 p-2 text-bone backdrop-blur-sm transition hover:bg-moss hover:text-blackground focus:outline-none focus:ring-2 focus:ring-bone"
            aria-label="Close dossier"
          >
            <X size={18} />
          </button>
          <div className="relative z-10">
            <p className="font-body text-xs uppercase tracking-[.32em] text-moss">
              CATFACE Archive
            </p>
            <h3 id="dossier-title" className="mt-4 font-display text-5xl uppercase leading-none text-bone md:text-7xl">
              {specimen.name}
            </h3>
            <p className="mt-3 font-body text-lg uppercase tracking-[.08em] text-bone/60">
              {specimen.classification}
            </p>

            <dl className="mt-8 grid gap-3 font-body uppercase tracking-[.08em] sm:grid-cols-2">
              {[
                ["Habitat", specimen.habitat],
                ["Temperament", specimen.temperament],
                ["Threat", specimen.threatLevel],
                ["Rarity", specimen.rarity],
                ["Location", specimen.location],
                ["Coordinates", specimen.coordinates]
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border-l-2 border-moss/30 bg-blackground/40 px-4 py-3">
                  <dt className="text-[10px] tracking-[.28em] text-moss/60">{label}</dt>
                  <dd className="mt-1 text-sm text-bone/80">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-t border-moss/15 pt-6">
              <p className="font-body text-xl uppercase leading-snug tracking-[.05em] text-bone">
                {specimen.notes}
              </p>
              <p className="mt-4 font-body text-base uppercase leading-relaxed tracking-[.05em] text-bone/55">
                {specimen.behavior}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
