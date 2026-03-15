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
import heroImg from "/hero.png";

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
        {/* HERO SECTION — Vollbild */}
        <section
          id="hero"
          className="relative min-h-screen flex items-end pb-20 sm:items-center sm:pb-0 overflow-hidden"
        >
          {/* Background image — leicht geblurrt, damit eingebackener Text unlesbar wird */}
          <img
            src={heroImg}
            alt="Alexandra Kautsch in ihrem Praxisraum"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105"
            style={{ filter: 'blur(5px) brightness(0.65)' }}
          />

          {/* Gradient für zusätzlichen Kontrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-24 sm:py-32">
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-white/80 font-light tracking-widest uppercase text-sm mb-5"
              >
                Energiearbeit · Reiki · Feldlesen
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-md"
              >
                Komm zur Ruhe.<br /> Finde deine Mitte.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="text-lg sm:text-xl text-white/85 font-light mb-10 leading-relaxed"
              >
                Für Menschen, die wieder bei sich ankommen möchten.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  asChild
                  className="rounded-full text-base px-8 h-14 bg-white text-foreground hover:bg-white/90 shadow-lg"
                >
                  <a href="#kontakt">Termin vereinbaren</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full text-base px-8 h-14 border-white/60 text-white bg-white/10 backdrop-blur hover:bg-white/20"
                >
                  <a href="#fortbildung">Fortbildung entdecken</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <SectionFade id="einfuehrung" className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif mb-10 text-foreground">Energiearbeit, die etwas bewegt</h2>
          <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed">
            <p>
              Manchmal fühlt es sich an, als würde man sich selbst ein bisschen verloren haben. Die Gedanken kreisen, der Körper ist müde, die innere Stimme kaum noch hörbar.
            </p>
            <p>
              Ich begleite dich dabei, wieder in deine eigene Energie zu finden – durch Reiki, Feldlesen im morphischen Feld und Harmonisierungen, die sanft und tief wirken.
            </p>
            <p>
              Ob du eine Behandlung suchst oder das Feldlesen selbst erlernen möchtest – du bist hier genau richtig.
            </p>
          </div>
          <div className="w-16 h-px bg-primary/40 mx-auto mt-16" />
        </SectionFade>

        {/* SERVICES */}
        <SectionFade id="angebote" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground mb-4">Meine Angebote</h2>
              <p className="text-foreground/70 text-lg">Wege zurück zu deiner inneren Kraft.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-serif">Reiki & Fernreiki</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80">
                  <p className="font-light">
                    Reiki ist universelle Lebensenergie – sie kommt wieder ins Fließen, Blockaden können sich lösen, du findest mehr Ruhe und Stabilität. Auch als Fernbehandlung möglich.
                  </p>
                  <div className="pt-2 border-t border-border/50 text-sm text-foreground/60">
                    <span className="font-medium">Hilfreich bei:</span> Stress · Erschöpfung · Schlafprobleme · innere Unruhe · emotionale Belastungen
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Orbit className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-serif">Reading im morphischen Feld</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80 font-light">
                  <p>
                    Verbindung mit dem Energiefeld im Hier und Jetzt. Fragen stellen, Botschaften empfangen, Klarheit gewinnen – Verstrickungen lösen, Energie klären, neue Ausrichtung finden.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-serif">Harmonisierungen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80 font-light">
                  <p>
                    Energetische Ausrichtung für Personen, Räume oder Situationen. Sanfte Begleitung zu mehr Balance und innerem Frieden.
                  </p>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="border-primary/20 shadow-md shadow-primary/5 hover:shadow-lg transition-all duration-300 bg-card group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-bl-xl">
                  Fortbildung
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-serif">Feldlese Kurs & Seelenreise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-foreground/80 font-light">
                  <p>
                    Lerne selbst, im morphischen Feld zu lesen. Eine transformative Fortbildung für alle, die ihre Intuition stärken und Energiefelder wahrnehmen möchten.
                  </p>
                  <a href="#fortbildung" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link">
                    Mehr erfahren <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionFade>

        {/* TARGET AUDIENCE */}
        <SectionFade id="fuerwen" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground mb-4">Für dich, wenn...</h2>
              <p className="text-foreground/80 text-lg">
                Du bist hier genau richtig, wenn du dich in einem dieser Bilder erkennst:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Du dich erschöpft und leer fühlst, obwohl du eigentlich alles hast",
                "Du innerlich unruhig bist und keinen Halt findest",
                "Du dir mehr Klarheit und innere Stille wünschst",
                "Du spürst, dass etwas blockiert ist – du aber nicht weißt, was",
                "Du lernen möchtest, deiner Intuition zu vertrauen und im Feld zu lesen",
                "Du auf der Suche nach einer ruhigen, ehrlichen Begleitung bist"
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
            <div className="order-2 lg:order-1 relative h-[500px] w-full max-w-md mx-auto">
              {/* Photo Placeholders using CSS blobs */}
              <div className="absolute top-0 right-0 w-64 h-72 bg-accent/40 blob-shape-1 border border-primary/20 flex items-center justify-center text-foreground/40 font-serif italic text-xl shadow-lg backdrop-blur-sm z-10 transform translate-x-4 -translate-y-4">
                Foto 1
              </div>
              <div className="absolute bottom-0 left-0 w-72 h-80 bg-secondary blob-shape-2 border border-border/50 flex items-center justify-center text-foreground/40 font-serif italic text-xl shadow-md">
                Foto 2
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl font-serif text-foreground">Hallo, ich bin Alexandra</h2>
              <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed">
                <p>
                  Ich bin Alexandra Kautsch – Reiki-Meisterin, Feldleserin und spirituelle Begleiterin aus Niederösterreich.
                </p>
                <p>
                  Ich glaube daran, dass jeder Mensch die Kraft in sich trägt, seine eigene Heilung zu finden. Meine Aufgabe ist es, diesen Raum zu halten – ruhig, aufmerksam und ohne Wertung.
                </p>
                <p>
                  Seit Jahren begleite ich Menschen auf ihrem Weg nach innen – in Einzel-Sitzungen, Fernbehandlungen und meinen Kursen. Was mich dabei antreibt: echte Begegnung, ehrliche Arbeit und der tiefe Respekt vor dem, was jeder Mensch trägt.
                </p>
              </div>
            </div>
          </div>
        </SectionFade>

        {/* TRAINING */}
        <SectionFade id="fortbildung" className="py-24 px-4 sm:px-6 lg:px-8 bg-primary/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
          
          <div className="max-w-5xl mx-auto relative z-10 bg-background/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border border-white/40 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground font-medium text-sm mb-6 text-primary">
                Fortbildung
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-foreground mb-4">Feldlese Kurs – Lerne, im Feld zu lesen</h2>
              <p className="text-foreground/70 text-xl font-light">
                Eine Fortbildung für alle, die tiefer gehen möchten
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="font-medium text-lg mb-6">Was du lernen wirst:</h3>
                {[
                  "Was das morphische Feld ist und wie du dich damit verbinden kannst",
                  "Wie du Fragen stellst und Botschaften wahrnimmst",
                  "Energiefelder wahrnehmen und klären"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 md:pt-13">
                {[
                  "Verstrickungen erkennen und lösen",
                  "Deine Intuition stärken und ihr vertrauen",
                  "Seelenreisen als spirituelles Werkzeug"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-10">
              <p className="font-serif italic text-2xl text-foreground/90">
                "Du nimmst nicht nur Wissen mit – du nimmst eine neue Art wahr, die Welt zu erleben."
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" asChild className="rounded-full px-10 h-14 text-base shadow-lg shadow-primary/20">
                <a href="#kontakt">Jetzt anfragen</a>
              </Button>
            </div>
          </div>
        </SectionFade>

        {/* TESTIMONIALS */}
        <SectionFade id="stimmen" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground">Was andere sagen</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  text: "Die Sitzung mit Alexandra hat mir wirklich geholfen, wieder bei mir anzukommen. Ich fühlte mich danach so leicht und klar.",
                  author: "M.H., Wien"
                },
                {
                  text: "Das Feldlesen war für mich eine ganz neue Erfahrung. Ich hatte Gänsehaut – und gleichzeitig tiefe Ruhe. Danke, Alexandra.",
                  author: "K.L., Niederösterreich"
                },
                {
                  text: "Ich habe den Feldlese-Kurs gemacht und er hat mein Leben verändert. Ich traue meiner Intuition jetzt viel mehr.",
                  author: "S.B., Steiermark"
                }
              ].map((testimonial, i) => (
                <Card key={i} className="border-none shadow-md bg-background hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full justify-between">
                    <p className="font-serif italic text-lg text-foreground/80 leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <p className="text-sm font-medium text-primary">
                      — {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* FAQ */}
        <SectionFade id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground">Häufige Fragen</h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "Wie läuft eine Sitzung ab?",
                  a: "Eine Sitzung dauert in der Regel 60–90 Minuten. Wir beginnen mit einem kurzen Gespräch über dein Anliegen. Dann legst du dich bequem auf die Liege, ich arbeite mit deiner Energie – ruhig und aufmerksam. Am Ende sprechen wir kurz über das, was wahrgenommen wurde."
                },
                {
                  q: "Ist auch Fernreiki möglich?",
                  a: "Ja, Fernreiki ist genauso wirkungsvoll wie eine Sitzung vor Ort. Energie kennt keine Entfernung. Wir vereinbaren einen Termin, du begibst dich zur vereinbarten Zeit in Ruhe und Entspannung – ich arbeite von hier aus mit deiner Energie."
                },
                {
                  q: "Brauche ich Vorerfahrung?",
                  a: "Nein, du brauchst keinerlei Vorerfahrung. Du musst nichts wissen, nichts können, nichts glauben. Es reicht, wenn du offen bist und dir etwas Zeit für dich nimmst."
                },
                {
                  q: "Woher weiß ich, was zu mir passt?",
                  a: "Wenn du unsicher bist, melde dich einfach bei mir. Wir können kurz miteinander sprechen, und ich begleite dich dabei, das Passende für dich zu finden."
                },
                {
                  q: "Wie kann ich einen Termin vereinbaren?",
                  a: "Du kannst mich ganz einfach über das Kontaktformular oder per E-Mail erreichen. Ich melde mich innerhalb von 1–2 Werktagen bei dir zurück."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-xl px-6 data-[state=open]:shadow-md transition-all">
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5 text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 font-light leading-relaxed pb-5 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionFade>

        {/* CONTACT */}
        <SectionFade id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-foreground mb-4">Du möchtest einen ersten Schritt machen?</h2>
              <p className="text-foreground/70 text-lg">
                Ich freue mich auf deine Nachricht. Schreib mir einfach – ganz ohne Druck.
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
                    <a href="mailto:alexandra.kautsch@gmail.com" className="text-lg text-primary hover:text-primary/80 transition-colors font-medium break-all">
                      alexandra.kautsch@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-1">Telefon</p>
                    <a href="tel:+436649173743" className="text-lg text-foreground/90 font-light hover:text-primary transition-colors">
                      +43 664 9173743
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
                  <SelectItem value="termin">Termin vereinbaren</SelectItem>
                  <SelectItem value="kurs">Feldlese Kurs anfragen</SelectItem>
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
