"use client";

import type { Habitat, HabitatId } from "@/lib/specimens";
import { Snowflake, TreePalm, Waves } from "lucide-react";
import type { ElementType } from "react";

const icons: Record<HabitatId, ElementType> = {
  savanna: TreePalm,
  arctic: Snowflake,
  coastline: Waves
};

type HabitatSwitcherProps = {
  habitats: Habitat[];
  active: HabitatId;
  onChange: (id: HabitatId) => void;
};

export default function HabitatSwitcher({
  habitats,
  active,
  onChange
}: HabitatSwitcherProps) {
  return (
    <div className="w-full">
      <div
        className="flex flex-wrap items-center gap-2"
        role="tablist"
        aria-label="Switch CATFACE habitats"
      >
        {habitats.map((habitat) => {
          const Icon = icons[habitat.id];
          const selected = active === habitat.id;

          return (
            <button
              key={habitat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="reserve-stage"
              onClick={() => onChange(habitat.id)}
              className={`group flex items-center gap-2.5 rounded-full border px-4 py-2.5 transition focus:outline-none focus:ring-2 focus:ring-bone/50 ${
                selected
                  ? "border-moss/60 bg-moss text-blackground shadow-glow"
                  : "border-white/8 bg-white/5 text-bone/70 backdrop-blur-sm hover:border-moss/30 hover:bg-white/10 hover:text-bone"
              }`}
            >
              <Icon size={16} />
              <span className="font-body text-xs font-bold uppercase tracking-[.14em]">
                {habitat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
