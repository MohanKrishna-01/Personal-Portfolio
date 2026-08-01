import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Briefcase,
  ExternalLink,
  Zap,
  TrendingUp,
  MapPin,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "Infosys Springboard — Internship 6.0",
      duration: "Dec 2025 – Feb 2026",
      location: "Remote",
      description: [
        "Built Power BI dashboards for disaster analysis",
        "Applied data modeling and DAX",
        "Identified key trends and regional risks",
      ],
      link: "#projects",
      highlights: ["Power BI", "DAX", "Data Modeling", "Storytelling"],
    },
    {
      title: "Data Analysis Using Python",
      company: "APSSDC",
      duration: "Apr – Jul 2025",
      location: "Training",
      description: [
        "Practical work on data cleaning, transformation and visualization",
        "Built Python-based analytics workflows on real datasets",
      ],
      link: "https://drive.google.com/file/d/12adEeoz5EP8YPaszR-KAyYqHCQqCLRL6/view?usp=drive_link",
      highlights: ["Python", "Pandas", "Visualization"],
    },
    {
      title: "Data Science Intern",
      company: "Data Valley",
      duration: "May – Jun 2024",
      location: "Internship",
      description: [
        "Hands-on with Python, EDA, ML, NLP and model deployment",
        "Completed real-world applications and cloud computing tasks",
      ],
      link: "https://drive.google.com/file/d/1fQr5IdYQ2zfoyHRvYNB1SL44_nFvjtvh/view?usp=drive_link",
      highlights: ["Python", "ML", "NLP", "EDA"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: "spring" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-4"
            >
              <Zap className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium text-accent">Portfolio Showcase</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="text-foreground">Work</span>{" "}
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Building <span className="text-accent font-medium">data-driven solutions</span> through
              hands-on internships and analytics projects
            </p>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                <Briefcase className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                  Work <span className="gradient-text">Experience</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Internships and professional training
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="relative"
                  >
                    <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-glow hidden md:block z-10" />

                    <Card className="md:ml-14 overflow-hidden glass-card hover:border-accent/50 hover:shadow-accent transition-all duration-300 group">
                      <div className="p-5 md:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground shadow-glow">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                            <div>
                              <h4 className="text-base font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                                {exp.title}
                              </h4>
                              <span className="text-sm font-medium text-accent">{exp.company}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-accent text-xs font-medium border border-primary/30 inline-flex items-center gap-1.5">
                              <Calendar className="h-3 w-3" />
                              {exp.duration}
                            </span>
                            <span className="text-[10px] text-muted-foreground inline-flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-1.5 mb-4">
                          {exp.description.map((d, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                            >
                              <span className="text-accent mt-1">▸</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {exp.highlights.map((h, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-[10px] px-2 py-0.5 bg-primary/10 border border-primary/20 text-foreground"
                              >
                                {h}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() =>
                              exp.link.startsWith("#")
                                ? document.querySelector(exp.link)?.scrollIntoView({ behavior: "smooth" })
                                : window.open(exp.link, "_blank")
                            }
                            className="h-8 text-xs text-accent hover:text-accent hover:bg-accent/10"
                          >
                            <ExternalLink className="h-3 w-3 mr-1.5" />
                            {exp.link.startsWith("#") ? "See Project" : "View Certificate"}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
