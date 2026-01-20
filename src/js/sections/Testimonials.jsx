const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerView, setItemsPerView] = React.useState(1);

  const testimonials = [
    {
      text: "Finalmente qualcuno che spiega la macroeconomia senza paroloni. Ho ristrutturato il mio portafoglio obbligazionario seguendo le analisi di Gianluca e ho evitato il crollo del 2022.",
      author: "Marco V.",
      role: "Imprenditore, Milano"
    },
    {
      text: "L'analisi politica è il vero valore aggiunto. Sapere in anticipo come le elezioni USA impatteranno il settore Tech mi ha dato un vantaggio enorme rispetto ai classici giornali italiani.",
      author: "Elena B.",
      role: "Avvocato Corporate"
    },
    {
      text: "Non seguo i loro portafogli alla cieca, ma uso i loro report per validare le mie idee. È come avere un team di analisti privati al costo di una pizza al mese. Imprescindibile.",
      author: "Davide R.",
      role: "Trader Indipendente"
    },
    {
      text: "Un approccio unico nel panorama italiano. Mai visti report così dettagliati e actionable. La mia gestione della liquidità è migliorata drasticamente.",
      author: "Luca T.",
      role: "Consulente Finanziario"
    },
    {
      text: "Semplice, diretto ed efficace. Non ho tempo di seguire i mercati ogni giorno, ma con la newsletter settimanale ho tutto sotto controllo in 15 minuti.",
      author: "Giulia S.",
      role: "Medico Chirurgo"
    },
    {
      text: "La sezione sulle materie prime è una miniera d'oro. Ho anticipato il rialzo del petrolio grazie ai loro grafici. Abbonamento ripagato in un giorno.",
      author: "Roberto M.",
      role: "Ingegnere Gestionale"
    },
    {
      text: "Niente fuffa, solo dati e analisi serie. Mi piace che ammettano quando una previsione non va come sperato, indice di grande onestà intellettuale.",
      author: "Alessandra P.",
      role: "CFO, PMI Veneta"
    },
    {
      text: "Ottima community. Il confronto con altri investitori professionisti e la disponibilità del team rendono il servizio veramente premium.",
      author: "Federico C.",
      role: "Private Banker"
    },
    {
      text: "Finalmente capisco cosa succede sui mercati emergenti. Le dinamiche spiegate qui non si trovano da nessun'altra parte in italiano.",
      author: "Simona G.",
      role: "Export Manager"
    },
    {
      text: "Il portafoglio modello 'Income' mi sta garantendo una rendita costante che integra perfettamente la mia pensione. Grazie davvero.",
      author: "Giovanni L.",
      role: "Pensionato Ex-Bancario"
    },
    {
      text: "Strumenti di analisi tecnica spiegati in modo che anche un fondamentale puro come me possa usarli per il timing d'ingresso.",
      author: "Matteo R.",
      role: "Analista Finanziario"
    },
    {
      text: "La newsletter audio è comodissima per quando sono in viaggio. Non perdo mai un aggiornamento anche nelle settimane più caotiche.",
      author: "Cristina D.",
      role: "Sales Director"
    },
    {
      text: "Ho ridotto la volatilità del mio portafoglio del 30% applicando i principi di risk management appresi qui. Non posso più farne a meno.",
      author: "Andrea N.",
      role: "Software Architect"
    }
  ];

  React.useEffect(() => {
    const handleResize = () => {
      // md breakpoint usually 768px
      if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };
    
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-32 px-6 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 max-w-xl">
            Non fidarti di noi. <br />
            <span className="text-gray-400">Fidati dei risultati.</span>
          </h2>
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              +1.200 Membri Attivi
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Retention rate del 94%
            </p>
          </div>
        </div>

        <div className="overflow-hidden -mx-4"> 
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="px-4 flex-shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="h-full">
                  <ReviewCard
                    text={item.text}
                    author={item.author}
                    role={item.role}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
