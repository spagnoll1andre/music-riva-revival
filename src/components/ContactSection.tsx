import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Resta in contatto</p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">
            <span className="text-gold-gradient italic">Contatti</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-12 text-center"
        >
          <div className="flex flex-col items-center gap-3">
            <Mail className="text-primary" size={24} strokeWidth={1} />
            <a href="mailto:info@musicariva.org" className="text-foreground hover:text-primary transition-colors font-body">
              info@musicariva.org
            </a>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin className="text-primary" size={24} strokeWidth={1} />
            <p className="text-foreground font-body">Riva del Garda, Italia</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="text-primary" size={24} strokeWidth={1} />
            <p className="text-foreground font-body">+39 348 761 0480</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8 mt-16"
        >
          {[
            { icon: Instagram, href: "https://www.instagram.com/musicariva/", label: "Instagram" },
            { icon: Facebook, href: "https://www.facebook.com/MusicaRivafestival", label: "Facebook" },
            { icon: Youtube, href: "https://www.youtube.com/@musicaRivafestival", label: "YouTube" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Icon size={22} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
