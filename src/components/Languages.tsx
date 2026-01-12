import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const languages = [
  { name: "Deutsch", flag: "🇩🇪", code: "de" },
  { name: "Russisch", flag: "🇷🇺", code: "ru" },
  { name: "Ukrainisch", flag: "🇺🇦", code: "ua" },
  { name: "Polnisch", flag: "🇵🇱", code: "pl" },
  { name: "Türkisch", flag: "🇹🇷", code: "tr" },
];

const Languages = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mehrsprachige <span className="text-gradient">Ausbildung</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Wir unterrichten in Ihrer Sprache für optimalen Lernerfolg
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-12 rounded-lg overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                  <img 
                    src={`https://flagcdn.com/w160/${lang.code}.png`}
                    alt={`${lang.name} Flagge`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-lg">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;
