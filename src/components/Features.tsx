import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Ultra-Fast Response",
      description: "1ms response time for instant precision in every click and movement",
    },
    {
      icon: "🎯",
      title: "Pixel-Perfect Accuracy",
      description: "Advanced optical sensors with up to 25,600 DPI for ultimate control",
    },
    {
      icon: "⚙️",
      title: "Customizable Performance",
      description: "Fully programmable buttons and adjustable weight for your playstyle",
    },
    {
      icon: "🌈",
      title: "RGB Lighting",
      description: "16.8 million colors with dynamic effects synchronized to your game",
    },
    {
      icon: "🔋",
      title: "Extended Battery Life",
      description: "Up to 80 hours of gameplay on a single charge with wireless models",
    },
    {
      icon: "🏆",
      title: "Pro-Grade Build",
      description: "Tournament-tested durability with 70+ million click lifecycle",
    },
  ];

  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for
            <span className="bg-gradient-gaming bg-clip-text text-transparent"> Champions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to give you the competitive edge you need to win
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-300 border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
