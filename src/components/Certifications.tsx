import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      category: "Programming",
      description: "Completed NPTEL course on Python for Data Science, covering Python fundamentals, data handling, and basic analytics.",
      link: "https://drive.google.com/file/d/1DxUCm0fWYtOSFfnylY-1JiEJE0KVYFQn/view?usp=drive_link"
    },
    {
      title: "Power BI Essential Training",
      issuer: "LinkedIn Learning",
      category: "Visualization",
      description: "Learned how to build interactive reports and dashboards using Microsoft Power BI.",
      link: "https://drive.google.com/file/d/1us2Jhvbvk4W-ueVG62KFkgc1YOA3PViR/view?usp=drive_link"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      category: "Web Development",
      description: "Gained skills in HTML, CSS, and responsive layouts for modern web pages.",
      link: "https://drive.google.com/file/d/1uSt2oRzofPCpwqo6ljhZmPytyYny36b0/view?usp=drive_link"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      category: "Analytics",
      description: "Completed a virtual job simulation focusing on real-world data analytics tasks and business insights.",
      link: "https://drive.google.com/file/d/1stszhAzzUZ9mbdN-0V9cmdaaWG2pvMVf/view?usp=drive_link"
    },
    {
      title: "Power BI Masterclass",
      issuer: "Udemy",
      category: "Visualization",
      description: "Built advanced dashboards and explored DAX, data modeling, and visualization best practices.",
      link: "https://drive.google.com/file/d/1xPpKbRpvV0zWy3GYdNLyYBnpWbnbw-Ls/view?usp=drive_link"
    },
    {
      title: "Data Visualization",
      issuer: "Tata (Forage)",
      category: "Visualization",
      description: "Practiced transforming raw data into meaningful visual insights using modern visualization tools.",
      link: "https://drive.google.com/file/d/1D0FmozBXw8Tt_FIZq8kiODqSUThkrFiQ/view?usp=drive_link"
    },
    {
      title: "GenAI Powered Data Analytics",
      issuer: "Tata",
      category: "AI/ML",
      description: "Learned how to apply Generative AI techniques to enhance data analytics workflows.",
      link: "https://drive.google.com/file/d/1Bh7myfD67KyOp_EzvLyKWUwCSabWYrMF/view?usp=drive_link"
    }
  ];

  const categoryColors: Record<string, string> = {
    "Programming": "bg-blue-500/10 text-blue-500 border-blue-500/20",
    "Visualization": "bg-purple-500/10 text-purple-500 border-purple-500/20",
    "Web Development": "bg-green-500/10 text-green-500 border-green-500/20",
    "Analytics": "bg-orange-500/10 text-orange-500 border-orange-500/20",
    "AI/ML": "bg-accent/10 text-accent border-accent/20"
  };

  return (
    <section id="certifications" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Certifications Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-accent" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                <span className="gradient-text">Certifications</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mb-8" />
            
            <Accordion type="single" collapsible className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`cert-${index}`}
                    className="border border-border/50 rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors group"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 transition-colors">
                      <div className="flex items-center gap-4 text-left w-full">
                        <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Award className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                            {cert.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <p className="text-sm text-accent font-semibold">
                              {cert.issuer}
                            </p>
                            <Badge 
                              variant="outline" 
                              className={`${categoryColors[cert.category]} border text-xs`}
                            >
                              {cert.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pt-2 space-y-4">
                        <p className="text-foreground/70 leading-relaxed">
                          {cert.description}
                        </p>
                        <Button
                          onClick={() => window.open(cert.link, '_blank')}
                          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/20 hover:shadow-accent/40 transition-all"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Stats Summary */}
          <motion.div 
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="p-6 text-center shadow-lg hover:shadow-accent transition-all border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">7</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </Card>
            <Card className="p-6 text-center shadow-lg hover:shadow-accent transition-all border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">5</div>
              <div className="text-sm text-muted-foreground">Platforms</div>
            </Card>
            <Card className="p-6 text-center shadow-lg hover:shadow-accent transition-all border-border/50 bg-card/50 backdrop-blur-sm group">
              <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">4</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
