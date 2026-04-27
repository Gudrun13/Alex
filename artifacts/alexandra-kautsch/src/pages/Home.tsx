import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Orbit, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";


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
          <div className="relative z-10 max-w-7xl mx-auto w-full pt-48 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Text */}
              <div className="text-center lg:text-left order-2 lg:order-1">
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
                  className="flex items-center lg:justify-start justify-center gap-4 mb-8"
                >
                  <span className="flex-1 max-w-[60px] h-px bg-primary/40" />
                  <span className="font-serif italic text-primary text-lg sm:text-xl tracking-wide">
                    Komm zur Ruhe, finde deine Mitte.
                  </span>
                  <span className="flex-1 max-w-[60px] h-px bg-primary/40 lg:hidden" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.65 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button size="lg" asChild className="rounded-full text-base px-8 h-14 shadow-sm">
                    <Link href="/kontakt">Termin vereinbaren</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-full text-base px-8 h-14">
                    <Link href="/angebote">Angebote entdecken</Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.1 }}
                  className="mt-12 flex justify-center lg:justify-start"
                >
                  <a href="#energiearbeit" className="flex flex-col items-center gap-2 text-primary/70 hover:text-primary transition-colors">
                    <span className="text-xs tracking-widest uppercase font-light">Entdecken</span>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.3 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px]">
                  {/* Soft ring decoration */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-primary/15 translate-x-3 translate-y-3" />
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-primary/20">
                    <img
                      src="/alex-sofa.jpg"
                      alt="Alexandra Kautsch"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WAS IST ENERGIEARBEIT */}
        <SectionFade id="energiearbeit" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-4">Grundlage</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6">Was ist Energiearbeit?</h2>
              <div className="max-w-2xl mx-auto space-y-4 text-foreground/70 font-light text-lg text-left sm:text-center">
                <p>
                  Ich begleite dich dabei, dein Energiefeld bewusster wahrzunehmen, die Sprache deines Körpers zu verstehen und die Botschaften deiner Seele zu erkennen. So entsteht wieder mehr Verbindung zu dir selbst und zu dem, was in dir wirklich spürbar ist.
                </p>
                <p>
                  Du kannst deine Wahrnehmung vertiefen, für dich Klarheit gewinnen und auch lernen, für andere Menschen, Tiere u.&nbsp;v.&nbsp;m. im morphischen Feld zu lesen.
                </p>
                <div className="pt-2 text-left inline-block">
                  <p className="font-medium text-foreground/80 mb-2">Was dich hier erwartet:</p>
                  <ul className="space-y-1">
                    {[
                      "Verbindung zu deiner Seele und deinem Körper",
                      "mehr Klarheit für emotionale Prozesse",
                      "Zugang zu deiner inneren Führung und deinem Seelenweg",
                      "ein tieferes Verständnis für dich selbst und deine Themen",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/angebote"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
              >
                Meine Angebote entdecken
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </SectionFade>

        {/* FELDLESEN TEASER */}
        <SectionFade id="einfuehrung" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/intro-bg.png)' }}
          />
          <div className="absolute inset-0 bg-white/55" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif mb-6 text-foreground">Das ist Feldlesen</h2>
            <p className="text-lg text-foreground/80 font-light leading-relaxed mb-8">
              Feldlesen bedeutet, dich bewusst mit Energiefeldern zu verbinden, im Hier und Jetzt zu sein und wahrzunehmen, was da ist. Du stellst Fragen und bekommst klare Impulse, Antworten und Botschaften.
            </p>
            <Link
              href="/feldlesen"
              onClick={() => window.scrollTo({ top: 0 })}
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
            >
              Mehr über Feldlesen erfahren
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="w-16 h-px bg-primary/40 mx-auto mt-16" />
          </div>
        </SectionFade>

        {/* ANGEBOTE TEASER */}
        <SectionFade id="angebote" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-foreground mb-4">Meine Angebote</h2>
              <p className="text-foreground/70 text-lg">Wege zu deiner inneren Kraft.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Orbit className="text-primary w-6 h-6" />,
                  title: "Reading im morphischen Feld",
                  desc: "Antworten auf deine Lebens-Fragen – individuell für dich gelesen und als Audio zugeschickt.",
                  price: "55 €",
                },
                {
                  icon: <Sparkles className="text-primary w-6 h-6" />,
                  title: "Reiki & Fernreiki",
                  desc: "Aktiviere deine Selbstheilungskräfte – vor Ort in Droß oder als Fernbehandlung.",
                  price: "ab 60 €",
                },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm bg-card hover:shadow-md transition-all duration-300 group">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                    <p className="text-foreground/70 text-sm font-light leading-relaxed">{item.desc}</p>
                    <p className="text-primary text-sm font-medium">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg" asChild className="rounded-full text-base px-8 h-13 shadow-sm">
                <Link href="/angebote">
                  Alle Angebote entdecken <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </SectionFade>

        {/* ÜBER MICH TEASER */}
        <SectionFade id="uebermich" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/alex-praxis.jpg"
                  alt="Alexandra Kautsch in ihrem Praxisraum"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute top-0 left-[-8px] w-full h-full rounded-3xl bg-primary/15 -z-10" />
            </div>

            <div className="space-y-5 text-center lg:text-left">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary">Über mich</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground">Das bin ich</h2>
              <p className="text-lg text-foreground/75 font-light leading-relaxed">
                Mein Name ist Alexandra, ich bin Mama von zwei Töchtern und lebe in Niederösterreich. Energiearbeit begleitet mich schon viele Jahre und ist ein wichtiger Teil meines Lebens geworden.
              </p>
              <Link
                href="/uebermich"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
              >
                Mehr über mich erfahren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
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

      </main>

      <Footer />
    </div>
  );
}
