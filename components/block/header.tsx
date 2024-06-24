import GradualSpacing from "@/components/layout/gradual-spacing";
import { ShimmerButton } from "@/components/layout/button";
import { TechnologiesOrbiting } from "@/components/block/technologies";
import Nav from "../base/nav";

export function Header() {
return (
<>
    <Nav />
    <header className="h-[100vh] container flex  items-center" id="profil">
        <div className="flex items-center justify-between grow pointer-events-none">
            <div className="flex flex-col">
                <h1>
                    <GradualSpacing
                        className="scroll-m-20 text-6xl font-extrabold lg:text-7xl font-display tracking-[-0.1em] text-black dark:text-black md:text-9xl md:leading-[6rem]"
                        text="Bienvenue !" />
                </h1>
                <div className="flex items-end gap-2 mt-6">
                    <p className="leading-7 text-zinc-900">Je suis un développeur full-stack passioné avec un intérêt 
                        pour Java & C#</p>
                     
                </div>
                <div className="pt-5 pointer-events-auto">
                    <a href="#">
                    <ShimmerButton className="shadow-2xl">
                        <span
                            className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Projets &#62;
                        </span>
                    </ShimmerButton>
                    </a>
                </div>
            </div>
            <TechnologiesOrbiting />
        </div>
    </header>
</>
);
}