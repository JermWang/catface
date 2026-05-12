import BroadcastIntro from "@/components/BroadcastIntro";
import FieldGuide from "@/components/FieldGuide";
import LivingEcosystem from "@/components/LivingEcosystem";
import MotionReel from "@/components/MotionReel";
import OutroCTA from "@/components/OutroCTA";
import WildlifeReserve from "@/components/WildlifeReserve";
import { specimens } from "@/lib/specimens";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-blackground text-bone">
      <div className="noise-overlay" aria-hidden />

      {/* Persistent channel logo – bottom-left, like a real TV network bug */}
      <img
        src="/catface planet.png"
        alt="CATFACE PLANET"
        className="fixed bottom-5 left-5 z-[70] h-20 w-auto opacity-50 mix-blend-screen transition hover:opacity-80 md:bottom-6 md:left-6 md:h-24"
        draggable={false}
      />

      {/* X (Twitter) link – fixed bottom-right */}
      <a
        href="https://x.com/catfacesolana"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-moss/40 hover:bg-white/10 md:bottom-6 md:right-6 md:h-11 md:w-11"
        aria-label="Follow CATFACE on X"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-bone/60 transition group-hover:fill-bone" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      <BroadcastIntro />
      <LivingEcosystem specimens={specimens} />
      <WildlifeReserve specimens={specimens} />
      <FieldGuide specimens={specimens} />
      <MotionReel specimens={specimens} />
      <OutroCTA />
    </main>
  );
}
