import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-gaming rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">G</span>
            </div>
            <span className="text-xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
              GAMEMOUSE
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-foreground transition-colors">
              Technology
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </div>

          <Button className="bg-gradient-gaming hover:shadow-glow transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
