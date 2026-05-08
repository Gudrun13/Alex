import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const fuerDich = [
  "du innere Unruhe spürst und aktuell überfordert bist",
  "sich alte Muster oder starke negative Emotionen immer wieder zeigen",
  "du an dir selbst immer wieder zweifelst und wenig Vertrauen hast",
  "du dich nach mehr Leichtigkeit sehnst",
  "du vor einer Entscheidung stehst und Klarheit suchst",
  "du die Verbindung zu deiner Seele stärken möchtest",
  "du Themen rund um Beziehung, Familie oder dein Umfeld klären möchtest",
];

export default function EinsZuEins() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 lg:pt-32">

        {/* Hero */}
        <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 text-center bg-secondary/20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4"
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Per Zoom · 60 Min. · 80,–
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-6 leading-tight"
          >
            1:1 Session
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-serif italic text-primary text-lg sm:text-xl max-w-xl mx-auto"
          >
            Zurück in dein Spüren und Vertrauen.
          </motion.p>
        </section>

        {/* Beschreibung */}
        <SectionFade className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-5 text-foreground/80 leading-relaxed text-base sm:text-lg">
            <p>
              Die 1:1 Session ist für dich, wenn du gerade feststeckst, zweifelst oder das Gefühl hast, dich selbst nicht mehr zu spüren. Gemeinsam tauchen wir in dein Thema ein, lösen emotionale Blockaden und machen sichtbar, was sich in deinem Feld zeigt.
            </p>
          </div>
        </SectionFade>

        {/* Für wen */}
        <SectionFade className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-8">Das 1:1 ist für dich, wenn …</p>
            <ul className="space-y-4">
              {fuerDich.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-start gap-3 text-foreground/80 leading-relaxed"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </SectionFade>

        {/* Preis & CTA */}
        <SectionFade className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block border border-primary/30 rounded-2xl px-8 py-6 bg-white/60">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Investition</p>
              <p className="text-4xl font-serif text-foreground">80,–</p>
              <p className="text-foreground/60 text-sm mt-1">60 Minuten · per Zoom</p>
            </div>
            <div>
              <Button size="lg" asChild className="rounded-full px-10 h-14 shadow-sm">
                <Link href="/kontakt">Jetzt Termin anfragen</Link>
              </Button>
            </div>
            <div className="pt-4">
              <Button variant="ghost" asChild className="text-foreground/60 hover:text-primary">
                <Link href="/angebote">
                  <ArrowLeft className="w-4 h-4 mr-2" />Zurück zu den Angeboten
                </Link>
              </Button>
            </div>
          </div>
        </SectionFade>

      </main>

      <Footer />
    </div>
  );
}
