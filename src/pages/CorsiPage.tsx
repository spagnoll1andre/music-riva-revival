import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import heroCorsiImg from "@/assets/hero-corsi.jpg";

interface Course {
  instrument: string;
  teacher: string;
  dates: string;
  venue: string;
  price: string;
  auditorPrice?: string;
  deadline?: string;
  notes?: string;
}

const courses: Course[] = [
  {
    instrument: "Clarinetto",
    teacher: "Calogero Palermo",
    dates: "14 – 18 luglio 2025",
    venue: "Conservatorio F.A. Bonporti - Riva del Garda",
    price: "€ 250,00",
    auditorPrice: "€ 100,00",
    deadline: "1° giugno 2025",
    notes: "Pianista accompagnatrice: Barbara Panzarella",
  },
  {
    instrument: "Clarinetto Basso",
    teacher: "Diego Baroni",
    dates: "15 – 17 luglio 2025",
    venue: "Conservatorio F.A. Bonporti - Riva del Garda",
    price: "€ 150,00 (€ 100 per iscritti al corso di Palermo)",
    auditorPrice: "€ 100,00",
  },
  {
    instrument: "Fisarmonica",
    teacher: "Cao Xiao-Qing",
    dates: "18–21 luglio e 23–26 luglio 2025",
    venue: "Conservatorio F.A. Bonporti - Riva del Garda",
    price: "€ 200,00 per turno",
    auditorPrice: "€ 100,00",
    deadline: "1° giugno 2025",
  },
  {
    instrument: "Flauto",
    teacher: "Paolo Taballione",
    dates: "21 – 27 luglio 2025",
    venue: "Conservatorio F.A. Bonporti - Riva del Garda",
    price: "€ 250,00",
    auditorPrice: "€ 100,00",
    deadline: "1° giugno 2025",
    notes: "Pianista accompagnatore: Leonardo Bartelloni. Controllo gratuito flauti da Borsari Strumenti Musicali.",
  },
  {
    instrument: "Violino",
    teacher: "Marco Bronzi",
    dates: "21 – 23 luglio 2025",
    venue: "Conservatorio F.A. Bonporti - Riva del Garda",
    price: "€ 150,00",
    auditorPrice: "€ 100,00",
    notes: "La risoluzione delle problematiche tecniche e stilistiche del repertorio violinistico tramite la fisiologia strumentale",
  },
  {
    instrument: "Misa Tango – Laboratorio corale",
    teacher: "Martìn Palmeri",
    dates: "22 – 24 luglio 2025, concerti 24 e 25 luglio",
    venue: "Riva del Garda",
    price: "€ 200,00 (con alloggio € 600,00)",
    auditorPrice: "€ 100,00",
    notes: "Sconti per cori: 10% da 6 cantanti, 15% da 11, 20% da 21.",
  },
];

const CorsiPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Corsi di Alto Perfezionamento"
        highlight="Perfezionamento"
        subtitle="XXIX Edizione – 2025"
      >
        <p className="font-body text-foreground/70 max-w-2xl mx-auto">
          Un'occasione unica per migliorare le proprie competenze musicali attraverso intense sessioni di studio, tenute da artisti di chiara fama internazionale.
        </p>
      </PageHeader>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-border p-8 hover:border-primary/30 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary font-body">{course.instrument}</span>
                    <h3 className="font-heading text-2xl font-light text-foreground mt-2">{course.teacher}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{course.dates}</p>
                    <p className="text-sm text-muted-foreground">{course.venue}</p>
                    {course.notes && <p className="text-sm text-muted-foreground/70 mt-2 italic">{course.notes}</p>}
                    {course.deadline && (
                      <p className="text-xs text-primary mt-3">Deadline video audizione: {course.deadline}</p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-foreground font-body">Attivo: {course.price}</p>
                    {course.auditorPrice && (
                      <p className="text-xs text-muted-foreground mt-1">Uditore: {course.auditorPrice}</p>
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

export default CorsiPage;
