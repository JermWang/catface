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

      <BroadcastIntro />
      <LivingEcosystem specimens={specimens} />
      <WildlifeReserve specimens={specimens} />
      <FieldGuide specimens={specimens} />
      <MotionReel specimens={specimens} />
      <OutroCTA />
    </main>
  );
}
