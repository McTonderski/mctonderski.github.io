import { MapPin, Phone, Car, Bed, Map, Coffee } from "lucide-react";
import mapAccess from "@/assets/domki-map-access.jpg";
import mapArea from "@/assets/domki-map-area.jpg";
import mapGeneral from "@/assets/domki-map-general.jpg";

const WeddingAccommodation = () => {
  const accommodations = [
    {
      name: "Kuter Port Domki",
      description: "Domki nad Jeziorem",
      address: "Marszowice 247, 32-420",
      phone: "+48 694 863 333",
      features: ["Śniadanko", "Basen", "Relax"],
      icon: Bed
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Noclegi
          </h2>
          <div className="w-16 h-0.5 bg-gradient-hero mx-auto"></div>
          <p className="font-elegant text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Polecane miejsca noclegowe w pobliżu miejsca przyjęcia
          </p>
        </div>

        <div className="flex justify-center mb-12">
          {accommodations.map((place, index) => (
            <div
              key={index}
              className="bg-card border border-nautical rounded-2xl p-8 shadow-soft hover:shadow-nautical transition-all duration-300 hover:-translate-y-1 max-w-md w-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-ocean p-3 rounded-full shadow-soft">
                  <place.icon className="w-6 h-6 text-ocean-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {place.name}
                </h3>
              </div>

              <p className="text-muted-foreground mb-4">
                {place.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-nautical-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{place.address}</span>
                </div>

                <div className="flex items-center gap-3 text-nautical-foreground">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href={`tel:${place.phone}`} className="text-sm hover:text-primary transition-colors">
                    {place.phone}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-nautical">
                <div className="flex flex-wrap gap-2">
                  {place.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-coral text-coral-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Maps Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Map className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Mapy terenu
            </h3>
          </div>
          <p className="font-elegant text-muted-foreground mb-8 max-w-md mx-auto">
            Mapy pomocne w znalezieniu miejsca noclegu na terenie ośrodka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card border border-nautical rounded-2xl p-4 shadow-soft">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4 text-center">
              Mapa dojazdu
            </h4>
            <img 
              src={mapAccess} 
              alt="Mapa dojazdu do domków Kuter Port" 
              className="w-full h-auto rounded-lg shadow-soft"
            />
          </div>
          
          <div className="bg-card border border-nautical rounded-2xl p-4 shadow-soft">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4 text-center">
              Mapa strefy domków
            </h4>
            <img 
              src={mapArea} 
              alt="Mapa strefy domków Kuter Port z numeracją" 
              className="w-full h-auto rounded-lg shadow-soft"
            />
          </div>
          
          <div className="bg-card border border-nautical rounded-2xl p-4 shadow-soft">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4 text-center">
              Mapa ogólna ośrodka
            </h4>
            <img 
              src={mapGeneral} 
              alt="Mapa ogólna ośrodka Kuter Port" 
              className="w-full h-auto rounded-lg shadow-soft"
            />
          </div>
        </div>

        {/* Breakfast Information */}
        <div className="mt-12 bg-card border border-nautical rounded-2xl p-8 shadow-soft">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-coral p-3 rounded-full shadow-soft">
              <Coffee className="w-6 h-6 text-coral-foreground" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Informacje o śniadaniach
            </h3>
          </div>
          <p className="font-elegant text-muted-foreground text-center max-w-2xl mx-auto">
            Śniadania będą dostępne w miejscu oznaczonym jako <strong className="text-foreground">"Rekreacja"</strong> na mapie ogólnej ośrodka, w godzinach <strong className="text-foreground">8:00 - 10:00</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingAccommodation;
