import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import rivaImg from "@/assets/riva-del-garda.jpg";

const ContattiPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Contatti" highlight="Contatti" subtitle="Resta in contatto" backgroundImage={rivaImg} />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="font-heading text-3xl font-light text-foreground mb-8">
                <span className="text-gold-gradient italic">Informazioni</span> utili
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary shrink-0 mt-1" size={20} strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:info@musicariva.org" className="text-foreground hover:text-primary transition-colors">info@musicariva.org</a>
                    <br />
                    <a href="mailto:mrf@musicariva.org" className="text-foreground hover:text-primary transition-colors">mrf@musicariva.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary shrink-0 mt-1" size={20} strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Telefono / WhatsApp</p>
                    <p className="text-foreground">+39 348 761 0480</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Sede</p>
                    <p className="text-foreground">Viale della Liberazione 7</p>
                    <p className="text-foreground">Palazzo San Francesco</p>
                    <p className="text-foreground">Riva del Garda (TN), Italia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-primary shrink-0 mt-1" size={20} strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Orari biglietteria</p>
                    <p className="text-foreground">Lunedì – Venerdì: 10.00 – 12.30</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h2 className="font-heading text-3xl font-light text-foreground mb-8">
                <span className="text-gold-gradient italic">Social</span>
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/musicariva/", handle: "@musicariva" },
                  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/MusicaRivafestival", handle: "MusicaRivafestival" },
                  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@musicaRivafestival", handle: "@musicaRivafestival" },
                ].map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-border p-5 hover:border-primary/30 transition-colors duration-300 group"
                  >
                    <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} strokeWidth={1.5} />
                    <div>
                      <p className="text-sm text-foreground font-body">{label}</p>
                      <p className="text-xs text-muted-foreground">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 border border-border p-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Presidenza</p>
                <a href="mailto:presidenza@musicariva.org" className="text-foreground hover:text-primary transition-colors">
                  presidenza@musicariva.org
                </a>
              </div>
              <div className="mt-4 border border-border p-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Direzione artistica</p>
                <a href="mailto:direttoreartistico@musicariva.org" className="text-foreground hover:text-primary transition-colors">
                  direttoreartistico@musicariva.org
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContattiPage;
