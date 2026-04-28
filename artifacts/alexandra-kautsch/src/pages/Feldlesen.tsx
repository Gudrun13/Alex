import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Feldlesen() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-32">

        {/* Hero */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/intro-bg.png)" }}
          />
          <div className="absolute inset-0 bg-white/55" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-5"
            >
              Energiearbeit · Feldlesen
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-6 leading-tight"
            >
              Das ist Feldlesen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-serif italic text-primary text-lg sm:text-xl"
            >
              Verbinde dich mit dem, was wirklich ist.
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8 text-lg text-foreground/80 leading-relaxed">
            <p>
              Feldlesen bedeutet, dich bewusst mit Energiefeldern zu verbinden,
              im Hier und Jetzt zu sein und wahrzunehmen, was da ist. Du stellst
              Fragen und bekommst klare Impulse, Antworten und Botschaften.
            </p>
            <p>
              Das kannst du lernen, denn diesen Zugang hat jeder in uns. Du
              kannst dich mit allem verbinden, was eine Energie hat – mit
              Menschen, Tieren, Pflanzen, Situationen oder auch Themen.
            </p>
            <p>
              Im morphischen Feld ist noch viel mehr möglich: Du lernst, dich
              von belastenden Energien abzugrenzen, Verstrickungen zu lösen und
              bewusst neue Impulse zu setzen.
            </p>
            <p>
              Durch das Feldlesen stärkst du deine Herzstimme und die Verbindung
              zu dir selbst. Du triffst Entscheidungen klarer, spürst, was für
              dich stimmig ist, und bekommst Orientierung für deine nächsten
              Schritte.
            </p>

            <div className="w-16 h-px bg-primary/40 mx-auto my-12" />

            <div className="bg-primary/5 rounded-3xl border border-primary/15 p-8 sm:p-10 space-y-4">
              <h2 className="text-2xl font-serif text-foreground">Was ist das morphische Feld?</h2>
              <p className="text-foreground/85">
                Das morphische Feld ist ein feinstoffliches Energiefeld, in dem
                alle Informationen und Erfahrungen gespeichert sind – von
                Menschen, Tieren, der Natur und dem gesamten Universum. Beim
                Feldlesen verbinden wir uns bewusst mit diesem Feld und lesen,
                was dort für dich bereit liegt.
              </p>
              <p className="text-foreground/85">
                Dieses Wissen stammt aus der Forschung von Rupert Sheldrake und
                wird in vielen spirituellen und energetischen Ansätzen genutzt.
              </p>
            </div>
          </div>
        </SectionFade>

        {/* CTA */}
        <SectionFade className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif text-foreground">Neugierig geworden?</h2>
            <p className="text-foreground/80 font-light text-lg">
              Entdecke meine Readings und buche dein persönliches Feldlesen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-full text-base px-8 h-14 shadow-sm">
                <Link href="/angebote">
                  Zu den Angeboten <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full text-base px-8 h-14">
                <a href="/kontakt">Termin vereinbaren</a>
              </Button>
            </div>
          </div>
        </SectionFade>

        {/* Back link */}
        <div className="py-10 px-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
