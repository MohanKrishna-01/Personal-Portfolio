import { Card } from "@/components/ui/card";
import { Code2, Database, BarChart3, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "HTML", "CSS"],
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: "Data Analysis & Tools",
      skills: ["Microsoft Excel", "Power BI Desktop", "Data Analysis"],
      color: "text-green-500"
    },
    {
      icon: BarChart3,
      title: "Visualization",
      skills: ["Data Visualization", "Dashboard Creation", "Statistical Charts"],
      color: "text-purple-500"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Deep Learning", "NLP", "Model Deployment", "EDA"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A comprehensive toolkit for data science, analytics, and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="p-8 shadow-lg hover:shadow-accent transition-smooth group animate-scale-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-smooth cursor-default"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Progress Visualization */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-center text-primary">
              Proficiency Overview
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                { name: "Python", level: 85 },
                { name: "Data Analysis", level: 80 },
                { name: "SQL", level: 75 },
                { name: "Machine Learning", level: 70 },
                { name: "Power BI", level: 75 },
                { name: "Excel", level: 85 }
              ].map((skill, index) => (
                <div key={skill.name} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-accent transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
