const WeddingFooter = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="font-serif text-3xl font-bold mb-2">
            Patrycja & Maciej
          </h3>
          <p className="text-primary-foreground/80 text-lg">
            27 września 2024
          </p>
        </div>
        
        <div className="w-16 h-0.5 bg-primary-foreground/50 mx-auto mb-6"></div>
        
        <p className="text-primary-foreground/80 text-lg font-elegant">
          Nie możemy się doczekać świętowania z Wami tego wyjątkowego dnia!
        </p>
        
        <div className="mt-8 text-primary-foreground/60 text-sm">
          <p>💕 Z miłością, Patrycja i Maciej 💕</p>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;