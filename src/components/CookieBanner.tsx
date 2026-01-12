import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent-accepted";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasAccepted) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Even when declining, we need to remember this choice
    localStorage.setItem(COOKIE_CONSENT_KEY, "essential-only");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-border rounded-lg shadow-xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">Cookie-Hinweis</h3>
                    <p className="text-sm text-muted-foreground">
                      Diese Website verwendet technisch notwendige Cookies und lokale Speicherung für die 
                      Funktionalität der Website. Weitere Informationen finden Sie in unserer{" "}
                      <Link 
                        to="/datenschutz" 
                        className="text-primary hover:underline"
                      >
                        Datenschutzerklärung
                      </Link>.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDecline}
                    className="flex-1 md:flex-none"
                  >
                    Nur notwendige
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAccept}
                    className="flex-1 md:flex-none"
                  >
                    Alle akzeptieren
                  </Button>
                </div>

                <button
                  onClick={handleDecline}
                  className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground"
                  aria-label="Schließen"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
