// Dati delle Card
const cards = [
  {
    title: "Politica & Macroeconomia",
    description: "Le decisioni di Roma e Bruxelles spiegate senza filtri. Capisci prima degli altri come una nuova legge o un taglio dei tassi influenzerà il tuo mutuo e i tuoi BTP.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    icon: "Globe",
    colSpan: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Flash di Mercato",
    description: "Niente rumore di fondo. Solo le notizie che muovono davvero i prezzi, filtrate dai nostri analisti in tempo reale.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    icon: "Zap",
    colSpan: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Consigli Operativi",
    description: "Non solo teoria. Ricevi spunti pratici su come allocare il capitale, proteggerti dall'inflazione e ottimizzare il carico fiscale.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    icon: "TrendingUp",
    colSpan: "md:col-span-6 lg:col-span-4",
  },
  {
    title: "Dossier Approfonditi",
    description: "Report PDF mensili su settori specifici (AI, Energy, Crypto) per chi vuole studiare i trend del futuro.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: "Newspaper",
    colSpan: "md:col-span-6 lg:col-span-8",
  },
  {
    title: "Risk Management",
    description: "Alert immediati quando rileviamo pericoli strutturali sui mercati. Proteggere il capitale è la priorità numero uno.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    icon: "ShieldAlert",
    colSpan: "md:col-span-12 lg:col-span-4",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
            Non solo grafici.<br />
            <span className="text-gray-400">Un ecosistema completo.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            I mercati non si muovono nel vuoto. Analizziamo come le decisioni politiche e le notizie globali impattano direttamente i tuoi investimenti, ogni giorno.
          </p>
        </div>

        {/* --- GRIGLIA CUSTOM --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.colSpan} bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group cursor-pointer min-h-[340px] relative overflow-hidden`}
            >
              {/* Background Decoration (Opzionale per effetto "premium") */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Icona */}
                <div className={`w-14 h-14 rounded-2xl ${card.iconBg} ${card.iconColor} mb-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                  <Icon name={card.icon} size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-base">
                  {card.description}
                </p>
              </div>

              {/* Link in basso */}
              <div className="mt-8 pt-6 border-t border-gray-50 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
                    Scopri Esempio
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    <Icon name="ArrowRight" size={16} className="text-gray-400 group-hover:text-emerald-600 transition-colors -translate-x-0.5 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
