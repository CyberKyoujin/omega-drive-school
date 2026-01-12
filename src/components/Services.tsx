import { motion } from "framer-motion";
import { Car, Truck, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const services = [{
  icon: Car,
  title: "Klasse B",
  description: "Der klassische PKW-Führerschein für Fahrzeuge bis 3.500 kg. Perfekt für den Alltag.",
  details: ["Schaltwagen", "Automatik verfügbar", "Intensive Betreuung"]
}, {
  icon: Truck,
  title: "Klasse BE",
  description: "Erweiterung für Klasse B mit Anhänger über 750 kg. Ideal für Wohnwagen und Transport.",
  details: ["Anhängerbetrieb", "Praxisnahe Ausbildung", "Flexible Termine"]
}, {
  icon: Settings,
  title: "Klasse B197",
  description: "Ausbildung auf Automatik mit Schaltprüfung. Das Beste aus beiden Welten.",
  details: ["Automatik-Ausbildung", "Schaltberechtigung", "Moderne Fahrzeuge"]
}];
const Services = () => {
  return <section id="leistungen" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/20 rounded-full border border-primary/30 text-primary-foreground">
            Unsere Führerscheinklassen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wählen Sie Ihre <span className="text-gradient">Klasse</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir bieten verschiedene Führerscheinklassen für Ihre individuellen Bedürfnisse
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }}>
              <Card className="h-full card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map(detail => <li key={detail} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>

        <motion.div className="mt-16 text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-secondary/50 border border-border">
            <div className="flex gap-2">
              <span className="px-3 py-1 text-xs sm:text-sm bg-primary/20 rounded-full text-primary-foreground">Schalter</span>
              <span className="px-3 py-1 text-xs sm:text-sm bg-primary/20 rounded-full text-primary-foreground">Automatik</span>
            </div>
            <span className="text-sm sm:text-base text-muted-foreground text-center">Beide Getriebevarianten verfügbar</span>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Services;