import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Mail, Phone, MapPin, BarChart3, Database, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Scene3D from "./3D/Scene3D";
import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const TYPING_PHRASES = [
  "Transforming data into actionable insights",
  "Power BI Dashboards • DAX • Data Modeling",
  "SQL • Excel • Analytics Storytelling",
];

const useTypewriter = (phrases: string[], speed = 60, pause = 1500) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), pause);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((p) => p + 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, i, phrases, speed, pause]);

  return text;
};

const Hero = () => {
  const typed = useTypewriter(TYPING_PHRASES);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const stats = [
    { label: "Projects", value: "10+" },
    { label: "Certifications", value: "15+" },
    { label: "Skills", value: "20+" },
  ];

  const quickServices = [
    { icon: BarChart3, label: "Power BI & Dashboards" },
    { icon: Database, label: "SQL & Data Modeling" },
    { icon: Sparkles, label: "Analytics & Insights" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* 3D background */}
      <Scene3D />

      {/* Mesh gradient + grid layers */}
      <div className="absolute inset-0 mesh-bg opacity-70 z-0" />
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70 z-0" />

      {/* Floating contact cards */}
      <motion.div
        className="absolute top-8 right-8 hidden lg:flex flex-col gap-3 z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { icon: Phone, label: "Call", value: "+91 7032390696" },
          { icon: Mail, label: "Email", value: "mohankrishnaambati7@gmail.com" },
          { icon: MapPin, label: "Location", value: "Vizag, India" },
        ].map((c) => (
          <motion.div key={c.label} variants={itemVariants}>
            <Card className="glass-card p-3 hover:border-accent/50 hover:shadow-accent transition-all">
              <div className="flex items-center gap-2">
                <c.icon className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-[10px] text-muted-foreground">{c.label}</p>
                  <p className="text-xs font-medium">{c.value}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div
        className="container mx-auto px-4 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
            {/* Left column */}
            <div className="text-center lg:text-left space-y-7">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">
                  Hi, I'm
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.05]">
                  <span className="gradient-text">Mohan Krishna</span>
                  <br />
                  <span className="text-foreground">Ambati</span>
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-xl md:text-3xl font-bold">
                  <span className="gradient-text">Aspiring Data Analyst</span>
                  <span className="text-muted-foreground mx-2">|</span>
                  <span className="text-foreground">Power BI Developer</span>
                </p>
                <p className="mt-4 text-base md:text-lg text-accent min-h-[1.75rem] typing-cursor">
                  {typed}
                </p>
              </motion.div>

              <motion.p
                className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                B.Tech CSE (Data Science) student turning raw data into clear,
                decision-ready stories with Power BI, SQL, Excel and Python.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Button
                  size="lg"
                  className="gap-2 group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-glow"
                  asChild
                >
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <a href="/MK_Resume.pdf" download="Mohan_Krishna_Ambati_Resume.pdf">
                    <Download className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              {/* Socials */}
              <motion.div
                className="flex gap-3 justify-center lg:justify-start pt-2"
                variants={itemVariants}
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-accent/30 hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/mohan-krishna-ambati-a41a582b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-accent/30 hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all"
                  asChild
                >
                  <a
                    href="https://github.com/MohanKrishna-01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div className="grid grid-cols-3 gap-4 pt-6" variants={itemVariants}>
                {stats.map((stat) => (
                  <Card
                    key={stat.label}
                    className="glass-card p-4 text-center hover:border-accent/50 hover:scale-105 transition-all"
                  >
                    <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </Card>
                ))}
              </motion.div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <motion.div className="flex justify-center items-center" variants={itemVariants}>
                <div className="relative">
                  <div className="relative w-80 h-80 md:w-96 md:h-96 group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 shadow-glow group-hover:shadow-accent transition-shadow duration-500">
                      <div className="w-full h-full rounded-full bg-background p-3">
                        <div className="relative w-full h-full rounded-full border-4 border-accent/40 overflow-hidden backdrop-blur-sm">
                          <img
                            src={profilePhoto}
                            alt="Mohan Krishna Ambati - Aspiring Data Analyst & Power BI Developer"
                            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-spin"
                      style={{ animationDuration: "15s" }}
                    />
                    <div
                      className="absolute inset-4 rounded-full border border-dotted border-primary/30 animate-spin"
                      style={{ animationDuration: "20s", animationDirection: "reverse" }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div className="space-y-3" variants={itemVariants}>
                <h3 className="text-sm font-semibold text-center uppercase tracking-widest text-muted-foreground">
                  Core Expertise
                </h3>
                <div className="grid gap-3">
                  {quickServices.map((service) => (
                    <motion.div
                      key={service.label}
                      whileHover={{ scale: 1.03, x: 6 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Card className="glass-card p-4 hover:border-accent/50 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/30 transition-colors">
                            <service.icon className="h-5 w-5 text-accent" />
                          </div>
                          <p className="font-semibold text-sm text-foreground">{service.label}</p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
