import weddingBackground from "@/assets/wedding-background.png";

const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blended Watercolor Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: `url(${weddingBackground})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-nautical backdrop-blur-sm border border-ocean shadow-nautical rounded-2xl p-8 md:p-12">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            <div className="block">Patrycja</div>
            <div className="block text-primary font-elegant text-4xl md:text-6xl lg:text-7xl my-2">oraz</div>
            <div className="block">Maciej</div>
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