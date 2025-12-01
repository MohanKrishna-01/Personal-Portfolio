import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string().trim().min(3, { message: "Subject must be at least 3 characters" }).max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Initialize EmailJS with public key
      emailjs.init("8LKmmKyfwOPw38LjA");
      
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Mohan Krishna Ambati"
      };

      const result = await emailjs.send(
        "service_yvs5l2j", // Service ID
        "template_16fy1wd", // Template ID
        templateParams
      );

      if (result.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again or contact me directly via email.");
    }
  };

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
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
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
              <span className="highlight-letter">G</span>et <span className="highlight-letter">I</span>n <span className="highlight-letter">T</span>ouch
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6" />
            <p className="text-foreground/70 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just connecting. Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information & Social */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 shadow-lg hover:shadow-accent transition-all group border-border/50 hover:border-accent/50 bg-card/50 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent transition-colors">
                          <item.icon className="h-6 w-6 text-accent group-hover:text-background transition-colors" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-2 group"
                            >
                              <span className="text-sm">{item.value}</span>
                              <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <p className="text-foreground text-sm font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="p-6 shadow-lg border-border/50 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    <span className="highlight-letter">C</span>onnect <span className="highlight-letter">W</span>ith <span className="highlight-letter">M</span>e
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-4 rounded-xl bg-accent/10 hover:bg-accent transition-all group border border-accent/20 hover:border-accent/50"
                        aria-label={social.label}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <social.icon className="h-6 w-6 text-accent group-hover:text-background transition-colors" />
                          <span className="text-xs font-medium text-foreground/70 group-hover:text-background transition-colors">{social.label}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="p-6 shadow-lg border-accent/20 bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm">
                  <h3 className="text-lg font-heading font-semibold mb-2">Download Resume</h3>
                  <p className="text-sm text-foreground/70 mb-4">Get my complete CV with all details about my experience and skills.</p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-background" asChild>
                    <a href="/MK_Resume.pdf" download="Mohan_Krishna_Ambati_Resume.pdf">
                      Download CV
                    </a>
                  </Button>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 shadow-lg border-border/50 bg-card/50 backdrop-blur-sm h-full">
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  <span className="highlight-letter">S</span>end a <span className="highlight-letter">M</span>essage
                </h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">Your Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="bg-background/50 border-border/50 focus:border-accent"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">Your Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                className="bg-background/50 border-border/50 focus:border-accent"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Project Collaboration"
                              className="bg-background/50 border-border/50 focus:border-accent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={6}
                              placeholder="Tell me about your project or inquiry..."
                              className="bg-background/50 border-border/50 focus:border-accent resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-background shadow-accent group"
                      disabled={form.formState.isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
