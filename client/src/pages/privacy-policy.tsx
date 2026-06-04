import logoImage from "@assets/Logo_Bergamini_1772489157803.png";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">

      {/* Header */}
      <header className="fixed top-0 w-full z-50 shadow-xl bg-secondary py-1">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-12 md:h-14">
            <Link href="/">
              <a className="text-secondary-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                ← Torna al sito
              </a>
            </Link>
            <div className="flex justify-center items-center h-full">
              <Link href="/">
                <a className="block h-full flex items-center">
                  <img
                    src={logoImage}
                    alt="Antica Drogheria Bergamini Duilio Logo"
                    className="h-20 md:h-27 w-auto object-contain drop-shadow-2xl"
                  />
                </a>
              </Link>
            </div>
            <div className="w-24 md:w-32" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-24 container mx-auto px-6 max-w-3xl">

        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Privacy Policy</h1>
        <div className="h-1 w-24 bg-secondary mb-10" />

        <p className="text-foreground/70 mb-12 text-sm uppercase tracking-widest">
          Ultimo aggiornamento: {new Date().getFullYear()}
        </p>

        {/* Sezione 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif text-primary mb-4 pb-2 border-b border-secondary/30">1. Titolare del Trattamento</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Il Titolare del trattamento dei dati personali è:
          </p>
          <div className="bg-secondary/10 border border-secondary/20 p-6 text-foreground/90 leading-relaxed space-y-1">
            <p><strong>Bergamini Duilio S.n.c. di Bergamini Alberto & Bergamini Giampaolo</strong></p>
            <p>Via Gianfranco Rambelli, 44/46 — 40017 San Giovanni in Persiceto (BO)</p>
            <p>Partita IVA: 00516281201</p>
            <p>Codice Fiscale: 00574530374</p>
            <p>Email: <a href="mailto:info@bergamini1924.it" className="text-primary hover:text-secondary transition-colors">info@bergamini1924.it</a></p>
          </div>
        </section>

        {/* Sezione 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif text-primary mb-4 pb-2 border-b border-secondary/30">2. Dati Raccolti</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Il presente sito web ha natura puramente informativa. Non sono presenti form di contatto, aree riservate o sistemi di registrazione. I dati personali che potrebbero essere trattati sono esclusivamente quelli raccolti in modo automatico dai sistemi informatici e dai log del server durante la normale navigazione, tra cui:
          </p>
          <ul className="list-disc list-inside text-foreground/80 leading-relaxed space-y-2 ml-2">
            <li>Indirizzo IP</li>
            <li>Tipo di browser e sistema operativo</li>
            <li>Pagine visitate e orari di accesso</li>
            <li>Indirizzo del sito di provenienza (referrer)</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mt-3">
            Questi dati vengono utilizzati esclusivamente per finalità tecniche e di sicurezza e non vengono associati a persone identificate.
          </p>
        </section>

        {/* Sezione 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif text-primary mb-4 pb-2 border-b border-secondary/30">3. Finalità del Trattamento</h2>
          <p className="text-foreground/80 leading-relaxed">
            I dati raccolti automaticamente sono trattati per le seguenti finalità:
          </p>
          <ul className="list-disc list-inside text-foreground/80 leading-relaxed space-y-2 ml-2 mt-3">
            <li>Garantire il corretto funzionamento del sito</li>
            <li>Monitorare la sicurezza e prevenire attività fraudolente</li>
            <li>Ottenere statistiche anonime sull'utilizzo del sito</li>
          </ul>
        </section>

        {/* Sezione 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif text-primary mb-4 pb-2 border-b border-secondary/30">4. Cookie</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento della navigazione. Non vengono utilizzati cookie di profilazione o cookie di terze parti a fini pubblicitari.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            È possibile disabilitare i cookie direttamente dal proprio browser. La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
          </p>
        </section>

        {/* Sezione 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif text-primary mb-4 pb-2 border-b border-secondary/30">5. Base Giuridica del Trattamento</h2>
          <p className="text-foreground/80 leading-relaxed">
            Il trattamento dei dati di navigazione è basato sul legittimo interesse del Titolare ai sensi dell'art. 6, par. 1, lett. f) del Regolamento (UE) 2016/679 (GDPR), consistente nella necessità di garantire la sicurezza e il funzionamento del sito web.
          </p>
        </section>

        {/* Sezione 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif text-primary mb-4 pb-2 border-b border-secondary/30">6. Conservazione dei Dati</h2>
          <p className="text-foreground/80 leading-relaxed">
            I dati raccolti automaticamente sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti, nel rispetto dei principi di minimizzazione e limitazione della conservazione previsti dal GDPR.
          </p>
        </section>

        {/* Sezione 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif text-primary mb-4 pb-2 border-b border-secondary/30">7. Diritti dell'Interessato</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">
            In conformità al Regolamento (UE) 2016/679 (GDPR), l'interessato ha diritto di:
          </p>
          <ul className="list-disc list-inside text-foreground/80 leading-relaxed space-y-2 ml-2">
            <li>Accedere ai propri dati personali (art. 15)</li>
            <li>Ottenere la rettifica dei dati inesatti (art. 16)</li>
            <li>Ottenere la cancellazione dei dati (art. 17)</li>
            <li>Opporsi al trattamento (art. 21)</li>
            <li>Proporre reclamo all'Autorità di controllo (Garante per la protezione dei dati personali — www.garanteprivacy.it)</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mt-3">
            Per esercitare i propri diritti è possibile contattare il Titolare all'indirizzo email: <a href="mailto:info@bergamini1924.it" className="text-primary hover:text-secondary transition-colors">info@bergamini1924.it</a>
          </p>
        </section>

        {/* Sezione 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif text-primary mb-4 pb-2 border-b border-secondary/30">8. Modifiche alla Privacy Policy</h2>
          <p className="text-foreground/80 leading-relaxed">
            Il Titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con aggiornamento della data in cima al documento. Si consiglia di consultare periodicamente questa pagina.
          </p>
        </section>

      </main>

      {/* Footer minimale */}
      <footer className="border-t-4 border-primary bg-background py-8">
        <div className="container mx-auto px-6 text-center text-foreground/50 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Antica Drogheria Bergamini Duilio. Tutti i diritti riservati.</p>
          <p className="mt-2 uppercase tracking-widest text-xs">P.IVA 00516281201</p>
        </div>
      </footer>

    </div>
  );
}
