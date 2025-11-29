import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      date: "Jan - Feb 2025",
      category: "Programming",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=YOUR_CERTIFICATE_ID" // Replace with your certificate link
    },
    {
      title: "Power BI Essential Training",
      issuer: "LinkedIn Learning",
      date: "March 2025",
      category: "Visualization",
      link: "https://www.linkedin.com/learning/certificates/YOUR_CERT_ID" // Replace with your certificate link
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "June 2025",
      category: "Web Development",
      link: "https://www.freecodecamp.org/certification/YOUR_USERNAME/responsive-web-design" // Replace with your certificate link
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "July 2025",
      category: "Analytics",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/YOUR_CERT_ID.pdf" // Replace with your certificate link
    },
    {
      title: "Power BI Master Class",
      issuer: "Udemy",
      date: "August 2025",
      category: "Visualization",
      link: "https://www.udemy.com/certificate/YOUR_CERT_ID/" // Replace with your certificate link
    },
    {
      title: "Data Visualisation in Tata",
      issuer: "Forage",
      date: "July 2025",
      category: "Visualization",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/YOUR_CERT_ID.pdf" // Replace with your certificate link
    },
    {
      title: "Gen AI Powered Data Analytics",
      issuer: "Tata",
      date: "July 2025",
      category: "AI/ML",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/YOUR_CERT_ID.pdf" // Replace with your certificate link
    }
  ];

  const categoryColors: Record<string, string> = {
    "Programming": "bg-blue-500/10 text-blue-500 border-blue-500/20",
    "Visualization": "bg-purple-500/10 text-purple-500 border-purple-500/20",
    "Web Development": "bg-green-500/10 text-green-500 border-green-500/20",
    "Analytics": "bg-orange-500/10 text-orange-500 border-orange-500/20",
    "AI/ML": "bg-accent/10 text-accent border-accent/20"
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Certifications & Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Continuous learning and professional development in data science and analytics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="p-6 shadow-lg hover:shadow-accent transition-all group h-full relative overflow-hidden cursor-pointer"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${categoryColors[cert.category]} border`}
                      >
                        {cert.category}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-heading font-semibold text-primary mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                      {cert.title}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    
                    <p className="text-sm font-medium text-accent mb-1">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-xs text-muted-foreground">
                      {cert.date}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Summary */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 text-center shadow-lg hover:shadow-accent transition-all">
              <div className="text-3xl font-bold gradient-text mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </Card>
            <Card className="p-6 text-center shadow-lg hover:shadow-accent transition-all">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Platforms</div>
            </Card>
            <Card className="p-6 text-center shadow-lg hover:shadow-accent transition-all">
              <div className="text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </Card>
            <Card className="p-6 text-center shadow-lg hover:shadow-accent transition-all">
              <div className="text-3xl font-bold gradient-text mb-2">2025</div>
              <div className="text-sm text-muted-foreground">Latest Year</div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
