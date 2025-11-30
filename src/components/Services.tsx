import { Card } from "@/components/ui/card";
import { BarChart3, Brain, Layout, TrendingUp, Code, Database, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis & Cleaning",
      description: "Transform raw data into actionable insights using Python, SQL, and Excel. Expert in statistical analysis, data preprocessing, and exploratory data analysis.",
      features: ["Python / SQL / Excel", "Statistical Analysis", "Data Preprocessing"]
    },
    {
      icon: Layout,
      title: "Dashboard Design",
      description: "Create interactive, visually compelling dashboards in Power BI and Excel that communicate insights effectively to stakeholders.",
      features: ["Power BI Reports", "Excel Dashboards", "Real-time KPIs"]
    },
    {
      icon: Brain,
      title: "Machine Learning & Predictive Modeling",
      description: "Develop and deploy ML models for prediction, classification, and deep learning applications to solve complex business problems.",
      features: ["Predictive Models", "Deep Learning", "Model Deployment"]
    },
    {
      icon: TrendingUp,
      title: "Data Visualization",
      description: "Design compelling visual narratives using Python libraries and Power BI to tell data stories that drive decision-making.",
      features: ["Python Visualization", "Power BI", "Visual Storytelling"]
    },
    {
      icon: Code,
      title: "Responsive Web Design",
      description: "Build modern, responsive websites using HTML, CSS, and JavaScript with focus on user experience and accessibility.",
      features: ["HTML / CSS", "JavaScript", "Responsive Design"]
    },
    {
      icon: Database,
      title: "AI-Powered Analytics",
      description: "Leverage GenAI and advanced analytics to extract deeper insights, automate workflows, and enhance data-driven decision making.",
      features: ["GenAI Integration", "Automation", "Advanced Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="highlight-letter">M</span>y <span className="highlight-letter">S</span>ervices
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Specialized data science services to transform your data into actionable business insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full shadow-lg hover:shadow-accent transition-all group relative overflow-hidden border-border/50 hover:border-accent/50 bg-card/50 backdrop-blur-sm cursor-pointer">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent transition-colors">
                        <service.icon className="h-7 w-7 text-accent group-hover:text-background transition-colors" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          <span className="text-xs text-foreground/60">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-16 p-8 md:p-12 bg-gradient-to-br from-accent/10 via-primary/10 to-accent/10 rounded-2xl relative overflow-hidden border border-accent/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-50" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                <span className="highlight-letter">R</span>eady to <span className="highlight-letter">T</span>ransform <span className="highlight-letter">Y</span>our <span className="highlight-letter">D</span>ata?
              </h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Let's collaborate on your next data science project and unlock valuable insights that drive business growth
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                  }
                }}
                className="px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 shadow-accent transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Get In Touch
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
