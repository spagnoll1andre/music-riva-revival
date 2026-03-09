const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg tracking-wider text-foreground">
          <span className="text-gold-gradient">Musica</span>Riva
        </p>
        <p className="text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Associazione MusicaRiva · Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
