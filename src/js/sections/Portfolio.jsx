const MarketOverview = () => (
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">I Nostri Portafogli</h2>
          <p className="text-gray-500 max-w-xl">Strategie diversificate progettate per ogni profilo di rischio e obiettivo finanziario.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm font-semibold border-b border-black pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
          Vedi tutti i fondi <Icon name="ArrowRight" size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard
          name="Global Growth"
          strategy="Azionario Aggressivo"
          performance="+24.8%"
          allocation={[
            { label: 'Azioni USA', pct: 60 },
            { label: 'Azioni Globali', pct: 30 },
            { label: 'Liquidità', pct: 10 },
          ]}
          topHoldings={['AAPL', 'MSFT', 'AMZN', 'GOOGL']}
        />

        <PortfolioCard
          name="All Weather"
          strategy="Bilanciato"
          performance="+8.4%"
          allocation={[
            { label: 'Obbligazioni Gov', pct: 40 },
            { label: 'Azioni Globali', pct: 30 },
            { label: 'Materie Prime', pct: 30 },
          ]}
          topHoldings={['VTI', 'BND', 'GLD', 'VWO']}
        />

        <PortfolioCard
          name="Future Tech"
          strategy="Tematico"
          performance="+45.2%"
          isBlack={true}
          allocation={[
            { label: 'Crypto Assets', pct: 50 },
            { label: 'Tech Stocks', pct: 40 },
            { label: 'Venture', pct: 10 },
          ]}
          topHoldings={['BTC', 'ETH', 'NVDA', 'SOL']}
        />
      </div>
    </div>
  </section>
);
