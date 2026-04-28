import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Reiki() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-32">

        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-secondary/20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/15 mb-6"
          >
            <Sparkles className="text-primary w-6 h-6" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Vor Ort in Droß · Fernbehandlung
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-6"
          >
            Reiki & Fernreiki
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif italic text-primary text-lg sm:text-xl"
          >
            Universelle Lebensenergie – für dich.
          </motion.p>
        </section>

        {/* Bild-Trenner */}
        <div className="w-full h-52 overflow-hidden">
          <img src="/reiki.png" alt="Reiki" className="w-full h-full object-cover object-center" />
        </div>

        {/* Inhalt */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>Reiki bedeutet übersetzt „universelle Lebensenergie" – eine japanische Heilmethode, die deine Selbstheilungskräfte aktiviert und den Energiefluss in deinem Körper wieder in Gang bringt.</p>
                <p>Genau richtig für dich, wenn du dich ausgelaugt fühlst, an alten Themen hängst oder ständiges Gedankenkarussell hast.</p>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="benefits" className="rounded-2xl border border-border/50 overflow-hidden bg-background">
                  <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-secondary/20 transition-colors text-sm font-medium text-foreground/80">
                    Reiki kann außerdem helfen bei …
                  </AccordionTrigger>
                  <AccordionContent className="px-5">
                    <ul className="grid grid-cols-1 gap-1.5 py-1 text-sm text-foreground/80">
                      {["Stress reduzieren", "Schmerzen lindern", "Schlafqualität verbessern", "Innere Ruhe – Nervensystem regulieren", "Müdigkeit & Energielosigkeit", "Regulation der Emotionen", "Stärkung des Immunsystems", "Klarheit gewinnen", "Körperliche & seelische Blockaden lösen"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-primary/50">–</span>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <Card className="border border-border/40 shadow-none bg-background">
                <CardContent className="pt-5 space-y-2">
                  <p className="font-serif text-base text-foreground">Reiki im TAO Zentrum</p>
                  <p className="text-xs text-foreground/80 leading-relaxed">Handauflegen auf bestimmte Positionen – die Energie kann frei fließen.<br />Herrengasse 50, 3552 Droß</p>
                  <p className="text-sm font-medium text-primary">ca. 60 Min · 80 €</p>
                </CardContent>
              </Card>
              <Card className="border border-border/40 shadow-none bg-background">
                <CardContent className="pt-5 space-y-2">
                  <p className="font-serif text-base text-foreground">Fernreiki</p>
                  <p className="text-xs text-foreground/80 leading-relaxed">Egal wo du dich befindest – die Energie findet zu dir und fließt immer. Du darfst es dir bequem machen.</p>
                  <p className="text-sm font-medium text-primary">ca. 45 Min · 60 €</p>
                </CardContent>
              </Card>
            </div>

            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              Termin vereinbaren <ArrowRight className="w-4 h-4" />
            </Link>
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
