export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl font-medium mb-1">Alexandra Kautsch</h2>
          <p className="text-background/70 text-sm font-light tracking-wide uppercase">Energiearbeit · Reiki · Feldlesen</p>
        </div>
        
        <div className="flex gap-6 text-sm text-background/80">
          <a href="#" className="hover:text-primary transition-colors">Impressum</a>
          <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
        </div>
        
        <div className="text-sm text-background/60">
          &copy; {new Date().getFullYear()} Alexandra Kautsch
        </div>
      </div>
    </footer>
  );
}
