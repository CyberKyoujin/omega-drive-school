import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-24 pt-32">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Impressum</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none space-y-6 break-words">
            <section>
              <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="text-muted-foreground">
                Fahrschule OMEGA<br />
                Inh. Oleg Roseblum<br />
                Alte Poststr 25<br />
                49074 Osnabrück
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
              <p className="text-muted-foreground">
                Telefon: 0176 24137205<br />
                E-Mail: info@fahrschule-omega.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="text-muted-foreground">
                Berufsbezeichnung: Fahrlehrer<br />
                Zuständige Kammer: Industrie- und Handelskammer Osnabrück-Emsland-Grafschaft Bentheim<br />
                Verliehen in: Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">EU-Streitschlichtung</h2>
              <p className="text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-muted-foreground mt-2">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 break-words hyphens-auto">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Haftung für Inhalte</h2>
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-muted-foreground mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Haftung für Links</h2>
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Urheberrecht</h2>
              <p className="text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
                Autors bzw. Erstellers.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
