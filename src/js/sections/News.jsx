const { motion } = Motion;

const NewsSection = () => {
  const newsItems = [
    {
      category: "Analisi",
      date: "12 Gen 2026",
      title: "Perché l'inflazione sta scendendo più velocemente del previsto in Europa."
    },
    {
      category: "Crypto",
      date: "10 Gen 2026",
      title: "L'impatto degli ETF spot sul mercato globale delle criptovalute."
    },
    {
      category: "Strategia",
      date: "08 Gen 2026",
      title: "Ribilanciamento del portafoglio: guida pratica per il Q1."
    },
    {
      category: "Tech",
      date: "05 Gen 2026",
      title: "L'ascesa dell'intelligenza artificiale generativa nel settore finanziario."
    },
    {
      category: "Sostenibilità",
      date: "03 Gen 2026",
      title: "Investimenti ESG: come bilanciare rendimento e impatto sociale nel 2026."
    },
    {
      category: "Mercati Emergenti",
      date: "28 Dic 2025",
      title: "India e Brasile: le nuove frontiere della crescita economica globale."
    },
    {
      category: "Obbligazioni",
      date: "26 Dic 2025",
      title: "BTP e Treasury: quale scegliere in uno scenario di tassi decrescenti."
    },
    {
      category: "Materie Prime",
      date: "24 Dic 2025",
      title: "Oro vs Bitcoin: quale rifugio sicuro per il 2026?"
    },
    {
      category: "Analisi",
      date: "22 Dic 2025",
      title: "S&P 500: analisi tecnica e previsioni per il primo trimestre."
    },
    {
      category: "Fiscalità",
      date: "20 Dic 2025",
      title: "Nuove detrazioni fiscali sugli investimenti: guida completa."
    },
    {
      category: "Immobiliare",
      date: "18 Dic 2025",
      title: "REIT vs proprietà diretta: pro e contro per gli investitori privati."
    },
    {
      category: "Pensioni",
      date: "15 Dic 2025",
      title: "Piano pensionistico fai-da-te: come costruirlo in 5 passi."
    }
  ];

  // Duplicate array for infinite scroll effect
  const duplicatedNews = [...newsItems, ...newsItems];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Market Insights</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Rimani aggiornato con le ultime analisi di mercato, tendenze economiche e strategie di investimento per prendere decisioni informate.
          </p>
        </div>

        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -50 * newsItems.length + '%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear"
              }
            }}
          >
            {duplicatedNews.map((item, index) => (
              <div key={index} className="min-w-[300px] md:min-w-[400px] flex-shrink-0">
                <NewsCard
                  category={item.category}
                  date={item.date}
                  title={item.title}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
