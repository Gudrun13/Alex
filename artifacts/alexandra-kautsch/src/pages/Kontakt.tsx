import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionFade } from "@/components/ui/SectionFade";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
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

export default function Kontakt() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-1 pt-32">

        {/* Hero */}
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
            Du möchtest einen ersten Schritt machen?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-foreground/80 text-lg font-light"
          >
            Ich freue mich auf deine Nachricht.
          </motion.p>
        </section>

        {/* Kontaktformular */}
        <SectionFade className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50">

              <div className="md:col-span-3 p-8 sm:p-10">
                <ContactForm />
              </div>

              <div className="md:col-span-2 bg-primary/10 p-8 sm:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/50 space-y-8">
                <div>
                  <h3 className="font-serif text-2xl mb-6 text-foreground">Kontakt Details</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-foreground/80 uppercase tracking-wider mb-1">E-Mail</p>
                      <a
                        href="mailto:energiearbeit@alexandra-kautsch.at"
                        className="text-base text-primary hover:text-primary/80 transition-colors font-medium break-all"
                      >
                        energiearbeit@alexandra-kautsch.at
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/80 uppercase tracking-wider mb-1">Ort</p>
                      <p className="text-base text-foreground/90 font-light">
                        Langenlois, Niederösterreich & online
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-6 space-y-3">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Ich bin für dich da bei</p>
                  {[
                    "Readings im morphischen Feld",
                    "Reiki & Fernreiki",
                    "Harmonisierungen",
                    "Inneres Erwachen & Seelenreise",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/80 font-light">
                      <CheckCircle2 className="w-4 h-4 text-primary/60 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </SectionFade>

        {/* Back link */}
        <div className="py-10 px-4 text-center">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0 })}
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

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(
      values.subject ? `Anfrage: ${values.subject}` : "Kontaktanfrage über Website"
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nE-Mail: ${values.email}\n\n${values.message}`
    );
    window.location.href = `mailto:energiearbeit@alexandra-kautsch.at?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-serif">Vielen Dank für deine Nachricht.</h3>
        <p className="text-foreground/80 font-light">
          Ich habe deine Anfrage erhalten und werde mich innerhalb von 1–2 Werktagen bei dir melden.
        </p>
        <Button
          variant="outline"
          onClick={() => { setIsSubmitted(false); form.reset(); }}
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
