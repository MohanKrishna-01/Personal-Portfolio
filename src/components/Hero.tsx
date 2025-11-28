import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Scene3D from "./3D/Scene3D";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70 z-0" />

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
            variants={itemVariants}
          >
            <span className="gradient-text">Mohan Krishna Ambati</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-accent font-semibold mb-4"
            variants={itemVariants}
          >
            Aspiring Data Scientist | Driving Insights with Data
          </motion.p>
          
          <motion.p 
            className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            B.Tech Computer Science Engineering (Data Science) student skilled in Python, SQL, and ML, eager to learn and contribute to data-driven decisions.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            variants={itemVariants}
          >
            <Button size="lg" className="gap-2 shadow-accent group" asChild>
              <a href="#experience">
                Explore My Portfolio
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="gap-2 border-accent text-accent hover:bg-accent hover:text-white" asChild>
              <a href="#" download>
                <Download className="h-5 w-5" />
                View My Résumé
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex gap-4 justify-center mt-8"
            variants={itemVariants}
          >
            <Button size="icon" variant="outline" className="rounded-full border-accent hover:bg-accent hover:text-white hover:scale-110 transition-transform" asChild>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button size="icon" variant="outline" className="rounded-full border-accent hover:bg-accent hover:text-white hover:scale-110 transition-transform" asChild>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
