/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string;
  date: string;
  src: string | null;
  href: string;
}

export default function ProjectsCard() {
  const projects: ProjectProps[] = [
    {
      title: "Möde Entertainment",
      description: "Une maquette de site web pour une entreprise dans l'événementiel.",
      technologies: "NextJS, TypeScript",
      date: "Avril, 2024",
      src: "images/mode.png",
      href: "https://mode-three.vercel.app/"
    },
    {
      title: "Daichi",
      description: "Une maquette réalisée pour une entreprise dans le jeu vidéo.",
      technologies: "HTML/CSS, JavaScript",
      date: "Décembre, 2023",
      src: "images/daichi.png",
      href: "https://exemple.showmyteam.fr/"
    },
    {
      title: "Communauté MMI",
      description: "Un site web réalisé pour la communauté MMI de l'IUT de Haguenau.",
      technologies: "Wordpress, JavaScript",
      date: "Mai, 2022",
      src: "images/mmi.png",
      href: "https://communaute-mmi.fr/"
    },
    {
      title: "Projet Scolaire bibliothèque de manga",
      description: "Un site web réalisé pour un projet scolaire de MMI.",
      technologies: "PHP, HTML/CSS",
      date: "Octobre, 2022",
      src: "images/manga.png",
      href: "https://manga.arena.etu.mmi-unistra.fr/"
    }
  ];

  return (
    
    <section id="projets" >
      <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl m-3 hover:underline">Projets</h2>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6 container">
      {projects.map((project, i) => (
        <div key={i} className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
          <Link href={project.href} target="_blank" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Project</span>
          </Link>
          {project.src && (
            <img src={project.src} alt={project.title} width={400} height={300} className="object-cover w-full h-56" />
          )}
          <div className="p-4 bg-background">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-xs">
                {project.technologies}
              </Badge>
              <span className="text-xs text-muted-foreground">{project.date}</span>
            </div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
