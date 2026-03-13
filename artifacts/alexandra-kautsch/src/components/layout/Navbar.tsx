import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Angebote", href: "#angebote" },
  { name: "Für wen", href: "#fuerwen" },
  { name: "Über mich", href: "#uebermich" },
  { name: "Fortbildung", href: "#fortbildung" },
  { name: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8",
        scrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-medium tracking-wide text-foreground group-hover:text-primary transition-colors">
            Alexandra Kautsch
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  activeSection === link.href.substring(1) ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </a>
            ))}
          </div>
          <Button asChild className="rounded-full px-6 shadow-sm hover:shadow-md transition-all">
            <a href="#kontakt">Termin vereinbaren</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border/50 absolute top-full left-0 w-full shadow-lg"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-4 rounded-full w-full">
                <a href="#kontakt" onClick={handleNavClick}>Termin vereinbaren</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
