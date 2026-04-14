import { useState } from "react";
import { Instagram } from "lucide-react";
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
            <p><span className="font-medium text-foreground">E-Mail:</span> <a href="mailto:energiearbeit@alexandra-kautsch.at" className="hover:text-primary transition-colors">energiearbeit@alexandra-kautsch.at</a></p>
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

function DatenschutzModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Datenschutzerklärung</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm text-foreground/80 font-light leading-relaxed">

          <section>
            <h3 className="font-medium text-foreground text-base mb-2">1) Einleitung und Kontaktdaten des Verantwortlichen</h3>
            <p className="mb-3">1.1 Wir freuen uns, dass Sie unsere Website besuchen, und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            <p>1.2 Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Alexandra Kautsch, Kampstr., 3550 Langenlois, Österreich, E-Mail: <a href="mailto:energiearbeit@alexandra-kautsch.at" className="hover:text-primary transition-colors">energiearbeit@alexandra-kautsch.at</a>. Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
          </section>

          <section>
            <h3 className="font-medium text-foreground text-base mb-2">2) Datenerfassung beim Besuch unserer Website</h3>
            <p className="mb-3">Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an den Seitenserver übermittelt (sog. „Server-Logfiles"). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Unsere besuchte Website</li>
              <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
              <li>Menge der gesendeten Daten in Byte</li>
              <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
              <li>Verwendeter Browser</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
            </ul>
            <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.</p>
          </section>

          <section>
            <h3 className="font-medium text-foreground text-base mb-2">3) Kontaktaufnahme</h3>
            <p className="mb-3">Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden – ausschließlich zum Zweck der Bearbeitung und Beantwortung Ihres Anliegens und nur im dafür erforderlichen Umfang – personenbezogene Daten verarbeitet.</p>
            <p>Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf einen Vertrag ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden gelöscht, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
          </section>

          <section>
            <h3 className="font-medium text-foreground text-base mb-2">4) Nutzung von Kundendaten zur Direktwerbung</h3>
            <p className="font-medium text-foreground/90 mb-2">Anmeldung zu unserem E-Mail-Newsletter</p>
            <p className="mb-3">Wenn Sie sich zu unserem E-Mail Newsletter anmelden, übersenden wir Ihnen regelmäßig Informationen zu unseren Angeboten. Pflichtangabe für die Übersendung des Newsletters ist allein Ihre E-Mailadresse. Die Angabe weiterer Daten ist freiwillig und wird verwendet, um Sie persönlich ansprechen zu können. Für den Newsletter-Versand verwenden wir das sog. Double Opt-in Verfahren, mit dem sichergestellt wird, dass Sie Newsletter erst erhalten, wenn Sie uns durch Betätigung eines an die angegebene Mailadresse versandten Verifizierungslinks ausdrücklich Ihre Einwilligung in den Newsletterempfang bestätigt haben.</p>
            <p className="mb-3">Mit der Aktivierung des Bestätigungslinks erteilen Sie uns Ihre Einwilligung für die Nutzung Ihrer personenbezogenen Daten gemäß Art. 6 Abs. 1 lit. a DSGVO. Hierbei speichern wir Ihre vom Internet Service-Provider (ISP) eingetragene IP-Adresse sowie das Datum und die Uhrzeit der Anmeldung, um einen möglichen Missbrauch Ihrer E-Mail-Adresse zu einem späteren Zeitpunkt nachvollziehen zu können. Die von uns bei der Anmeldung zum Newsletter erhobenen Daten werden streng zweckgebunden verwendet.</p>
            <p>Sie können den Newsletter jederzeit über den dafür vorgesehenen Link im Newsletter oder durch entsprechende Nachricht an den eingangs genannten Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird Ihre E-Mailadresse unverzüglich in unserem Newsletter-Verteiler gelöscht, soweit Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben oder wir uns eine darüberhinausgehende Datenverwendung vorbehalten, die gesetzlich erlaubt ist und über die wir Sie in dieser Erklärung informieren.</p>
          </section>

          <section>
            <h3 className="font-medium text-foreground text-base mb-2">5) Datenverarbeitung zur Bestellabwicklung</h3>
            <p className="mb-3">5.1 Soweit für die Vertragsabwicklung zu Liefer- und Zahlungszwecken erforderlich, werden die von uns erhobenen personenbezogenen Daten gemäß Art. 6 Abs. 1 lit. b DSGVO an das beauftragte Transportunternehmen und das beauftragte Kreditinstitut weitergegeben.</p>
            <p className="mb-3">Sofern wir Ihnen auf Grundlage eines entsprechenden Vertrages Aktualisierungen für Waren mit digitalen Elementen oder für digitale Produkte schulden, verarbeiten wir die von Ihnen bei der Bestellung übermittelten Kontaktdaten, um Sie im Rahmen unserer gesetzlichen Informationspflichten gemäß Art. 6 Abs. 1 lit. c DSGVO persönlich zu informieren. Ihre Kontaktdaten werden hierbei streng zweckgebunden für Mitteilungen über von uns geschuldete Aktualisierungen verwendet.</p>
            <p className="mb-3">Zur Abwicklung Ihrer Bestellung arbeiten wir ferner mit dem/den nachstehenden Dienstleister(n) zusammen, die uns ganz oder teilweise bei der Durchführung geschlossener Verträge unterstützen. An diese Dienstleister werden nach Maßgabe der folgenden Informationen gewisse personenbezogene Daten übermittelt.</p>
            <p className="font-medium text-foreground/90 mb-2">5.2 Verwendung von Paymentdienstleistern (Zahlungsdiensten)</p>
            <p className="mb-2 font-medium text-foreground/70">PayPal</p>
            <p className="mb-3">Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des folgenden Anbieters zur Verfügung: PayPal (Europe) S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg</p>
            <p className="mb-3">Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung gehen, werden an diesen Ihre im Rahmen des Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name, Anschrift, Bank- und Zahlkarteninformationen, Währung und Transaktionsnummer) sowie Informationen über den Inhalt Ihrer Bestellung gemäß Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten erfolgt in diesem Falle ausschließlich zum Zweck der Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierfür erforderlich ist.</p>
            <p className="mb-3">Bei Auswahl einer Zahlungsart, bei der wir in Vorleistung gehen, werden Sie im Bestellablauf auch aufgefordert, bestimmte persönliche Daten (Vor- und Nachname, Straße, Hausnummer, Postleitzahl, Ort, Geburtsdatum, E-Mail-Adresse, Telefonnummer, ggf. Daten zu einem alternativen Zahlungsmittel) anzugeben.</p>
            <p className="mb-3">Um in solchen Fällen unser berechtigtes Interesse an der Feststellung Ihrer Zahlungsfähigkeit zu wahren, werden diese Daten von uns gemäß Art. 6 Abs. 1 lit. f DSGVO zum Zwecke einer Bonitätsprüfung an den Anbieter weitergeleitet. Der Anbieter prüft auf Basis der von Ihnen angegebenen persönlichen Daten sowie weiterer Daten (wie etwa Warenkorb, Rechnungsbetrag, Bestellhistorie, Zahlungserfahrungen), ob die von Ihnen ausgewählte Zahlungsmöglichkeit im Hinblick auf Zahlungs- und/oder Forderungsausfallrisiken gewährt werden kann.</p>
            <p className="mb-3">Die Bonitätsauskunft kann Wahrscheinlichkeitswerte enthalten (sog. Score-Werte). Soweit Score-Werte in das Ergebnis der Bonitätsauskunft einfließen, haben sie ihre Grundlage in einem wissenschaftlich anerkannten mathematisch-statistischen Verfahren. In die Berechnung der Score-Werte fließen unter anderem, aber nicht ausschließlich, Anschriftendaten ein.</p>
            <p>Sie können dieser Verarbeitung Ihrer Daten jederzeit durch eine Nachricht an uns oder gegenüber dem Anbieter widersprechen. Jedoch bleibt der Anbieter ggf. weiterhin berechtigt, Ihre personenbezogenen Daten zu verarbeiten, sofern dies zur vertragsgemäßen Zahlungsabwicklung erforderlich ist.</p>
          </section>

          <section>
            <h3 className="font-medium text-foreground text-base mb-2">6) Rechte des Betroffenen</h3>
            <p className="mb-3">6.1 Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte):</p>
            <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
              <li>Auskunftsrecht gemäß Art. 15 DSGVO</li>
              <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
              <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
              <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
              <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO</li>
              <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
              <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO</li>
              <li>Recht auf Beschwerde gemäß Art. 77 DSGVO</li>
            </ul>
            <p className="font-medium text-foreground mb-2">6.2 Widerspruchsrecht</p>
            <p className="mb-3">Wenn wir im Rahmen einer Interessenabwägung Ihre personenbezogenen Daten aufgrund unseres überwiegenden berechtigten Interesses verarbeiten, haben Sie das jederzeitige Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen diese Verarbeitung Widerspruch mit Wirkung für die Zukunft einzulegen.</p>
            <p className="mb-3">Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung der betroffenen Daten. Eine Weiterverarbeitung bleibt aber vorbehalten, wenn wir zwingende schutzwürdige Gründe für die Verarbeitung nachweisen können, die Ihre Interessen, Grundrechte und Grundfreiheiten überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.</p>
            <p>Werden Ihre personenbezogenen Daten von uns verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen. Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung der betroffenen Daten zu Direktwerbezwecken.</p>
          </section>

          <section>
            <h3 className="font-medium text-foreground text-base mb-2">7) Dauer der Speicherung personenbezogener Daten</h3>
            <p className="mb-3">Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).</p>
            <p className="mb-3">Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.</p>
            <p className="mb-3">Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.</p>
            <p className="mb-3">Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
            <p className="mb-3">Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausüben.</p>
            <p>Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.</p>
          </section>

        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Footer() {
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);

  return (
    <>
      <ImpressumModal open={impressumOpen} onClose={() => setImpressumOpen(false)} />
      <DatenschutzModal open={datenschutzOpen} onClose={() => setDatenschutzOpen(false)} />

      <footer className="bg-primary/10 text-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src="/logo-full.jpg"
              alt="Alexandra Kautsch Logo"
              className="h-32 w-auto object-contain flex-shrink-0 mix-blend-multiply opacity-95 rounded-2xl"
            />
            <div>
              <h2 className="font-serif text-2xl font-medium mb-1">Alexandra Kautsch</h2>
              <p className="text-foreground/60 text-sm font-light tracking-wide uppercase">Energiearbeit · Reiki · Feldlesen</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-foreground/70">
            <a
              href="https://www.instagram.com/alexandra.kautsch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => setImpressumOpen(true)}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button
              onClick={() => setDatenschutzOpen(true)}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
          </div>

          <div className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} Alexandra Kautsch
          </div>
        </div>
      </footer>
    </>
  );
}
