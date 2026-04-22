import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-foreground py-14 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(11,15,25,0.85) 30%, #0B0F19 100%)",
        borderTop: "1px solid #1F2937",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,255,163,0.6), transparent)",
        }}
      />
      {/* Soft mint glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,255,163,0.08), transparent 70%)" }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
                Mohan Krishna Ambati
              </h3>
              <p className="text-muted-foreground text-sm">
                Aspiring Data Analyst — turning raw data into clear, actionable insights with Power BI, SQL & Python.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }}
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:mohankrishnaambati7@gmail.com" className="flex items-center gap-2 hover:text-accent transition-smooth">
                    <Mail className="h-4 w-4" />
                    mohankrishnaambati7@gmail.com
                  </a>
                </li>
                <li className="flex gap-3 pt-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} Mohan Krishna Ambati. All rights reserved.</p>
              <p className="flex items-center gap-2">
                Made with <Heart className="h-4 w-4 text-accent fill-accent" /> and data
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
