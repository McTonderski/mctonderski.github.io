import { Clock, Heart, MapPin } from "lucide-react";

const WeddingTimeline = () => {
  const events = [
    {
      time: "15:00",
      title: "Ceremonia ślubna",
      location: "Kościół Wszystkich Świętych i MB Różańcowej",
      address: "Sobolew",
      icon: Heart,
      description: "Zapraszamy na uroczystą ceremonię zaślubin"
    },
    {
      time: "Po ceremonii",
      title: "Przyjęcie weselne",
      location: "Kuter Port",
      address: "Nieznanowice",
      icon: MapPin,
      description: "Celebracja i zabawa do białego rana"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-nautical">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Program dnia
          </h2>
          <div className="w-16 h-0.5 bg-gradient-hero mx-auto"></div>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-card border border-nautical rounded-2xl p-8 shadow-soft hover:shadow-nautical transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-hero p-3 rounded-full shadow-soft">
                    <event.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="bg-ocean text-ocean-foreground px-4 py-2 rounded-full font-semibold shadow-soft">
                    {event.time}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-nautical-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{event.location}</span>
                    <span className="text-muted-foreground">• {event.address}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingTimeline;