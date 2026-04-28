import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const angebote = [
  {
    href: "/reading",
    title: "Readings",
    desc: "Ein Reading hilft dir dabei, deine aktuelle Situation klarer zu sehen und besser zu verstehen, was innerlich gerade wirkt. Es bringt Struktur in das, was du vielleicht schon spürst und es hilft dir, deine nächsten Schritte zu gehen.",
    cta: "Zu den Readings",
  },
  {
    href: "/inneres-erwachen",
    title: 'Feldlesen lernen \u2013 Kurs \u201EInneres Erwachen\u201C',
    desc: "Wenn du lernen möchtest, dein eigenes Energiefeld bewusster wahrzunehmen und im morphischen Feld für andere zu lesen.",
    cta: 'Zum Kurs \u201EInneres Erwachen\u201C',
  },
  {
    href: "/reiki",
    title: "Reiki",
    desc: "Deine energetische Unterstützung zur Entlastung, Harmonisierung und Stärkung von Körper, Geist & Seele.",
    cta: "Zu Reiki",
  },
];

export default function Angebote() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-32">

        {/* ── INTRO ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
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
            className="text-foreground/70 text-lg font-light leading-relaxed"
          >
            Meine Angebote unterstützen dich dabei, dein Wahrnehmen zu vertiefen und mehr Klarheit in dir selbst zu finden.
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
                    <p className="text-foreground/65 font-light leading-relaxed text-base">
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

      </main>

      <Footer />
    </div>
  );
}
