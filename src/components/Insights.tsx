import { motion } from "framer-motion";
import { Quote, PenLine } from "lucide-react";
import { posts, testimonials } from "@/data/portfolio";

const Insights = () => (
  <section id="insights" className="relative py-24">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Writing & references</p>
        <h2 className="accent-underline text-3xl font-bold sm:text-4xl">Notes and recommendations</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="glass-card card-glow-hover flex flex-col rounded-3xl p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <PenLine className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">{post.tag}</span>
            </div>
            <h3 className="text-base font-semibold leading-snug">{post.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <p className="mt-5 text-xs text-muted-foreground">{post.date}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="glass-card rounded-3xl border-dashed p-6"
          >
            <Quote className="mb-4 h-5 w-5 text-primary" aria-hidden="true" />
            <blockquote className="text-sm leading-relaxed text-muted-foreground">{item.quote}</blockquote>
            <figcaption className="mt-5">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default Insights;