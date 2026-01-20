const NewsletterSection = () => {
  const [formState, setFormState] = React.useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    // Simulazione invio
    setTimeout(() => setFormState('success'), 1500);
  };

  if (formState === 'success') {
    return (
      <section className="relative py-24 overflow-hidden bg-emerald-50 min-h-[600px] flex items-center justify-center">
         <div className="max-w-md mx-auto text-center p-12 bg-white rounded-3xl shadow-xl border border-emerald-100 relative z-10 animate-fade-in-up">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Iscrizione Confermata!</h3>
            <p className="text-gray-500">Controlla la tua casella di posta. Il primo briefing è in arrivo.</p>
            <button
              onClick={() => setFormState('idle')}
              className="mt-6 text-sm text-emerald-600 font-medium hover:text-emerald-700 underline"
            >
              Torna al modulo
            </button>
         </div>
         {/* Background decoration */}
         <div className="absolute inset-0 z-0 opacity-10"></div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="relative py-20 lg:py-32 overflow-hidden bg-emerald-900 text-white font-sans">

      {/* BACKGROUND WAVES */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950"></div>
        {/* Onde Sfumate */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
           <svg className="w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path fill="#10b981" fillOpacity="0.3" d="M0,192L48,208C96,224,192,256,288,288C384,320,480,352,576,336C672,320,768,256,864,229.3C960,203,1056,213,1152,234.7C1248,256,1344,288,1392,304L1440,320V800H1392C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800H0V192Z"></path>
              <path fill="#34d399" fillOpacity="0.2" d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,192C672,160,768,128,864,144C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224V800H1392C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800H0V96Z"></path>
           </svg>
        </div>
        <div className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[50%] -left-[20%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Copy */}
          <div className="space-y-8">
             <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
                 <Icon name="Mail" size={14} /> Newsletter Gratuita
               </div>
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                 Investi, risparmia e <br/>
                 <span className="text-emerald-400">cresci finanziariamente.</span>
               </h2>
               <p className="text-lg text-emerald-100/80 leading-relaxed max-w-md">
                 Ricevi ogni lunedì l'analisi dei mercati, spunti operativi e guide fiscali. Unisciti alla community di investitori consapevoli.
               </p>
             </div>

             {/* Social Proof */}
             <div className="flex items-center gap-4 pt-4 border-t border-emerald-500/30">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-900 bg-gray-300 overflow-hidden flex items-center justify-center bg-white text-emerald-900 font-bold text-xs">
                        {String.fromCharCode(64 + i)}
                     </div>
                   ))}
                </div>
                <div className="text-sm">
                  <strong className="block text-white">12,500+ Iscritti</strong>
                  <span className="text-emerald-200">Si fidano di noi</span>
                </div>
             </div>
          </div>

          {/* Right Column: The Form Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-xl font-semibold mb-6">Informazioni Base</h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Nome & Cognome Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-emerald-200 ml-1">Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Mario"
                    className="w-full bg-black/20 border border-emerald-500/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-emerald-200 ml-1">Cognome</label>
                  <input
                    type="text"
                    required
                    placeholder="Rossi"
                    className="w-full bg-black/20 border border-emerald-500/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-emerald-200 ml-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="mario.rossi@esempio.com"
                  className="w-full bg-black/20 border border-emerald-500/30 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                />
              </div>

              {/* Checkboxes Privacy */}
              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-emerald-300 text-emerald-500 focus:ring-emerald-400 bg-white/10 accent-emerald-500" />
                  <span className="text-xs text-emerald-100/70 leading-relaxed group-hover:text-emerald-100 transition-colors">
                    Accetto la <a href="#" className="underline decoration-emerald-400 underline-offset-2 text-white">Privacy Policy</a> e acconsento al trattamento dei dati per l'invio della newsletter.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20 transform active:scale-95 transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {formState === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Invio in corso...
                  </span>
                ) : 'Iscriviti Gratis'}
              </button>

              <p className="text-center text-[10px] text-emerald-200/50 mt-4">
                Nessuno spam. Cancellati quando vuoi.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
