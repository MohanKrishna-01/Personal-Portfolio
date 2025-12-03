import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Data Valley",
      duration: "May–June 2024",
      description:
        "Worked on Python, Data Wrangling, Exploratory Data Analysis, Machine Learning, Deep Learning, NLP, Big Data, and model deployment. Completed hands-on real-world applications and cloud computing tasks.",
      link: "https://drive.google.com/file/d/1fQr5IdYQ2zfoyHRvYNB1SL44_nFvjtvh/view?usp=drive_link"
    },
    {
      title: "Data Analysis Using Python",
      company: "APSSDC",
      duration: "April–July 2025",
      description:
        "Gained practical experience in data cleaning, data transformation, visualization techniques, and Python-based analytics.",
      link: "https://drive.google.com/file/d/12adEeoz5EP8YPaszR-KAyYqHCQqCLRL6/view?usp=drive_link"
    }
  ];

  const projects = [
    {
      title: "Food Calorie Prediction",
      description:
        "An ML/DL-based food calorie prediction system that uses image recognition and segmentation techniques combined with nutritional datasets to estimate calories. The system leverages computer vision to identify food items and predict their nutritional content accurately.",
      technologies: ["Deep Learning", "Machine Learning", "Python", "Computer Vision", "TensorFlow"],
      projectLink: "https://github.com/MohanKrishna-01/food-calorie-prediction",
      githubLink: "https://github.com/MohanKrishna-01/food-calorie-prediction"
    },
    {
      title: "Call Center Portfolio Dashboard (Excel)",
      description:
        "An interactive Excel dashboard that analyzes call center performance metrics such as call trends, number of callers, average ratings, reviews, call duration, and customer satisfaction. Built using Pivot Tables, charts, and slicers for dynamic filtering.",
      technologies: ["Microsoft Excel", "Pivot Tables", "Data Visualization", "Charts", "Slicers"],
      projectLink: "https://ai.studio/apps/drive/10rU7bLdyM_2_E7V7VPwiWWnbrPxkJ-V5",
      githubLink: null
    },
    {
      title: "CampusCollab AI — Find Your Squad. Build The Future.",
      description:
        "CampusCollab AI is an all-in-one platform designed for students to find like-minded teammates, generate AI-powered project ideas, and plan and manage their project workflow. The platform helps students collaborate, discover innovative ideas, and streamline execution using intelligent tools.",
      technologies: ["AI/ML", "Collaboration", "Project Management", "Web Platform"],
      projectLink: "https://ai.studio/apps/drive/1PqS3rf6gbKowMGQkaO--RcZwihWGR4Q2",
      githubLink: null
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/10 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
              <Code className="h-10 w-10 text-accent" />
              <span className="gradient-text">Experience & Projects</span>
            </h2>
            <p className="text-muted-foreground">Building practical solutions through real-world experience</p>
          </motion.div>

          {/* Work Experience */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-8 w-8 text-accent" />
              <h3 className="text-3xl md:text-4xl font-heading font-bold">
                <span className="gradient-text">Work Experience</span>
              </h3>
            </div>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mb-8" />
            
            <Accordion type="single" collapsible className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`exp-${index}`}
                    className="border border-border/50 rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors group"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 transition-colors">
                      <div className="flex items-center gap-4 text-left w-full">
                        <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Briefcase className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-3 mt-1">
                            <p className="text-sm text-accent font-semibold">
                              {exp.company}
                            </p>
                            <span className="text-xs text-muted-foreground">
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pt-2 space-y-4">
                        <p className="text-foreground/70 leading-relaxed">
                          {exp.description}
                        </p>
                        <Button
                          onClick={() => window.open(exp.link, '_blank')}
                          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/20 hover:shadow-accent/40 transition-all"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Internship Work
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Notable Projects */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-accent" />
              <h3 className="text-3xl md:text-4xl font-heading font-bold">
                <span className="gradient-text">Projects</span>
              </h3>
            </div>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mb-8" />
            
            <Accordion type="single" collapsible className="space-y-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`project-${index}`}
                    className="border border-border/50 rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors group"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 transition-colors">
                      <div className="flex items-center gap-4 text-left w-full">
                        <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Code className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pt-2 space-y-4">
                        <p className="text-foreground/70 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline"
                              className="bg-primary/10 text-primary border-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button
                            onClick={() => window.open(project.projectLink, '_blank')}
                            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/20 hover:shadow-accent/40 transition-all"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </Button>
                          {project.githubLink && (
                            <Button
                              onClick={() => window.open(project.githubLink, '_blank')}
                              variant="outline"
                              className="border-accent/30 hover:bg-accent/10 hover:border-accent transition-all"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </Button>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
