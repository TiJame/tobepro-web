import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508]">
      <Header />
      <Hero />
      <Services />
      <Products />
      <WhyUs />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
