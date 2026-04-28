import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { Sparkles, Orbit, BookOpen, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const testimonials = [
  { text: "Wow. Danke liebe Alexandra. Meine Migräne ist verschwunden. Dank dir konnte ich meinen Vortrag halten.", category: "Reiki" },
  { text: "Ich bin in letzter Zeit innerlich so ruhig und ausgeglichen und hab trotzdem sooviel Energie. Danke!", category: "Reiki" },
  { text: "Ich weine seit dem ersten Wort und es ist so wahr, was alles kommt. Ich fühle es so sehr und du hast es in Worte gefasst. Ich bin dir mega dankbar!", author: "Simone", category: "Reading" },
  { text: "Wow, ich bin überwältigt. Danke für dein Reading. Es fühlt sich an, als würdest du mich kennen. Was für eine großartige Energie, die ich beim Hören deiner Worte gespürt habe.", category: "Reading" },
  { text: "Liebe Alexandra, ganz ganz herzlichen Dank für den magischen Call und die fantastische Zusammenfassung. Die Seelenreise mit dir war echt das Beste, was ich buchen konnte.", author: "Isabelle", category: "Kurs" },
  { text: "Job gekündigt, nach London gezogen, eine wunderschöne Wohnung manifestiert. Alles durch unsere Sessions zusammen. Ich habe eine so tolle Fähigkeit dazu gewonnen, Intuition 1000-fach gestärkt!", author: "Elena", category: "Kurs" },
];

const angebote = [
  {
    href: "/reading",
    icon: <Orbit className="text-primary w-6 h-6" />,
    label: "Individuell · Als Audio · 55 €",
    title: "Reading im morphischen Feld",
    desc: "Antworten auf deine Lebensfragen – individuell für dich im morphischen Feld gelesen und als Audio zugeschickt.",
    cta: "Mehr erfahren",
  },
  {
    href: "/reiki",
    icon: <Sparkles className="text-primary w-6 h-6" />,
    label: "Vor Ort oder Fernbehandlung",
    title: "Reiki & Fernreiki",
    desc: "Eine japanische Heilmethode, die deine Selbstheilungskräfte aktiviert und den Energiefluss in deinem Körper wieder in Gang bringt.",
    cta: "Mehr erfahren",
  },
  {
    href: "/inneres-erwachen",
    icon: <BookOpen className="text-primary w-6 h-6" />,
    label: "8 Wochen · 1:1 Begleitung",
    title: "Inneres Erwachen",
    desc: "Lerne, deiner Intuition wieder zu vertrauen, innere Blockaden zu lösen und Entscheidungen aus einem tiefen Gefühl von Klarheit zu treffen.",
    cta: "Mehr erfahren",
    badge: "Fortbildung",
  },
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

        {/* ── ANGEBOTE KARTEN ── */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-3">Was ich anbiete</h2>
              <p className="text-foreground/60 font-light">Wähle das Angebot, das zu dir passt.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {angebote.map((a, i) => (
                <Link key={i} href={a.href}>
                  <div className="group relative flex flex-col h-full rounded-3xl border border-border/40 bg-card p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    {a.badge && (
                      <span className="absolute top-5 right-5 text-xs font-semibold bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full">
                        {a.badge}
                      </span>
                    )}
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 flex-shrink-0">
                      {a.icon}
                    </div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{a.label}</p>
                    <h3 className="font-serif text-xl text-foreground mb-3 leading-snug">{a.title}</h3>
                    <p className="text-sm text-foreground/65 font-light leading-relaxed flex-1">{a.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      {a.cta} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* ── TESTIMONIALS ── */}
        <SectionFade className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-serif text-foreground">Was andere sagen</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="rounded-3xl border-none shadow-md bg-card hover:-translate-y-1 transition-transform duration-300 p-8 flex flex-col justify-between">
                  <p className="font-serif italic text-lg text-foreground/80 leading-relaxed mb-6">„{t.text}"</p>
                  <div className="flex items-center justify-between">
                    {t.author && <p className="text-sm font-medium text-primary">— {t.author}</p>}
                    <span className="ml-auto text-xs text-foreground/40 tracking-widest uppercase">{t.category}</span>
                  </div>
                </div>
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
