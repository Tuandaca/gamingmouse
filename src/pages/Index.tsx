import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandLogos from "@/components/BrandLogos";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BrandLogos />
      <Features />
    </div>
  );
};

export default Index;
