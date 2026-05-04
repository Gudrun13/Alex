import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function InneresErwachen() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 lg:pt-32">

        {/* Hero */}
        <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/15 mb-6"
          >
            <BookOpen className="text-primary w-6 h-6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-4"
          >
            <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">Fortbildung</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Per Zoom · inkl. Workbook · Preis auf Anfrage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-serif font-light text-foreground mb-6"
          >
            Inneres Erwachen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif italic text-primary text-lg sm:text-xl"
          >
            Lerne, deiner Intuition wieder zu vertrauen.
          </motion.p>
        </section>

        {/* Intro */}
        <SectionFade className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-3xl mx-auto space-y-5 text-foreground/80 leading-relaxed">
            <p>Vielleicht hast du dich oft gefragt, warum du Dinge „einfach weißt", ohne sie erklären zu können. Warum du Menschen oder Situationen spürst, bevor etwas passiert. Oder du hast einfach dieses tiefe Gefühl, dass da „mehr" ist – mehr, was in dir steckt.</p>
            <p>In diesem Kurs geht es darum, wieder zurück in deine natürliche Wahrnehmung zu finden.</p>
            <p>Du kommst zurück in eine Verbindung mit deiner Intuition, die nicht laut sein muss, sondern klar. Du beginnst, feiner zu fühlen, innere Signale zu verstehen und Entscheidungen nicht mehr aus Zweifel, sondern aus einem tiefen inneren Gefühl heraus zu treffen.</p>
            <p className="font-medium text-foreground">Es geht darum, dich wieder an das zu erinnern, was du längst bist.</p>
            <p>Du löst alte innere Muster, beginnst deiner Wahrnehmung zu vertrauen und öffnest dich dafür, Botschaften aus deinem Energiefeld zu empfangen. Schritt für Schritt entsteht wieder Klarheit – in dir, für dich.</p>
            <p>Dieser Kurs kann sowohl für deine persönliche Entwicklung genutzt werden, als auch beruflich – du lernst, das Feldlesen so anzuwenden, dass du es auch für andere Menschen nutzen kannst.</p>
          </div>
        </SectionFade>

        {/* Module */}
        <SectionFade className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-10">Inhalte des Kurses</p>

            <div className="space-y-10">
              {[
                {
                  title: "Modul 1 – Botschaften des Feldes erkennen",
                  items: ["Richtige Fragetechniken ans Feld", "Codes und energetische Signale erkennen", "Botschaften und Impulse aus dem Feld empfangen", "Körperbotschaften verstehen", "Energetischer Bodyscan für tiefes Spüren"],
                },
                {
                  title: "Modul 2 – Verbindung & Kommunikation im Feld",
                  items: ["Wahrnehmung in zwischenmenschlichen Verbindungen", "Lösen energetischer Verstrickungen", "Verbindung mit Engeln, Tieren & Pflanzen"],
                },
                {
                  title: "Modul 3 – Erschaffen & Kreieren im Feld",
                  items: ["Harmonisierung deiner Energie", "Manifestation aus deinem Feld heraus", "Bewusstes Kreieren mit Energie", "Kraftbilder, Krafttiere & Kraftplätze", "Lösen & Verbinden von Energiefeldern", "Reinigung deiner Auraschichten"],
                },
                {
                  title: "Modul 4 – Emotionale Klarheit finden & loslassen",
                  items: ["Erkennen und Lösen von Glaubenssätzen", "Emotionen fühlen, verstehen und regulieren", "Loslassen gespeicherter innerer Spannungen"],
                },
                {
                  title: "Modul 5 – Tiefe Integration",
                  items: ["Rückverbindung mit deinem inneren Kind", "Herzheilung", "Vergebung", "Klarheit auf Seelenebene", "Aktivierung deiner Chakren"],
                },
              ].map((mod, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-6 space-y-3">
                  <p className="font-serif text-base text-foreground">{mod.title}</p>
                  <ul className="space-y-1.5">
                    {mod.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Zusätzlich */}
            <div className="mt-12 rounded-2xl bg-secondary/40 border border-primary/10 px-6 py-6 space-y-3">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Zusätzlich im Kurs enthalten</p>
              {[
                "Aufbau deiner eigenen Feldlesungen für andere",
                "Über 90 Fragen zur intuitiven Arbeit mit dem Feld",
                "Übungen zur Selbstregulation",
                "Energie-Impulse für deinen Alltag und deine Praxis",
                "Workbook zum Kurs",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10">
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
