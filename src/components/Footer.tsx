import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-musicariva.png";

const footerLinks = [
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Festival", href: "/festival" },
  { label: "Corsi", href: "/corsi" },
  { label: "Workshop", href: "/workshop" },
  { label: "Zandonai", href: "/zandonai" },
  { label: "Biglietteria", href: "/biglietteria" },
  { label: "Contatti", href: "/contatti" },
];

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block">
              <img src={logoImg} alt="MusicaRiva" className="h-10 brightness-0 invert" />
            </Link>
            <p className="text-sm text-muted-foreground mt-4 font-light leading-relaxed">
              Dal 1984, musica d'eccellenza a Riva del Garda. Concerti, masterclass, workshop e il Concorso Zandonai.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Navigazione</p>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">Contatti</p>
            <p className="text-sm text-muted-foreground mb-1">info@musicariva.org</p>
            <p className="text-sm text-muted-foreground mb-1">+39 348 761 0480</p>
            <p className="text-sm text-muted-foreground mb-4">Viale della Liberazione 7, Riva del Garda</p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/musicariva/" },
                { icon: Facebook, href: "https://www.facebook.com/MusicaRivafestival" },
                { icon: Youtube, href: "https://www.youtube.com/@musicaRivafestival" },
                { icon: Mail, href: "mailto:info@musicariva.org" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Associazione MusicaRiva · Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
