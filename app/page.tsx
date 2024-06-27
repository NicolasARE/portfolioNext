import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TechnologiesOrbiting } from "@/components/block/technologies";
import SparklesText from "@/components/layout/sparkles-text";
import GradualSpacing from "@/components/layout/gradual-spacing";
import { ShimmerButton } from "@/components/layout/button";
import TextRevealByWord from "@/components/layout/text-reveal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Header } from "@/components/block/header";
import ProjectsCard from "@/components/base/projects";
import { Footer } from "@/components/block/footer";
import Contact from "@/components/block/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <AuroraBackground>
        <Header />
      </AuroraBackground>

      <main>
        <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-white dark:bg-black">
          <TextRevealByWord text="Je suis un étudiant de 21 ans en 3ème années de BUT MMI à Haguenau en alternance, actuellement chez Cegid." />
        </div>
        <ProjectsCard />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
