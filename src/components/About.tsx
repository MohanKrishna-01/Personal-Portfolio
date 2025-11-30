import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Lightbulb, MessageSquare, GraduationCap } from "lucide-react";

const About = () => {
  const softSkills = [
    { icon: Target, label: "Solution Oriented" },
    { icon: Lightbulb, label: "Logical Thinking" },
    { icon: MessageSquare, label: "Communication" },
    { icon: GraduationCap, label: "Adaptability" }
  ];

  const education = [
    {
      degree: "B.Tech. in Computer Science Engineering (DS)",
      institution: "Dadi Institute of Engineering & Technology",
      grade: "CGPA: 7.62/10",
      year: "Currently in 6th Semester (7th Sem Completed)",
      detail: "Third-year student"
    },
    {
      degree: "12th Grade (APBIE) - MPC",
      institution: "Sri Aditya Junior College, Srikakulam",
      grade: "Percentage: 62%",
      year: "2020-2022"
    },
    {
      degree: "10th Grade (SSC)",
      institution: "Z.P. High School, Gara Mandal, Srikakulam",
      grade: "Percentage: 93%",
      year: "2019-2020"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">My journey & background</p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-accent/20">
                <h3 className="text-2xl font-bold mb-4 text-accent">My Journey</h3>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Aspiring Data Science undergraduate seeking an entry-level role to apply my skills in 
                    data analysis, machine learning, and statistics. Skilled in Python, SQL, and data visualization 
                    tools, with experience working on real-world academic projects.
                  </p>
                  <p>
                    Eager to learn and contribute to data-driven decisions through innovative analytical solutions 
                    and cutting-edge machine learning techniques.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Soft Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-accent/20">
                <h3 className="text-2xl font-bold mb-6 text-accent">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
                        <skill.icon className="h-5 w-5 text-accent" />
                        <span className="text-sm font-medium">{skill.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Educational Background</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                        <p className="text-foreground/70 text-sm mb-1">{edu.institution}</p>
                        <p className="text-accent font-semibold text-sm">{edu.grade}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-1">
                          {edu.year}
                        </span>
                        {edu.detail && (
                          <p className="text-xs text-muted-foreground mt-1">{edu.detail}</p>
                        )}
                      </div>
                    </div>
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

export default About;
