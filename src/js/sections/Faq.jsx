const FaqSection = () => {
  const faqs = [
    {
      question: "Il servizio è adatto anche ai principianti?",
      answer: "Sì. Sebbene le nostre analisi siano tecniche, traduciamo ogni concetto in azioni pratiche. Inoltre, avrai accesso alla sezione 'Academy' dove spieghiamo le basi della macroeconomia e della gestione del rischio."
    },
    {
      question: "Come ricevo le notifiche operative?",
      answer: "Utilizziamo un canale WhatsApp privato e criptato per le comunicazioni urgenti (es. vendita immediata di un asset). Per le analisi approfondite e i report settimanali, riceverai una mail ogni lunedì mattina."
    },
    {
      question: "C'è un vincolo di permanenza?",
      answer: "Nessuno. Puoi disdire l'abbonamento mensile in qualsiasi momento direttamente dalla tua dashboard. L'accesso rimarrà attivo fino alla fine del periodo già pagato."
    },
    {
      question: "Qual è il capitale minimo consigliato?",
      answer: "Le nostre strategie sono basate su percentuali (asset allocation), quindi sono replicabili con qualsiasi capitale. Tuttavia, per ottimizzare i costi commissionali dei broker, suggeriamo un capitale di partenza di almeno 2.000€."
    },
    {
      question: "Fornite consulenza personalizzata?",
      answer: "No. FinanzaMille è un editore finanziario indipendente. Condividiamo i nostri portafogli reali a scopo educativo. Non conosciamo la tua situazione patrimoniale specifica e non forniamo raccomandazioni personalizzate ad personam."
    }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
            Domande frequenti.
          </h2>
          <p className="text-lg text-gray-500">
            Tutto quello che devi sapere prima di unirti a noi.
          </p>
        </div>

        <div className="border-t border-gray-100">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};
