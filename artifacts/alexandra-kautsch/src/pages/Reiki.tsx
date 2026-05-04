import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Reiki() {
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
        <SectionFade className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground/80 leading-relaxed mb-10">
              <p>Wenn du dich erschöpft, leer, innerlich unruhig oder „nicht ganz bei dir" fühlst, dann ist Reiki genau das Richtige für dich. Es kann dich genau hier wieder zurück zu dir bringen.</p>
              <p>Reiki bedeutet übersetzt „universelle Lebensenergie" – eine japanische Heilmethode, die deine Selbstheilungskräfte aktiviert und den Energiefluss in deinem Körper sanft wieder in Bewegung bringt.</p>
              <p>Während einer Sitzung darf dein System herunterfahren, dein Nervensystem sich regulieren und dein Körper beginnen, das loszulassen, was dich belastet.</p>
              <div className="pt-2">
                <p className="font-medium text-foreground mb-3">Reiki kann dich dabei unterstützen:</p>
                <ul className="space-y-2">
                  {[
                    "Stress abzubauen",
                    "besser zu schlafen und wieder mehr Ruhe in dir zu finden",
                    "deine Gedanken zu klären und aus dem ständigen Overthinking auszusteigen",
                    "emotionale und körperliche Spannungen zu lösen und neue Energie zu spüren",
                    "dein Immunsystem zu stärken und dich insgesamt ausgeglichener zu fühlen",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { text: "Wow. Danke liebe Alexandra. Meine Migräne ist verschwunden. Dank dir konnte ich meinen Vortrag halten.", author: null },
                { text: "Ich bin in letzter Zeit innerlich so ruhig und ausgeglichen und hab trotzdem sooviel Energie. Danke!", author: null },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-secondary/30 border border-primary/10 px-6 py-5 flex flex-col gap-3">
                  <p className="text-foreground/80 text-sm leading-relaxed italic">„{t.text}"</p>
                  {t.author && <p className="text-primary text-xs font-medium tracking-wide">– {t.author}</p>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <Card className="border border-border/40 shadow-none bg-background">
                <CardContent className="pt-5 space-y-2">
                  <p className="font-serif text-base text-foreground">Reiki im TAO Zentrum</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">Während einer Reiki-Sitzung liegst du entspannt auf einer Liege. Ich lege meine Hände sanft auf bestimmte Positionen deines Körpers. Die Energie beginnt dort zu fließen, wo dein System sie gerade braucht.</p>
                  <p className="text-sm font-medium text-primary">ca. 60 Min · 80 €</p>
                </CardContent>
              </Card>
              <Card className="border border-border/40 shadow-none bg-background">
                <CardContent className="pt-5 space-y-2">
                  <p className="font-serif text-base text-foreground">Fernreiki</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">Energie ist nicht an Raum oder Zeit gebunden – sie erreicht dich genau dort, wo du bist. Du darfst es dir bei dir zu Hause bequem machen und zur Ruhe kommen. Du darfst einfach empfangen, ohne etwas zu tun.</p>
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
