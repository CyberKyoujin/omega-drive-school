import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-24 pt-32">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Datenschutzerklärung</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-lg font-medium mt-4 mb-2">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Datenerfassung auf dieser Website</h3>
              <p className="text-muted-foreground">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. 
                um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Verantwortlicher</h2>
              <p className="text-muted-foreground">
                Fahrschule OMEGA<br />
                Inh. Oleg Roseblum<br />
                Alte Poststr 25<br />
                49074 Osnabrück<br /><br />
                Telefon: 0176 24137205<br />
                E-Mail: info@fahrschule-omega.de
              </p>
              <p className="text-muted-foreground mt-2">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
                anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Ihre Rechte</h2>
              <p className="text-muted-foreground">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
                <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                <li>Sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Kontaktformular</h2>
              <p className="text-muted-foreground">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung 
                (Art. 6 Abs. 1 lit. a DSGVO) sowie zur Durchführung vorvertraglicher Maßnahmen 
                (Art. 6 Abs. 1 lit. b DSGVO).
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie für die Erreichung des 
                Zweckes ihrer Erhebung nicht mehr erforderlich sind, spätestens jedoch nach 6 Monaten.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Verarbeitete Daten:</strong> Name, E-Mail-Adresse, Telefonnummer (optional), 
                gewünschte Führerscheinklasse, Nachrichteninhalt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. E-Mail-Versand</h2>
              <p className="text-muted-foreground">
                Für den Versand von E-Mails nutzen wir den Dienst Resend (Resend, Inc., USA). Die Daten werden 
                dabei in die USA übermittelt. Resend ist unter dem EU-US Data Privacy Framework zertifiziert.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse an der technischen Zustellung von 
                E-Mails (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Hosting und technische Dienste</h2>
              <p className="text-muted-foreground">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst 
                werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, 
                Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse an einer sicheren und effizienten 
                Bereitstellung unseres Onlineangebots (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Cookies und lokale Speicherung</h2>
              <p className="text-muted-foreground">
                Diese Website verwendet technisch notwendige Speichermechanismen (localStorage) für die 
                Funktionalität der Website, insbesondere für die Speicherung Ihrer Cookie-Präferenzen.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse an der technischen Funktionsfähigkeit 
                der Website (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Widerruf Ihrer Einwilligung</h2>
              <p className="text-muted-foreground">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie 
                können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum 
                Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Beschwerderecht</h2>
              <p className="text-muted-foreground">
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
                personenbezogenen Daten zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:
              </p>
              <p className="text-muted-foreground mt-2">
                Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
                Prinzenstraße 5<br />
                30159 Hannover
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Aktualität</h2>
              <p className="text-muted-foreground">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
