import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import violinImg from "@/assets/violin-detail.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Chi siamo</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-8 text-foreground">
              40 anni di passione per la <span className="text-gold-gradient italic">musica</span>
            </h2>
            <p className="font-body text-muted-foreground font-light leading-relaxed mb-6">
              Dal 1984, MusicaRiva porta a Riva del Garda i più grandi musicisti del mondo, 
              creando un ponte tra tradizione e innovazione. I nostri concerti, masterclass e 
              workshop hanno ispirato generazioni di musicisti e amanti della musica.
            </p>
            <p className="font-body text-muted-foreground font-light leading-relaxed">
              Situati sulle rive del magnifico Lago di Garda, offriamo un'esperienza musicale 
              unica in un contesto paesaggistico mozzafiato, dove la bellezza della natura 
              incontra l'eccellenza artistica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-gold">
              <img
                src={violinImg}
                alt="Violinista in concerto"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 shadow-gold">
              <p className="font-heading text-5xl font-light text-primary">40+</p>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Anni di storia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
