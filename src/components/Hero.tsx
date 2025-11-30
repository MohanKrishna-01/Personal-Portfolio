import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Mail, Phone, MapPin, Code, Database, Brain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Scene3D from "./3D/Scene3D";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const stats = [
    { label: "Projects", value: "10+" },
    { label: "Certifications", value: "15+" },
    { label: "Skills", value: "20+" }
  ];

  const quickServices = [
    { icon: Code, label: "Machine Learning", color: "from-accent/20 to-primary/20" },
    { icon: Database, label: "Data Analysis", color: "from-primary/20 to-accent/20" },
    { icon: Brain, label: "AI Solutions", color: "from-accent/30 to-primary/30" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75 z-0" />

      {/* Floating Contact Cards */}
      <motion.div 
        className="absolute top-8 right-8 hidden lg:flex flex-col gap-3 z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="p-4 bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Call</p>
                <p className="text-sm font-semibold">+91 8019484860</p>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="p-4 bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-semibold">mohan@email.com</p>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="p-4 bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-semibold">Hyderabad, India</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <motion.div variants={itemVariants} className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-accent">
                  Hello, <span className="highlight-letter">I</span>'m
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-tight">
                  <span className="gradient-text">
                    <span className="highlight-letter">M</span>ohan<br />
                    <span className="highlight-letter">K</span>rishna<br />
                    <span className="highlight-letter">A</span>mbati
                  </span>
                </h1>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <p className="text-xl md:text-2xl font-semibold text-foreground/90">
                  <span className="highlight-letter">A</span>spiring <span className="highlight-letter">D</span>ata <span className="highlight-letter">S</span>cientist
                </p>
                <p className="text-lg text-accent mt-2">
                  <span className="highlight-letter">D</span>riving <span className="highlight-letter">I</span>nsights with <span className="highlight-letter">D</span>ata
                </p>
              </motion.div>
              
              <motion.p 
                className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                B.Tech Computer Science Engineering (Data Science) student skilled in Python, SQL, and ML, eager to learn and contribute to data-driven decisions.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Button size="lg" className="gap-2 shadow-accent group bg-accent hover:bg-accent/90" asChild>
                  <a href="#experience">
                    View Portfolio
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" className="gap-2 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                  <a href="/MK_Resume.pdf" download="Mohan_Krishna_Ambati_Resume.pdf">
                    <Download className="h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex gap-3 justify-center lg:justify-start pt-4"
                variants={itemVariants}
              >
                <Button size="icon" variant="outline" className="rounded-full border-accent/30 hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all" asChild>
                  <a href="https://www.linkedin.com/in/mohan-krishna-ambati-a41a582b6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button size="icon" variant="outline" className="rounded-full border-accent/30 hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all" asChild>
                  <a href="https://github.com/MohanKrishna-01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-4 pt-8"
                variants={itemVariants}
              >
                {stats.map((stat, index) => (
                  <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border-accent/20 text-center hover:border-accent/50 hover:scale-105 transition-all">
                    <p className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </Card>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Photo & Services */}
            <div className="space-y-6">
              {/* Photo */}
              <motion.div 
                className="flex justify-center items-center"
                variants={itemVariants}
              >
                <div className="relative">
                  {/* Shield Shape Background */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                    <svg viewBox="0 0 200 220" className="w-full h-full absolute inset-0">
                      <defs>
                        <linearGradient id="photoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--accent))" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M100 10 L160 40 L180 100 L160 180 L100 210 L40 180 L20 100 L40 40 Z"
                        fill="url(#photoGradient)"
                        opacity="0.9"
                      />
                    </svg>
                    
                    {/* Photo Container */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="w-full h-full rounded-full border-4 border-background/50 overflow-hidden backdrop-blur-sm bg-card/20 flex items-center justify-center">
                        <p className="text-accent/50 text-xl font-semibold text-center px-4">Your Photo Here</p>
                      </div>
                    </div>
                    
                    {/* Animated Ring */}
                    <svg viewBox="0 0 200 220" className="w-full h-full absolute inset-0 animate-pulse">
                      <path
                        d="M100 10 L160 40 L180 100 L160 180 L100 210 L40 180 L20 100 L40 40 Z"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Service Cards */}
              <motion.div 
                className="space-y-3"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-center text-foreground/80">Core Expertise</h3>
                <div className="grid gap-3">
                  {quickServices.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Card className={`p-4 bg-gradient-to-r ${service.color} backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-colors cursor-pointer group`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                            <service.icon className="h-6 w-6 text-accent" />
                          </div>
                          <p className="font-semibold text-foreground">{service.label}</p>
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
