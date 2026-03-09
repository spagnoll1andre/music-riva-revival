import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

interface Workshop {
  title: string;
  teacher: string;
  dates: string;
  venue: string;
  price: string;
  description?: string;
}

const workshops: Workshop[] = [
  {
    title: "Musica e cecità",
    teacher: "Ciara Moser",
    dates: "23 – 24 luglio 2025",
    venue: "Scuola Musicale Alto Garda SMAG",
    price: "€ 100,00",
    description: "Tecniche di memorizzazione delle partiture musicali e approccio di una persona non vedente allo studio della musica. Per musicisti di qualsiasi strumento, vedenti e non vedenti.",
  },
  {
    title: "Canto pop",
    teacher: "Christelle Pascal",
    dates: "23 – 24 luglio 2025",
    venue: "Scuola Musicale Alto Garda SMAG",
    price: "€ 100,00",
  },
  {
    title: "Chitarra moderna",
    teacher: "Luca de Toni",
    dates: "23 – 24 luglio 2025",
    venue: "Scuola Musicale Alto Garda SMAG",
    price: "€ 100,00",
  },
  {
    title: "Batteria",
    teacher: "Andrea Dionisi",
    dates: "23 – 24 luglio 2025",
    venue: "Scuola Musicale Alto Garda SMAG",
    price: "€ 100,00",
  },
  {
    title: "Improvvisazione in musica: tra cognizione e creatività",
    teacher: "Lorenzo Bellini",
    dates: "23 – 24 luglio 2025",
    venue: "Scuola Musicale Alto Garda SMAG",
    price: "€ 100,00",
    description: "Aperto sia a cantanti che musicisti. Indicare nella scheda d'iscrizione se si è cantanti o musicisti e specificare lo strumento.",
  },
  {
    title: "Yoga e musica indiana",
    teacher: "Ashanka Sen e Nupur Mukherjee Sen",
    dates: "25 – 26 luglio 2025",
    venue: "Sede Seesaw Project, Via F. Alberti-Lutti 12, Riva del Garda",
    price: "€ 50,00 al giorno",
    description: "Orari: 9.30 – 13.00 / 14.30 – 17.30. È necessario portare un tappetino/yoga mat.",
  },
];

const liuteriaWorkshops: Workshop[] = [
  {
    title: "Strumenti ad arco",
    teacher: "Gianmaria Stelzer",
    dates: "25 – 27 luglio 2025",
    venue: "Sala Craffonara, Riva del Garda",
    price: "€ 100,00",
    description: "Sarai trasportato nella quotidianità di un liutaio e verrai guidato nella scultura della bombatura di una tavola armonica.",
  },
  {
    title: "Chitarra / Chitarra elettrica",
    teacher: "Manuel Rossi",
    dates: "25 – 27 luglio 2025",
    venue: "Sala Craffonara, Riva del Garda",
    price: "€ 100,00",
    description: "Uno sguardo approfondito sulla liuteria contemporanea e un pick up per chitarra elettrica realizzato interamente con le tue mani.",
  },
  {
    title: "Strumenti ad arco",
    teacher: "Luca Olzer",
    dates: "25 – 27 luglio 2025",
    venue: "Sala Craffonara, Riva del Garda",
    price: "€ 100,00",
    description: "Costruirai con le tue mani la porzione di tavola armonica che racchiude le tecniche più peculiari della liuteria degli strumenti ad arco.",
  },
];

const WorkshopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Workshop & Atelier Liuteria"
        highlight="Workshop"
        subtitle="XXIX Edizione – Luglio 2025"
      >
        <p className="font-body text-foreground/70 max-w-2xl mx-auto">
          I nostri workshop sono pensati per tutti: musicisti e non, curiosi, appassionati o semplici interessati.
          Tutti gli iscritti potranno accedere gratuitamente ai concerti di MusicaRiva Festival 2025.
        </p>
      </PageHeader>

      {/* Workshop */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Workshop</p>
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-12 text-foreground">
            23 – 26 luglio, <span className="text-gold-gradient italic">Riva del Garda</span>
          </h2>
          <div className="space-y-6">
            {workshops.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-border p-8 hover:border-primary/30 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary font-body">{w.title}</span>
                    <h3 className="font-heading text-xl font-light text-foreground mt-2">{w.teacher}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{w.dates} · {w.venue}</p>
                    {w.description && <p className="text-sm text-muted-foreground/70 mt-2 italic">{w.description}</p>}
                  </div>
                  <p className="text-sm text-foreground font-body shrink-0">{w.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier Liuteria */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Atelier Liuteria</p>
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-4 text-foreground">
            In Trentino tra musica e <span className="text-gold-gradient italic">artigianato</span>
          </h2>
          <p className="text-muted-foreground font-body font-light mb-12">
            Il mestiere del liutaio e i suoi legami con il territorio. 25 – 27 luglio 2025, Sala Civica Craffonara e Parco Grotta Cascata del Varone.
          </p>
          <div className="space-y-6">
            {liuteriaWorkshops.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-border p-8 hover:border-primary/30 transition-colors duration-500 bg-background"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary font-body">{w.title}</span>
                    <h3 className="font-heading text-xl font-light text-foreground mt-2">{w.teacher}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{w.dates} · {w.venue}</p>
                    {w.description && <p className="text-sm text-muted-foreground/70 mt-2 italic">{w.description}</p>}
                  </div>
                  <p className="text-sm text-foreground font-body shrink-0">{w.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-8">
            Studenti SMAG: sconto 50% contattando mrf@musicariva.org. Iscrizione entro il 13 luglio 2025.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkshopPage;
