import { MapPin, Phone, Car, Bed } from "lucide-react";

const WeddingAccommodation = () => {
  const accommodations = [
    {
      name: "Hotel Marina",
      description: "Luksusowy hotel nad jeziorem z pięknym widokiem",
      address: "ul. Portowa 12, Nieznanowice",
      phone: "+48 123 456 789",
      features: ["Widok na jezioro", "Restauracja", "Spa", "Parking"],
      icon: Bed
    },
    {
      name: "Pensjonat Przystań",
      description: "Przytulny pensjonat w stylu marynistycznym",
      address: "ul. Żeglarska 5, Nieznanowice", 
      phone: "+48 987 654 321",
      features: ["Śniadanie", "Wi-Fi", "Parking", "Taras widokowy"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accommodations.map((place, index) => (
            <div 
              key={index}
              className="bg-card border border-nautical rounded-2xl p-8 shadow-soft hover:shadow-nautical transition-all duration-300 hover:-translate-y-1"
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
      </div>
    </section>
  );
};

export default WeddingAccommodation;