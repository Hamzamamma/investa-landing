const PricingSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-semibold mb-6">Scegli il tuo piano</h2>
        <p className="text-gray-500 text-lg">
          Accesso completo alla piattaforma con analisi, strumenti e community. Scegli la formula più adatta a te.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingPlan
          title="Mensile"
          price="€9,99"
          features={[
            "Accesso Completo",
            "Pagamento Mensile"
          ]}
        />
        <PricingPlan
          title="Semestrale"
          price="€49,99"
          isBlack={true}
          features={[
            "Accesso Completo",
            "Pagamento Semestrale"
          ]}
        />
        <PricingPlan
          title="Annuale"
          price="€89,99"
          features={[
            "Accesso Completo",
            "Gruppo WhatsApp",
            "Pagamento Annuale"
          ]}
        />
      </div>
    </div>
  </section>
);
