import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gaming-mouse.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-gaming bg-clip-text text-transparent">
              PRECISION GAMING TECHNOLOGY
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Dominate Every
            <span className="block bg-gradient-gaming bg-clip-text text-transparent">
              Millisecond
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Experience unparalleled precision with our next-generation gaming mice. 
            Engineered for champions, designed for victory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-gaming hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Explore Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary text-lg px-8 py-6"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-muted-foreground" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
