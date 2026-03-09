import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-orchestra.jpg";

const directors = [
  { name: "Janos Meszaros", period: "1984 – 1996" },
  { name: "Mietta Sighele", period: "1997 – 2022" },
  { name: "Lucas Carl Christ", period: "dal 2023" },
  { name: "Valerio Vicari", period: "dal 2026 – Direttore artistico Concorso Zandonai" },
];

const board = [
  { name: "Gianluca Rizzardo Gianfilippi", role: "Presidente" },
  { name: "Maria Luisa Crosina", role: "Consigliere" },
  { name: "Roberto Lorenzi", role: "Tesoriere" },
  { name: "Luca Fruner", role: "Consigliere" },
  { name: "Silvia Niculae", role: "Consigliere" },
];

const founders = [
  "Luigi Dal Bianco", "Giovanni Bresciani", "Gian Luigi Dardo", "Riccardo Giavina",
  "Carlo Stella", "Aurelio Delaini", "Guido Zanolli", "Francesco Pfleger",
  "Gian Carlo Boschin", "Dario Mosaner", "Giuseppe Longo", "Enrica Carloni",
  "Catia Civettini", "Emilio Vellati", "Bruno Pasini", "Maria Cristina Fava",
];

const ChiSiamoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader title="Chi Siamo" highlight="Chi" subtitle="La nostra storia" backgroundImage={heroImg} />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-8 text-foreground">
              MusicaRiva: oltre quarant'anni di formazione, passione e <span className="text-gold-gradient italic">cultura musicale</span>.
            </h2>
            <div className="space-y-6 text-muted-foreground font-body font-light leading-relaxed">
              <p>
                Fondata nel 1984 a Riva del Garda su iniziativa di un gruppo di musicisti e appassionati locali, MusicaRiva nasce con una visione ambiziosa: trasformare la città in un centro internazionale di formazione, crescita e confronto per giovani musicisti. L'obiettivo era – ed è tuttora – quello di offrire occasioni concrete di sviluppo artistico e professionale, promuovendo al contempo la cultura musicale.
              </p>
              <p>
                Nel 1986 l'associazione si costituisce formalmente, definendo la propria missione: favorire la crescita artistica, sociale e culturale della comunità attraverso attività formative di alta qualità. Fin dagli esordi, MusicaRiva si distingue per l'eccellenza dei corsi di perfezionamento, affidati a docenti di prestigio internazionale.
              </p>
              <p>
                Sotto la direzione artistica di Janos Meszaros (1984–1995), si gettano le fondamenta di un progetto formativo solido e riconosciuto a livello internazionale. Dal 1996 al 2022, la direzione passa al soprano Mietta Sighele, che introduce uno degli elementi distintivi dell'offerta formativa: il corso di direzione d'orchestra con orchestra in residenza.
              </p>
              <p>
                Dal 2023 la direzione artistica è affidata a Lucas Carl Christ, che rinnova e amplia la proposta formativa, affidando il corso di direzione a Markus Stenz. Tra le novità introdotte figurano workshop e atelier di liuteria, pensati per avvicinare un pubblico più ampio al mondo della musica.
              </p>
              <p>
                Tra le iniziative di maggior prestigio spicca il Concorso Internazionale per Giovani Cantanti Lirici "Riccardo Zandonai", riconosciuto a livello mondiale. Il concorso ha rappresentato l'Italia all'Expo Universale di Shanghai 2010 e ha contribuito al lancio di numerose carriere internazionali.
              </p>
              <p>
                Con oltre quarant'anni di attività, MusicaRiva si conferma un punto di riferimento nel panorama musicale internazionale, con uno sguardo sempre attento all'innovazione, ai giovani talenti e alla diffusione della cultura musicale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Direttori Artistici */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Direzione artistica</p>
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-12 text-foreground">
            I nostri <span className="text-gold-gradient italic">direttori</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {directors.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="border border-border p-6"
              >
                <h3 className="font-heading text-xl text-foreground">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consiglio Direttivo */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Governance</p>
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-12 text-foreground">
            Consiglio <span className="text-gold-gradient italic">Direttivo</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((b) => (
              <div key={b.name} className="border border-border p-6">
                <h3 className="font-heading text-lg text-foreground">{b.name}</h3>
                <p className="text-sm text-primary mt-1">{b.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soci Fondatori */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Le origini</p>
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-12 text-foreground">
            Soci <span className="text-gold-gradient italic">Fondatori</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {founders.map((f) => (
              <p key={f} className="text-sm text-muted-foreground font-body">{f}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSiamoPage;
