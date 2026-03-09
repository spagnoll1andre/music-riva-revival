import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import rivaImg from "@/assets/riva-del-garda.jpg";
import { Music, Calendar, Award, GraduationCap } from "lucide-react";

const features = [
  { icon: Music, title: "Concerti", desc: "Esibizioni di artisti internazionali in luoghi mozzafiato" },
  { icon: GraduationCap, title: "Masterclass", desc: "Corsi di alto perfezionamento con maestri rinomati" },
  { icon: Award, title: "Concorso Zandonai", desc: "Concorso internazionale per giovani cantanti lirici" },
  { icon: Calendar, title: "Workshop", desc: "Esperienze esclusive dal canto pop alla liuteria" },
];

const FestivalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="festival" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={rivaImg} alt="Riva del Garda al tramonto" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">
            Musica Riva Festival
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">
            Un festival <span className="text-gold-gradient italic">unico</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card/80 backdrop-blur-sm border border-border p-8 text-center hover:border-primary/30 transition-colors duration-500 group"
            >
              <f.icon className="mx-auto mb-5 text-primary group-hover:scale-110 transition-transform duration-300" size={32} strokeWidth={1} />
              <h3 className="font-heading text-xl mb-3 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
