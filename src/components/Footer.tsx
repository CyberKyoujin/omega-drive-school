import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-new.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img src={logo} alt="Fahrschule OMEGA Logo" className="h-32 sm:h-48 w-fit flex-shrink-0" />
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-0">
                Fahrschule <span className="text-primary">OMEGA</span>
              </h3>
              <p className="text-sm text-muted-foreground">inh. Oleg Roseblum</p>
              <p className="text-muted-foreground text-sm">Ihre Fahrschule in Osnabrück</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-muted-foreground flex-shrink-0">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">Alte Poststr 25, Osnabrück</span>
            </div>
            <a href="tel:017624137205" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">0176 24137205</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
            <Link 
              to="/impressum" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <Link 
              to="/datenschutz" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Datenschutzerklärung
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fahrschule OMEGA. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
