const NewsSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Market Insights</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NewsCard
          category="Analisi"
          date="12 Gen 2026"
          title="Perché l'inflazione sta scendendo più velocemente del previsto in Europa."
        />
        <NewsCard
          category="Crypto"
          date="10 Gen 2026"
          title="L'impatto degli ETF spot sul mercato globale delle criptovalute."
        />
        <NewsCard
          category="Strategia"
          date="08 Gen 2026"
          title="Ribilanciamento del portafoglio: guida pratica per il Q1."
        />
      </div>
    </div>
  </section>
);
