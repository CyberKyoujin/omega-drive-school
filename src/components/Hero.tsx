import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-hero.png";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-8"
          >
            <div className="p-0">
              <img src={logo} alt="Fahrschule OMEGA Logo" className="hidden sm:block h-100 w-fit mx-auto" />
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 rounded-full border border-primary/30 text-primary-foreground">
              Ihre Fahrschule in Osnabrück
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            Fahrschule <span className="text-gradient">OMEGA</span>
            <span className="block text-lg md:text-2xl font-normal mt-2 text-muted-foreground">inh. Oleg Roseblum</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            Professionelle Fahrausbildung in mehreren Sprachen. Ihr Weg zum Führerschein beginnt hier.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <a href="tel:017624137205">
              <Button size="lg" className="text-lg px-8 py-6 glow-effect animate-pulse-glow">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </Button>
            </a>
            <a href="#kontakt">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-muted-foreground/30 hover:bg-secondary"
              >
                Mehr erfahren
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-muted-foreground"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Alte Poststr 25, Osnabrück</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Mo. & Do. 19:00-20:30</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
