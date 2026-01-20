// Core imports (React global via CDN)

// Sezioni principali
const App = () => {
  React.useEffect(() => {
    // Inizializza le icone Lucide dopo ogni render
    lucide.createIcons();
  });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <ServicesSection />
      <DataSourcesSection />
      <MarketOverview />
      <TestimonialsSection />
      <FaqSection />
      <PricingSection />
      <TeamSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Inizializza le icone Lucide dopo il render del DOM
lucide.createIcons();
