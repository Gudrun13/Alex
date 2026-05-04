import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { ArrowLeft, ArrowRight, Orbit } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Link } from "wouter";

const readings = [
  { title: "Body Reading", subtitle: "Körper · Selbstfürsorge · Balance", questions: ["Was braucht dein Körper aktuell, um sich sicher zu fühlen?", "Welche Belastung wirkt sich gerade am stärksten auf deinen Körper aus?", "Was darf dein Körper jetzt loslassen, um in Balance zu kommen?", "Wie kannst du deinen Körper liebevoll unterstützen und annehmen?"] },
  { title: "Soul Reading", subtitle: "Seele · Lebensweg · Vertrauen", questions: ["Was ist die zentrale Aufgabe deiner Seele in diesem Leben?", "Was darfst du hier auf der Erde lernen und verkörpern?", "Wie kannst du dich noch mehr mit deiner Seele verbinden?", "Was hilft dir, deinem Seelenweg mehr zu vertrauen?"] },
  { title: "Inner Alignment Reading", subtitle: "Einklang · Selbstwert · Klarheit", questions: ["Wie bringst du dich wieder in Einklang mit dir selbst?", "Was hilft dir, deiner inneren Führung zu vertrauen?", "Wie kannst du dich selbst noch mehr sehen, anerkennen und wertschätzen?", "Wie kannst du deine Grenzen im Außen noch klarer setzen?"] },
  { title: "Inner Balance Reading", subtitle: "Emotionen · Präsenz · Regulierung", questions: ["Wie gelingt es dir, im gegenwärtigen Moment zu leben?", "Wie schaffst du es, alle deine Emotionen gesund zu leben?", "Wie kannst du eingeschlossene Emotionen energetisch freisetzen?", "Was braucht dein Nervensystem aktuell, um sich zu regulieren?"] },
  { title: "Feminine Reading", subtitle: "Weiblichkeit · Heilung · Kraft", questions: ["Wie kannst du deine Weiblichkeit noch tiefer leben?", "Welche Rituale helfen dir, deine weibliche Energie zu stärken?", "Wie kannst du alte Wunden und Glaubenssätze heilen, die dich in deiner Weiblichkeit blockieren?", "Wie kannst du deinen Menstruationszyklus als kraftvolle Ressource nutzen?"] },
];

export default function Reading() {
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/15 mb-6"
            >
              <Orbit className="text-primary w-6 h-6" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              Individuell · Als Audio · 55 €
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-6 leading-tight"
            >
              Reading im morphischen Feld
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-serif italic text-primary text-lg sm:text-xl"
            >
              Antworten auf deine Lebensfragen – direkt aus dem Feld.
            </motion.p>
          </div>
        </section>

        {/* Was ist ein Reading */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>Kennst du das Gefühl, dass dich eine Frage nicht loslässt und dass du immer wieder darüber nachdenkst, aber keine klare Antwort findest?</p>
                <p>Vielleicht spürst du, dass da mehr ist. Eine innere Stimme, die sich meldet, die du aber nicht richtig greifen kannst.</p>
                <p className="font-medium text-foreground">Genau hier setzt ein Reading an.</p>
                <p>Readings sind Antworten auf deine Lebensfragen und werden im morphischen Feld gelesen. Bei einem Reading stelle ich für dich Fragen und erhalte Antworten in Form von Wörtern, Empfindungen oder Bildern.</p>
                <p>Jedes Reading wird individuell für dich gelesen. Gerne kannst du dir auch ein eigenes Reading aus den Fragen zusammenstellen, die dich gerade beschäftigen.</p>
                <p className="text-sm text-foreground/85 italic">Wichtig: Beim Feldlesen geht es nicht darum, die Zukunft vorherzusagen, sondern darum, die aktuelle Energie und die darin liegenden Impulse wahrzunehmen, damit du wieder klarer spürst, was für dich stimmig ist.</p>
              </div>
              <div className="rounded-2xl bg-primary/5 border border-primary/15 p-6 flex flex-col gap-3">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">So läuft es ab</p>
                {["Du wählst dein Reading-Thema", "Ich lese individuell für dich im Feld", "Du bekommst dein Audio innerhalb einer Woche", "Preis: 55 €"].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-foreground/80 font-light">
                    <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-medium flex-shrink-0">{i + 1}</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { text: "Ich weine seit dem ersten Wort und es ist so wahr, was alles kommt. Ich fühle es so sehr und du hast es in Worte gefasst. Ich bin dir mega dankbar!", author: "Simone" },
                { text: "Wow, ich bin überwältigt. Danke für dein Reading. Es fühlt sich an, als würdest du mich kennen. Was für eine großartige Energie, die ich beim Hören deiner Worte gespürt habe.", author: null },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-secondary/30 border border-primary/10 px-6 py-5 flex flex-col gap-3">
                  <p className="text-foreground/80 text-sm leading-relaxed italic">„{t.text}"</p>
                  {t.author && <p className="text-primary text-xs font-medium tracking-wide">– {t.author}</p>}
                </div>
              ))}
            </div>

            <p className="text-sm text-foreground/85 font-medium uppercase tracking-widest mb-6">Wähle dein Reading-Thema</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
              {readings.map((r, i) => (
                <Accordion key={i} type="single" collapsible>
                  <AccordionItem value="item" className="rounded-2xl border border-border/50 overflow-hidden bg-secondary/20">
                    <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-secondary/30 transition-colors">
                      <div className="flex flex-col items-start gap-0.5">
                        <span className="font-serif text-base text-foreground">{r.title}</span>
                        <span className="text-primary/70 text-xs font-light">{r.subtitle}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <ul className="space-y-2 py-1">
                        {r.questions.map((q, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
                            <span className="text-primary/50 flex-shrink-0 mt-0.5">–</span>{q}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
              >
                Jetzt anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
