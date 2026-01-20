const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          <div className="lg:col-span-4 flex flex-col items-start">
            <h3 className="text-2xl font-bold tracking-tight mb-6">finanzamille.</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              L'intelligenza finanziaria incontra l'analisi politica.
              Costruiamo portafogli resilienti in un mondo incerto.
              Senza conflitti di interesse.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-white hover:text-black transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-white hover:text-black transition-colors">
                <Icon name="Twitter" size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-white hover:text-black transition-colors">
                <Icon name="Youtube" size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">
              Il Daily Brief
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Ricevi l'analisi di apertura mercati ogni mattina alle 8:00.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="nome@esempio.com"
                className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-gray-600 focus:bg-gray-800 transition-colors"
              />
              <button className="bg-white text-black px-4 py-3 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Iscriviti Gratis <Icon name="Mail" size={16} />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 lg:col-start-10">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">
              Piattaforma
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">News Live</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analisi Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portafogli</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accedi</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">
              Legale
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termini di Servizio</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Disclaimer <Icon name="ArrowUpRight" size={12}/></a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2026 FinanzaMille S.r.l. - P.IVA 12345678900
          </p>
        </div>
      </div>
    </footer>
  );
};
