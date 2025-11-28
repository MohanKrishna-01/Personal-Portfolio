import { Card } from "@/components/ui/card";
import { BarChart3, Brain, Layout, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights through comprehensive analysis, statistical methods, and exploratory techniques.",
      features: ["Statistical Analysis", "Data Cleaning", "Trend Analysis"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Develop and deploy ML models for prediction, classification, and pattern recognition to solve complex problems.",
      features: ["Model Development", "Deep Learning", "NLP Solutions"]
    },
    {
      icon: Layout,
      title: "Interactive Dashboards",
      description: "Create dynamic, user-friendly dashboards in Excel and Power BI to visualize KPIs and business metrics effectively.",
      features: ["Excel Dashboards", "Power BI Reports", "Real-time Metrics"]
    },
    {
      icon: TrendingUp,
      title: "Data Visualization",
      description: "Design compelling visual narratives with charts, graphs, and infographics to communicate data stories clearly.",
      features: ["Custom Charts", "Infographics", "Visual Storytelling"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
              Services Offered
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Specialized data science services to help drive data-driven decision making
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-8 shadow-lg hover:shadow-accent transition-smooth group relative overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-accent opacity-5 rounded-full group-hover:scale-150 transition-transform" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-smooth">
                      <service.icon className="h-8 w-8 text-accent group-hover:text-white transition-smooth" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold text-primary group-hover:text-accent transition-smooth mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                        style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-lg animate-float" />
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full animate-float" style={{ animationDelay: "1s" }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">
                Ready to Transform Your Data?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Let's collaborate on your next data science project and unlock valuable insights
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
                className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 shadow-accent transition-smooth"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
