import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { allTech, projects, type CaseStudy } from "@/data/portfolio";

const ArchitectureDiagram = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-wrap items-center gap-2" role="img" aria-label={`Architecture flow: ${steps.join(" then ")}`}>
    {steps.map((step, index) => (
      <div key={step} className="flex items-center gap-2">
        <span className="rounded-xl border border-border bg-background/60 px-3 py-2 text-xs font-medium text-foreground">
          {step}
        </span>
        {index < steps.length - 1 && <ChevronRight className="h-4 w-4 text-primary" aria-hidden="true" />}
      </div>
    ))}
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<CaseStudy | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
          <h2 className="accent-underline text-3xl font-bold sm:text-4xl">Interactive case studies</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Filter by technology, then open any project for the problem, approach, architecture and measured impact.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by technology">
          {["All", ...allTech].map((tech) => {
            const selected = filter === tech;
            return (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                aria-pressed={selected}
                className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-smooth ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-card card-glow-hover flex flex-col rounded-3xl p-6"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} dashboard preview`}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={675}
                    className="mb-6 aspect-video w-full rounded-2xl border border-border object-cover"
                  />
                )}
                <div className="mb-4 flex items-start gap-3">
                  <span className="rounded-xl border border-primary/30 bg-primary/10 p-2">
                    <project.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                    <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="mt-auto w-fit rounded-full px-4 text-primary hover:bg-primary/10 hover:text-primary"
                  onClick={() => setActive(project)}
                >
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{active.title}</DialogTitle>
                <DialogDescription>{active.subtitle}</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-3 gap-3">
                {active.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-border bg-background/50 p-4 text-center">
                    <p className="text-xl font-bold text-primary">{metric.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <section className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Problem</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{active.problem}</p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Approach</h4>
                <ul className="space-y-2">
                  {active.approach.map((step) => (
                    <li key={step} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {step}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Architecture</h4>
                <ArchitectureDiagram steps={active.architecture} />
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Impact</h4>
                <ul className="space-y-2">
                  {active.impact.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="flex flex-wrap gap-3 pt-2">
                {active.links.map((link) => (
                  <Button key={link.href} asChild variant="outline" className="rounded-full">
                    <a href={link.href} target={link.href.startsWith("#") ? undefined : "_blank"} rel="noreferrer noopener">
                      {link.label}
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;