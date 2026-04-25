import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const items = [
  "du Klarheit für deinen Weg und deine Ziele möchtest",
  "du Entscheidungen leichter und schneller treffen willst",
  "du innere Blockaden lösen willst",
  "du deine Wünsche & Ziele bewusster manifestieren möchtest",
  "du noch mehr Leichtigkeit und Freude in deinem Leben haben willst",
  "du zu dir selbst stehen und dein Selbstbewusstsein stärken willst",
  "du deine Gesundheit energetisch unterstützen willst",
  "du schon als Energetiker:in, Trainer:in oder Coach tätig bist und deine Kund:innen noch tiefer begleiten möchtest",
];

export default function FuerWen() {
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
          <div className="absolute inset-0 bg-white/60" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
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
              className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-6 leading-tight"
            >
              Für dich, wenn…
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-serif italic text-primary text-lg sm:text-xl"
            >
              Du bist hier genau richtig, wenn du dich in einem dieser Bilder erkennst.
            </motion.p>
          </div>
        </section>

        {/* Items */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/40 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-light leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* CTA */}
        <SectionFade className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif text-foreground">Erkennst du dich wieder?</h2>
            <p className="text-foreground/70 font-light text-lg">
              Ich freue mich darauf, dich auf deinem Weg zu begleiten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-full text-base px-8 h-14 shadow-sm">
                <a href="/#kontakt">
                  Termin vereinbaren <ArrowRight className="ml-2 w-4 h-4" />
                </a>
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
