import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import {
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  Moon,
  Phone,
  Sun,
  Compass,
} from "lucide-react";

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "github", label: "GitHub stats" },
  { id: "certifications", label: "Certifications" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
};

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const openHandler = () => setOpen(true);
    window.addEventListener("open-command-palette", openHandler);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", openHandler);
    };
  }, []);

  const run = (action: () => void) => {
    setOpen(false);
    requestAnimationFrame(action);
  };

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied to clipboard`);
    } catch {
      toast.error("Copy failed — please copy manually");
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a section, copy contact details, download resume…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {SECTIONS.map((section) => (
            <CommandItem key={section.id} onSelect={() => run(() => scrollToSection(section.id))}>
              <Compass className="mr-2 h-4 w-4" aria-hidden="true" />
              {section.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => run(() => copy("mohankrishnaambati7@gmail.com", "Email"))}>
            <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
            Copy email address
          </CommandItem>
          <CommandItem onSelect={() => run(() => copy("+91 70323 90696", "Phone number"))}>
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Copy phone number
          </CommandItem>
          <CommandItem
            onSelect={() =>
              run(() => {
                const a = document.createElement("a");
                a.href = "/MK_Resume.pdf";
                a.download = "Mohan-Krishna-Ambati-Resume.pdf";
                a.click();
              })
            }
          >
            <Download className="mr-2 h-4 w-4" aria-hidden="true" />
            Download resume
          </CommandItem>
          <CommandItem onSelect={() => run(() => setTheme(resolvedTheme === "light" ? "dark" : "light"))}>
            {resolvedTheme === "light" ? (
              <Moon className="mr-2 h-4 w-4" aria-hidden="true" />
            ) : (
              <Sun className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            Switch to {resolvedTheme === "light" ? "dark" : "light"} mode
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          <CommandItem onSelect={() => run(() => window.open("https://github.com/MohanKrishna-01", "_blank"))}>
            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
            GitHub profile
          </CommandItem>
          <CommandItem
            onSelect={() =>
              run(() => window.open("https://www.linkedin.com/in/mohan-krishna-ambati-a41a582b6", "_blank"))
            }
          >
            <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
            LinkedIn profile
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open("mailto:mohankrishnaambati7@gmail.com"))}>
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            Send an email
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPalette;