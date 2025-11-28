import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, ExternalLink, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Intern – Data Valley",
      type: "Virtual Internship",
      date: "May-June 2024",
      description:
        "Gained hands-on experience in data science methodologies, Python programming, Exploratory Data Analysis (EDA), statistics, machine learning, Natural Language Processing (NLP), and model deployment.",
      skills: ["Python", "Machine Learning", "NLP", "Statistics", "EDA"]
    },
    {
      title: "Data Analysis Using Python",
      type: "APSSDC Program",
      date: "April-July 2025",
      description:
        "Developed practical skills in comprehensive data analysis, including data cleaning, transformation, manipulation, and visualization techniques using Python.",
      skills: ["Python", "Data Cleaning", "Data Visualization", "Pandas", "NumPy"]
    }
  ];

  const projects = [
    {
      title: "Food Calorie Prediction",
      description:
        "Developed an ML-based system for precise food calorie prediction. Leveraged deep learning techniques for image recognition, integrated volume estimation methods, and utilized comprehensive nutritional databases to provide accurate calorie counts.",
      technologies: ["Deep Learning", "Machine Learning", "Python", "Computer Vision"],
      link: "#",
      highlights: ["Image Recognition", "Nutritional Analysis", "Real-time Prediction"]
    },
    {
      title: "Portfolio Dashboard [EXCEL]",
      description:
        "Created an interactive dashboard using Microsoft Excel to analyze call center data. Utilized advanced pivot tables and charts to visualize key performance metrics, allowing for quick insights and decision-making.",
      technologies: ["Microsoft Excel", "Pivot Tables", "Data Visualization", "KPI Analysis"],
      link: "#",
      highlights: ["Interactive Charts", "Performance Metrics", "Business Intelligence"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
              Experience & Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-3xl font-heading font-semibold mb-8 text-primary flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-accent" />
              Work Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-lg hover:shadow-accent transition-smooth group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-semibold text-primary group-hover:text-accent transition-smooth">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-accent font-medium">{exp.type}</p>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      <Calendar className="h-3 w-3" />
                      {exp.date}
                    </span>
                  </div>
                  
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Notable Projects */}
          <div>
            <h3 className="text-3xl font-heading font-semibold mb-8 text-primary flex items-center gap-3">
              <Code className="h-7 w-7 text-accent" />
              Notable Projects
            </h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-8 shadow-lg hover:shadow-accent transition-smooth group animate-fade-in overflow-hidden relative"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-heading font-bold text-primary group-hover:text-accent transition-smooth mb-2">
                          {project.title}
                        </h4>
                        <p className="text-foreground/70 leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent text-accent hover:bg-accent hover:text-white shrink-0"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-primary mb-2">Key Highlights:</p>
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
                      <p className="text-sm font-semibold text-primary mb-2">Technologies:</p>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
