import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BrandLogos />
      <Features />
      <Products />
      <Technology />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
