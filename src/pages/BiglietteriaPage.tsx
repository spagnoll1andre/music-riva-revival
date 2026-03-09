import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ExternalLink, Ticket } from "lucide-react";
import heroImg from "@/assets/hero-orchestra.jpg";

interface TicketEvent {
  title: string;
  date: string;
  venue: string;
  price: string;
  details?: string;
  buyUrl?: string;
}

const ticketEvents: TicketEvent[] = [
  {
    title: "Concerto dei vincitori del Concorso Zandonai 2025",
    date: "27 giugno ore 21:00",
    venue: "Cortile della Rocca, Riva del Garda",
    price: "€ 15,00 intero / € 10,00 ridotto",
    details: "Ridotto: 14-30 anni, over 70, accompagnatori disabilità, soci MusicaRiva. Gratuito: 0-13 anni, disabilità, iscritti masterclass.",
    buyUrl: "https://ticket.midaticket.it/musicariva/Events",
  },
  {
    title: "MusicaRiva Festival 2025",
    date: "14 luglio – 4 agosto",
    venue: "Varie location a Riva del Garda e dintorni",
    price: "Da gratuito a € 20,00",
    details: "Concerti, seminari, spettacoli di danza e molto altro.",
    buyUrl: "https://ticket.midaticket.it/musicariva/Events",
  },
  {
    title: "Short Stories – Contemporary Dance",
    date: "20 luglio ore 16:00 / 17:30 / 19:00",
    venue: "Giardini Verdi, Riva del Garda",
    price: "€ 5,00",
    buyUrl: "https://ticket.centrosantachiara.it/selection/event/date?productId=10228587066827",
  },
  {
    title: "Concerto di Sant'Andrea – Roberto Prosseda",
    date: "30 novembre 2025, ore 21:00",
    venue: "Sala della Fraglia, Riva del Garda",
    price: "€ 15,00 intero / € 10,00 ridotto",
    details: "Musiche di Mozart, Chopin, Mendelssohn Bartholdy. Gratuito: bambini fino a 12 anni, persone con disabilità.",
    buyUrl: "https://ticket.midaticket.it/musicariva/Event/6406/Date/20251130/Ticket",
  },
  {
    title: "Il Grande Drago – Proiezioni con musiche dal vivo",
    date: "23 dicembre 2025, ore 21:00",
    venue: "Sala Garda, Palazzo dei Congressi, Riva del Garda",
    price: "Da € 10 a € 25",
    details: "Orchestra delle Alpi, direttore: Stefano Torboli, attrice: Elisa Salvini. 3 settori con prezzi differenziati.",
    buyUrl: "https://ticket.midaticket.it/musicariva/Event/6397/Date/20251223/Shift/521339/Seat",
  },
  {
    title: "Visions of Sound",
    date: "1 agosto ore 21:15",
    venue: "Palco Aperto del Teatro Sociale, Trento",
    price: "Da definire",
  },
];

const BiglietteriaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Biglietteria" highlight="Biglietteria" subtitle="Acquista i tuoi biglietti" backgroundImage={heroCorsiImg}>
        <p className="font-body text-foreground/70 max-w-2xl mx-auto">
          Biglietti acquistabili anche in cassa, presso gli uffici di MusicaRiva in Viale della Liberazione 7, Palazzo San Francesco – Riva del Garda, dal lunedì al venerdì dalle 10.00 alle 12.30.
        </p>
      </PageHeader>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl space-y-6">
          {ticketEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-border p-8 hover:border-primary/30 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Ticket className="text-primary" size={16} strokeWidth={1.5} />
                    <span className="text-xs tracking-[0.15em] uppercase text-primary font-body">{event.date}</span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-light text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{event.venue}</p>
                  <p className="text-sm text-foreground mt-2">{event.price}</p>
                  {event.details && <p className="text-xs text-muted-foreground mt-2">{event.details}</p>}
                </div>
                {event.buyUrl && (
                  <a
                    href={event.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-6 py-3 text-xs tracking-widest uppercase hover:opacity-90 transition-opacity shrink-0"
                  >
                    Acquista <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Price info */}
      <section className="py-16 px-6 bg-card border-y border-border">
        <div className="container mx-auto max-w-3xl">
          <h3 className="font-heading text-2xl font-light text-foreground mb-6">Informazioni sui prezzi</h3>
          <div className="space-y-3 text-sm text-muted-foreground font-body font-light">
            <p>• <strong className="text-foreground">Biglietti gratuiti:</strong> bambini fino ai 12 anni, persone con disabilità</p>
            <p>• <strong className="text-foreground">Biglietto ridotto:</strong> dai 13 ai 30 anni, accompagnatori di persone con disabilità, associati MusicaRiva, over 70</p>
            <p>• <strong className="text-foreground">Biglietto intero:</strong> persone dai 31 ai 70 anni</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BiglietteriaPage;
