import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 lg:my-32">
      <div className="container px-4 md:px-6 text-center">
        <div className="container mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contactez-moi</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Je suis toujours ravi de me connecter avec de nouvelles personnes et de discuter de projets intéressants. N&apos;hésitez pas à me contacter via l&apos;un des canaux ci-dessous.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://www.linkedin.com/in/nicolas-arena-789478233/"
              className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <LinkedinIcon className="size-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <a
              href="mailto:nicolasarena.nico@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Mail className="size-6" />
              <span className="sr-only">Email</span>
            </a>
            <Link
              href="https://github.com/NicolasARE"
              className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <GithubIcon className="size-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
