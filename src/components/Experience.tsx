import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, Code, ExternalLink, Github, Sparkles, Zap, Brain, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Data Valley",
      duration: "May–June 2024",
      description:
        "Worked on Python, Data Wrangling, Exploratory Data Analysis, Machine Learning, Deep Learning, NLP, Big Data, and model deployment. Completed hands-on real-world applications and cloud computing tasks.",
      link: "https://drive.google.com/file/d/1fQr5IdYQ2zfoyHRvYNB1SL44_nFvjtvh/view?usp=drive_link",
      highlights: ["Python", "Machine Learning", "Deep Learning", "NLP", "Big Data"]
    },
    {
      title: "Data Analysis Using Python",
      company: "APSSDC",
      duration: "April–July 2025",
      description:
        "Gained practical experience in data cleaning, data transformation, visualization techniques, and Python-based analytics.",
      link: "https://drive.google.com/file/d/12adEeoz5EP8YPaszR-KAyYqHCQqCLRL6/view?usp=drive_link",
      highlights: ["Data Cleaning", "Visualization", "Python Analytics"]
    }
  ];

  const projects = [
    {
      title: "Food Calorie Prediction",
      subtitle: "AI-Powered Nutrition Analysis",
      description:
        "An ML/DL-based food calorie prediction system that uses image recognition and segmentation techniques combined with nutritional datasets to estimate calories. The system leverages computer vision to identify food items and predict their nutritional content accurately.",
      technologies: ["Deep Learning", "Machine Learning", "Python", "Computer Vision", "TensorFlow"],
      projectLink: "https://github.com/MohanKrishna-01/food-calorie-prediction",
      githubLink: "https://github.com/MohanKrishna-01/food-calorie-prediction",
      icon: Brain,
      color: "from-emerald-500 to-cyan-500"
    },
    {
      title: "Call Center Dashboard",
      subtitle: "Interactive Analytics Platform",
      description:
        "An interactive Excel dashboard that analyzes call center performance metrics such as call trends, number of callers, average ratings, reviews, call duration, and customer satisfaction. Built using Pivot Tables, charts, and slicers for dynamic filtering.",
      technologies: ["Microsoft Excel", "Pivot Tables", "Data Visualization", "Charts", "Slicers"],
      projectLink: "https://ai.studio/apps/drive/10rU7bLdyM_2_E7V7VPwiWWnbrPxkJ-V5",
      githubLink: null,
      icon: BarChart3,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "CampusCollab AI",
      subtitle: "Find Your Squad. Build The Future.",
      description:
        "CampusCollab AI is an all-in-one platform designed for students to find like-minded teammates, generate AI-powered project ideas, and plan and manage their project workflow. The platform helps students collaborate, discover innovative ideas, and streamline execution using intelligent tools.",
      technologies: ["AI/ML", "Collaboration", "Project Management", "Web Platform"],
      projectLink: "https://ai.studio/apps/drive/1PqS3rf6gbKowMGQkaO--RcZwihWGR4Q2",
      githubLink: null,
      icon: Sparkles,
      color: "from-orange-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6"
            >
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Portfolio Showcase</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-6">
              <span className="text-foreground">Experience</span>
              <span className="mx-3 text-accent">&</span>
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building <span className="neon-text font-semibold">innovative solutions</span> through hands-on experience and cutting-edge technology
            </p>
          </motion.div>

          {/* Work Experience */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Work <span className="gradient-text">Experience</span>
                </h3>
                <p className="text-muted-foreground">Professional internships and training</p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="glass-card p-6 md:p-8 hover:neon-border transition-all duration-500 group">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-3xl font-black text-background shadow-lg pulse-glow">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                          <div>
                            <h4 className="text-2xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                              {exp.title}
                            </h4>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="text-lg font-semibold neon-text">{exp.company}</span>
                              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                                {exp.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-foreground/80 leading-relaxed text-lg">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, i) => (
                            <Badge 
                              key={i}
                              className="bg-gradient-to-r from-accent/20 to-primary/20 text-accent border-accent/30 px-3 py-1"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button
                          onClick={() => window.open(exp.link, '_blank')}
                          className="mt-2 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-background font-semibold shadow-lg hover:shadow-accent/50 transition-all"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30">
                <Code className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Featured <span className="gradient-text">Projects</span>
                </h3>
                <p className="text-muted-foreground">Innovative solutions I have built</p>
              </div>
            </div>
            
            <div className="grid gap-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Card className="rainbow-border overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                      <div className="p-6 md:p-8 bg-card/95">
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Project Number & Icon */}
                          <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-4">
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-2xl floating`}>
                              <IconComponent className="h-10 w-10 text-white" />
                            </div>
                            <span className="text-6xl lg:text-7xl font-black text-foreground/10 group-hover:text-accent/20 transition-colors">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          
                          <div className="flex-1 space-y-5">
                            <div>
                              <h4 className="text-2xl md:text-3xl font-heading font-bold text-foreground group-hover:gradient-text transition-all">
                                {project.title}
                              </h4>
                              <p className="text-lg font-medium neon-text mt-1">
                                {project.subtitle}
                              </p>
                            </div>
                            
                            <p className="text-foreground/80 leading-relaxed text-lg">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge 
                                  key={techIndex}
                                  variant="outline"
                                  className={`bg-gradient-to-r ${project.color} bg-opacity-10 text-foreground border-0 px-4 py-1.5 font-medium`}
                                  style={{ 
                                    background: `linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--primary) / 0.15))`,
                                  }}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-4 pt-2">
                              <Button
                                onClick={() => window.open(project.projectLink, '_blank')}
                                className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white font-semibold shadow-lg transition-all px-6`}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Project
                              </Button>
                              {project.githubLink && (
                                <Button
                                  onClick={() => window.open(project.githubLink, '_blank')}
                                  variant="outline"
                                  className="border-accent/50 hover:bg-accent/10 hover:border-accent font-semibold transition-all px-6"
                                >
                                  <Github className="h-4 w-4 mr-2" />
                                  View Code
                                </Button>
                              )}
                            </div>
                          </div>
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