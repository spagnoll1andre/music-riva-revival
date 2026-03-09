import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-orchestra.jpg";

interface FestivalEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  price?: string;
  artists?: string;
  music?: string;
  bookUrl?: string;
  free?: boolean;
}

const festivalEvents: FestivalEvent[] = [
  {
    title: "900...Suoni dal secolo breve",
    date: "16 luglio",
    time: "21:00",
    venue: "Convento di Campo Lomaso, Comano Terme",
    free: true,
    artists: "MusicaRiva Accordion Quartet – Marco Salvetti, Jacopo Zendri, Martin Klemm, Matteo Trentini. Guest: Nadeshda Nesterova, Mario Stefano Pietrodarchi",
    bookUrl: "https://ticket.midaticket.it/eventimusicariva/Event/381/Date/20250716/Ticket",
  },
  {
    title: "City of Belfast Youth Orchestra",
    date: "17 luglio",
    time: "21:00",
    venue: "Cortile della Rocca",
    free: true,
    music: "Prokofiev, Verdi, Massenet",
    artists: "Direttore: Paul McBride, violino: Sienna Whiteman",
    bookUrl: "https://ticket.midaticket.it/eventimusicariva/Event/361/Date/20250717/Ticket",
  },
  {
    title: "Verso la luce – Mahler Sinfonia n.5",
    date: "18 luglio",
    time: "21:00",
    venue: "Auditorium San Giuseppe",
    price: "€ 20/15",
    artists: "Orchestra delle Alpi, direttore: Luka Hauser",
    bookUrl: "https://ticket.midaticket.it/musicariva/Event/5977/Date/20250718/Ticket",
  },
  {
    title: "Der Tod und das Mädchen",
    date: "19 luglio",
    time: "11:00",
    venue: "Palazzo Martini",
    price: "€ 10",
    music: "Verdi, Schubert",
    artists: "Eos Quartet",
    bookUrl: "https://ticket.midaticket.it/musicariva/Event/5986/Date/20250719/Ticket",
  },
  {
    title: "Orchestra Haydn",
    date: "19 luglio",
    time: "21:00",
    venue: "Cortile della Rocca",
    free: true,
    music: "Haydn, Mozart, Schubert",
    artists: "Orchestra Haydn di Trento e Bolzano, direttore: Nicola Valentini",
    bookUrl: "https://ticket.midaticket.it/eventimusicariva/Event/362/Date/20250719/Ticket",
  },
  {
    title: "Da Napoli a Buenos Aires",
    date: "20 luglio",
    time: "21:00",
    venue: "Spiaggia degli Olivi",
    price: "€ 20/15",
    music: "Morricone, Rota, Piazzolla",
    artists: "Quintetto Amarcord con bandoneon: Mario Stefano Pietrodarchi",
    bookUrl: "https://ticket.midaticket.it/musicariva/Event/5993/Date/20250720/Ticket",
  },
  {
    title: "Cello solo",
    date: "21 luglio",
    time: "11:00",
    venue: "Chiesa dell'Inviolata",
    free: true,
    music: "Hindemith, Bach, Sollima",
    artists: "Violoncello: Marcello Sette",
    bookUrl: "https://ticket.midaticket.it/eventimusicariva/Event/363/Date/20250721/Ticket",
  },
  {
    title: "Orchestre symphonique des jeunes de Strasbourg",
    date: "23 luglio",
    time: "21:00",
    venue: "Cortile della Rocca",
    price: "€ 10",
    music: "Weber, Puccini, Dvorak, Williams, Ponchielli",
    artists: "Direttore: Gustave Winkler",
    bookUrl: "https://ticket.midaticket.it/musicariva/Event/5980/Date/20250723/Ticket",
  },
  {
    title: "Misa Tango a Buenos Aires",
    date: "24 luglio",
    time: "21:00",
    venue: "Cortile della Rocca",
    price: "€ 15/10",
    artists: "Ensemble di archi e bandoneon, soprano: Mariana Mazur, pianoforte: Martìn Palmeri, direttore: Leon Frantzen – Malesani",
    bookUrl: "https://ticket.midaticket.it/musicariva/Event/5994/Date/20250724/Ticket",
  },
  {
    title: "Short Stories – Contemporary Dance",
    date: "20 luglio",
    time: "16:00 / 17:30 / 19:00",
    venue: "Giardini Giuseppe Verdi",
    price: "€ 5",
    artists: "Michele Merola, Contemporary Dance Academy",
    bookUrl: "https://ticket.centrosantachiara.it/selection/event/date?productId=10228587066827",
  },
];

const FestivalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="MusicaRiva Festival"
        highlight="Festival"
        subtitle="14 Luglio – 4 Agosto 2025"
        backgroundImage={heroImg}
      >
        <p className="font-body text-foreground/70 max-w-2xl mx-auto">
          Tutti gli eventi del MusicaRiva Festival 2025: concerti, seminari e spettacoli in luoghi mozzafiato tra Riva del Garda e il Trentino.
        </p>
      </PageHeader>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-4">
            {festivalEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border border-border hover:border-primary/30 p-6 md:p-8 transition-all duration-500 hover:bg-card group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs tracking-[0.15em] uppercase text-primary font-body">{event.date}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{event.time}</span>
                      {event.free && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 tracking-wider uppercase">Gratuito</span>
                      )}
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.venue}</p>
                    {event.artists && <p className="text-sm text-muted-foreground mt-1">{event.artists}</p>}
                    {event.music && <p className="text-sm text-muted-foreground/70 mt-1 italic">Musiche di {event.music}</p>}
                  </div>
                  <div className="flex items-center gap-4">
                    {event.price && <span className="text-sm text-foreground font-body">{event.price}</span>}
                    {event.bookUrl && (
                      <a
                        href={event.bookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs tracking-widest uppercase text-primary hover:text-foreground transition-colors"
                      >
                        Prenota <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FestivalPage;
