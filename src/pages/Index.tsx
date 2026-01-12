import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
