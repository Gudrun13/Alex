import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const SECTION_COUNT = 3;

function NextArrow({ onClick, label = "Weiter" }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-primary/60 hover:text-primary transition-colors group z-10"
    >
      <span className="text-xs tracking-widest uppercase font-light">{label}</span>
      <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
    </button>
  );
}

const testimonials = [
  { text: "Wow. Danke liebe Alexandra. Meine Migräne ist verschwunden. Dank dir konnte ich meinen Vortrag halten.", category: "Reiki" },
  { text: "Ich bin in letzter Zeit innerlich so ruhig und ausgeglichen und hab trotzdem sooviel Energie. Danke!", category: "Reiki" },
  { text: "Ich weine seit dem ersten Wort und es ist so wahr, was alles kommt. Ich fühle es so sehr und du hast es in Worte gefasst. Ich bin dir mega dankbar!", author: "Simone", category: "Reading" },
  { text: "Wow, ich bin überwältigt. Danke für dein Reading. Es fühlt sich an, als würdest du mich kennen. Was für eine großartige Energie, die ich beim Hören deiner Worte gespürt habe.", category: "Reading" },
  { text: "Liebe Alexandra, ganz ganz herzlichen Dank für den magischen Call und die fantastische Zusammenfassung. Die Seelenreise mit dir war echt das Beste, was ich buchen konnte.", author: "Isabelle", category: "Kurs" },
  { text: "Job gekündigt, nach London gezogen, eine wunderschöne Wohnung manifestiert. Alles durch unsere Sessions zusammen. Ich habe eine so tolle Fähigkeit dazu gewonnen, Intuition 1000-fach gestärkt!", author: "Elena", category: "Kurs" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const goNext = () => setCurrent((c) => Math.min(c + 1, SECTION_COUNT - 1));

  return (
    <div className="selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      {/* ── Full-screen paging area ── */}
      <div
        className="h-screen overflow-hidden"
        onWheel={(e) => e.preventDefault()}
        style={{ touchAction: "none" }}
      >
        {/* Sliding container */}
        <div
          className="h-screen"
          style={{
            transform: `translateY(calc(-${current} * 100vh))`,
            transition: "transform 0.75s cubic-bezier(0.77, 0, 0.175, 1)",
            willChange: "transform",
          }}
        >

          {/* ── 1. HERO + WAS IST ENERGIEARBEIT ── */}
          <section className="relative flex flex-col justify-center h-screen px-6 sm:px-10 lg:px-16 overflow-hidden gap-5 pt-20 pb-10">
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-start">
              <div className="flex flex-col gap-4">
                <div className="text-center lg:text-left">
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                  >
                    Energiearbeit · Reiki · Feldlesen
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    className="text-2xl sm:text-3xl lg:text-5xl font-serif font-light text-foreground leading-tight mb-4"
                  >
                    vom Kopf ins Herz
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="flex items-center lg:justify-start justify-center gap-4 mb-5"
                  >
                    <span className="flex-1 max-w-[50px] h-px bg-primary/40" />
                    <span className="font-serif italic text-primary text-base sm:text-lg tracking-wide">
                      Komm zur Ruhe, finde deine Mitte.
                    </span>
                    <span className="flex-1 max-w-[50px] h-px bg-primary/40 lg:hidden" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                  >
                    <Button size="lg" asChild className="rounded-full text-base px-7 h-12 shadow-sm">
                      <Link href="/kontakt">Termin vereinbaren</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="rounded-full text-base px-7 h-12">
                      <Link href="/angebote">Angebote entdecken</Link>
                    </Button>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.65 }}
                  className="relative rounded-3xl px-6 py-4 sm:py-5 space-y-2 sm:space-y-3 text-center lg:text-left overflow-hidden bg-secondary/50"
                  style={{ backgroundImage: "url(/intro-bg.png)", backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <div className="absolute inset-0 bg-white/50 rounded-3xl" />
                  <div className="relative z-10 space-y-3">
                    <h2 className="text-base font-serif text-foreground">Was ist Energiearbeit?</h2>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Ich begleite dich dabei, dein Energiefeld bewusster wahrzunehmen, die Sprache deines Körpers zu verstehen und die Botschaften deiner Seele zu erkennen.
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        "Verbindung zu deiner Seele und deinem Körper",
                        "mehr Klarheit für emotionale Prozesse",
                        "Zugang zu deiner inneren Führung und deinem Seelenweg",
                        "tieferes Verständnis für dich selbst und deine Themen",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-light">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.3 }}
                className="hidden lg:flex justify-center"
              >
                <div className="relative w-52 h-[340px]">
                  <div className="absolute inset-0 rounded-[2rem] bg-primary/15 translate-x-2 translate-y-2" />
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-lg ring-1 ring-primary/20">
                    <img src="/alex-sofa.jpg" alt="Alexandra Kautsch" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </motion.div>
            </div>
            <NextArrow onClick={goNext} label="Entdecken" />
          </section>

          {/* ── 2. ANGEBOTE + TESTIMONIALS (scrollbar innerhalb) ── */}
          <section className="relative h-screen flex flex-col bg-secondary/20">
            <div className="flex-1 overflow-y-auto pt-24 pb-16 px-6 sm:px-10 lg:px-16" onWheel={(e) => e.stopPropagation()}>
              <SectionFade className="w-full max-w-3xl mx-auto">
                <p className="text-foreground/80 text-lg leading-relaxed mb-12">
                  Meine Angebote unterstützen dich dabei, dein Wahrnehmen zu vertiefen und mehr Klarheit in dir selbst zu finden.
                </p>
                <div className="space-y-0">
                  {[
                    {
                      href: "/reading",
                      title: "Readings",
                      desc: "Ein Reading hilft dir dabei, deine aktuelle Situation klarer zu sehen und besser zu verstehen, was innerlich gerade wirkt. Es bringt Struktur in das, was du vielleicht schon spürst und es hilft dir, deine nächsten Schritte zu gehen.",
                      cta: "Zu den Readings",
                    },
                    {
                      href: "/reiki",
                      title: "Reiki",
                      desc: "Deine energetische Unterst\u00FCtzung zur Entlastung, Harmonisierung und St\u00E4rkung von K\u00F6rper, Geist & Seele.",
                      cta: "Zu Reiki",
                    },
                    {
                      href: "/inneres-erwachen",
                      title: "Feldlesen lernen \u2013 Kurs \u201EInneres Erwachen\u201C",
                      desc: "Wenn du lernen m\u00F6chtest, dein eigenes Energiefeld bewusster wahrzunehmen und im morphischen Feld f\u00FCr andere zu lesen.",
                      cta: "Zum Kurs",
                    },
                  ].map((item, i) => (
                    <Link key={i} href={item.href}>
                      <div className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 py-6 border-t border-border/40 hover:border-primary/30 transition-colors cursor-pointer">
                        <div className="flex-1">
                          <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors mb-1">
                            {item.title}
                          </h3>
                          <p className="text-foreground/80 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                        <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-3 transition-all pt-1 whitespace-nowrap">
                          {item.cta} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-border/40" />
                </div>

                {/* Was andere sagen – direkt darunter */}
                <div className="mt-16">
                  <h2 className="text-3xl font-serif text-foreground mb-8">Was andere sagen</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {testimonials.map((testimonial, i) => (
                      <Card key={i} className="border-none shadow-md bg-background hover:-translate-y-1 transition-transform duration-300">
                        <CardContent className="pt-5 px-5 pb-5 flex flex-col h-full justify-between">
                          <p className="font-serif italic text-sm text-foreground/80 leading-relaxed mb-3">
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
            </div>
            <NextArrow onClick={goNext} />
          </section>

          {/* ── 3. ÜBER MICH TEASER ── */}
          <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <SectionFade className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 pb-32">
              {/* Foto – nur auf größeren Bildschirmen sichtbar */}
              <div className="hidden lg:block relative h-72 w-full max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src="/alex-praxis.jpg"
                    alt="Alexandra Kautsch in ihrem Praxisraum"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute top-0 left-[-8px] w-full h-full rounded-3xl bg-primary/15 -z-10" />
              </div>
              {/* Text – immer sichtbar, auf Mobile zentriert */}
              <Link href="/uebermich" className="group block space-y-5 text-center lg:text-left">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary">Über mich</span>
                <h2 className="text-3xl sm:text-4xl font-serif text-foreground group-hover:text-primary transition-colors">
                  Das bin ich
                </h2>
                <p className="text-lg text-foreground/85 leading-relaxed">
                  Mein Name ist Alexandra, ich bin Mama von zwei Töchtern und lebe in Niederösterreich. Energiearbeit begleitet mich schon viele Jahre und ist ein wichtiger Teil meines Lebens geworden.
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Mehr über mich erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </SectionFade>
            <div className="absolute bottom-0 left-0 right-0">
              <Footer />
            </div>
          </section>

        </div>

        {/* Section dots */}
        <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
          {Array.from({ length: SECTION_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
