import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import mouseWhite from "@/assets/mouse-white.jpg";
import mouseBlack from "@/assets/mouse-black.jpg";
import mouseSilver from "@/assets/mouse-silver.jpg";

const Products = () => {
  const products = [
    {
      name: "APEX Pro Wireless",
      image: mouseWhite,
      price: "$149.99",
      badge: "BEST SELLER",
      specs: {
        dpi: "25,600",
        battery: "80 hours",
        weight: "63g",
        wireless: true,
      },
      description: "Ultimate wireless freedom with zero latency. Perfect for competitive FPS gaming.",
    },
    {
      name: "VIPER Elite",
      image: mouseBlack,
      price: "$99.99",
      badge: "PRO CHOICE",
      specs: {
        dpi: "20,000",
        battery: "Wired",
        weight: "58g",
        wireless: false,
      },
      description: "Lightweight champion for lightning-fast reactions. Tournament proven performance.",
    },
    {
      name: "PHANTOM X",
      image: mouseSilver,
      price: "$129.99",
      badge: "NEW",
      specs: {
        dpi: "30,000",
        battery: "60 hours",
        weight: "70g",
        wireless: true,
      },
      description: "Next-gen sensor technology with unmatched precision. Built for MOBA dominance.",
    },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our
            <span className="bg-gradient-gaming bg-clip-text text-transparent"> Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your weapon. Each mouse is engineered for peak performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card group"
            >
              <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-gradient-gaming border-0">
                  {product.badge}
                </Badge>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                </div>
                
                <p className="text-muted-foreground">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Max DPI</p>
                    <p className="font-bold">{product.specs.dpi}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Weight</p>
                    <p className="font-bold">{product.specs.weight}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Battery</p>
                    <p className="font-bold">{product.specs.battery}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Type</p>
                    <p className="font-bold">{product.specs.wireless ? "Wireless" : "Wired"}</p>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-gaming hover:shadow-glow transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
