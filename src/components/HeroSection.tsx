import { motion } from "framer-motion";
import heroImg from "@/assets/hero-orchestra.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Orchestra performing at MusicaRiva Festival"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm tracking-[0.4em] uppercase text-primary font-body font-light mb-6"
        >
          Dal 1984 · Riva del Garda
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-light tracking-wide mb-6"
        >
          <span className="text-gold-gradient">Musica</span>
          <span className="text-foreground">Riva</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-heading text-xl md:text-2xl font-light italic text-foreground/70 mb-10"
        >
          Celebra 40 anni di musica straordinaria
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#festival"
            className="bg-gold-gradient text-primary-foreground px-8 py-3 text-sm font-body tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Scopri il Festival
          </a>
          <a
            href="#events"
            className="border border-gold px-8 py-3 text-sm font-body tracking-widest uppercase text-primary hover:bg-primary/10 transition-colors"
          >
            Prossimi Eventi
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
