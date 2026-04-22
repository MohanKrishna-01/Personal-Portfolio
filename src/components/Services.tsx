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
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(0,255,163,0.08)",
                border: "1px solid rgba(0,255,163,0.25)",
              }}
            >
              <ArrowUpRight className="h-3.5 w-3.5" style={{ color: "#00FFA3" }} />
              <span className="text-xs font-medium" style={{ color: "#00FFA3" }}>
                What I Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-3 accent-underline">
              <span className="gradient-text">My Services</span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mt-4">
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
                <Card
                  className="p-6 h-full transition-all group relative overflow-hidden cursor-pointer card-glow-hover"
                  style={{ background: "#121826", borderColor: "#1F2937" }}
                >
                  {/* Subtle mint glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,163,0.08), transparent 70%)",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="p-3 rounded-xl transition-all group-hover:scale-110"
                        style={{
                          background: "rgba(0,255,163,0.1)",
                          border: "1px solid rgba(0,255,163,0.25)",
                        }}
                      >
                        <service.icon className="h-7 w-7" style={{ color: "#00FFA3" }} />
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
            className="mt-20 p-10 md:p-14 rounded-3xl relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,163,0.08), rgba(34,211,238,0.05) 50%, rgba(0,255,163,0.08))",
              border: "1px solid rgba(0,255,163,0.25)",
              boxShadow:
                "0 30px 80px rgba(2,6,23,0.55), 0 0 60px rgba(0,255,163,0.12)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Decorative orbs */}
            <div
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,255,163,0.18), transparent 70%)" }}
            />
            <div
              className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(34,211,238,0.14), transparent 70%)" }}
            />

            <div className="relative z-10 text-center">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(0,255,163,0.12)",
                  border: "1px solid rgba(0,255,163,0.35)",
                }}
              >
                <span className="text-xs font-semibold" style={{ color: "#00FFA3" }}>
                  Let's Build Something Great
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
                Ready to <span className="gradient-text">Transform Your Data?</span>
              </h3>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto text-base md:text-lg">
                Let's collaborate on your next data project and unlock insights that drive real business growth.
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
                className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
                style={{
                  background: "#00FFA3",
                  color: "#0B0F19",
                  boxShadow:
                    "0 0 0 1px rgba(0,255,163,0.5), 0 0 28px rgba(0,255,163,0.55)",
                }}
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
