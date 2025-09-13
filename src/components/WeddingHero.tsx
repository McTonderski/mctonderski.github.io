import heroImage from "@/assets/wedding-hero.jpg";

const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-nautical/30 via-background/20 to-background/50"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-nautical backdrop-blur-sm border border-ocean shadow-nautical rounded-2xl p-8 md:p-12">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
            Patrycja <span className="text-primary">&</span> Maciej
          </h1>
          
          <div className="w-24 h-0.5 bg-gradient-hero mx-auto mb-8"></div>
          
          <p className="font-elegant text-xl md:text-2xl text-muted-foreground mb-8">
            Zapraszamy na nasz ślub
          </p>
          
          <div className="bg-gradient-coral text-coral-foreground rounded-xl p-6 inline-block shadow-soft">
            <p className="font-serif text-2xl md:text-3xl font-semibold">
              27 września 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;