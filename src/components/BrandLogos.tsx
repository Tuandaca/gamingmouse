const BrandLogos = () => {
  const brands = [
    "Razer",
    "Logitech G",
    "SteelSeries",
    "Corsair",
    "HyperX",
    "ASUS ROG",
  ];

  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wider">
          Trusted by Professional Gamers Worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div 
              key={brand} 
              className="flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <span className="text-xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
