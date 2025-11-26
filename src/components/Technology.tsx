import { Card } from "@/components/ui/card";

const Technology = () => {
  const techFeatures = [
    {
      title: "HyperSpeed Wireless",
      icon: "📡",
      description: "Our proprietary wireless technology delivers sub-1ms latency, faster than most wired mice. Experience true wireless freedom without compromise.",
      specs: [
        "2.4GHz wireless connection",
        "< 1ms response time",
        "Up to 80 hours battery life",
        "USB-C fast charging",
      ]
    },
    {
      title: "PixelPerfect Sensor",
      icon: "🎯",
      description: "Custom-designed optical sensor with zero acceleration and perfect tracking accuracy across all surfaces, even glass.",
      specs: [
        "Up to 30,000 DPI",
        "650 IPS tracking speed",
        "50G acceleration",
        "Zero smoothing or prediction",
      ]
    },
    {
      title: "Mechanical Switches",
      icon: "⚙️",
      description: "Premium mechanical switches rated for 70 million clicks with crisp tactile feedback and lightning-fast actuation.",
      specs: [
        "70M click lifecycle",
        "0.2ms click latency",
        "Optical or mechanical options",
        "Hot-swappable design",
      ]
    },
    {
      title: "SmartSync RGB",
      icon: "🌈",
      description: "Intelligent RGB lighting that syncs with your games, music, and system performance. 16.8 million colors at your command.",
      specs: [
        "16.8M color spectrum",
        "Game-reactive lighting",
        "Music visualization mode",
        "Custom profile support",
      ]
    },
  ];

  return (
    <section id="technology" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Cutting-Edge
            <span className="bg-gradient-gaming bg-clip-text text-transparent"> Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovation meets precision. Every component engineered for excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techFeatures.map((tech, index) => (
            <Card 
              key={index}
              className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card/50 backdrop-blur-sm"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">{tech.icon}</div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-bold">{tech.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-border">
                    {tech.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-gaming text-white text-center space-y-4">
          <h3 className="text-3xl font-bold">Tournament Tested, Champion Approved</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Our gaming mice are used by professional esports teams in over 50 countries. 
            Trusted in competitions worth millions of dollars, where every millisecond counts.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm opacity-90">Pro Gamers</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100+</div>
              <div className="text-sm opacity-90">Tournaments Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
