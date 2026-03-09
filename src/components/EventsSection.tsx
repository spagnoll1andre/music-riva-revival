import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const events = [
  {
    title: "Winter Season",
    description: "Concerti invernali con musicisti e luoghi mozzafiato",
    date: "Dicembre – Marzo",
    tag: "Stagione",
  },
  {
    title: "Eventi Speciali",
    description: "Tre eventi imperdibili per il gran finale della stagione",
    date: "Prossimamente",
    tag: "Speciale",
  },
  {
    title: "Concorso Zandonai",
    description: "Concorso internazionale per giovani cantanti lirici",
    date: "Estate 2025",
    tag: "Concorso",
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" ref={ref} className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Programmazione</p>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">
            Prossimi <span className="text-gold-gradient italic">eventi</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group border border-border hover:border-primary/30 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-500 hover:bg-card"
            >
              <div className="flex-1">
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-body">{event.tag}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mt-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground font-light mt-2">{event.description}</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm text-muted-foreground tracking-wider">{event.date}</span>
                <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
