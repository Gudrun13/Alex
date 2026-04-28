import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const ausbildungen = [
  "Ausbildung zur Energetiktrainerin",
  "Reiki Grad 1, 2 und Meistergrad",
  "Aroma Touch Technik",
  "Lesen und Erschaffen im morphischen Feld",
];

export default function UeberMich() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-32">

        {/* Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-5"
          >
            Energiearbeit · Reiki · Feldlesen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-4"
          >
            Das bin ich
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-serif italic text-primary text-lg"
          >
            Alexandra Kautsch – Niederösterreich
          </motion.p>
        </section>

        {/* Hauptinhalt */}
        <SectionFade className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Fotos */}
            <div className="relative h-[480px] w-full max-w-md mx-auto">
              <div className="absolute inset-0 top-4 left-0 w-full h-full rounded-3xl overflow-hidden shadow-xl z-0">
                <img
                  src="/alex-praxis.jpg"
                  alt="Alexandra Kautsch in ihrem Praxisraum"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 right-[-12px] w-36 h-44 rounded-2xl overflow-hidden shadow-2xl z-10 ring-2 ring-background">
                <img
                  src="/alex-kaffee.jpg"
                  alt="Alexandra Kautsch"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute top-0 left-[-8px] w-full h-full rounded-3xl bg-primary/15 -z-10" />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Mein Name ist Alexandra, ich bin Mama von zwei Töchtern und lebe in Niederösterreich. Energiearbeit begleitet mich schon viele Jahre und ist ein wichtiger Teil meines Lebens geworden.
                </p>
                <p>
                  Vor über 20 Jahren habe ich begonnen, mich intensiver mit Seelenarbeit zu beschäftigen und eine Ausbildung zur Energetiktrainerin gemacht. Danach folgten weitere Ausbildungen in Reiki, Aroma Touch und Lesen und Erschaffen im morphischen Feld.
                </p>
                <p>
                  Heute begleite ich Frauen dabei, wieder mehr bei sich anzukommen und sich selbst besser zu spüren. Mit Feldlesungen und Reiki unterstütze ich sie, innere Blockaden zu lösen, ihre Selbstheilungskräfte zu aktivieren und sich mit ihrem Potenzial zu verbinden.
                </p>
              </div>

              {/* Ausbildungen */}
              <div className="pt-2">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Ausbildungen</p>
                <ul className="space-y-2">
                  {ausbildungen.map((a, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionFade>

        {/* CTA */}
        <SectionFade className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif text-foreground">Bereit für deinen ersten Schritt?</h2>
            <p className="text-foreground/80 font-light text-lg">
              Ich freue mich darauf, dich kennenzulernen und dich zu begleiten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-full text-base px-8 h-14 shadow-sm">
                <Link href="/kontakt">
                  Termin vereinbaren <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full text-base px-8 h-14">
                <Link href="/angebote">Zu den Angeboten</Link>
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
