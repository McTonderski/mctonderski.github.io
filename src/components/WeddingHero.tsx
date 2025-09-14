import floralPattern from "@/assets/floral-pattern.png";
import yachtWheel from "@/assets/yacht-wheel.png";
import windRose from "@/assets/wind-rose.png";

const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-nautical/30 to-coral/20">
      {/* Floral Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: `url(${floralPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 300px'
        }}
      />
      
      {/* Yacht Equipment Graphics */}
      <div className="absolute top-20 left-20 opacity-10 rotate-12 hidden lg:block">
        <img src={yachtWheel} alt="" className="w-32 h-32" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-15 -rotate-12 hidden lg:block">
        <img src={windRose} alt="" className="w-28 h-28" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-8 rotate-45 hidden xl:block">
        <img src={yachtWheel} alt="" className="w-24 h-24" />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-12 -rotate-6 hidden lg:block">
        <img src={windRose} alt="" className="w-20 h-20" />
      </div>
      
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