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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
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
              Building <span className="text-accent font-medium">innovative solutions</span> through hands-on experience
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
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent/15 to-primary/15 border border-accent/20">
                <Briefcase className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                  Work <span className="gradient-text">Experience</span>
                </h3>
                <p className="text-sm text-muted-foreground">Professional internships and training</p>
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
                <Card className="glass-card p-5 md:p-6 hover:border-accent/30 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-lg font-bold text-background">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h4 className="text-lg font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-medium text-accent">{exp.company}</span>
                            <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs">
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {exp.highlights.map((highlight, i) => (
                            <Badge 
                              key={i}
                              variant="secondary"
                              className="text-xs px-2 py-0.5"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button
                          size="sm"
                          onClick={() => window.open(exp.link, '_blank')}
                          className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs"
                        >
                          <ExternalLink className="h-3 w-3 mr-1.5" />
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
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent/15 to-primary/15 border border-accent/20">
                <Code className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                  Featured <span className="gradient-text">Projects</span>
                </h3>
                <p className="text-sm text-muted-foreground">Innovative solutions I have built</p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group hover:border-accent/30 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                      <div className="p-5 md:p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-3">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                              <IconComponent className="h-7 w-7 text-white" />
                            </div>
                            <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-accent/30 transition-colors">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          
                          <div className="flex-1 space-y-3">
                            <div>
                              <h4 className="text-lg font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                                {project.title}
                              </h4>
                              <p className="text-sm font-medium text-accent/80">
                                {project.subtitle}
                              </p>
                            </div>
                            
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge 
                                  key={techIndex}
                                  variant="outline"
                                  className="text-xs px-2 py-0.5 border-border/50"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-3 pt-1">
                              <Button
                                size="sm"
                                onClick={() => window.open(project.projectLink, '_blank')}
                                className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white text-xs`}
                              >
                                <ExternalLink className="h-3 w-3 mr-1.5" />
                                View Project
                              </Button>
                              {project.githubLink && (
                                <Button
                                  size="sm"
                                  onClick={() => window.open(project.githubLink, '_blank')}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  <Github className="h-3 w-3 mr-1.5" />
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