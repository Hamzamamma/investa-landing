const { motion, AnimatePresence } = Motion;

// Usa l'API DOM di Lucide: <i data-lucide="IconName" /> e lucide.createIcons() per sostituire con SVG
const Icon = ({ name, size = 24, className = "", ...props }) => (
  <i
    data-lucide={name}
    className={className}
    style={{ width: size, height: size }}
    {...props}
  />
);

const NewsCard = ({ category, title, date }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group cursor-pointer flex flex-col gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300"
  >
    <div className="flex justify-between items-center text-xs text-gray-400 font-medium tracking-wide uppercase">
      <span>{category}</span>
      <span>{date}</span>
    </div>
    <h3 className="text-2xl font-semibold leading-tight text-gray-900 group-hover:text-black">
      {title}
    </h3>
    <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-black transition-colors">
      Leggi articolo <Icon name="ArrowRight" size={14} />
    </div>
  </motion.div>
);

const AssetBar = ({ label, percentage, color }) => (
  <div className="mb-4">
    <div className="flex justify-between text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description, isLarge = false, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
    className={`group relative p-8 rounded-3xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between
      ${isLarge ? 'md:col-span-2' : 'col-span-1'}
    `}
  >
    <div className="mb-6">
      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
        <Icon name={icon} size={24} />
      </div>
      <h3 className="text-2xl font-medium text-gray-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>

    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center text-xs font-semibold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors cursor-pointer">
      Scopri Esempio <Icon name="ArrowRight" size={14} className="ml-2" />
    </div>
  </motion.div>
);

const PortfolioCard = ({ name, strategy, performance, allocation, topHoldings, isBlack = false }) => (
  <div className={`relative p-8 md:p-10 rounded-3xl flex flex-col justify-between border transition-all duration-300
    ${isBlack
      ? 'bg-black text-white border-black'
      : 'bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-md'
    }`}
  >
    <div className="flex justify-between items-start mb-8">
      <div>
        <h3 className="text-2xl font-medium tracking-tight mb-1">{name}</h3>
        <p className={`text-xs font-semibold uppercase tracking-widest ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
          {strategy}
        </p>
      </div>
      <div className="text-right">
        <div className={`text-4xl font-normal tracking-tighter ${isBlack ? 'text-emerald-400' : 'text-emerald-600'}`}>
          {performance}
        </div>
        <span className={`text-[10px] uppercase font-bold tracking-widest ${isBlack ? 'text-gray-500' : 'text-gray-400'}`}>
          YTD Return
        </span>
      </div>
    </div>

    <div className="mb-10">
      <h4 className={`text-xs font-semibold uppercase tracking-widest mb-6 flex items-center gap-2 ${isBlack ? 'opacity-80' : 'opacity-40'}`}>
        <Icon name="PieChart" size={14} /> Allocazione
      </h4>
      {allocation.map((asset, i) => (
        <AssetBar
          key={i}
          label={asset.label}
          percentage={asset.pct}
          color={isBlack ? 'bg-white' : 'bg-black'}
        />
      ))}
    </div>

    <div className="mt-auto">
      <h4 className={`text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2 ${isBlack ? 'opacity-80' : 'opacity-40'}`}>
        <Icon name="TrendingUp" size={14} /> Top Holdings
      </h4>
      <div className="flex flex-wrap gap-2 mb-8">
        {topHoldings.map((holding, i) => (
          <span
            key={i}
            className={`text-xs px-2.5 py-1 rounded border font-medium ${
              isBlack
                ? 'border-gray-800 bg-gray-900 text-gray-300'
                : 'border-gray-200 bg-gray-50 text-gray-600'
            }`}
          >
            {holding}
          </span>
        ))}
      </div>

      <div className={`pt-6 border-t flex items-center justify-between group cursor-pointer ${isBlack ? 'border-gray-800' : 'border-gray-100'}`}>
        <span className="text-sm font-medium">Scheda tecnica</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${isBlack ? 'bg-gray-800 text-white' : 'bg-black text-white'}`}>
          <Icon name="ArrowUpRight" size={14} />
        </div>
      </div>
    </div>
  </div>
);

const PricingPlan = ({ title, price, features, isBlack = false }) => (
  <div className={`p-8 rounded-3xl flex flex-col h-full border transition-transform duration-300 hover:scale-[1.02] ${
    isBlack
      ? 'bg-gray-900 text-white border-gray-800'
      : 'bg-white text-gray-900 border-gray-200'
  }`}>
    <h3 className="text-lg font-medium opacity-80 mb-2 text-emerald-600">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold tracking-tight">{price}</span>
    </div>

    <div className="flex-grow space-y-4 mb-8">
      {features.map((feature, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
            isBlack ? 'bg-gray-800 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
          }`}>
            <Icon name="Check" size={12} />
          </div>
          <span className={`text-sm leading-relaxed ${isBlack ? 'text-gray-300' : 'text-gray-600'}`}>
            {feature}
          </span>
        </div>
      ))}
    </div>

    <button className={`w-full py-4 rounded-xl font-semibold text-sm transition-all ${
      isBlack
        ? 'bg-white text-gray-900 hover:bg-gray-200'
        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
    }`}>
      Inizia Ora
    </button>
  </div>
);

const TeamMember = ({ name, role, bio, image, socialLinks }) => (
  <div className="group flex flex-col">
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 mb-8">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
    </div>

    <div className="flex flex-col items-start">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
        {role}
      </span>
      <h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">
        {name}
      </h3>
      <p className="text-gray-500 leading-relaxed text-sm max-w-sm mb-6">
        {bio}
      </p>

      <div className="flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
          >
            <Icon name={social.icon} size={18} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

const ReviewCard = ({ text, author, role }) => (
  <div className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-300">
    <Icon name="Quote" size={24} className="text-gray-300 mb-6" />
    <p className="text-lg text-gray-900 font-medium leading-relaxed mb-8">
      "{text}"
    </p>
    <div>
      <div className="text-sm font-bold text-gray-900 uppercase tracking-wide">{author}</div>
      <div className="text-xs text-gray-500 font-medium mt-1">{role}</div>
    </div>
  </div>
);

const FaqItem = ({ question, answer, isDark = false }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} last:border-0`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
          isOpen 
            ? (isDark ? 'text-white' : 'text-black') 
            : (isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-900 group-hover:text-gray-600')
        }`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all duration-300 ${
          isOpen 
            ? (isDark ? 'bg-white text-black rotate-180' : 'bg-black text-white rotate-180')
            : (isDark ? 'bg-gray-800 text-gray-400 group-hover:bg-gray-700' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100')
        }`}>
          {isOpen ? <Icon name="Minus" size={16} /> : <Icon name="Plus" size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className={`pb-8 leading-relaxed max-w-2xl text-base ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
