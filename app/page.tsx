import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Bots from "./components/Bots";
import Products from "./components/Products";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollInit from "./components/ScrollInit";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#04040a]">
      <ScrollInit />
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <Bots />
      <Products />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
