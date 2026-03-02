import { useState, useEffect } from "react";
import { Phone, Wrench, Settings, Clock, MapPin, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import generated images
import heroImage from "@/assets/images/hero-workshop.png";
import historyImage1 from "@/assets/images/history-1924.png";
import historyImage2 from "@/assets/images/history-tools.png";

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
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-sm shadow-sm py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-tight text-primary">
            B. 1924
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#storia" className="hover:text-primary transition-colors">Storia</a>
            <a href="#servizi" className="hover:text-primary transition-colors">Servizi</a>
            <a href="#contatti" className="hover:text-primary transition-colors">Contatti</a>
          </div>
          <a href="tel:051821279">
            <Button 
              className={`rounded-none border px-6 font-semibold tracking-wide uppercase transition-all ${
                isScrolled 
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90" 
                  : "bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contattaci Ora
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Bergamini 1924 Officina" 
            className="w-full h-full object-cover"
          />
          {/* Elegant dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-1 border border-primary-foreground/30 text-primary-foreground/80 tracking-widest uppercase text-sm font-medium backdrop-blur-md">
              Dal 1924
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary-foreground font-medium mb-8 leading-tight drop-shadow-lg">
              L'eccellenza meccanica<br />
              <span className="italic font-light text-primary-foreground/90">da un secolo.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Un'eredità di precisione, passione e dedizione ai motori. Ripariamo, restauriamo e diamo nuova vita alle vostre auto con l'esperienza di chi ha fatto la storia.
            </p>
            
            <a href="tel:051821279">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-lg tracking-wider border border-primary shadow-2xl">
                Chiama Ora: 051.821279
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sezione Storia */}
      <section id="storia" className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">La Nostra Eredità</h2>
            <div className="h-px w-24 bg-primary/30 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="space-y-8"
            >
              <h3 className="text-3xl font-serif text-foreground">Un viaggio iniziato con <span className="italic text-primary">passione</span>.</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Fondata nel 1924, l'Officina Bergamini rappresenta un pilastro storico dell'artigianato meccanico. Quello che era iniziato come un piccolo garage per le prime vetture, si è trasformato in un centro di eccellenza tramandato di generazione in generazione.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ogni strumento nella nostra officina racconta una storia. La nostra filosofia unisce l'antica sapienza manuale alle più moderne tecnologie di diagnostica.
              </p>
              
              <div className="pt-4 border-t border-primary/10">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl font-serif text-primary">100</div>
                  <div className="text-sm uppercase tracking-widest text-muted-foreground leading-tight">Anni di<br/>Esperienza</div>
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
              <div className="aspect-[4/5] overflow-hidden border border-primary/20 p-2 bg-white/50 shadow-xl">
                <img 
                  src={historyImage1} 
                  alt="Officina storica" 
                  className="w-full h-full object-cover sepia-[.3] contrast-125"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square border border-primary/20 p-2 bg-white shadow-2xl hidden md:block">
                <img 
                  src={historyImage2} 
                  alt="Strumenti vintage" 
                  className="w-full h-full object-cover sepia-[.2] contrast-125"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="servizi" className="py-24 bg-card border-y border-primary/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">I Nostri Servizi</h2>
            <div className="h-px w-24 bg-primary/30 mx-auto"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
              Competenza artigianale applicata alle esigenze moderne.
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
                title: "Meccanica Classica",
                desc: "Riparazioni e manutenzione con precisione millimetrica, per auto storiche e moderne.",
                icon: <Settings className="w-8 h-8" />
              },
              {
                title: "Restauro Conservativo",
                desc: "Riportiamo all'antico splendore le vetture d'epoca, preservandone l'originalità e il valore.",
                icon: <Wrench className="w-8 h-8" />
              },
              {
                title: "Tagliandi & Diagnostica",
                desc: "Check-up completi utilizzando strumentazione all'avanguardia su base di solida esperienza.",
                icon: <Clock className="w-8 h-8" />
              }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Card className="bg-transparent border-primary/10 rounded-none shadow-none hover:shadow-lg hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardContent className="p-10 flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-serif text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="mt-8 flex items-center text-sm font-medium text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Scopri di più <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer / Contatti */}
      <footer id="contatti" className="bg-secondary text-secondary-foreground pt-24 pb-12 border-t-8 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-2 space-y-6">
              <div className="font-serif text-3xl font-bold tracking-tight text-white mb-6">
                Bergamini <span className="text-primary font-light italic">1924</span>
              </div>
              <p className="text-secondary-foreground/70 max-w-md text-lg font-light">
                Un secolo di dedizione ai motori. La vostra officina di fiducia, dove l'arte meccanica incontra la precisione contemporanea.
              </p>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl mb-6 border-b border-white/10 pb-4 inline-block">Contatti</h4>
              <ul className="space-y-4">
                <li className="flex items-start text-secondary-foreground/80">
                  <Phone className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
                  <a href="tel:051821279" className="hover:text-white transition-colors text-lg">051 / 821279</a>
                </li>
                <li className="flex items-start text-secondary-foreground/80">
                  <Mail className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
                  <a href="mailto:info@bergamini1924.it" className="hover:text-white transition-colors">info@bergamini1924.it</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl mb-6 border-b border-white/10 pb-4 inline-block">Dove Siamo</h4>
              <ul className="space-y-4">
                <li className="flex items-start text-secondary-foreground/80">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
                  <span>
                    Via dell'Artigianato, 12<br />
                    Bologna (BO), 40100<br />
                    Italia
                  </span>
                </li>
              </ul>
            </div>
            
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Officina Bergamini 1924. Tutti i diritti riservati.</p>
            <p className="mt-2 md:mt-0 tracking-widest uppercase">P.IVA 01234567890</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
