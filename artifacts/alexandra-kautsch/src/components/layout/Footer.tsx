import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function ImpressumModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Impressum</DialogTitle>
        </DialogHeader>
        <div className="space-y-5 text-sm text-foreground/80 font-light leading-relaxed">
          <div>
            <p className="font-medium text-foreground mb-1">Angaben gemäß § 5 ECG</p>
            <p>Alexandra Kautsch</p>
            <p>Kampstr.</p>
            <p>3550 Langenlois</p>
            <p>Österreich</p>
          </div>

          <div>
            <p><span className="font-medium text-foreground">Tel.:</span> <a href="tel:+436649173743" className="hover:text-primary transition-colors">+43 664 9173743</a></p>
            <p><span className="font-medium text-foreground">E-Mail:</span> <a href="mailto:alexandra.kautsch@gmail.com" className="hover:text-primary transition-colors">alexandra.kautsch@gmail.com</a></p>
          </div>

          <div>
            <p className="font-medium text-foreground mb-1">Unternehmensangaben</p>
            <p><span className="font-medium text-foreground">Unternehmensgegenstand:</span> Dienstleistungen</p>
            <p><span className="font-medium text-foreground">Umsatzsteuer:</span> Umsatzsteuerbefreit (Kleinunternehmerregelung)</p>
          </div>

          <div>
            <p><span className="font-medium text-foreground">Behörde gemäß ECG:</span> Bezirkshauptmannschaft</p>
          </div>

          <div className="pt-2 border-t border-border">
            <p className="font-medium text-foreground mb-1">Streitbeilegung</p>
            <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Footer() {
  const [impressumOpen, setImpressumOpen] = useState(false);

  return (
    <>
      <ImpressumModal open={impressumOpen} onClose={() => setImpressumOpen(false)} />

      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl font-medium mb-1">Alexandra Kautsch</h2>
            <p className="text-background/70 text-sm font-light tracking-wide uppercase">Energiearbeit · Reiki · Feldlesen</p>
          </div>

          <div className="flex gap-6 text-sm text-background/80">
            <button
              onClick={() => setImpressumOpen(true)}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
          </div>

          <div className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Alexandra Kautsch
          </div>
        </div>
      </footer>
    </>
  );
}
