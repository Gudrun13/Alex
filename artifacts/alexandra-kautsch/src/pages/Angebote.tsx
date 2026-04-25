import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Orbit, Leaf, BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Angebote() {
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
            Meine Angebote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-foreground/70 text-lg font-light"
          >
            Wege zu deiner inneren Kraft.
          </motion.p>
        </section>

        {/* Cards */}
        <SectionFade className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

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
                  <a href="/#kontakt" className="inline-flex items-center gap-1 text-primary text-xs font-medium hover:text-primary/80 transition-colors whitespace-nowrap">
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

            {/* Zeile 2: Reiki + Harmonisierungen */}
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
                  <a href="/#kontakt" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link">
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
                  <a href="/#kontakt" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link">
                    Jetzt anfragen <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Inneres Erwachen */}
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
                  <a href="/#kontakt" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link">
                    Jetzt anfragen <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
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
