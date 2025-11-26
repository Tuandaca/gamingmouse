import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      title: "Innovation First",
      description: "We pioneer breakthrough technologies that redefine gaming performance standards.",
      icon: "💡",
    },
    {
      title: "Gamer-Driven",
      description: "Every product is designed with direct input from professional esports athletes.",
      icon: "🎮",
    },
    {
      title: "Quality Obsessed",
      description: "Rigorous testing ensures each mouse exceeds the highest durability standards.",
      icon: "⭐",
    },
    {
      title: "Community Powered",
      description: "We listen to our community and continuously improve based on your feedback.",
      icon: "👥",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded by passionate gamers who believed gaming peripherals could be better.",
    },
    {
      year: "2020",
      title: "First Championship",
      description: "Our mice win their first major esports tournament, proving our technology.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 50+ countries, becoming a trusted name in competitive gaming.",
    },
    {
      year: "2024",
      title: "Next Generation",
      description: "Launching revolutionary wireless technology with sub-1ms latency.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built by Gamers,
            <span className="bg-gradient-gaming bg-clip-text text-transparent"> For Gamers</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We started GAMEMOUSE with a simple mission: create the most precise, 
            responsive gaming mice in the world. Today, we are trusted by professional 
            gamers and enthusiasts worldwide who demand nothing but perfection.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-6 text-center border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-gaming flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-12 flex-1">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-12 text-center bg-secondary/50 border-border space-y-6">
          <h3 className="text-3xl font-bold">Join the Revolution</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you are a professional esports athlete or a passionate gamer, 
            we have the perfect mouse to elevate your game. Join thousands of gamers 
            who have already made the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-gradient-gaming hover:shadow-glow transition-all duration-300">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              Contact Us
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
