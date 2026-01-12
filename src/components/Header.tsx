import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-new.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    {
      href: "#leistungen",
      label: "Führerscheinklassen",
    },
    {
      href: "#kontakt",
      label: "Kontakt",
    },
  ];
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : ""}`}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="container mx-auto px-2 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <a href="/" className="flex items-center gap-3 mr-auto min-w-0 -ml-6 sm:ml-0">
            <div className="w-fit flex-shrink-0">
              <img src={logo} alt="Fahrschule OMEGA Logo" className="h-32 sm:h-48 w-auto object-contain object-left" />
            </div>

            <div className="hidden sm:block">
              <span className="text-xl font-bold">
                Fahrschule <span className="text-primary">OMEGA</span>
              </span>
              <p className="text-xs text-muted-foreground">inh. Oleg Roseblum</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:017624137205">
              <Button size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Anrufen
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="lg:hidden py-6 border-t border-border bg-background fixed left-0 right-0 top-20 sm:top-24"
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
          >
            <div className="flex flex-col gap-4 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:017624137205" className="w-full">
                <Button className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Jetzt anrufen
                </Button>
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
export default Header;
