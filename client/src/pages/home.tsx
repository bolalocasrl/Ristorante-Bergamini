import { useState, useEffect } from "react";
import { Phone, UtensilsCrossed, Wine, Coffee, MapPin, Mail, ChevronRight, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import generated images
import heroImage from "@/assets/images/hero-drogheria.png";
import historyImage1 from "@/assets/images/history-1924-drogheria.png";
import historyImage2 from "@/assets/images/history-products.png";
import logoImage from "@assets/image_1772481998822.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-secondary-foreground">
      {/* Header & Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        {/* Transparent Area with Logo over Hero */}
        <div className="pt-6 pb-4 flex justify-center items-center px-4 relative z-20">
          <div className="text-center relative z-10">
            <img src={logoImage} alt="Antica Drogheria Bergamini Duilio Logo" className="h-24 md:h-28 object-contain mx-auto drop-shadow-2xl" />
          </div>
        </div>

        {/* Yellow Ochre Menu Bar */}
        <nav className="bg-secondary w-full py-3 relative z-10 shadow-xl">
          <div className="container mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
            
            {/* Nav Links */}
            <div className="flex items-center space-x-6 md:space-x-12 text-sm md:text-base uppercase tracking-widest font-bold text-secondary-foreground">
              <a href="#storia" className="hover:text-primary transition-colors">La Storia</a>
              <a href="#prodotti" className="hover:text-primary transition-colors">Prodotti</a>
              <a href="#dove-siamo" className="hover:text-primary transition-colors">Dove Siamo</a>
            </div>
            
            {/* Right Side Actions & Social */}
            <div className="flex items-center space-x-6">
              {/* Social Icons */}
              <div className="hidden md:flex items-center space-x-4 text-secondary-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>

              {/* Call Button */}
              <a href="tel:051821279">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none border-2 border-primary/20 px-6 font-bold tracking-wider uppercase transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Chiama Ora
                </Button>
              </a>
            </div>

          </div>
        </nav>
      </header>

      {/* Floating CTA for Scrolled State / Mobile */}
      <div className={`fixed top-0 w-full z-40 transition-transform duration-500 bg-secondary shadow-md py-3 px-6 flex justify-between items-center ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className="flex items-center gap-4">
           <img src={logoImage} alt="Logo" className="h-10 object-contain" />
           <div className="hidden md:flex items-center space-x-3 text-secondary-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
           </div>
         </div>
         <a href="tel:051821279">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold tracking-wide uppercase shadow-lg text-sm md:text-base">
              <Phone className="w-4 h-4 mr-2" />
              Chiama Ora
            </Button>
         </a>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Antica Drogheria Bergamini Duilio" 
            className="w-full h-full object-cover"
          />
          {/* Elegant dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium mb-6 leading-tight drop-shadow-xl">
              I Sapori Autentici<br />
              <span className="italic font-light text-secondary">della Nostra Terra.</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Dalla bottega storica alla tavola, un viaggio tra gusto e tradizione. Ristorante e drogheria d'eccellenza dove la qualità è di casa dal 1924.
            </p>
            
            <a href="tel:051821279">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none px-8 py-7 text-xl font-bold tracking-widest border-2 border-secondary shadow-[0_0_20px_rgba(249,212,35,0.3)]">
                PRENOTA UN TAVOLO
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sezione Storia */}
      <section id="storia" className="py-24 md:py-32 bg-background relative border-t border-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">La Nostra Storia</h2>
            <div className="h-1 w-24 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto bg-[#fdfaf0] p-10 md:p-16 lg:px-[15%] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative border-2 border-secondary/40"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E\")" }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-[#2a1a11] leading-[1.8] font-serif mb-8 text-justify">
              <span className="float-left text-7xl md:text-8xl font-serif text-primary mr-4 mt-2 mb-[-8px] leading-none font-bold">D</span>
              al 1924, la storia della famiglia Bergamini si intreccia con il cuore di San Giovanni in Persiceto. Tutto ebbe inizio con Duilio, che scelse Piazza delle Erbe per aprire la sua bottega, dove l’arte della drogheria incontrava la produzione artigianale del Rosolio.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-[#2a1a11] leading-[1.8] font-serif text-justify">
              Attraverso tre generazioni, da Giuseppe fino a Pier Duilio, Alberto e Paolo, abbiamo custodito intatto il fascino della bottega del ‘900. Oggi continuiamo a celebrare la tradizione dell’osteria — tra pane, vino e salame — e l’eccellenza della nostra cucina, celebre per le inimitabili tagliatelle al prosciutto e i biscotti artigianali del nostro storico biscottificio. Un viaggio nel gusto che dura da oltre un secolo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prodotti */}
      <section id="prodotti" className="py-24 bg-background border-y border-secondary/20 relative">
        <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">I Nostri Prodotti</h2>
            <div className="h-1 w-24 bg-secondary mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto text-lg">
              Qualità selezionata e ingredienti genuini, dalla nostra bottega al vostro piatto.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Ristorante Tradizionale",
                desc: "Piatti tipici della cucina emiliana, pasta fresca fatta a mano e carni scelte, preparati seguendo le antiche ricette.",
                icon: <UtensilsCrossed className="w-10 h-10" />
              },
              {
                title: "Antica Drogheria",
                desc: "Selezione accurata di prodotti tipici locali, spezie, conserve e dolciumi. L'eccellenza del territorio a portata di mano.",
                icon: <Coffee className="w-10 h-10" />
              },
              {
                title: "Enoteca e Vini",
                desc: "Una cantina fornita con le migliori etichette regionali e nazionali, perfette per accompagnare ogni nostro piatto.",
                icon: <Wine className="w-10 h-10" />
              }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Card className="bg-card text-card-foreground border-none rounded-none shadow-xl hover:-translate-y-2 transition-transform duration-300 group h-full">
                  <CardContent className="p-10 flex flex-col items-center text-center">
                    <div className="mb-6 p-5 rounded-full bg-background text-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-inner">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-primary mb-4 font-bold">{service.title}</h3>
                    <p className="text-card-foreground/80 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dove Siamo */}
      <section id="dove-siamo" className="py-24 bg-background relative">
        <div className="container mx-auto px-6 text-center">
           <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Dove Siamo</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-10"></div>
            
            <div className="bg-background border-2 border-secondary/30 p-10 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
               <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
               <p className="text-2xl font-serif text-white mb-2">Ditta Duilio Bergamini</p>
               <p className="text-foreground/80 text-lg mb-8 font-medium">
                 Via Rambelli nº44<br/>
                 San Giovanni In Persiceto<br/>
                 Italia, 40017
               </p>
               
               <a href="https://www.google.com/maps/search/?api=1&query=Via+Rambelli+44+San+Giovanni+In+Persiceto" target="_blank" rel="noopener noreferrer">
                 <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none px-8 py-6 text-lg font-bold tracking-widest uppercase border-2 border-secondary/50 shadow-lg w-full md:w-auto">
                   APRI IN MAPS
                 </Button>
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contatti */}
      <footer className="bg-background pt-24 pb-12 border-t-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-2 space-y-6">
              <img src={logoImage} alt="Logo Footer" className="h-20 object-contain mb-4" />
              <p className="text-foreground/80 max-w-md text-lg font-light">
                Un luogo dove il tempo sembra essersi fermato. Ristorante e drogheria per ritrovare il vero sapore della tradizione.
              </p>
              <div className="flex items-center space-x-4 pt-2">
                <a href="#" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-secondary font-serif text-xl mb-6 border-b-2 border-secondary/30 pb-3 inline-block">Contatti & Prenotazioni</h4>
              <ul className="space-y-5">
                <li className="flex items-center text-foreground/90">
                  <Phone className="w-5 h-5 mr-4 text-primary shrink-0" />
                  <a href="tel:051821279" className="hover:text-secondary font-bold text-xl transition-colors">051 / 821279</a>
                </li>
                <li className="flex items-center text-foreground/90">
                  <Mail className="w-5 h-5 mr-4 text-primary shrink-0" />
                  <a href="mailto:info@bergamini1924.it" className="hover:text-secondary transition-colors font-medium">info@bergamini1924.it</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-secondary font-serif text-xl mb-6 border-b-2 border-secondary/30 pb-3 inline-block">Indirizzo</h4>
              <ul className="space-y-4">
                <li className="flex items-start text-foreground/90 font-medium">
                  <MapPin className="w-5 h-5 mr-4 mt-1 text-primary shrink-0" />
                  <span>
                    Via Rambelli nº44<br />
                    San Giovanni In Persiceto<br />
                    (BO) - 40017
                  </span>
                </li>
              </ul>
            </div>
            
          </div>

          <div className="pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50 font-medium">
            <p>&copy; {new Date().getFullYear()} Antica Drogheria Bergamini Duilio. Tutti i diritti riservati.</p>
            <p className="mt-2 md:mt-0 tracking-widest uppercase">P.IVA 01234567890</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
