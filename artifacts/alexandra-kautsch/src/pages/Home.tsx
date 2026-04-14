import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Orbit, Leaf, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  subject: z.string().optional(),
  message: z.string().min(10, "Deine Nachricht ist noch etwas kurz."),
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative flex items-center min-h-[80vh] px-6 sm:px-10 lg:px-16 overflow-hidden"
        >
          {/* Decorative orbs */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[3%] w-80 h-80 rounded-full bg-primary/40 blur-2xl pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[5%] right-[5%] w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-2xl pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-[35%] right-[18%] w-56 h-56 rounded-full bg-primary/25 blur-xl pointer-events-none"
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full pt-52 pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-primary font-bold tracking-widest uppercase text-base sm:text-lg mb-6"
              >
                Energiearbeit · Reiki · Feldlesen
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-foreground leading-tight mb-6"
              >
                vom Kopf ins Herz
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <span className="flex-1 max-w-[80px] h-px bg-primary/40" />
                <span className="font-serif italic text-primary text-lg sm:text-xl tracking-wide">
                  Komm zur Ruhe, finde deine Mitte.
                </span>
                <span className="flex-1 max-w-[80px] h-px bg-primary/40" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55 }}
                className="text-lg sm:text-xl text-foreground/70 font-light mb-10 leading-relaxed"
              >
                Für Dich, wenn Du wieder bei dir ankommen möchtest.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  asChild
                  className="rounded-full text-base px-8 h-14 shadow-sm"
                >
                  <a href="#kontakt">Termin vereinbaren</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full text-base px-8 h-14"
                >
                  <a href="#angebote">Angebote entdecken</a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.1 }}
                className="mt-16 flex justify-center"
              >
                <a href="#einfuehrung" className="flex flex-col items-center gap-2 text-primary/70 hover:text-primary transition-colors group">
                  <span className="text-xs tracking-widest uppercase font-light">Entdecken</span>
                  <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <SectionFade id="einfuehrung" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/intro-bg.png)' }}
          />
          <div className="absolute inset-0 bg-white/50" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif mb-10 text-foreground">Das ist Feldlesen</h2>
            <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed">
              <p>
                Feldlesen bedeutet, dich bewusst mit Energiefeldern zu verbinden, im Hier und Jetzt zu sein und wahrzunehmen, was da ist. Du stellst Fragen und bekommst klare Impulse, Antworten und Botschaften.
              </p>
              <p>
                Das kannst du lernen, denn diesen Zugang hat jeder in uns. Du kannst dich mit allem verbinden, was eine Energie hat – mit Menschen, Tieren, Pflanzen, Situationen oder auch Themen.
              </p>
              <p>
                Im morphischen Feld ist noch viel mehr möglich: Du lernst, dich von belastenden Energien abzugrenzen, Verstrickungen zu lösen und bewusst neue Impulse zu setzen.
              </p>
              <p>
                Durch das Feldlesen stärkst du deine Herzstimme und die Verbindung zu dir selbst. Du triffst Entscheidungen klarer, spürst, was für dich stimmig ist, und bekommst Orientierung für deine nächsten Schritte.
              </p>
            </div>
            <div className="w-16 h-px bg-primary/40 mx-auto mt-16" />
          </div>
        </SectionFade>

        {/* SERVICES */}
        <SectionFade id="angebote" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground mb-4">Meine Angebote</h2>
              <p className="text-foreground/70 text-lg">Wege zu deiner inneren Kraft.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 – Reading */}
              <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card group md:col-span-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Orbit className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-serif">Reading im morphischen Feld</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-foreground/80 font-light">
                  <p>
                    Readings sind Antworten auf deine Lebens-Fragen und werden im morphischen Feld gelesen. Das morphische Feld ist ein feinstoffliches Energiefeld, in dem alle Informationen und Erfahrungen gespeichert sind.
                  </p>
                  <p>
                    Bei einem Reading stelle ich für dich Fragen und erhalte Antworten in Form von Wörtern oder ganzen Sätzen, Empfindungen oder Bildern. Diese Informationen gebe ich dir per Audio weiter.
                  </p>
                  <p className="text-sm text-foreground/60 italic">
                    Wichtig: Beim Feldlesen geht es nicht ums Vorhersagen, sondern darum, die aktuelle Energie und die darin liegenden Impulse wahrzunehmen.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <span className="flex-1 h-px bg-border/60" />
                    <span className="text-xs text-foreground/50 tracking-widest uppercase font-medium">Wähle dein Reading</span>
                    <span className="flex-1 h-px bg-border/60" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Body Reading", subtitle: "Körper, Selbstfürsorge, Balance", questions: ["Was braucht dein Körper aktuell, um sich sicher zu fühlen?", "Welche Belastung wirkt sich gerade am stärksten auf deinen Körper aus?", "Was darf dein Körper jetzt loslassen, um in Balance zu kommen?", "Wie kannst du deinen Körper liebevoll unterstützen und annehmen?"] },
                      { title: "Soul Reading", subtitle: "Seele, Lebensweg, Vertrauen", questions: ["Was ist die zentrale Aufgabe deiner Seele in diesem Leben?", "Was darfst du hier auf der Erde lernen und verkörpern?", "Wie kannst du dich noch mehr mit deiner Seele verbinden?", "Was hilft dir, deinem Seelenweg mehr zu vertrauen?"] },
                      { title: "Inner Alignment Reading", subtitle: "Einklang, Selbstwert, Klarheit", questions: ["Wie bringst du dich wieder in Einklang mit dir selbst?", "Was hilft dir, deiner inneren Führung zu vertrauen?", "Wie kannst du dich selbst noch mehr sehen, anerkennen und wertschätzen?", "Wie kannst du deine Grenzen im Außen noch klarer setzen?"] },
                      { title: "Inner Balance Reading", subtitle: "Emotionen, Präsenz, Regulierung", questions: ["Wie gelingt es dir, im gegenwärtigen Moment zu leben?", "Wie schaffst du es, alle deine Emotionen gesund zu leben?", "Wie kannst du eingeschlossene Emotionen energetisch freisetzen?", "Was braucht dein Nervensystem aktuell, um sich zu regulieren?"] },
                      { title: "Feminine Reading", subtitle: "Weiblichkeit, Heilung, Kraft", questions: ["Wie kannst du deine Weiblichkeit noch tiefer leben?", "Welche Rituale helfen dir, deine weibliche Energie zu stärken?", "Wie kannst du alte Wunden und Glaubenssätze heilen, die dich in deiner Weiblichkeit blockieren?", "Wie kannst du deinen Menstruationszyklus als kraftvolle Ressource nutzen?"] },
                    ].map((r, i) => (
                      <Accordion key={i} type="single" collapsible>
                        <AccordionItem value="item" className="rounded-2xl border border-border/50 overflow-hidden bg-secondary/20">
                          <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-secondary/30 transition-colors">
                            <div className="flex flex-col items-start gap-0.5">
                              <span className="font-serif text-base text-foreground">{r.title}</span>
                              <span className="text-primary/70 text-xs tracking-wide font-light">{r.subtitle}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4">
                            <ul className="space-y-2 py-1">
                              {r.questions.map((q, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-foreground/65 leading-relaxed">
                                  <span className="text-primary/50 flex-shrink-0 mt-0.5">–</span>{q}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎧</span>
                      <div>
                        <p className="font-serif text-sm text-foreground">Dein persönliches Reading</p>
                        <p className="text-xs text-foreground/60 font-light">Individuell für dich gelesen – du bekommst dein Reading innerhalb einer Woche als Audio zugeschickt.</p>
                        <p className="text-xs font-medium text-primary mt-1">55 €</p>
                      </div>
                    </div>
                    <a href="#kontakt" className="inline-flex items-center gap-1 text-primary text-xs font-medium hover:text-primary/80 transition-colors whitespace-nowrap">
                      Jetzt anfragen <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Trenner-Bild */}
              <div className="md:col-span-2 w-full h-56 rounded-3xl overflow-hidden">
                <img
                  src="/reiki.png"
                  alt="Reiki – Heilende Hände"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Zeile 2: Reiki + Harmonisierungen nebeneinander */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Reiki */}
                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="text-primary w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-serif">Reiki & Fernreiki</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-foreground/80 font-light">
                    <p>
                      Reiki bedeutet übersetzt „universelle Lebensenergie", ist eine japanische Heilmethode, aktiviert deine Selbstheilungskräfte und bringt den Energiefluss in deinem Körper wieder in Gang.
                    </p>
                    <p>
                      Genau richtig für dich, wenn du dich ausgelaugt fühlst, an alten Themen hängst oder ständiges Gedankenkarussell hast.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="benefits" className="rounded-2xl border border-border/50 overflow-hidden bg-secondary/20">
                        <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-secondary/30 transition-colors text-sm font-medium text-foreground/70">
                          Reiki kann außerdem helfen bei …
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                          <ul className="space-y-1.5 py-1 text-sm text-foreground/65">
                            {["Stress reduzieren", "Schmerzen lindern", "Schlafqualität verbessern", "Nervensystem regulieren – innere Ruhe", "Müdigkeit & Energielosigkeit", "Regulation der Emotionen", "Stärkung des Immunsystems", "Klarheit gewinnen", "Körperliche & seelische Blockaden lösen"].map((item, i) => (
                              <li key={i} className="flex items-center gap-1.5"><span className="text-primary/50">–</span>{item}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="rounded-xl bg-secondary/40 p-3">
                        <p className="font-medium text-foreground/80 mb-1 text-sm">Reiki im TAO Zentrum</p>
                        <p className="text-xs text-foreground/60 leading-relaxed">Handauflegen auf bestimmte Positionen – die Energie kann frei fließen. Herrengasse 50, 3552 Droß</p>
                        <p className="text-xs font-medium text-primary mt-2">ca. 60 Min · 80 €</p>
                      </div>
                      <div className="rounded-xl bg-secondary/40 p-3">
                        <p className="font-medium text-foreground/80 mb-1 text-sm">Fernreiki</p>
                        <p className="text-xs text-foreground/60 leading-relaxed">Egal wo du dich befindest – die Energie findet zu dir und fließt immer. Du darfst es dir bequem machen.</p>
                        <p className="text-xs font-medium text-primary mt-2">ca. 45 Min · 60 €</p>
                      </div>
                    </div>
                    <a href="#kontakt" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link">
                      Termin vereinbaren <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>

                {/* Harmonisierungen */}
                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="text-primary w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-serif">Harmonisierungen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-foreground/80 font-light">
                    <p>
                      Eine Harmonisierung ist eine hochfrequente Audio, die deine Schwingung erhöht. Jede Harmonisierung wird individuell für dich im Feld gelesen.
                    </p>
                    <div>
                      <p className="text-sm text-foreground/60 mb-2">Wähle dein Thema – in welcher Energie möchtest du sein?</p>
                      <div className="flex flex-wrap gap-2">
                        {["Frieden", "Vertrauen", "Selbstliebe", "Freude", "Fülle", "Leichtigkeit", "Mut", "Klarheit"].map((t, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/70">
                      Die Harmonisierungen entfalten ihre Wirkung ganz besonders, wenn du sie regelmäßig anhörst und immer wieder in diese Energie eintauchst.
                    </p>
                    <p className="text-sm text-foreground/60">Du bekommst deine Harmonisierung innerhalb einer Woche als Audio zugeschickt.</p>
                    <p className="text-sm font-medium text-primary">45 €</p>
                    <a href="#kontakt" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link">
                      Jetzt anfragen <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Zeile 3: Inneres Erwachen – allein zentriert */}
              <div className="md:col-span-2 flex justify-center">
                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card group relative overflow-hidden w-full md:max-w-xl">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-bl-xl">
                    Fortbildung
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="text-primary w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-serif">Inneres Erwachen & Seelenreise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-foreground/80 font-light">
                    <p>
                      In diesem Kurs lernst du, deiner Intuition wieder klar zu vertrauen und sie ganz bewusst einzusetzen. Du übst, feiner zu spüren, innere Signale wahrzunehmen und Entscheidungen bewusst aus einem tiefen Gefühl von Klarheit und Vertrauen heraus zu treffen.
                    </p>
                    <p>
                      Du lernst, deiner Wahrnehmung wieder zu vertrauen, löst innere Blockaden und alte Gedankenmuster. Du holst Botschaften und Impulse aus deinem Energiefeld und lernst, wie du dich mit anderen Energien verbindest.
                    </p>
                    <p className="text-sm text-foreground/70">
                      Die Begleitung findet 1:1 statt. 8 Wochen, 1x pro Woche – Termine werden individuell vereinbart.
                    </p>
                    <p className="text-sm font-medium text-primary">Preis auf Anfrage</p>
                    <a href="#kontakt" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link">
                      Jetzt anfragen <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>


          </div>
        </SectionFade>

        {/* TARGET AUDIENCE */}
        <SectionFade id="fuerwen" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/intro-bg.png)' }}
          />
          <div className="absolute inset-0 bg-white/50" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground mb-4">Für dich, wenn...</h2>
              <p className="text-foreground/80 text-lg">
                Du bist hier genau richtig, wenn du dich in einem dieser Bilder erkennst:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "du Klarheit für deinen Weg und deine Ziele möchtest",
                "du Entscheidungen leichter und schneller treffen willst",
                "du innere Blockaden lösen willst",
                "du deine Wünsche & Ziele bewusster manifestieren möchtest",
                "du noch mehr Leichtigkeit und Freude in deinem Leben haben willst",
                "du zu dir selbst stehen und dein Selbstbewusstsein stärken willst",
                "du deine Gesundheit energetisch unterstützen willst",
                "du schon als Energetiker:in, Trainer:in oder Coach tätig bist und deine Kund:innen noch tiefer begleiten möchtest"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/40 hover:bg-background transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* ABOUT ME */}
        <SectionFade id="uebermich" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[520px] w-full max-w-md mx-auto">
              {/* Hinteres Foto — Praxisraum */}
              <div className="absolute bottom-0 left-0 w-72 h-80 rounded-3xl overflow-hidden shadow-xl z-0">
                <img
                  src="/alex-praxis.jpg"
                  alt="Alexandra Kautsch in ihrem Praxisraum"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Vorderes Foto — Portrait */}
              <div className="absolute top-0 right-0 w-60 h-72 rounded-3xl overflow-hidden shadow-2xl z-10 ring-4 ring-background">
                <img
                  src="/alex-sofa.jpg"
                  alt="Alexandra Kautsch"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Drittes Foto — kleines Overlay */}
              <div className="absolute bottom-4 right-0 w-32 h-36 rounded-2xl overflow-hidden shadow-xl z-20 ring-2 ring-background">
                <img
                  src="/alex-kaffee.jpg"
                  alt="Alexandra Kautsch"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-serif text-foreground">Das bin ich</h2>
              <div className="space-y-5 text-lg text-foreground/80 font-light leading-relaxed">
                <p>
                  Mein Name ist Alexandra, ich bin Mama von zwei Töchtern und lebe in Niederösterreich. Energiearbeit begleitet mich schon viele Jahre und ist ein wichtiger Teil meines Lebens geworden.
                </p>
                <p>
                  Vor über 20 Jahren habe ich begonnen, mich intensiver mit Seelenarbeit zu beschäftigen und eine Ausbildung zur Energetiktrainerin gemacht. Danach folgten weitere Ausbildungen in Reiki (Grad 1, 2 und Meister), Aroma Touch und Lesen und Erschaffen im morphischen Feld dazu.
                </p>
                <p>
                  Heute begleite ich Frauen dabei, wieder mehr bei sich anzukommen und sich selbst besser zu spüren. Mit Feldlesungen und Reiki unterstütze ich sie, innere Blockaden zu lösen, ihre Selbstheilungskräfte zu aktivieren und sich mit ihrem Potenzial zu verbinden.
                </p>
              </div>
            </div>
          </div>
        </SectionFade>

        {/* TESTIMONIALS */}
        <SectionFade id="stimmen" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground">Was andere sagen</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  text: "Wow. Danke liebe Alexandra. Meine Migräne ist verschwunden. Dank dir konnte ich meinen Vortrag halten.",
                  category: "Reiki"
                },
                {
                  text: "Ich bin in letzter Zeit innerlich so ruhig und ausgeglichen und hab trotzdem sooviel Energie. Danke!",
                  category: "Reiki"
                },
                {
                  text: "Ich weine seit dem ersten Wort und es ist so wahr, was alles kommt. Ich fühle es so sehr und du hast es in Worte gefasst. Ich bin dir mega dankbar!",
                  author: "Simone",
                  category: "Reading"
                },
                {
                  text: "Wow, ich bin überwältigt. Danke für dein Reading. Es fühlt sich an, als würdest du mich kennen. Was für eine großartige Energie, die ich beim Hören deiner Worte gespürt habe.",
                  category: "Reading"
                },
                {
                  text: "Liebe Alexandra, ganz ganz herzlichen Dank für den magischen Call und die fantastische Zusammenfassung. Die Seelenreise mit dir war echt das Beste, was ich buchen konnte.",
                  author: "Isabelle",
                  category: "Kurs"
                },
                {
                  text: "Job gekündigt, nach London gezogen, eine wunderschöne Wohnung manifestiert. Alles durch unsere Sessions zusammen. Ich habe eine so tolle Skill dazu gewonnen, Intuition 1000-fach gestärkt!",
                  author: "Elena",
                  category: "Kurs"
                }
              ].map((testimonial, i) => (
                <Card key={i} className="border-none shadow-md bg-background hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full justify-between">
                    <p className="font-serif italic text-lg text-foreground/80 leading-relaxed mb-6">
                      „{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      {testimonial.author && (
                        <p className="text-sm font-medium text-primary">— {testimonial.author}</p>
                      )}
                      <span className="ml-auto text-xs text-foreground/40 tracking-widest uppercase">{testimonial.category}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* CONTACT */}
        <SectionFade id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">Du möchtest einen ersten Schritt machen?</h2>
              <p className="text-foreground/70 text-lg">
                Ich freue mich auf deine Nachricht.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50">
              
              <div className="md:col-span-3 p-8 sm:p-10">
                <ContactForm />
              </div>

              <div className="md:col-span-2 bg-primary/10 p-8 sm:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/50">
                <h3 className="font-serif text-2xl mb-6 text-foreground">Kontakt Details</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-1">E-Mail</p>
                    <a href="mailto:energiearbeit@alexandra-kautsch.at" className="text-lg text-primary hover:text-primary/80 transition-colors font-medium break-all">
                      energiearbeit@alexandra-kautsch.at
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-1">Ort</p>
                    <p className="text-lg text-foreground/90 font-light">
                      Langenlois, Niederösterreich & online
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </SectionFade>
      </main>

      <Footer />
    </div>
  );
}

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  }

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-serif">Vielen Dank für deine Nachricht.</h3>
        <p className="text-foreground/70 font-light">
          Ich habe deine Anfrage erhalten und werde mich innerhalb von 1–2 Werktagen bei dir melden.
        </p>
        <Button 
          variant="outline" 
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }} 
          className="mt-6 rounded-full"
        >
          Weitere Nachricht senden
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Dein Name" className="bg-background rounded-xl border-border/50 focus-visible:ring-primary/20 h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input placeholder="Deine E-Mail" type="email" className="bg-background rounded-xl border-border/50 focus-visible:ring-primary/20 h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Betreff (Optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background rounded-xl border-border/50 focus:ring-primary/20 h-12">
                    <SelectValue placeholder="Wähle ein Thema" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-xl border-border/50 shadow-lg">
                  <SelectItem value="reiki">Reiki & Fernreiki</SelectItem>
                  <SelectItem value="reading">Reading im morphischen Feld</SelectItem>
                  <SelectItem value="harmonisierung">Harmonisierung</SelectItem>
                  <SelectItem value="kurs">Inneres Erwachen & Seelenreise</SelectItem>
                  <SelectItem value="sonstiges">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nachricht</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Wie kann ich dich unterstützen?" 
                  className="resize-none min-h-[120px] bg-background rounded-xl border-border/50 focus-visible:ring-primary/20" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full rounded-full h-12 shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5">
          Nachricht senden
        </Button>
      </form>
    </Form>
  );
}
