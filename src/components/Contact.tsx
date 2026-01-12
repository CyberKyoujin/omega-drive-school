import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
const Contact = () => {
  return <section id="kontakt" className="py-24 bg-background">
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
            Kontakt aufnehmen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Schreiben Sie <span className="text-gradient">uns</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen? Senden Sie uns eine Nachricht oder rufen Sie uns an
          </p>
        </motion.div>

        {/* Contact Form & Contact Info - Same Row */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <Card className="card-gradient border-border/50 h-full">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-8">Kontaktdaten</h3>
                
                <div className="flex flex-col gap-8 ">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Telefon</p>
                      <a href="tel:017624137205" className="text-xl hover:underline text-primary-foreground">
                        0176 24137205
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Adresse</p>
                      <p className="text-muted-foreground">
                        Alte Poststr 25<br />
                        49074 Osnabrück
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Öffnungszeiten</p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Montag: 19:00 - 20:30 Uhr<br />
                        Donnerstag: 19:00 - 20:30 Uhr
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="tel:017624137205">
                    <Button className="w-full text-lg py-6 glow-effect">
                      <Phone className="mr-2 h-5 w-5" />
                      Jetzt anrufen
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map - Full Width Row */}
        <motion.div className="max-w-5xl mx-auto mt-8" initial={{
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
          <Card className="overflow-hidden border-border/50">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.4397843274613!2d8.045!3d52.275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e5f8e4e0c5f5%3A0x1234567890abcdef!2sAlte%20Poststra%C3%9Fe%2025%2C%2049074%20Osnabr%C3%BCck!5e0!3m2!1sde!2sde!4v1234567890" width="100%" height="350" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Fahrschule OMEGA Standort" />
          </Card>
        </motion.div>
      </div>
    </section>;
};
export default Contact;