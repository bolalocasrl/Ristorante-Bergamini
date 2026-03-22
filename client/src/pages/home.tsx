import { useState, useEffect } from "react";
import { Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import generated images
import heroImage from "@assets/terrazza_nitida_1774193271402.png";
import historyImage1 from "@/assets/images/history-1924-drogheria.png";
import historyImage2 from "@/assets/images/history-products.png";
import logoImage from "@assets/Logo_Bergamini_1772489157803.png";
import dolciImage from "@assets/Dolci_2_1774193271387.webp";
import liquoriImage from "@assets/Liquori_1774193271402.webp";
import vinoImage from "@assets/vino_1774193271403.webp";

// Carousel images
import carousel1 from "@assets/piatto_11_1774193846620.webp";
import carousel2 from "@assets/piatto_14_tartar_tartufo_1774193846620.webp";
import carousel3 from "@assets/piatto_carne_1774193846620.webp";
import carousel4 from "@assets/piatto_dolci_figo_1774193846620.webp";
import carousel5 from "@assets/piatto_dolci_morsicato_1774193846621.webp";
import carousel6 from "@assets/piatto_lasagna_figo_1774193846621.webp";
import carousel7 from "@assets/piatto_tagliatelle_figo_1774193846621.webp";
import carousel8 from "@assets/piatto_tortellini_fiog_1774193846621.webp";
import carousel9 from "@assets/tortellini_panna_1774193846621.webp";
import carousel10 from "@assets/bottiglie_polvere_1774193901629.webp";
import carousel11 from "@assets/Interior_1774193901633.webp";
import carousel12 from "@assets/piatto_5_1774193901633.webp";
import carousel13 from "@assets/piatto_6_1774193901633.webp";
import carousel14 from "@assets/piatto_7_1774193901634.webp";
import carousel15 from "@assets/piatto_9_1774193901634.webp";
import carousel16 from "@assets/piatto_12__1774193901634.webp";
import carousel17 from "@assets/cotoletta_1774193974555.webp";
import carousel18 from "@assets/panettone_con_liquore_1774193985287.webp";

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

  // Carousel items — real restaurant photos
  const carouselItems = [
    carousel1, carousel2, carousel3, carousel4, carousel5, carousel6,
    carousel7, carousel8, carousel9, carousel10, carousel11, carousel12,
    carousel13, carousel14, carousel15, carousel16, carousel17, carousel18,
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-secondary-foreground">
      {/* Header & Navigation (Fixed Yellow Bar) */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-xl bg-secondary py-1`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center relative h-12 md:h-14">
            
            {/* Left Side: Nav Links (Desktop) */}
            <div className="flex-1 flex items-center justify-start h-full">
              <div className="hidden lg:flex items-center space-x-12 text-sm uppercase tracking-widest font-bold text-secondary-foreground">
                <a href="#storia" className="hover:text-primary transition-colors flex items-center">La Storia</a>
                <a href="#prodotti" className="hover:text-primary transition-colors flex items-center">Prodotti</a>
                <a href="#dove-siamo" className="hover:text-primary transition-colors flex items-center">Dove Siamo</a>
              </div>
            </div>
            
            {/* Center: New Transparent Logo (Overhanging) */}
            <div className="flex justify-center items-center h-full z-50">
               <a href="#" className="block h-full flex items-center">
                 <img 
                   src={logoImage} 
                   alt="Antica Drogheria Bergamini Duilio Logo" 
                   className="h-10 md:h-27 w-auto object-contain drop-shadow-2xl" 
                 />
               </a>
            </div>

            {/* Right Side: Social & CTA Button */}
            <div className="flex-1 flex items-center justify-end space-x-6 md:space-x-8 h-full">
              <div className="hidden md:flex items-center space-x-5 text-secondary-foreground">
                <a href="https://www.instagram.com/ristorante_bergamini/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-transform hover:scale-110 flex items-center">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/ristorantebergaminini" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-transform hover:scale-110 flex items-center">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <a href="tel:051821279" className="flex items-center h-full py-1">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold tracking-wider uppercase transition-all shadow-md border border-primary/20 h-full px-4 text-xs md:px-5 md:text-sm flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">Chiama Ora</span>
                </Button>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Antica Drogheria Bergamini Duilio" 
            className="w-full h-full object-cover"
          />
          {/* Elegant dark overlay - reinforced for bright terrazza image */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/95"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center mt-12 flex flex-col items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl w-full mx-auto flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium mb-6 leading-tight drop-shadow-xl">
              I Sapori Autentici<br />
              <span className="italic font-light text-secondary">della Nostra Terra.</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Dalla bottega storica alla tavola, un viaggio tra gusto e tradizione. Ristorante e drogheria d'eccellenza dove la qualità è di casa dal 1924.
            </p>
            
            <a href="#menu" className="block mx-auto">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none px-8 h-16 flex items-center justify-center text-xl font-bold tracking-widest border-2 border-secondary shadow-[0_0_20px_rgba(249,212,35,0.3)]">
                <span className="flex items-center justify-center w-full h-full leading-none">IL NOSTRO MENU</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Infinite Scrolling Carousel Section */}
      <section className="bg-background py-8 border-b border-secondary/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
        <div className="flex w-full overflow-hidden">
          {/* CSS Animation handles the scrolling */}
          <div className="flex w-max animate-[scroll_120s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Double the items to create seamless loop */}
            {[...carouselItems, ...carouselItems].map((src, idx) => (
              <div key={idx} className="w-64 md:w-80 h-48 md:h-60 flex-shrink-0 mx-2 md:mx-4 border-4 border-secondary p-1 bg-background relative group">
                <img 
                  src={src} 
                  alt="Specialità" 
                  className="w-full h-full object-cover sepia-[.2] transition-all duration-500 group-hover:sepia-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
              </div>
            ))}
          </div>
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
                title: "Dolci",
                desc: "I famosi biscotti artigianali del nostro storico biscottificio, preparati freschi ogni giorno secondo le ricette di una volta.",
                img: dolciImage,
                alt: "Dolci artigianali Bergamini"
              },
              {
                title: "Liquori",
                desc: "Il nostro celebre Rosolio artigianale e una selezione di distillati preparati seguendo i metodi dell'antica drogheria.",
                img: liquoriImage,
                alt: "Liquori artigianali Bergamini"
              },
              {
                title: "Vini",
                desc: "Una cantina fornita con le migliori etichette regionali e nazionali, perfette per accompagnare ogni nostro piatto in osteria.",
                img: vinoImage,
                alt: "Vini Cantina Bergamini"
              }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Card className="bg-[#fdfaf0] border-2 border-secondary/30 rounded-none shadow-xl hover:-translate-y-2 transition-transform duration-300 group h-full relative overflow-hidden"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")" }}>
                  <CardContent className="p-10 flex flex-col items-center text-center relative z-10">
                    <div className="mb-6 w-24 h-24 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                      <img
                        src={service.img}
                        alt={service.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-3xl font-serif text-[#2a1a11] mb-4 font-bold">{service.title}</h3>
                    <p className="text-[#2a1a11]/80 leading-relaxed font-medium">
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
               
               <a href="https://www.google.com/maps/place/Antica+Drogheria+Bergamini+Duilio+1924/@44.6386802,11.1867288,18.71z/data=!4m6!3m5!1s0x477fc4556ab58547:0xc4d3837ef20a0c2b!8m2!3d44.6389261!4d11.1865387!16s%2Fg%2F1tg8hl90?entry=ttu&amp;g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
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
              <img src={logoImage} alt="Logo Footer" className="h-24 object-contain mb-4" />
              <p className="text-foreground/80 max-w-md text-lg font-light">
                Un luogo dove il tempo sembra essersi fermato. Ristorante e drogheria per ritrovare il vero sapore della tradizione.
              </p>
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://www.instagram.com/ristorante_bergamini/" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/ristorantebergaminini" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
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
