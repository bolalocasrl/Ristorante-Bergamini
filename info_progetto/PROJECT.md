# Ristorante Bergamini — Project Overview

## Repository & Deploy

| | |
|---|---|
| **GitHub** | https://github.com/bolalocasrl/Ristorante-Bergamini |
| **Vercel URL** | Non ancora configurato (vercel.json presente, deploy non verificato) |
| **Piattaforma dev** | Replit (porta 5000) |

---

## Stack

### Frontend
| Tecnologia | Versione | Ruolo |
|---|---|---|
| React | 19.2.0 | Framework UI |
| TypeScript | 5.6.3 | Type safety |
| Vite | 7.1.9 | Build tool & dev server |
| Tailwind CSS | 4.1.14 | Styling (via @tailwindcss/vite) |
| shadcn/ui | — | Libreria componenti (new-york style) |
| Radix UI | vari | Primitive UI headless |
| Framer Motion | 12.23.24 | Animazioni |
| Wouter | 3.3.5 | Client-side routing |
| TanStack React Query | 5.60.5 | Server state management |
| Lucide React | 0.545.0 | Icone |
| Sonner | 2.0.7 | Toast notifications |

### Backend
| Tecnologia | Versione | Ruolo |
|---|---|---|
| Express.js | 5.0.1 | Server HTTP |
| Passport.js | 0.7.0 | Autenticazione (local strategy) |
| Express Session | 1.18.1 | Gestione sessioni |
| Drizzle ORM | 0.39.3 | Database ORM |
| PostgreSQL (pg) | 8.16.3 | Database |
| Zod | 3.25.76 | Validazione schema |

### Tooling
| Strumento | Uso |
|---|---|
| esbuild | Bundle server per produzione |
| PostCSS + autoprefixer | Trasformazione CSS |
| drizzle-kit | Migrazioni database |

---

## Struttura Progetto

```
Ristorante-Bergamini/
├── client/                    # React SPA
│   ├── src/
│   │   ├── pages/             # Pagine applicazione
│   │   ├── components/ui/     # 55+ componenti shadcn/ui
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility e query client
│   │   ├── App.tsx            # Router principale
│   │   ├── main.tsx           # Entry point React
│   │   └── index.css          # Tailwind + tema custom
│   ├── public/                # Favicon, OG image
│   └── index.html
├── server/                    # Express backend
│   ├── index.ts               # Entry point server
│   ├── routes.ts              # Registrazione API (vuoto)
│   ├── storage.ts             # Storage in-memory
│   ├── static.ts              # Serve file statici
│   └── vite.ts                # Integrazione Vite dev
├── shared/                    # Codice condiviso client/server
│   └── schema.ts              # Schema Drizzle + Zod (tabella users)
├── attached_assets/           # 28 immagini (logo, piatti, hero)
├── info_progetto/             # Documentazione progetto
├── script/build.ts            # Script build produzione
├── vercel.json
├── drizzle.config.ts
├── vite.config.ts
└── vite.config.prod.ts
```

---

## Pagine Esistenti

### `/` — Home Page (`client/src/pages/home.tsx`)
Unica pagina dell'applicazione. È una **landing page SPA** con le seguenti sezioni:

| Sezione | Descrizione |
|---|---|
| **Header fisso** | Logo Bergamini, navigazione ancorata, CTA "Chiama Ora" |
| **Hero** | Immagine terrazza con overlay e titolo del ristorante |
| **Carosello piatti** | Scroll infinito automatico con 18 foto dei piatti |
| **La Nostra Storia** | Testo storia del ristorante con drop cap stilizzato |
| **I Nostri Prodotti** | 3 card: Dolci, Liquori, Vini con immagini |
| **Dove Siamo** | Indirizzo e pulsante Google Maps |
| **Footer** | Contatti, social, orari, indirizzo |
| **Modal Menu** | Visualizzatore menu immagine con dialog |

### `*` — 404 Not Found (`client/src/pages/not-found.tsx`)
Pagina di errore 404 con card e icona AlertCircle.

---

## Componenti Chiave

### Componenti UI (shadcn/ui — `client/src/components/ui/`)
55 componenti pronti all'uso: `accordion`, `alert-dialog`, `avatar`, `badge`, `button`, `calendar`, `card`, `carousel` (Embla), `chart` (Recharts), `dialog`, `drawer`, `form`, `input`, `navigation-menu`, `pagination`, `select`, `sheet`, `sidebar`, `skeleton`, `sonner`, `table`, `tabs`, `tooltip`, e altri.

### Custom Hooks (`client/src/hooks/`)
- **`use-mobile.tsx`** — Media query hook per responsive design
- **`use-toast.ts`** — Gestione toast notifications

### Librerie (`client/src/lib/`)
- **`queryClient.ts`** — Configurazione TanStack React Query
- **`utils.ts`** — Utility `cn()` per classname merging

---

## Tema Visivo

Tema personalizzato definito in `client/src/index.css` (Tailwind v4 `@theme`):

| Token | Valore | Uso |
|---|---|---|
| Background | `#332018` (legno scuro) | Sfondo principale |
| Foreground | Crema chiaro | Testo |
| Primary | `#991A1A` (rosso mattone) | CTA, accenti |
| Secondary | `#F9D423` (ocra/giallo) | Highlight |
| Font serif | Playfair Display | Titoli |
| Font sans | Inter | Corpo testo |

---

## Stato Attuale

| Area | Stato |
|---|---|
| Landing page | ✅ Completa e funzionante |
| Carosello piatti | ✅ Implementato (scroll infinito) |
| Modal menu | ✅ Implementato |
| Sezione prodotti | ✅ Implementata |
| Navigazione | ✅ Anchor link funzionanti |
| Backend API | ⚠️ Setup presente ma nessuna route implementata |
| Database | ⚠️ Schema definito (tabella users), nessuna migrazione eseguita |
| Autenticazione | ⚠️ Passport configurato, non collegato a route |
| Deploy Vercel | ❓ vercel.json presente, URL non verificato |
| README | ❌ Assente |
| Test | ❌ Nessun test presente |

---

## Variabili d'Ambiente Richieste

| Variabile | Obbligatoria | Uso |
|---|---|---|
| `DATABASE_URL` | Sì (se DB attivo) | Connessione PostgreSQL |
| `NODE_ENV` | No | development / production |
| `PORT` | No | Porta server (default 5000) |

---

## Script NPM

```bash
npm run dev          # Avvia Express backend (con Vite integrato)
npm run build        # Build completo: Vite (client) + esbuild (server)
npm start            # Avvia server produzione bundlato
npm run check        # Type checking TypeScript
npm run db:push      # Applica schema Drizzle al database
```

---

## Note di Deploy (Vercel)

Il file `vercel.json` configura:
```json
{
  "buildCommand": "vite build --config vite.config.prod.ts",
  "outputDirectory": "dist",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "vite"
}
```

Attenzione: il backend Express **non è incluso** nel deploy Vercel (solo frontend statico). Per un deploy full-stack servono Vercel Functions o un hosting separato per il server.

---

*Aggiornato: 2026-05-23*
