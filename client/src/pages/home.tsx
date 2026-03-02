import { useState, useEffect } from "react";
import { Phone, UtensilsCrossed, Wine, Coffee, MapPin, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import generated images
import heroImage from "@/assets/images/hero-drogheria.png";
import historyImage1 from "@/assets/images/history-1924-drogheria.png";
import historyImage2 from "@/assets/images/history-products.png";

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
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 shadow-xl ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        {/* Dark Wood Area with Logo */}
        <div className="bg-background py-6 flex justify-center items-center px-4 relative z-20">
          {/* Subtle noise pattern matching the body */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
          <div className="text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary tracking-wide">
              B.D. dal 1924
            </h1>
            <p className="text-foreground/90 uppercase tracking-[0.3em] text-xs md:text-sm mt-2 font-medium">
              Antica Drogheria Bergamini Duilio
            </p>
          </div>
        </div>

        {/* Yellow Ochre Menu Bar */}
        <nav className="bg-secondary w-full py-3 relative z-10 shadow-md">
          <div className="container mx-auto px-6 flex justify-center md:justify-between items-center flex-wrap gap-4">
            <div className="flex items-center space-x-6 md:space-x-12 text-sm md:text-base uppercase tracking-widest font-bold text-secondary-foreground">
              <a href="#storia" className="hover:text-primary transition-colors">La Storia</a>
              <a href="#specialita" className="hover:text-primary transition-colors">Specialità</a>
              <a href="#contatti" className="hover:text-primary transition-colors">Contatti</a>
            </div>
            
            <a href="tel:051821279" className="hidden md:block">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none border-2 border-primary/20 px-6 font-bold tracking-wider uppercase transition-all shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                CHIAMA ORA: 051/821279
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Floating CTA for Scrolled State / Mobile */}
      <div className={`fixed top-0 w-full z-40 transition-transform duration-500 bg-secondary shadow-md py-3 px-6 flex justify-between items-center ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className="font-serif font-bold text-primary text-xl">B.D. 1924</div>
         <a href="tel:051821279">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold tracking-wide uppercase shadow-lg text-sm md:text-base">
              <Phone className="w-4 h-4 mr-2" />
              051/821279
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
            <div className="inline-block mb-6 px-5 py-2 border-2 border-secondary text-secondary tracking-[0.2em] uppercase text-sm font-bold backdrop-blur-sm bg-background/40">
              San Giovanni in Persiceto
            </div>
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
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">La Nostra Storia</h2>
            <div className="h-1 w-24 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="space-y-8"
            >
              <h3 className="text-3xl font-serif text-white">Oltre un secolo di <span className="italic text-secondary">tradizione</span>.</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Fondata nel 1924, l'Antica Drogheria Bergamini Duilio è un'istituzione a San Giovanni in Persiceto. Nata come classica bottega di paese, ha saputo conservare l'anima e il calore di un tempo, evolvendosi in un rinomato ristorante.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Dai profumi delle spezie sfuse ai piatti della tradizione emiliana preparati con maestria. Le nostre mura raccontano storie di convivialità, materie prime selezionate e amore per la buona tavola.
              </p>
              
              <div className="pt-6 border-t border-secondary/20">
                <div className="flex items-center space-x-6">
                  <div className="text-6xl font-serif text-secondary font-bold">100</div>
                  <div className="text-sm uppercase tracking-widest text-foreground/70 leading-relaxed font-medium">Anni di<br/>Passione</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden border-8 border-secondary p-1 shadow-2xl bg-background">
                <img 
                  src={historyImage1} 
                  alt="Drogheria storica" 
                  className="w-full h-full object-cover sepia-[.4] contrast-125 brightness-90"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square border-8 border-background p-1 shadow-2xl hidden md:block z-10 bg-secondary">
                <img 
                  src={historyImage2} 
                  alt="Prodotti tipici" 
                  className="w-full h-full object-cover sepia-[.3] contrast-125 brightness-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servizi / Specialità */}
      <section id="specialita" className="py-24 bg-background border-y border-secondary/20 relative">
        <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Cosa Offriamo</h2>
            <div className="h-1 w-24 bg-secondary mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto text-lg">
              Prodotti scelti e piatti genuini, in un'atmosfera d'altri tempi.
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

      {/* Footer / Contatti */}
      <footer id="contatti" className="bg-background pt-24 pb-12 border-t-4 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-2 space-y-6">
              <div className="font-serif text-3xl font-bold tracking-tight text-secondary mb-4">
                B.D. <span className="text-primary italic font-normal">dal 1924</span>
              </div>
              <p className="text-foreground/70 uppercase tracking-widest text-sm font-bold mb-4">
                Antica Drogheria Bergamini Duilio
              </p>
              <p className="text-foreground/80 max-w-md text-lg font-light">
                Un luogo dove il tempo sembra essersi fermato. Ristorante e drogheria per ritrovare il vero sapore della tradizione.
              </p>
            </div>

            <div>
              <h4 className="text-secondary font-serif text-xl mb-6 border-b-2 border-secondary/30 pb-3 inline-block">Prenotazioni</h4>
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
              <h4 className="text-secondary font-serif text-xl mb-6 border-b-2 border-secondary/30 pb-3 inline-block">Vieni a Trovarci</h4>
              <ul className="space-y-4">
                <li className="flex items-start text-foreground/90 font-medium">
                  <MapPin className="w-5 h-5 mr-4 mt-1 text-primary shrink-0" />
                  <span>
                    San Giovanni in Persiceto<br />
                    (Bologna)
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
