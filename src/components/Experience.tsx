import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Intern – Data Valley",
      type: "Virtual Internship",
      date: "May-June 2024",
      description:
        "Gained hands-on experience in data science, covered Python, data wrangling, EDA, statistics, machine learning, deep learning, NLP, big data, and model deployment. Includes hands-on projects, real-world applications, and cloud computing concepts.",
      skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "Big Data", "Cloud Computing"],
      link: "https://drive.google.com/file/d/YOUR_CERTIFICATE_ID/view" // Replace with your certificate link
    },
    {
      title: "Data Analysis Using Python",
      type: "APSSDC Program",
      date: "April-July 2024",
      description:
        "The internship aimed to equip me with practical skills in data analysis using Python, focusing on data cleaning, transformation, and visualization techniques.",
      skills: ["Python", "Data Cleaning", "Data Visualization", "Data Transformation"],
      link: "https://drive.google.com/file/d/YOUR_CERTIFICATE_ID/view" // Replace with your certificate link
    }
  ];

  const projects = [
    {
      title: "Food Calorie Prediction",
      description:
        "Developed and evaluated a machine-learning based food calorie prediction system, utilizing user inputs deep learning for recognition and segmentation, volume estimation, and nutritional databases, aiming to improve prediction reliability and user accessibility in dietary tracking.",
      technologies: ["Deep Learning", "Machine Learning", "Python", "Computer Vision", "Image Segmentation"],
      link: "https://github.com/MohanKrishna-01/food-calorie-prediction", // Replace with your GitHub project link
      highlights: ["Deep Learning Recognition", "Volume Estimation", "Nutritional Databases", "User Accessibility"]
    },
    {
      title: "Portfolio Dashboard [EXCEL]",
      description:
        "Designed and developed an interactive Excel dashboard to analyze call center data and visualize performance metrics like call trends, number of callers, reviews, average ratings, call duration and customer satisfaction by using pivot tables.",
      technologies: ["Microsoft Excel", "Pivot Tables", "Data Visualization", "Data Analysis"],
      link: "https://github.com/MohanKrishna-01/excel-portfolio-dashboard", // Replace with your Google Drive or GitHub link
      highlights: ["Call Trends Analysis", "Customer Satisfaction", "Performance Metrics", "Interactive Dashboard"]
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">Experience & Projects</span>
            </h2>
            <p className="text-muted-foreground">Building practical solutions through real-world experience</p>
          </motion.div>

          {/* Work Experience */}
          <div className="mb-16">
            <motion.h3 
              className="text-3xl font-heading font-semibold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Briefcase className="h-7 w-7 text-accent" />
              <span className="gradient-text">Work Experience</span>
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-sm text-accent font-medium">{exp.type}</p>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground bg-accent/10 px-3 py-1 rounded-full">
                        <Calendar className="h-3 w-3" />
                        {exp.date}
                      </span>
                    </div>
                  
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline flex items-center gap-1"
                    >
                      Try It Here <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notable Projects */}
          <div>
            <motion.h3 
              className="text-3xl font-heading font-semibold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Code className="h-7 w-7 text-accent" />
              <span className="gradient-text">Notable Projects</span>
            </motion.h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                            {project.title}
                          </h4>
                          <p className="text-foreground/70 leading-relaxed mb-4">
                            {project.description}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground shrink-0"
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Key Highlights:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
