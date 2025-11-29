import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohankrishnaambati7@gmail.com",
      link: "mailto:mohankrishnaambati7@gmail.com"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 7032390696",
      link: "tel:+917032390696"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "5-24, Main Street, Chinna Ambativanipeta, Ampolu, Gara Mandal, Srikakulam District",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mohan-krishna-ambati-a41a582b6",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/MohanKrishna-01",
      color: "hover:text-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just connecting. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-2 space-y-6">
              <Card className="p-8 shadow-lg animate-slide-in">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={item.label} className="flex items-start gap-4 group">
                      <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent transition-smooth">
                        <item.icon className="h-5 w-5 text-accent group-hover:text-white transition-smooth" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-primary mb-1">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-foreground/70 hover:text-accent transition-smooth text-sm"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground/70 text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8 shadow-lg animate-slide-in" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-secondary hover:bg-accent transition-smooth group ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-foreground group-hover:text-white transition-smooth" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="md:col-span-3 p-8 shadow-lg animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                Send Me a Message
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Collaboration"
                    className="focus:ring-accent focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                    className="focus:ring-accent focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-accent text-white shadow-accent group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
