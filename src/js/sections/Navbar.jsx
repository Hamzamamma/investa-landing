const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
            <Icon name="TrendingUp" size={18} />
          </div>
          finanzamille
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black transition-colors">Soluzioni</a>
          <a href="#" className="hover:text-black transition-colors">Mercati</a>
          <a href="#" className="hover:text-black transition-colors">Chi Siamo</a>
          <a href="#" className="hover:text-black transition-colors">Prezzi</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-900 hover:text-emerald-600">Accedi</button>
          <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Apri Conto
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Icon name="X" /> : <Icon name="Menu" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          <a href="#" className="text-lg font-medium">Soluzioni</a>
          <a href="#" className="text-lg font-medium">Mercati</a>
          <a href="#" className="text-lg font-medium">Prezzi</a>
          <hr className="border-gray-100" />
          <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium">Apri Conto</button>
        </div>
      )}
    </nav>
  );
};
