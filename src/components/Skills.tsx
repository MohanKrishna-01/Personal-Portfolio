import { motion } from "framer-motion";
import { BarChart3, Brain, Code2, Layout, Sparkles } from "lucide-react";

const CATEGORIES = [
  { icon: Code2, title: "Programming", skills: ["Python", "Java", "SQL"] },
  { icon: Layout, title: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
  { icon: BarChart3, title: "Data", skills: ["Power BI", "Excel", "Pandas", "NumPy"] },
  { icon: Brain, title: "Machine Learning", skills: ["TensorFlow", "Scikit-Learn", "OpenCV"] },
];

const CLOUD = [
  "Python", "Power BI", "SQL", "TensorFlow", "Pandas", "DAX", "NumPy", "Scikit-Learn",
  "Excel", "OpenCV", "Java", "JavaScript", "HTML", "CSS", "Data Modeling", "EDA",
];

const Skills = () => (
  <section id="skills" className="relative overflow-hidden py-24">
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Toolkit &amp; Capabilities
        </span>
        <h2 className="accent-underline font-heading text-3xl font-bold sm:text-4xl">
          <span className="gradient-text">Skills &amp; Expertise</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          The stack behind my analytics, AI and business intelligence work.
        </p>
      </motion.div>

      {/* Interactive skill cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 flex max-w-4xl flex-wrap items-center justify-center gap-3"
      >
        {CLOUD.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.06 }}
            className={`cursor-default rounded-full border border-border bg-card/60 px-4 py-2 font-medium text-muted-foreground transition-smooth hover:border-primary/60 hover:text-primary ${
              index % 3 === 0 ? "text-base" : index % 3 === 1 ? "text-sm" : "text-xs"
            }`}
            style={{ boxShadow: index % 4 === 0 ? "0 0 24px hsl(var(--primary) / 0.12)" : undefined }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="glass-card card-glow-hover group p-6"
          >
            <span className="mb-5 inline-flex rounded-2xl border border-primary/25 bg-primary/10 p-3">
              <category.icon className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-smooth group-hover:border-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
