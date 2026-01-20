const DataSourcesSection = () => {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">

        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
          Affidabilità del dato
        </h3>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 tracking-tight">
          Niente rumore. Solo fonti primarie.
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale">

          <span className="text-2xl md:text-3xl font-bold font-serif text-gray-900">
            Il Sole 24 Ore
          </span>

          <span className="text-2xl md:text-3xl font-bold font-serif text-gray-900">
            MilanoFinanza
          </span>

          <span className="text-2xl md:text-3xl font-black font-sans tracking-tighter text-gray-900">
            BLOOMBERG
          </span>

          <span className="text-2xl md:text-3xl font-bold font-serif italic text-gray-900">
            Forbes
          </span>

          <span className="text-2xl md:text-3xl font-bold font-serif text-gray-900">
            Reuters
          </span>

        </div>

        <p className="mt-10 text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Le nostre analisi non si basano su opinioni social. Elaboriamo i dati grezzi direttamente dai terminali istituzionali e dalle testate finanziarie più autorevoli al mondo, filtrandoli per te ogni mattina.
        </p>

      </div>
    </section>
  );
};
