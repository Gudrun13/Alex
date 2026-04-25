import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Orbit, Leaf, BookOpen, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
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

const testimonials = [
  { text: "Wow. Danke liebe Alexandra. Meine Migräne ist verschwunden. Dank dir konnte ich meinen Vortrag halten.", category: "Reiki" },
  { text: "Ich bin in letzter Zeit innerlich so ruhig und ausgeglichen und hab trotzdem sooviel Energie. Danke!", category: "Reiki" },
  { text: "Ich weine seit dem ersten Wort und es ist so wahr, was alles kommt. Ich fühle es so sehr und du hast es in Worte gefasst. Ich bin dir mega dankbar!", author: "Simone", category: "Reading" },
  { text: "Wow, ich bin überwältigt. Danke für dein Reading. Es fühlt sich an, als würdest du mich kennen. Was für eine großartige Energie, die ich beim Hören deiner Worte gespürt habe.", category: "Reading" },
  { text: "Liebe Alexandra, ganz ganz herzlichen Dank für den magischen Call und die fantastische Zusammenfassung. Die Seelenreise mit dir war echt das Beste, was ich buchen konnte.", author: "Isabelle", category: "Kurs" },
  { text: "Job gekündigt, nach London gezogen, eine wunderschöne Wohnung manifestiert. Alles durch unsere Sessions zusammen. Ich habe eine so tolle Fähigkeit dazu gewonnen, Intuition 1000-fach gestärkt!", author: "Elena", category: "Kurs" },
];

export default function Angebote() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-32">

        {/* ── HERO ── */}
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

        {/* ── WAS IST FELDLESEN ── */}
        <SectionFade className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/intro-bg.png)" }}
          />
          <div className="absolute inset-0 bg-white/60" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-4">Grundlage meiner Arbeit</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-3">Das ist Feldlesen</h2>
              <p className="font-serif italic text-primary text-lg">Verbinde dich mit dem, was wirklich ist.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { title: "Verbindung & Wahrnehmung", text: "Feldlesen bedeutet, dich bewusst mit Energiefeldern zu verbinden, im Hier und Jetzt zu sein und wahrzunehmen, was da ist. Du stellst Fragen und bekommst klare Impulse, Antworten und Botschaften." },
                { title: "Jeder kann es lernen", text: "Das kannst du lernen, denn diesen Zugang hat jeder in uns. Du kannst dich mit allem verbinden, was eine Energie hat – mit Menschen, Tieren, Pflanzen, Situationen oder auch Themen." },
                { title: "Mehr Möglichkeiten", text: "Im morphischen Feld lernst du, dich von belastenden Energien abzugrenzen, Verstrickungen zu lösen und bewusst neue Impulse zu setzen." },
                { title: "Herzstimme stärken", text: "Durch das Feldlesen stärkst du deine Herzstimme und die Verbindung zu dir selbst. Du triffst Entscheidungen klarer und bekommst Orientierung für deine nächsten Schritte." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-background/70 backdrop-blur-sm rounded-2xl p-5 border border-border/30">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-foreground/70 font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/8 rounded-3xl border border-primary/15 p-6 sm:p-8 max-w-2xl mx-auto text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Was ist das morphische Feld?</p>
              <p className="text-foreground/75 font-light leading-relaxed text-sm">
                Ein feinstoffliches Energiefeld, in dem alle Informationen und Erfahrungen gespeichert sind – von Menschen, Tieren, der Natur und dem Universum. Beim Feldlesen verbinden wir uns bewusst damit. Dieses Wissen geht auf die Forschung von Rupert Sheldrake zurück.
              </p>
            </div>
          </div>
        </SectionFade>

        {/* ── READINGS ── */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Orbit className="text-primary w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Reading im morphischen Feld</h2>
                <p className="text-foreground/60 text-sm font-light mt-0.5">Individuell für dich gelesen · als Audio zugeschickt · <span className="text-primary font-medium">55 €</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4 text-foreground/80 font-light leading-relaxed">
                <p>Readings sind Antworten auf deine Lebens-Fragen und werden im morphischen Feld gelesen. Bei einem Reading stelle ich für dich Fragen und erhalte Antworten in Form von Wörtern oder ganzen Sätzen, Empfindungen oder Bildern.</p>
                <p className="text-sm text-foreground/55 italic">Wichtig: Beim Feldlesen geht es nicht ums Vorhersagen, sondern darum, die aktuelle Energie und die darin liegenden Impulse wahrzunehmen.</p>
              </div>
              <div className="rounded-2xl bg-primary/5 border border-primary/15 p-5 flex flex-col gap-3">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">So läuft es ab</p>
                {["Du wählst dein Reading-Thema", "Ich lese individuell für dich im Feld", "Du bekommst dein Audio innerhalb einer Woche", "Preis: 55 €"].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/70 font-light">
                    <span className="w-5 h-5 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-medium flex-shrink-0">{i + 1}</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-foreground/55 font-medium uppercase tracking-widest mb-4">Wähle dein Reading-Thema</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
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

            <div className="text-right">
              <a href="/kontakt" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group">
                Jetzt anfragen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </SectionFade>

        {/* Bild-Trenner */}
        <div className="w-full h-52 overflow-hidden">
          <img src="/reiki.png" alt="Reiki" className="w-full h-full object-cover object-center" />
        </div>

        {/* ── REIKI ── */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-primary w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Reiki & Fernreiki</h2>
                <p className="text-foreground/60 text-sm font-light mt-0.5">Vor Ort in Droß oder als Fernbehandlung</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4 text-foreground/80 font-light leading-relaxed">
                <p>Reiki bedeutet übersetzt „universelle Lebensenergie" – eine japanische Heilmethode, die deine Selbstheilungskräfte aktiviert und den Energiefluss in deinem Körper wieder in Gang bringt.</p>
                <p>Genau richtig für dich, wenn du dich ausgelaugt fühlst, an alten Themen hängst oder ständiges Gedankenkarussell hast.</p>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="benefits" className="rounded-2xl border border-border/50 overflow-hidden bg-background">
                  <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-secondary/20 transition-colors text-sm font-medium text-foreground/70">
                    Reiki kann außerdem helfen bei …
                  </AccordionTrigger>
                  <AccordionContent className="px-5">
                    <ul className="grid grid-cols-1 gap-1.5 py-1 text-sm text-foreground/65">
                      {["Stress reduzieren", "Schmerzen lindern", "Schlafqualität verbessern", "Innere Ruhe – Nervensystem regulieren", "Müdigkeit & Energielosigkeit", "Regulation der Emotionen", "Stärkung des Immunsystems", "Klarheit gewinnen", "Körperliche & seelische Blockaden lösen"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2"><span className="text-primary/50">–</span>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Card className="border border-border/40 shadow-none bg-background">
                <CardContent className="pt-5 space-y-2">
                  <p className="font-serif text-base text-foreground">Reiki im TAO Zentrum</p>
                  <p className="text-xs text-foreground/60 leading-relaxed">Handauflegen auf bestimmte Positionen – die Energie kann frei fließen.<br />Herrengasse 50, 3552 Droß</p>
                  <p className="text-sm font-medium text-primary">ca. 60 Min · 80 €</p>
                </CardContent>
              </Card>
              <Card className="border border-border/40 shadow-none bg-background">
                <CardContent className="pt-5 space-y-2">
                  <p className="font-serif text-base text-foreground">Fernreiki</p>
                  <p className="text-xs text-foreground/60 leading-relaxed">Egal wo du dich befindest – die Energie findet zu dir und fließt immer. Du darfst es dir bequem machen.</p>
                  <p className="text-sm font-medium text-primary">ca. 45 Min · 60 €</p>
                </CardContent>
              </Card>
            </div>

            <a href="/kontakt" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group">
              Termin vereinbaren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </SectionFade>

        {/* ── HARMONISIERUNGEN ── */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="text-primary w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Harmonisierungen</h2>
                <p className="text-foreground/60 text-sm font-light mt-0.5">Hochfrequente Audio · individuell für dich · <span className="text-primary font-medium">45 €</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-foreground/80 font-light leading-relaxed">
                <p>Eine Harmonisierung ist eine hochfrequente Audio, die deine Schwingung erhöht. Jede Harmonisierung wird individuell für dich im Feld gelesen und entfaltet ihre Wirkung besonders, wenn du sie regelmäßig anhörst.</p>
                <p className="text-sm text-foreground/60">Du bekommst deine Harmonisierung innerhalb einer Woche als Audio zugeschickt.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Wähle deine Energie</p>
                <div className="flex flex-wrap gap-2">
                  {["Frieden", "Vertrauen", "Selbstliebe", "Freude", "Fülle", "Leichtigkeit", "Mut", "Klarheit"].map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="/kontakt" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group">
                Jetzt anfragen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </SectionFade>

        {/* ── INNERES ERWACHEN ── */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-10">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="text-primary w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <h2 className="text-2xl sm:text-3xl font-serif text-foreground">Inneres Erwachen & Seelenreise</h2>
                  <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-0.5 rounded-full">Fortbildung</span>
                </div>
                <p className="text-foreground/60 text-sm font-light">8 Wochen · 1:1 Begleitung · Preis auf Anfrage</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
              <div className="space-y-4 text-foreground/80 font-light leading-relaxed">
                <p>In diesem Kurs lernst du, deiner Intuition wieder klar zu vertrauen und sie ganz bewusst einzusetzen. Du übst, feiner zu spüren, innere Signale wahrzunehmen und Entscheidungen bewusst aus einem tiefen Gefühl von Klarheit und Vertrauen heraus zu treffen.</p>
                <p>Du lernst, deiner Wahrnehmung wieder zu vertrauen, löst innere Blockaden und alte Gedankenmuster. Du holst Botschaften und Impulse aus deinem Energiefeld und lernst, wie du dich mit anderen Energien verbindest.</p>
              </div>
              <div className="rounded-2xl bg-background border border-border/40 p-5 space-y-3">
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

            <a href="/kontakt" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group">
              Jetzt anfragen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </SectionFade>

        {/* ── TESTIMONIALS ── */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-serif text-foreground">Was andere sagen</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <Card key={i} className="border-none shadow-md bg-card hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full justify-between">
                    <p className="font-serif italic text-lg text-foreground/80 leading-relaxed mb-6">„{t.text}"</p>
                    <div className="flex items-center justify-between">
                      {t.author && <p className="text-sm font-medium text-primary">— {t.author}</p>}
                      <span className="ml-auto text-xs text-foreground/40 tracking-widest uppercase">{t.category}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="rounded-full px-8 shadow-sm">
                <a href="/kontakt">Jetzt anfragen</a>
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
