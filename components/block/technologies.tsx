import Image from "next/image";
import OrbitingCircles from "../layout/orbiting-circles";

export function TechnologiesOrbiting() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      </span> */}

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={15}
        delay={20}
        radius={80}
      >
        <Icons.java />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.typescript />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={140}
        duration={20}
        reverse
      >
        <Icons.angular />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={140}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
        className="h-[70px] w-[70px] border-none bg-transparent"
        radius={200}
        duration={15}

      >
        <Icons.postgre />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[70px] w-[70px] border-none bg-transparent"
        radius={200}
        duration={20}
        delay={10}
      >
        <Icons.php />
      </OrbitingCircles>
      
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <Image src="/svg/github.svg" alt="Logo gitHub" width={64} height={64}/>
  ),
  typescript: () => (
    <Image src="/svg/typescript.svg" alt="Logo typescript" width={32} height={32}/>
  ),
 
  angular: () => (
    <Image src="/svg/angular.svg" alt="Logo Angular" width={64} height={64}/>
  ),
  java: () => (
    <Image src="/svg/java.svg" alt="Logo Java" width={32} height={32}/>
  ),
  php: () => (
    <Image src="/svg/php.svg" alt="Logo PHP" width={80} height={80}/>
  ),
  postgre: () => (
    <Image src="/svg/postgre.svg" alt="Logo Java" width={80} height={80}/>
  ),
};
