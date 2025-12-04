import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, ExternalLink, Trophy, Layers, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";

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
    "Programming": "bg-blue-500/10 text-blue-500 border-blue-500/30",
    "Visualization": "bg-purple-500/10 text-purple-500 border-purple-500/30",
    "Web Development": "bg-green-500/10 text-green-500 border-green-500/30",
    "Analytics": "bg-orange-500/10 text-orange-500 border-orange-500/30",
    "AI/ML": "bg-accent/10 text-accent border-accent/30"
  };

  const stats = [
    { icon: Trophy, value: "7", label: "Certifications" },
    { icon: Layers, value: "5", label: "Platforms" },
    { icon: FolderOpen, value: "4", label: "Categories" }
  ];

  return (
    <section id="certifications" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Award className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium text-accent">Professional Growth</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Industry-recognized credentials validating expertise
            </p>
          </motion.div>

          {/* Stats Summary - Top */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Card className="p-4 text-center border-border/30 bg-card/60 backdrop-blur-sm hover:border-accent/40 transition-all group">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="h-4 w-4 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-105 transition-transform inline-block">
                      {stat.value}+
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="p-4 h-full border-border/30 bg-card/60 backdrop-blur-sm hover:border-accent/40 transition-all group">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-colors">
                        <Award className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 space-y-2">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-medium text-accent/80">{cert.issuer}</span>
                          <Badge 
                            variant="outline" 
                            className={`${categoryColors[cert.category]} text-[10px] px-1.5 py-0`}
                          >
                            {cert.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {cert.description}
                      </p>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open(cert.link, '_blank')}
                        className="h-7 px-2 text-xs text-accent hover:text-accent hover:bg-accent/10"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
