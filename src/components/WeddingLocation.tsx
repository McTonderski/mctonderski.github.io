import { MapPin, Clock, Navigation } from "lucide-react";

const WeddingLocation = () => {
  const locations = [
    {
      type: "Ceremonia ślubna",
      name: "Kościół Wszystkich Świętych i MB Różańcowej",
      address: "Sobolew",
      time: "15:00",
      mapUrl: "https://maps.app.goo.gl/cc4JP2Y9FQAJw2yE6",
      icon: "⛪"
    },
    {
      type: "Przyjęcie weselne",
      name: "Kuter Port",
      address: "Nieznanowice",
      time: "Po ceremonii",
      mapUrl: "https://maps.google.com/?q=Kuter+Port+Nieznanowice",
      icon: "🛥️"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lokalizacje
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wszystkie najważniejsze miejsca naszego wielkiego dnia
          </p>
          <div className="w-16 h-0.5 bg-gradient-hero mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gradient-romantic border border-romantic rounded-2xl p-8 shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{location.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {location.type}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-hero mx-auto"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{location.name}</p>
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium">{location.time}</p>
                </div>

                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4" />
                  Zobacz na mapie
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingLocation;
