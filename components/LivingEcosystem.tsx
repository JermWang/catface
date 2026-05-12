"use client";

import SpecimenDossierModal from "@/components/SpecimenDossierModal";
import type { Specimen } from "@/lib/specimens";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

/* ── Creature placement data using the animal PNGs ── */
const CREATURES = [
  { id: "hippo-cat", png: "/PNGs/hippo_cat-removebg-preview.png", x: 3, y: 38, w: 20, name: "Hippopotameow", floatClass: "creature-float-1" },
  { id: "kangaroo-cat", png: "/PNGs/kangaroo_cat-removebg-preview.png", x: 74, y: 12, w: 17, name: "Kangapurr", floatClass: "creature-float-2" },
  { id: "llama-cat", png: "/PNGs/llama_cat-removebg-preview.png", x: 22, y: 8, w: 15, name: "Llamacat", floatClass: "creature-float-3" },
  { id: "shark-cat", png: "/PNGs/meowshark-removebg-preview.png", x: 38, y: 52, w: 24, name: "Meowshark", floatClass: "creature-float-4" },
  { id: "penguin-cat", png: "/PNGs/penguin_cat-removebg-preview.png", x: 8, y: 68, w: 13, name: "Penguincat", floatClass: "creature-float-5" },
  { id: "polar-bear-cat", png: "/PNGs/polarcat-removebg-preview.png", x: 62, y: 42, w: 18, name: "Polar Purr", floatClass: "creature-float-6" },
  { id: "seal-cat", png: "/PNGs/cat_seal-removebg-preview.png", x: 80, y: 65, w: 16, name: "Sealpoint", floatClass: "creature-float-7" },
];

/* ── Firefly particle type ── */
interface Firefly {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseOpacity: number;
  phase: number;
  speed: number;
  hue: number;
}

function createFireflies(count: number, w: number, h: number): Firefly[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    radius: Math.random() * 2.2 + 0.6,
    baseOpacity: Math.random() * 0.45 + 0.15,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.018 + 0.006,
    hue: Math.random() > 0.3 ? 90 + Math.random() * 30 : 38 + Math.random() * 20, // green or gold
  }));
}

/* ── Floating spore type (larger, slower) ── */
interface Spore {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number;
}

function createSpores(count: number, w: number, h: number): Spore[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.08,
    vy: -Math.random() * 0.12 - 0.02,
    radius: Math.random() * 18 + 8,
    opacity: Math.random() * 0.06 + 0.02,
    phase: Math.random() * Math.PI * 2,
  }));
}

type LivingEcosystemProps = {
  specimens: Specimen[];
};

export default function LivingEcosystem({ specimens }: LivingEcosystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const firefliesRef = useRef<Firefly[]>([]);
  const sporesRef = useRef<Spore[]>([]);
  const rafRef = useRef<number>(0);
  const [selectedSpecimen, setSelectedSpecimen] = useState<Specimen | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleCreatureClick = useCallback(
    (creatureId: string) => {
      const specimen = specimens.find((s) => s.id === creatureId);
      if (specimen) setSelectedSpecimen(specimen);
    },
    [specimens]
  );

  /* ── Mouse tracking for parallax + canvas ── */
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    mouseRef.current = { x: mx, y: my };

    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setParallax({
      x: ((mx - cx) / cx) * 12,
      y: ((my - cy) / cy) * 8,
    });
  }, []);

  /* ── Canvas animation loop ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.scale(dpr, dpr);

      firefliesRef.current = createFireflies(70, parent.clientWidth, parent.clientHeight);
      sporesRef.current = createSpores(12, parent.clientWidth, parent.clientHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    const animate = () => {
      time++;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;

      /* ── Draw mouse ambient glow ── */
      if (mouse.x > 0 && mouse.y > 0) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
        grad.addColorStop(0, "rgba(124, 182, 98, 0.06)");
        grad.addColorStop(0.5, "rgba(232, 168, 73, 0.03)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(mouse.x - 180, mouse.y - 180, 360, 360);
      }

      /* ── Draw spores (large, soft, behind everything) ── */
      sporesRef.current.forEach((s) => {
        s.phase += 0.008;
        s.x += s.vx + Math.sin(s.phase) * 0.15;
        s.y += s.vy;
        if (s.y < -s.radius * 2) { s.y = h + s.radius; s.x = Math.random() * w; }
        if (s.x < -s.radius) s.x = w + s.radius;
        if (s.x > w + s.radius) s.x = -s.radius;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 182, 98, ${s.opacity})`;
        ctx.fill();
      });

      /* ── Draw fireflies ── */
      firefliesRef.current.forEach((f) => {
        f.phase += f.speed;
        f.x += f.vx + Math.sin(f.phase) * 0.28;
        f.y += f.vy + Math.cos(f.phase * 0.7) * 0.18;

        if (f.x < 0) f.x = w;
        if (f.x > w) f.x = 0;
        if (f.y < 0) f.y = h;
        if (f.y > h) f.y = 0;

        // Gentle mouse attraction
        const dx = mouse.x - f.x;
        const dy = mouse.y - f.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 20) {
          f.vx += (dx / dist) * 0.008;
          f.vy += (dy / dist) * 0.008;
        }
        f.vx *= 0.993;
        f.vy *= 0.993;

        const flicker = 0.4 + 0.6 * Math.sin(f.phase * 2.5);
        const alpha = f.baseOpacity * flicker;

        ctx.save();
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${f.hue}, 55%, 65%, ${alpha})`;
        ctx.shadowColor = `hsla(${f.hue}, 55%, 65%, ${alpha * 0.7})`;
        ctx.shadowBlur = f.radius * 10;
        ctx.fill();
        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-blackground"
      aria-label="Interactive CATFACE ecosystem"
    >
      {/* Section header */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-20 pb-6 md:pt-28 md:pb-10">
        <motion.p
          className="font-body text-sm uppercase tracking-[.42em] text-moss"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Interactive Ecosystem
        </motion.p>
        <motion.h2
          className="mt-3 max-w-4xl font-display text-5xl uppercase leading-[.92] text-bone md:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          Meet the Residents
        </motion.h2>
        <motion.p
          className="mt-4 max-w-lg font-body text-lg uppercase tracking-[.06em] text-bone/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          Hover to observe. Click to open their dossier. Move your cursor to disturb the fireflies.
        </motion.p>
      </div>

      {/* Ecosystem stage: Canvas + HTML creatures */}
      <div
        ref={containerRef}
        className="relative mx-auto min-h-[600px] max-w-[1600px] px-4 md:min-h-[780px] md:px-8"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseRef.current = { x: -1000, y: -1000 };
          setParallax({ x: 0, y: 0 });
        }}
      >
        {/* Background ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(23,76,34,.35),transparent_50%),radial-gradient(ellipse_at_70%_60%,rgba(10,22,40,.4),transparent_50%)]" />

        {/* Canvas layer for fireflies + ambient effects */}
        <canvas ref={canvasRef} className="ecosystem-canvas" />

        {/* HTML creature layer */}
        <div className="ecosystem-creatures" style={{ minHeight: "inherit" }}>
          {CREATURES.map((creature, index) => (
            <motion.button
              key={creature.id}
              type="button"
              className={`creature-sprite ${creature.floatClass}`}
              style={{
                left: `${creature.x}%`,
                top: `${creature.y}%`,
                width: `${creature.w}%`,
                maxWidth: "320px",
                zIndex: 10 + index,
                transform: `translate(${parallax.x * (0.5 + index * 0.12)}px, ${parallax.y * (0.5 + index * 0.12)}px)`,
              }}
              onClick={() => handleCreatureClick(creature.id)}
              initial={{ opacity: 0, y: 50, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              aria-label={`Open dossier for ${creature.name}`}
            >
              <span className="creature-label">{creature.name}</span>
              <img
                src={creature.png}
                alt={creature.name}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </motion.button>
          ))}
        </div>

        {/* Bottom nature gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-blackground via-blackground/50 to-transparent" />
      </div>

      {/* Organic wave transition to next section */}
      <div className="organic-wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 30C200 60 400 5 600 35C800 65 1000 15 1200 40C1320 55 1380 25 1440 35L1440 80L0 80Z" fill="#071006" />
        </svg>
      </div>

      <SpecimenDossierModal specimen={selectedSpecimen} onClose={() => setSelectedSpecimen(null)} />
    </section>
  );
}
