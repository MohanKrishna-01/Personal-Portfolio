import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Github, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Data visualization background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent rounded-lg animate-float" />
        <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-accent/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-accent/40 rotate-45 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium backdrop-blur-sm border border-accent/30">
              Available for Entry-Level Roles
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Mohan Krishna Ambati
          </h1>

          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-accent mb-4">
              Aspiring Data Scientist
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Driving Insights with Data
            </p>
          </div>

          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Aspiring Data Science undergraduate skilled in Python, SQL, and ML, eager to learn and contribute to data-driven decisions
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={() => scrollToSection("experience")}
              size="lg"
              className="gradient-accent text-white shadow-accent group"
            >
              Explore My Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <a href="#" download>
                <FileText className="mr-2 h-5 w-5" />
                View Résumé
              </a>
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
