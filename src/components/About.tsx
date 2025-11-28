import { GraduationCap, Lightbulb, MessageSquare, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech. in Computer Science Engineering (DS)",
      institution: "Dadi Institute of Engineering & Technology",
      grade: "CGPA: 7.62/10",
      year: "Present"
    },
    {
      degree: "12th Grade (MPC)",
      institution: "Sri Aditya Junior College, Srikakulam",
      grade: "62%",
      year: "2020-2022"
    },
    {
      degree: "10th Grade (SSC)",
      institution: "Z.P. High School, Gara Mandal",
      grade: "93%",
      year: "2019-2020"
    }
  ];

  const softSkills = [
    { icon: Target, label: "Solution Oriented" },
    { icon: Lightbulb, label: "Logical Thinking" },
    { icon: MessageSquare, label: "Communication" },
    { icon: GraduationCap, label: "Adaptability" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <div className="space-y-6 animate-slide-in">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
                <Card className="p-8 shadow-lg">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                    My Journey
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Aspiring Data Science undergraduate seeking an entry-level role to apply my skills in 
                    data analysis, machine learning, and statistics. Skilled in Python, SQL, and data visualization 
                    tools, with experience working on real-world academic projects. Eager to learn and contribute 
                    to data-driven decisions.
                  </p>
                </Card>
              </div>

              {/* Soft Skills */}
              <Card className="p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div
                      key={skill.label}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-accent/10 transition-smooth group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <skill.icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Education */}
            <div className="space-y-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                Educational Background
              </h3>
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-lg hover:shadow-accent transition-smooth group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-heading font-semibold text-lg text-primary group-hover:text-accent transition-smooth">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-foreground/70 text-sm mb-1">{edu.institution}</p>
                    <p className="text-accent font-semibold text-sm">{edu.grade}</p>
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

export default About;
