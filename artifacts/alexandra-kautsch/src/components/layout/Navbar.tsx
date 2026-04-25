import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const pageLinks = [
  { name: "Angebote", href: "/angebote", type: "page" },
  { name: "Für wen", href: "/fuerwen", type: "page" },
  { name: "Über mich", href: "/uebermich", type: "page" },
  { name: "Kontakt", href: "/kontakt", type: "page" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileMenuOpen(false);

  function resolveHref(link: { href: string; type: string }) {
    if (link.type === "page") return link.href;
    if (isHome) return link.href;
    return `/${link.href}`;
  }

  function isActive(link: { href: string; type: string }) {
    if (link.type === "page") return location === link.href;
    return false;
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8",
        scrolled ? "py-3 bg-[rgb(241,236,237)] shadow-sm border-b border-border/30" : "py-5 bg-[rgb(241,236,237)]"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo-full.jpg"
            alt="Alexandra Kautsch Logo"
            className="h-28 w-auto object-contain flex-shrink-0 mix-blend-multiply rounded-2xl"
          />
          <span className="font-serif text-xl font-medium tracking-wide text-foreground group-hover:text-primary transition-colors hidden sm:inline">
            Alexandra Kautsch
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {pageLinks.map((link) => {
              const href = resolveHref(link);
              const active = isActive(link);
              const className = cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                active ? "text-primary" : "text-foreground/80"
              );

              if (link.type === "page") {
                return (
                  <Link key={link.name} href={href} className={className}>
                    {link.name}
                    {active && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                );
              }

              return (
                <a key={link.name} href={href} className={className}>
                  {link.name}
                </a>
              );
            })}
          </div>
          <Button asChild className="rounded-full px-6 shadow-sm hover:shadow-md transition-all">
            <Link href="/kontakt">Termin vereinbaren</Link>
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
            className="md:hidden overflow-hidden bg-[rgb(241,236,237)] border-t border-border/30 absolute top-full left-0 w-full shadow-lg"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {pageLinks.map((link) => {
                const href = resolveHref(link);
                const className = "text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50";

                if (link.type === "page") {
                  return (
                    <Link key={link.name} href={href} onClick={handleNavClick} className={className}>
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <a key={link.name} href={href} onClick={handleNavClick} className={className}>
                    {link.name}
                  </a>
                );
              })}
              <Button asChild className="mt-4 rounded-full w-full">
                <Link href="/kontakt" onClick={handleNavClick}>
                  Termin vereinbaren
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
