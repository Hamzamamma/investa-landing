// --- UI Components ---

const Button = ({ variant = "default", size = "default", className = "", children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl",
    outline: "border border-gray-200 bg-white hover:bg-gray-50 text-gray-900",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10",
  };

  const variantStyles = variants[variant] || variants.default;
  const sizeStyles = sizes[size] || sizes.default;

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Badge = ({ variant = "default", className = "", children, ...props }) => {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variants = {
    default: "border-transparent bg-black text-white hover:bg-black/80",
    outline: "text-gray-900",
  };

  const variantStyles = variants[variant] || variants.default;

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

// --- Componente Hero Principale ---

const Hero = () => {
  return (
    <section className="relative pt-36 pb-48 overflow-hidden bg-white min-h-[100vh] font-sans">

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] opacity-60 animate-pulse"></div>
        <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-gray-50 rounded-full blur-[80px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-16">

        {/* 1. Badge "Nuova Versione" */}
        <div className="flex justify-center mb-3">
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-gray-200 bg-white/50 backdrop-blur-sm text-gray-600 rounded-full shadow-sm hover:bg-white transition-all cursor-pointer group">
            <span className="mr-2 text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full text-xs group-hover:bg-emerald-100 transition-colors">Novità</span>
            La Dashboard 2.0 è live
            <Icon name="ArrowRight" className="w-3.5 h-3.5 ml-2 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Badge>
        </div>

        {/* 2. Titolo H1 & Sottotitolo */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-12 leading-[1.1] text-center mx-auto">
          Il futuro della tua <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
            libertà finanziaria.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed text-center">
          Investi in modo intelligente, trasparente e sicuro.
          Costruiamo portafogli su misura basati su dati reali, non su promesse.
        </p>

        {/* 3. CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32">
          <Button size="lg" className="h-12 px-8 text-base bg-black hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            Inizia a Investire
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full gap-2">
            <Icon name="Github" className="w-4 h-4" />
            Vedi Demo
          </Button>
        </div>

        {/* 4. HERO VIDEO */}
        <div className="relative mx-auto max-w-5xl mt-28">
          {/* Effetto Glow dietro il video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 transition duration-1000 animate-pulse"></div>

          {/* Container Video */}
          <div className="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-3xl lg:p-4 shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
            <div className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full bg-black overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-lg"
                >
                  <source src="public/hero-video.mp4" type="video/mp4" />
                  Il tuo browser non supporta il tag video.
                </video>
            </div>
          </div>

          {/* Dettaglio decorativo */}
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gray-100/50 rounded-full blur-xl opacity-60"></div>
        </div>

      </div>
    </section>
  );
};
