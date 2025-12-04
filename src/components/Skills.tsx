import { Card } from "@/components/ui/card";
import { Code2, Database, BarChart3, Brain } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "Java"]
    },
    {
      icon: Database,
      title: "Technologies & Database",
      skills: ["Data Analysis Using Python", "SQL"]
    },
    {
      icon: BarChart3,
      title: "Tools & IDEs",
      skills: ["Power BI Desktop", "Microsoft Excel"]
    },
    {
      icon: Brain,
      title: "Scripting Languages",
      skills: ["HTML", "CSS"]
    }
  ];

  const proficiencyLevels = [
    { name: "Python", level: 90 },
    { name: "Data Analysis", level: 85 },
    { name: "SQL", level: 80 },
    { name: "Power BI", level: 85 },
    { name: "Excel", level: 90 },
    { name: "Java", level: 75 }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            <span className="gradient-text"><span className="highlight-letter">S</span>kills & <span className="highlight-letter">E</span>xpertise</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Technical proficiency across multiple domains</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="p-3 bg-accent/10 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-accent/10 text-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Overview - Modern Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              <span className="gradient-text">Proficiency Overview</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {proficiencyLevels.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <Card className="p-4 text-center bg-gradient-to-br from-card/80 to-accent/5 border-border/30 hover:border-accent/50 transition-all group">
                    {/* Circular Progress */}
                    <div className="relative w-16 h-16 mx-auto mb-3">
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="hsl(var(--muted))"
                          strokeWidth="4"
                          fill="none"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="url(#gradient)"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 176" }}
                          whileInView={{ strokeDasharray: `${skill.level * 1.76} 176` }}
                          transition={{ duration: 1.2, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--accent))" />
                            <stop offset="100%" stopColor="hsl(var(--primary))" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs font-medium text-foreground group-hover:text-accent transition-colors">{skill.name}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
