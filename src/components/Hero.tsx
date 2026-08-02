import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditableText from "./EditableText";
import ResumeDialog from "./ResumeDialog";
import profilePhoto from "@/assets/profile-photo.jpg";

const ROLES = [
  "Data Analyst",
  "AI Developer",
  "Machine Learning Enthusiast",
  "Power BI Developer",
];

const useTypewriter = (phrases: string[], speed = 65, pause = 1600) => {
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

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohan-krishna-ambati-a41a582b6" },
  { icon: Github, label: "GitHub", href: "https://github.com/MohanKrishna-01" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/MohanKrishna-01/" },
  { icon: Mail, label: "Email", href: "mailto:mohankrishnaambati7@gmail.com" },
];

const Hero = () => {
  const typed = useTypewriter(ROLES);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointer = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.15, staggerChildren: 0.09 } },
  };
  const item = {
    hidden: { y: 22, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointer}
      className="relative flex min-h-dvh items-center overflow-hidden py-24"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "35%" }}
    >
      {/* Animated grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]" aria-hidden />

      {/* Floating blurred gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(91,140,255,0.35), transparent 70%)" }}
          animate={reduceMotion ? undefined : { y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 h-[30rem] w-[30rem] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.30), transparent 70%)" }}
          animate={reduceMotion ? undefined : { y: [0, -36, 0], x: [0, -18, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-[22rem] w-[22rem] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.20), transparent 70%)" }}
          animate={reduceMotion ? undefined : { scale: [1, 1.12, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Mouse-responsive spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx) var(--my), rgba(91,140,255,0.14), transparent 65%)",
        }}
      />

      <motion.div
        className="container relative z-10 mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div variants={item} className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Open to opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-[11px] font-medium text-accent">
                Vizag, India
              </span>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
              <EditableText
                id="hero.greeting"
                as="p"
                defaultValue="Hi, I'm"
                className="block text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground"
              />
              <h1 className="font-heading text-[2.4rem] font-extrabold uppercase leading-[0.95] tracking-[0.04em] sm:text-6xl lg:text-[4.5rem]">
                <EditableText id="hero.firstName" defaultValue="AMBATI" className="gradient-text block" />
                <EditableText id="hero.lastName" defaultValue="MOHAN KRISHNA" className="gradient-text block" />
              </h1>
              <p className="min-h-[2rem] text-lg font-semibold text-foreground sm:text-2xl">
                <span className="typing-cursor">{typed}</span>
              </p>
            </motion.div>

            <EditableText
              id="hero.bio"
              as="p"
              multiline
              defaultValue="I build intelligent AI solutions and modern data-driven experiences that solve real-world problems."
              className="mx-auto block max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0"
            />

            <motion.div variants={item} className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button size="lg" className="btn-glow group gap-2 rounded-full font-semibold" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full border-primary/50 font-semibold hover:border-primary hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="/MK_Resume.pdf" download="Mohan_Krishna_Ambati_Resume.pdf">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="gap-2 rounded-full font-semibold hover:bg-accent/10 hover:text-accent" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <ResumeDialog />
            </motion.div>

            <motion.div variants={item} className="flex justify-center gap-3 lg:justify-start">
              {SOCIALS.map((social) => (
                <Button
                  key={social.label}
                  size="icon"
                  variant="outline"
                  aria-label={social.label}
                  className="min-h-11 min-w-11 rounded-full border-border transition-smooth hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                  asChild
                >
                  <a href={social.href} target={social.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer noopener">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div variants={item} className="flex justify-center">
            <motion.div
              className="relative"
              animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] blur-2xl"
                style={{ background: "linear-gradient(135deg, rgba(91,140,255,0.35), rgba(168,85,247,0.28))" }}
              />
              <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
                <img
                  src={profilePhoto}
                  alt="Portrait of Ambati Mohan Krishna, Data Analyst and AI Developer"
                  width={420}
                  height={520}
                  loading="eager"
                  decoding="async"
                  className="h-[22rem] w-[18rem] rounded-[1.5rem] object-cover sm:h-[26rem] sm:w-[21rem]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          variants={item}
          aria-label="Scroll to about section"
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
        >
          <MousePointer2 className="h-4 w-4" aria-hidden />
          <span>Scroll</span>
          <motion.span
            aria-hidden
            className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
            animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3], scaleY: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
