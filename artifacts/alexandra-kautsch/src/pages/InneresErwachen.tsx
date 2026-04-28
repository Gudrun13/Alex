import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function InneresErwachen() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-32">

        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/15 mb-6"
          >
            <BookOpen className="text-primary w-6 h-6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-4"
          >
            <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">Fortbildung</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            8 Wochen · 1:1 Begleitung · Preis auf Anfrage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-6"
          >
            Inneres Erwachen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif italic text-primary text-lg sm:text-xl"
          >
            Lerne, deiner Intuition wieder zu vertrauen.
          </motion.p>
        </section>

        {/* Inhalt */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>In diesem Kurs lernst du, deiner Intuition wieder klar zu vertrauen und sie ganz bewusst einzusetzen. Du übst, feiner zu spüren, innere Signale wahrzunehmen und Entscheidungen bewusst aus einem tiefen Gefühl von Klarheit und Vertrauen heraus zu treffen.</p>
                <p>Du lernst, deiner Wahrnehmung wieder zu vertrauen, löst innere Blockaden und alte Gedankenmuster. Du holst Botschaften und Impulse aus deinem Energiefeld und lernst, wie du dich mit anderen Energien verbindest.</p>
              </div>
              <div className="rounded-2xl bg-background border border-border/40 p-6 space-y-3">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Details</p>
                {[
                  ["Format", "1:1 Begleitung"],
                  ["Dauer", "8 Wochen, 1× pro Woche"],
                  ["Termine", "Individuell vereinbart"],
                  ["Preis", "Auf Anfrage"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm border-b border-border/30 pb-2 last:border-none last:pb-0">
                    <span className="text-foreground/50 font-light">{label}</span>
                    <span className="text-foreground/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              Jetzt anfragen <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </SectionFade>

        {/* Back link */}
        <div className="py-10 px-4 text-center">
          <Link
            href="/angebote"
            className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zur Übersicht
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
