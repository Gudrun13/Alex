import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const testimonials = [
  { text: "Ich weine seit dem ersten Wort und es ist so wahr, was alles kommt. Ich fühle es so sehr und du hast es in Worte gefasst. Ich bin dir mega dankbar!", author: "Simone", label: "Reading" },
  { text: "Wow, ich bin überwältigt. Danke für dein Reading. Es fühlt sich an, als würdest du mich kennen. Was für eine großartige Energie, die ich beim Hören deiner Worte gespürt habe.", author: null, label: "Reading" },
  { text: "Wow. Danke liebe Alexandra. Meine Migräne ist verschwunden. Dank dir konnte ich meinen Vortrag halten.", author: null, label: "Reiki" },
  { text: "Ich bin in letzter Zeit innerlich so ruhig und ausgeglichen und hab trotzdem sooviel Energie. Danke!", author: null, label: "Reiki" },
];

const angebote = [
  {
    href: "/eins-zu-eins",
    title: "1:1 Session",
    desc: "In der 1:1 Begleitung tauchen wir gemeinsam in dein Thema ein, lösen Blockaden und bringen dich zurück in dein Spüren und Vertrauen.",
    cta: "Zur 1:1 Session",
    meta: "Per Zoom · 60 Min. · 80,–",
  },
  {
    href: "/reading",
    title: "Readings",
    desc: "Ein Reading hilft dir dabei, deine aktuelle Situation klarer zu sehen und besser zu verstehen, was innerlich gerade wirkt. Es bringt Struktur in das, was du vielleicht schon spürst und es hilft dir, deine nächsten Schritte zu gehen.",
    cta: "Zu den Readings",
    meta: null,
  },
  {
    href: "/reiki",
    title: "Reiki",
    desc: "Deine energetische Unterstützung zur Entlastung und Stärkung von Körper, Geist & Seele.",
    cta: "Zu Reiki",
    meta: null,
  },
  {
    href: "/inneres-erwachen",
    title: 'Feldlesen lernen \u2013 Kurs \u201EInneres Erwachen\u201C',
    desc: "Wenn du lernen möchtest, dein eigenes Energiefeld bewusster wahrzunehmen und im morphischen Feld für andere zu lesen.",
    cta: 'Zum Kurs \u201EInneres Erwachen\u201C',
    meta: null,
  },
];

export default function Angebote() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 lg:pt-32">

        {/* ── INTRO ── */}
        <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl font-serif font-light text-foreground leading-snug mb-6"
          >
            Meine Angebote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-foreground/80 text-lg leading-relaxed"
          >
            Ich unterstütze dich dabei, wieder bei dir selbst anzukommen. Du lernst, deiner Wahrnehmung zu vertrauen, dich innerlich klarer zu fühlen und aus dieser Verbindung heraus Entscheidungen für dich zu treffen.
          </motion.p>
        </section>

        {/* ── ANGEBOTE ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-3xl mx-auto space-y-px">
          {angebote.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
            >
              <Link href={a.href}>
                <div className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 py-8 border-t border-border/40 hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="flex-1 space-y-2">
                    <h2 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                      {a.title}
                    </h2>
                    {a.meta && (
                      <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest">
                        {a.meta}
                      </p>
                    )}
                    <p className="text-foreground/80 leading-relaxed text-base">
                      {a.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all pt-1 sm:pt-2 whitespace-nowrap">
                    {a.cta} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-border/40" />
        </section>

        {/* ── TESTIMONIALS ── */}
        <SectionFade className="px-4 sm:px-6 lg:px-8 py-12 max-w-3xl mx-auto">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-8">Was andere sagen</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-secondary/30 border border-primary/10 px-6 py-5 flex flex-col gap-3"
              >
                <p className="text-foreground/80 text-sm leading-relaxed italic">„{t.text}"</p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-xs text-primary/50 font-medium uppercase tracking-widest">{t.label}</span>
                  {t.author && <><span className="text-primary/30 text-xs">·</span><span className="text-primary text-xs font-medium">– {t.author}</span></>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              Jetzt anfragen <ArrowRight className="w-4 h-4" />
            </Link>
            <Button variant="outline" asChild className="rounded-full px-6">
              <Link href="/"><Home className="w-4 h-4 mr-2" />Zur Startseite</Link>
            </Button>
          </div>
        </SectionFade>

      </main>

      <Footer />
    </div>
  );
}
