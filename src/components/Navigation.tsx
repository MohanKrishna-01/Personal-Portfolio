import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Command as CommandIcon, FileText } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import ResumeDialog from "@/components/ResumeDialog";
import { SECTIONS, scrollToSection } from "@/components/CommandPalette";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = SECTIONS.filter((s) =>
  ["about", "skills", "experience", "projects", "timeline", "contact"].includes(s.id),
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const active = useActiveSection(SECTIONS.map((s) => s.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 no-print transition-smooth ${
        isScrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4" aria-label="Primary">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => go("home")}
            className="gradient-text text-2xl font-heading font-extrabold tracking-widest"
          >
            MKA
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-smooth ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full border border-primary/30 bg-primary/10" />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-xs font-medium text-muted-foreground transition-smooth hover:border-primary/50 hover:text-foreground"
              aria-label="Open command palette"
            >
              <CommandIcon className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px]">Ctrl K</kbd>
            </button>
            <ThemeToggle />
            <ResumeDialog
              trigger={(open) => (
                <Button onClick={open} className="btn-glow rounded-full font-semibold">
                  <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                  Resume
                </Button>
              )}
            />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="animate-fade-in pb-6 lg:hidden">
            <div className="flex flex-col gap-1">
              {SECTIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-smooth ${
                    active === item.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <ResumeDialog
                trigger={(open) => (
                  <Button onClick={open} className="mt-3 w-full rounded-full font-semibold">
                    <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                    Resume
                  </Button>
                )}
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;