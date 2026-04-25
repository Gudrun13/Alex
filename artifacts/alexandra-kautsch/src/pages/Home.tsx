import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Orbit, Sparkles, Heart, Zap, Shield, Star } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

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

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.55 }}
                  className="text-lg sm:text-xl text-foreground/70 font-light mb-10 leading-relaxed"
                >
                  Für Dich, wenn Du wieder bei Dir ankommen möchtest.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.65 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button size="lg" asChild className="rounded-full text-base px-8 h-14 shadow-sm">
                    <a href="#kontakt">Termin vereinbaren</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-full text-base px-8 h-14">
                    <a href="#angebote">Angebote entdecken</a>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.1 }}
                  className="mt-12 flex justify-center lg:justify-start"
                >
                  <a href="#einfuehrung" className="flex flex-col items-center gap-2 text-primary/70 hover:text-primary transition-colors">
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
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">Was ist Energiearbeit?</h2>
              <p className="text-foreground/70 font-light text-lg max-w-2xl mx-auto">
                Energiearbeit geht davon aus, dass wir nicht nur ein körperliches, sondern auch ein feinstoffliches Energiefeld haben – und dass dieses Feld maßgeblich beeinflusst, wie wir uns fühlen, denken und leben.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {[
                { icon: <Heart className="w-5 h-5 text-primary" />, title: "Körper & Seele", text: "Energiearbeit verbindet körperliche, emotionale und seelische Ebene – du wirst als Ganzes betrachtet." },
                { icon: <Zap className="w-5 h-5 text-primary" />, title: "Blockaden lösen", text: "Alte Muster, Glaubenssätze und emotionale Verstrickungen können sanft aufgelöst werden." },
                { icon: <Shield className="w-5 h-5 text-primary" />, title: "Selbstheilung", text: "Dein Körper hat die Fähigkeit zur Selbstheilung – Energiearbeit aktiviert und unterstützt genau das." },
                { icon: <Star className="w-5 h-5 text-primary" />, title: "Innere Klarheit", text: "Du lernst, dir selbst wieder zu vertrauen, klarer zu entscheiden und deinen Weg bewusst zu gehen." },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm bg-background hover:shadow-md transition-all duration-300 group">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-base text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/65 font-light leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
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

        {/* ABOUT ME */}
        <SectionFade id="uebermich" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[480px] w-full max-w-md mx-auto">
              {/* Hauptfoto — Praxisraum */}
              <div className="absolute inset-0 top-4 left-0 w-full h-full rounded-3xl overflow-hidden shadow-xl z-0">
                <img
                  src="/alex-praxis.jpg"
                  alt="Alexandra Kautsch in ihrem Praxisraum"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Overlay-Foto — kleines Portrait */}
              <div className="absolute bottom-4 right-[-12px] w-36 h-44 rounded-2xl overflow-hidden shadow-2xl z-10 ring-2 ring-background">
                <img
                  src="/alex-kaffee.jpg"
                  alt="Alexandra Kautsch"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Dekoratives Lilaelement hinter dem Hauptfoto */}
              <div className="absolute top-0 left-[-8px] w-full h-full rounded-3xl bg-primary/15 -z-10" />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-serif text-foreground">Das bin ich</h2>
              <div className="space-y-5 text-lg text-foreground/80 font-light leading-relaxed">
                <p>
                  Mein Name ist Alexandra, ich bin Mama von zwei Töchtern und lebe in Niederösterreich. Energiearbeit begleitet mich schon viele Jahre und ist ein wichtiger Teil meines Lebens geworden.
                </p>
                <p>
                  Vor über 20 Jahren habe ich begonnen, mich intensiver mit Seelenarbeit zu beschäftigen und eine Ausbildung zur Energetiktrainerin gemacht. Danach folgten weitere Ausbildungen in Reiki (Grad 1, 2 und Meister), Aroma Touch und Lesen und Erschaffen im morphischen Feld dazu.
                </p>
                <p>
                  Heute begleite ich Frauen dabei, wieder mehr bei sich anzukommen und sich selbst besser zu spüren. Mit Feldlesungen und Reiki unterstütze ich sie, innere Blockaden zu lösen, ihre Selbstheilungskräfte zu aktivieren und sich mit ihrem Potenzial zu verbinden.
                </p>
              </div>
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

        {/* CONTACT */}
        <SectionFade id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">Du möchtest einen ersten Schritt machen?</h2>
              <p className="text-foreground/70 text-lg">
                Ich freue mich auf deine Nachricht.
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
                    <a href="mailto:energiearbeit@alexandra-kautsch.at" className="text-lg text-primary hover:text-primary/80 transition-colors font-medium break-all">
                      energiearbeit@alexandra-kautsch.at
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
                  <SelectItem value="reiki">Reiki & Fernreiki</SelectItem>
                  <SelectItem value="reading">Reading im morphischen Feld</SelectItem>
                  <SelectItem value="harmonisierung">Harmonisierung</SelectItem>
                  <SelectItem value="kurs">Inneres Erwachen & Seelenreise</SelectItem>
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
