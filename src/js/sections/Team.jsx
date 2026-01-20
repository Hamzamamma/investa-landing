const TeamSection = () => (
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <div className="max-w-2xl">
          <span className="text-emerald-600 font-semibold tracking-wide uppercase text-xs mb-3 block">Chi Siamo</span>
          <h2 className="text-4xl font-semibold mb-6">Costruito da investitori, <br/>per investitori.</h2>
          <p className="text-gray-500 text-lg">
            Un team diversificato di esperti finanziari, ingegneri e visionari uniti da un unico obiettivo: rendere la ricchezza accessibile.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <TeamMember
          name="Amedeo Iasci"
          role="AKA - Il Tuttofare"
          bio="Content creator e investitore con un patrimonio netto di oltre 1,9 milioni di dollari a soli 30 anni. Porta la finanza oltre i numeri: educazione, community e creatività al servizio di una nuova generazione di investitori."
          image="public/amedeo-iasci.webp"
          socialLinks={[
            { url: "#", icon: "Linkedin" },
            { url: "#", icon: "Twitter" }
          ]}
        />
        <TeamMember
          name="Gianluca de Filippis"
          role="AKA - La Mente"
          bio="Financial Advisor certificato negli Stati Uniti con diversi anni di esperienza. Condivide analisi, strumenti e strategie con un approccio chiaro e diretto, unendo competenza tecnica e capacità comunicativa per rendere accessibili a tutti i temi complessi di economia e mercati."
          image="public/gianluca-defilippis.webp"
          socialLinks={[
            { url: "#", icon: "Linkedin" },
            { url: "#", icon: "Twitter" }
          ]}
        />
      </div>
    </div>
  </section>
);
