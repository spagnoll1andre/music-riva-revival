import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Music, GraduationCap, Award, Calendar, Ticket, ArrowRight } from "lucide-react";
import violinImg from "@/assets/violin-detail.jpg";
import rivaImg from "@/assets/riva-del-garda.jpg";

const sections = [
  { icon: Music, title: "Festival", desc: "Concerti con artisti internazionali in luoghi mozzafiato", link: "/festival" },
  { icon: GraduationCap, title: "Corsi", desc: "Corsi di alto perfezionamento con maestri rinomati", link: "/corsi" },
  { icon: Calendar, title: "Workshop", desc: "Esperienze musicali per tutti, dal canto pop alla liuteria", link: "/workshop" },
  { icon: Award, title: "Concorso Zandonai", desc: "Concorso internazionale per giovani cantanti lirici", link: "/zandonai" },
];

const Index = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const festRef = useRef(null);
  const festInView = useInView(festRef, { once: true, margin: "-100px" });
  const eventsRef = useRef(null);
  const eventsInView = useInView(eventsRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* About */}
      <section ref={aboutRef} className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={aboutInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Chi siamo</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-8 text-foreground">
                Oltre quarant'anni di <span className="text-gold-gradient italic">musica</span>
              </h2>
              <p className="font-body text-muted-foreground font-light leading-relaxed mb-6">
                Fondata nel 1984 a Riva del Garda, MusicaRiva nasce con una visione ambiziosa: trasformare la città in un centro internazionale di formazione, crescita e confronto per giovani musicisti.
              </p>
              <p className="font-body text-muted-foreground font-light leading-relaxed mb-8">
                Ogni anno propone un articolato programma di concerti, masterclass, concorsi e produzioni che animano Riva del Garda e il territorio circostante.
              </p>
              <Link to="/chi-siamo" className="inline-flex items-center gap-2 text-sm text-primary tracking-widest uppercase hover:gap-3 transition-all">
                Scopri di più <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={aboutInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <img src={violinImg} alt="Violinista in concerto" className="w-full h-[500px] object-cover shadow-gold" />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 shadow-gold">
                <p className="font-heading text-5xl font-light text-primary">40+</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">Anni di storia</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Attività */}
      <section ref={festRef} className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={rivaImg} alt="Riva del Garda" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={festInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Le nostre attività</p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">
              Un festival <span className="text-gold-gradient italic">unico</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} animate={festInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}>
                <Link to={s.link} className="block bg-card/80 backdrop-blur-sm border border-border p-8 text-center hover:border-primary/30 transition-all duration-500 group h-full">
                  <s.icon className="mx-auto mb-5 text-primary group-hover:scale-110 transition-transform duration-300" size={32} strokeWidth={1} />
                  <h3 className="font-heading text-xl mb-3 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prossimi eventi */}
      <section ref={eventsRef} className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={eventsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">In evidenza</p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground">Prossimi <span className="text-gold-gradient italic">eventi</span></h2>
          </motion.div>
          <div className="space-y-6">
            {[
              { title: "MusicaRiva Festival 2025", desc: "Dal 14 luglio al 4 agosto – Concerti, masterclass e workshop", link: "/festival", tag: "Festival" },
              { title: "Concorso Zandonai 2025", desc: "Dal 22 al 27 giugno – Concorso internazionale per giovani cantanti lirici", link: "/zandonai", tag: "Concorso" },
              { title: "Winter Season", desc: "Concerti invernali – Concerto di Sant'Andrea, Il Grande Drago e molto altro", link: "/biglietteria", tag: "Stagione" },
            ].map((event, i) => (
              <motion.div key={event.title} initial={{ opacity: 0, x: -30 }} animate={eventsInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}>
                <Link to={event.link} className="group border border-border hover:border-primary/30 p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-500 hover:bg-card block">
                  <div className="flex-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary font-body">{event.tag}</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mt-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground font-light mt-2">{event.desc}</p>
                  </div>
                  <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Biglietteria */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Non perdere i prossimi concerti</p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-8">
            Acquista i tuoi <span className="text-gold-gradient italic">biglietti</span>
          </h2>
          <Link to="/biglietteria" className="inline-block bg-gold-gradient text-primary-foreground px-10 py-4 text-sm font-body tracking-widest uppercase hover:opacity-90 transition-opacity">
            Vai alla biglietteria
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
