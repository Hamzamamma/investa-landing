# finanzamille - Landing Page

Una landing page moderna e responsiva per finanzamille, una piattaforma di investimento intelligente e trasparente.

## 📁 Struttura del Progetto

```
finanzamille-landing/
├── index.html                 # Entry point HTML
├── package.json              # Dipendenze del progetto
├── README.md                 # Documentazione
├── public/                   # Asset statici (immagini, font, etc)
└── src/
    ├── styles/
    │   └── index.css        # Stili globali
    └── js/
        ├── app.jsx          # App principale e render
        ├── components/
        │   └── ui.jsx       # Componenti UI riutilizzabili
        └── sections/
            ├── Navbar.jsx
            ├── Hero.jsx
            ├── Services.jsx
            ├── DataSources.jsx
            ├── Portfolio.jsx
            ├── Testimonials.jsx
            ├── Faq.jsx
            ├── Pricing.jsx
            ├── Team.jsx
            ├── News.jsx
            └── Footer.jsx
```

## 🚀 Come Iniziare

### Prerequisiti
- Node.js (optional, per live-server)
- Un browser moderno

### Installazione

1. **Clona o scarica il progetto**
   ```bash
   cd finanzamille-landing
   ```

2. **Installa le dipendenze** (opzionale)
   ```bash
   npm install
   ```

3. **Avvia il server locale**
   ```bash
   npm run dev
   # o
   npx live-server
   ```

4. **Apri il browser**
   Naviga a `http://localhost:8080`

## 🛠️ Tecnologie Utilizzate

- **React 18** - UI library (tramite CDN)
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide Icons** - Icon library
- **Babel Standalone** - JSX transpiler

## 📱 Sezioni Principali

- **Navbar** - Navigazione fissa con menu mobile responsive
- **Hero** - Sezione di benvenuto con CTA
- **Services** - Caratteristiche principali della piattaforma
- **Data Sources** - Credibilità e fonti
- **Portfolio** - Portafogli di investimento disponibili
- **Testimonials** - Recensioni di clienti
- **FAQ** - Domande frequenti
- **Pricing** - Piani di abbonamento
- **Team** - Team e fondatori
- **News** - Market Insights
- **Footer** - Footer con link e newsletter

## 🎨 Design

- Design system moderno e minimalista
- Colori: Nero, Bianco, Grigio con accenti Smeraldo
- Font: Inter (Google Fonts)
- Animazioni fluide con Framer Motion
- Completamente responsivo

## 📝 Personalizzazione

### Cambiare colori
Modifica i colori Tailwind in `src/styles/index.css` o usa le classi inline.

### Aggiungere nuove sezioni
1. Crea un nuovo file in `src/js/sections/`
2. Esporta il componente
3. Importalo e aggiungi in `src/js/app.jsx`

### Modificare contenuti
I testi sono hardcodati nei componenti JSX. Modifica direttamente nei file delle sezioni.

## 📦 Build e Deploy

Attualmente il progetto non ha un build step configurato. Per deployment:

1. Usa le CDN come sono (prod-ready)
2. Considera di migrare a un bundler (Vite, Webpack) se aggiungi dipendenze locali
3. Deploy statico su Netlify, Vercel, GitHub Pages, etc.

## 🔄 Prossimi Step

- [ ] Setup build process con Vite
- [ ] Migrare React da CDN a npm
- [ ] Aggiungere backend API
- [ ] Implementare CMS per contenuti
- [ ] Dark mode
- [ ] Multi-language support

## 📄 Licenza

MIT

## 👥 Autori

Team finanzamille
