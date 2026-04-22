import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Lightbulb, MessageSquare, GraduationCap, Sparkles, Calendar, Award } from "lucide-react";
import EditableText from "./EditableText";

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
      grade: "CGPA: 7.60/10",
      year: "2022 – 2026",
      detail: "Final year (4th year) student"
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
            <span className="gradient-text"><span className="highlight-letter">A</span>bout <span className="highlight-letter">M</span>e</span>
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
                <EditableText
                  id="about.journeyTitle"
                  as="h3"
                  defaultValue="My Journey"
                  className="text-2xl font-bold mb-4 text-accent block"
                />
                <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                  <EditableText
                    id="about.journey"
                    as="p"
                    multiline
                    defaultValue="Aspiring Data Analyst skilled in Power BI, Excel, and Python, with expertise in data visualization and dashboard development. Experienced in transforming raw data into actionable insights through projects and internships."
                  />
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
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                style={{
                  background: "rgba(0,255,163,0.08)",
                  border: "1px solid rgba(0,255,163,0.25)",
                }}
              >
                <Sparkles className="h-3.5 w-3.5" style={{ color: "#00FFA3" }} />
                <span className="text-xs font-medium" style={{ color: "#00FFA3" }}>
                  Academic Journey
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2 accent-underline">
                <span className="gradient-text">Educational Background</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-3">
                A timeline of milestones shaping my journey
              </p>
            </div>

            {/* Premium timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(0,255,163,0.45), rgba(34,211,238,0.35), transparent)",
                }}
              />

              <div className="space-y-8">
                {education.map((edu, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative md:grid md:grid-cols-2 md:gap-8 items-center ${
                        isLeft ? "" : "md:[&>*:first-child]:order-2"
                      }`}
                    >
                      {/* Dot */}
                      <div
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10"
                        style={{
                          background: "#00FFA3",
                          boxShadow:
                            "0 0 0 4px rgba(0,255,163,0.15), 0 0 20px rgba(0,255,163,0.55)",
                        }}
                      />

                      {/* Card side */}
                      <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                        <motion.div whileHover={{ y: -4 }}>
                          <Card
                            className="p-6 card-glow-hover group relative overflow-hidden"
                            style={{
                              background: "#121826",
                              borderColor: "#1F2937",
                            }}
                          >
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                              style={{
                                background:
                                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,163,0.08), transparent 70%)",
                              }}
                            />
                            <div className="relative z-10">
                              <div className={`flex items-center gap-2 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                                <Award className="h-4 w-4" style={{ color: "#00FFA3" }} />
                                <span
                                  className="text-[11px] font-semibold uppercase tracking-wider"
                                  style={{ color: "#00FFA3" }}
                                >
                                  {edu.grade}
                                </span>
                              </div>
                              <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                                {edu.degree}
                              </h4>
                              <p className="text-foreground/70 text-sm mb-3">{edu.institution}</p>
                              <div className={`flex items-center gap-2 flex-wrap ${isLeft ? "md:justify-end" : ""}`}>
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                                  <Calendar className="h-3 w-3" />
                                  {edu.year}
                                </span>
                                {edu.detail && (
                                  <span className="text-xs text-muted-foreground">{edu.detail}</span>
                                )}
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      </div>

                      {/* Spacer for opposite side on desktop */}
                      <div className="hidden md:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
