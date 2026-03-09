import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import heroZandonaiImg from "@/assets/hero-zandonai.jpg";

const prizes = [
  { label: "Primo Premio", amount: "€ 8.000" },
  { label: "Secondo Premio", amount: "€ 5.000" },
  { label: "Terzo Premio", amount: "€ 3.000" },
  { label: "Premio Riccardo Zandonai", amount: "€ 5.000", note: "Per la migliore esecuzione di arie d'opera o liriche da camera di Riccardo Zandonai" },
  { label: "Premio MusicaRiva", amount: "€ 3.000" },
  { label: "Premio Baritono Eung Kwang Lee", amount: "€ 2.000" },
  { label: "Premio del Pubblico", amount: "€ 2.000" },
  { label: "2 Premi Roma Tre Orchestra", amount: "€ 1.000 cadauno" },
];

const winners2024 = [
  { prize: "Primo Premio (ex aequo)", names: ["Ilho Kong", "Laia Vallés"] },
  { prize: "Secondo Premio", names: ["Sungwoo Hwang"] },
  { prize: "Terzo Premio (ex aequo)", names: ["Seojun Yun", "Claudia Mavilia"] },
  { prize: "Premio Riccardo Zandonai", names: ["Laura Fortino"] },
  { prize: "Premio del Pubblico", names: ["Sungwoo Hwang"] },
  { prize: "Premio Eung Kwang Lee", names: ["Laia Vallés"] },
];

const ZandonaiPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Concorso Zandonai"
        highlight="Zandonai"
        subtitle="31° Edizione – 2025"
        backgroundImage={heroZandonaiImg}
      >
        <p className="font-body text-foreground/70 max-w-2xl mx-auto">
          Concorso Internazionale per Giovani Cantanti Lirici "Riccardo Zandonai"
        </p>
      </PageHeader>

      {/* Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="border border-primary/20 p-8 md:p-12 text-center mb-16 shadow-gold">
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
                Dal 22 al 27 giugno 2025
              </h2>
              <p className="text-muted-foreground font-body mb-2">Concerto dei vincitori: 27 giugno 2025, ore 21:00</p>
              <p className="text-muted-foreground font-body">Cortile della Rocca – Riva del Garda</p>
              <p className="text-xs text-muted-foreground mt-4">
                Il pernottamento e la prima colazione presso la Casa della Gioventù di Riva del Garda saranno a carico dell'Organizzazione.
              </p>
            </div>
          </motion.div>

          {/* Premi */}
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Premi Concorso 2025</p>
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-12 text-foreground">
            Montepremi <span className="text-gold-gradient italic">totale</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {prizes.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="border border-border p-6 flex items-start gap-4"
              >
                <Trophy className="text-primary shrink-0 mt-1" size={20} strokeWidth={1} />
                <div>
                  <p className="text-sm text-foreground font-body">{p.label}</p>
                  <p className="text-lg font-heading text-primary">{p.amount}</p>
                  {p.note && <p className="text-xs text-muted-foreground mt-1">{p.note}</p>}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">*I premi si intendono al lordo di ritenute fiscali</p>
        </div>
      </section>

      {/* Vincitori 2024 */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Albo d'oro</p>
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-12 text-foreground">
            Vincitori <span className="text-gold-gradient italic">2024</span>
          </h2>
          <div className="space-y-4">
            {winners2024.map((w, i) => (
              <div key={i} className="border border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="text-sm text-primary uppercase tracking-wider">{w.prize}</p>
                <p className="font-heading text-lg text-foreground">{w.names.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZandonaiPage;
