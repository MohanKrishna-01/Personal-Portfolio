import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { achievements, timeline } from "@/data/portfolio";

const Timeline = () => (
  <section id="timeline" className="relative py-24">
    <div className="container mx-auto px-4">
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Journey</p>
        <h2 className="accent-underline text-3xl font-bold sm:text-4xl">Education & achievements</h2>
      </div>

      <ol className="relative mx-auto max-w-3xl border-l border-border pl-8">
        {timeline.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="mb-8 last:mb-0"
          >
            <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background">
              {item.kind === "education" ? (
                <GraduationCap className="h-3 w-3 text-primary" aria-hidden="true" />
              ) : (
                <Trophy className="h-3 w-3 text-primary" aria-hidden="true" />
              )}
            </span>
            <div className="glass-card card-glow-hover rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((badge) => (
          <div key={badge.label} className="glass-card card-glow-hover rounded-2xl p-5 text-center">
            <Trophy className="mx-auto mb-3 h-5 w-5 text-primary" aria-hidden="true" />
            <p className="text-sm font-semibold">{badge.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{badge.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;