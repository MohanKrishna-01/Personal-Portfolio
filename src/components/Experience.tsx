import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Briefcase,
  Code,
  ExternalLink,
  Github,
  Sparkles,
  Zap,
  Brain,
  BarChart3,
  TrendingUp,
  MapPin,
  Calendar,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import femaDashboard from "@/assets/fema-dashboard.jpg";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "Infosys Springboard — Internship 6.0",
      duration: "Dec 2025 – Feb 2026",
      location: "Remote",
      description: [
        "Built interactive Power BI dashboards to analyze disaster data",
        "Applied star-schema data modeling and DAX for efficient analysis",
        "Identified trends and regional risk patterns to support decisions",
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

  const featured = {
    title: "FEMA Disaster Analysis Dashboard",
    subtitle: "Power BI · DAX · Data Modeling",
    image: femaDashboard,
    description: [
      "Designed an interactive dashboard to analyze disaster trends",
      "Identified high-risk regions using data-driven insights",
      "Created visually engaging reports for better decision-making",
    ],
    technologies: ["Power BI", "DAX", "Data Modeling", "Star Schema"],
    metrics: [
      { label: "Data points analyzed", value: "50K+" },
      { label: "Regions mapped", value: "50" },
      { label: "Insight efficiency", value: "+40%" },
    ],
    link: "#contact",
  };

  const projects = [
    {
      title: "Call Center Performance Dashboard",
      subtitle: "Interactive Excel Analytics",
      description:
        "Excel dashboard analyzing call trends, callers, ratings, reviews, duration and CSAT using pivot tables, charts and slicers.",
      technologies: ["Excel", "Pivot Tables", "Charts", "Slicers"],
      projectLink: "https://ai.studio/apps/drive/10rU7bLdyM_2_E7V7VPwiWWnbrPxkJ-V5",
      githubLink: null,
      icon: BarChart3,
    },
    {
      title: "Food Calorie Prediction",
      subtitle: "ML + Computer Vision",
      description:
        "Image-recognition model that estimates calories of food items by combining segmentation with nutritional datasets.",
      technologies: ["Python", "Deep Learning", "Computer Vision", "TensorFlow"],
      projectLink: "https://github.com/MohanKrishna-01/food-calorie-prediction",
      githubLink: "https://github.com/MohanKrishna-01/food-calorie-prediction",
      icon: Brain,
    },
    {
      title: "CampusCollab AI",
      subtitle: "Find Your Squad. Build the Future.",
      description:
        "All-in-one student platform to find teammates, generate AI project ideas and manage workflows.",
      technologies: ["AI/ML", "Collaboration", "Web Platform"],
      projectLink: "https://ai.studio/apps/drive/1PqS3rf6gbKowMGQkaO--RcZwihWGR4Q2",
      githubLink: null,
      icon: Sparkles,
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
              <span className="text-foreground">Experience</span>
              <span className="mx-2 text-accent">&</span>
              <span className="gradient-text">Projects</span>
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

          {/* Featured Project */}
          <motion.div
            id="projects"
            className="mb-12 scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                <Star className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                  Featured <span className="gradient-text">Project</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Highlight from my Power BI portfolio
                </p>
              </div>
            </div>

            <Card className="overflow-hidden glow-border bg-gradient-to-br from-card via-card to-primary/5 group">
              <div className="grid lg:grid-cols-[1.1fr,1fr]">
                {/* Image */}
                <div className="relative overflow-hidden p-4 md:p-6">
                  <div className="relative rounded-xl overflow-hidden border border-accent/20 shadow-glow">
                    {/* fake browser bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-background/80 border-b border-border/40">
                      <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                      <span className="ml-3 text-[10px] text-muted-foreground">
                        FEMA Disaster Analysis · Power BI
                      </span>
                      <span className="ml-3 text-[10px] text-muted-foreground">
                        FEMA Disaster Analysis · Power BI
                      </span>
                    </div>
                    <img
                      src={featured.image}
                      alt="FEMA Disaster Analysis Power BI Dashboard"
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center space-y-5">
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-[11px] font-semibold text-accent w-fit">
                    <Star className="h-3 w-3" />
                    Featured Project
                  </span>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                      {featured.title}
                    </h4>
                    <p className="text-sm font-medium text-accent mt-1">{featured.subtitle}</p>
                  </div>

                  <ul className="space-y-1.5">
                    {featured.description.map((d, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {featured.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl glass-card p-3 text-center"
                      >
                        <p className="text-lg md:text-xl font-bold gradient-text">{m.value}</p>
                        <p className="text-[10px] text-muted-foreground leading-tight mt-1">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {featured.technologies.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs border-accent/40 text-accent"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                <Code className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                  Other <span className="gradient-text">Projects</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on builds in analytics, ML & web
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                  >
                    <Card className="h-full overflow-hidden group glass-card hover:border-accent/50 hover:shadow-accent transition-all duration-300">
                      <div className="p-5 space-y-4 h-full flex flex-col">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                            <IconComponent className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <span className="text-3xl font-bold text-muted-foreground/20 group-hover:text-accent/40 transition-colors">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-xs font-medium text-accent/80 mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-[10px] px-1.5 py-0 border-border/50"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2 pt-1">
                          <Button
                            size="sm"
                            onClick={() => window.open(project.projectLink, "_blank")}
                            className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 text-xs h-8 flex-1"
                          >
                            <ExternalLink className="h-3 w-3 mr-1.5" />
                            View
                          </Button>
                          {project.githubLink && (
                            <Button
                              size="sm"
                              onClick={() => window.open(project.githubLink!, "_blank")}
                              variant="outline"
                              className="text-xs h-8 border-accent/40"
                            >
                              <Github className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
