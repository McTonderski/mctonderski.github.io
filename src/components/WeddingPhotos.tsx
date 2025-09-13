import { Upload, Camera, ExternalLink } from "lucide-react";

const WeddingPhotos = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Zdjęcia ślubne
          </h2>
          <div className="w-16 h-0.5 bg-gradient-hero mx-auto"></div>
          <p className="font-elegant text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Podziel się swoimi zdjęciami z naszego szczęśliwego dnia
          </p>
        </div>

        <div className="bg-card border border-nautical rounded-2xl p-8 shadow-soft text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-coral p-4 rounded-full shadow-soft">
              <Camera className="w-8 h-8 text-coral-foreground" />
            </div>
          </div>
          
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Dodaj swoje zdjęcia
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Jeśli robiliście zdjęcia podczas naszego ślubu, bardzo chcielibyśmy je zobaczyć! 
            Przesyłajcie je do naszego folderu na Google Drive.
          </p>
          
          <a 
            href="https://drive.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-hero text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-soft hover:shadow-nautical transition-all duration-300 hover:-translate-y-1"
          >
            <Upload className="w-5 h-5" />
            Prześlij zdjęcia
            <ExternalLink className="w-4 h-4" />
          </a>
          
          <div className="mt-8 pt-8 border-t border-nautical">
            <p className="text-sm text-muted-foreground">
              💕 Z góry dziękujemy za wszystkie wspaniałe wspomnienia! 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPhotos;