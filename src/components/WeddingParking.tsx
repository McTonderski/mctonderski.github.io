import { Car, MapPin, Clock, AlertCircle } from "lucide-react";

const WeddingParking = () => {
  const parkingOptions = [
    {
      title: "Parking przy kościele",
      location: "Sobolew - Kościół Wszystkich Świętych",
      description: "Parking bezpłatny przy kościele",
      time: "Dostępny podczas ceremonii (15:00-16:00)",
      type: "free",
      icon: Car
    },
    {
      title: "Parking Kuter Port",
      location: "Nieznanowice - Kuter Port",
      description: "Główny parking przy miejscu przyjęcia",
      time: "Cały wieczór",
      type: "venue",
      icon: Car
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-nautical">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Parking
          </h2>
          <div className="w-16 h-0.5 bg-gradient-hero mx-auto"></div>
          <p className="font-elegant text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Informacje o miejscach parkingowych
          </p>
        </div>

        <div className="space-y-8">
          {parkingOptions.map((parking, index) => (
            <div
              key={index}
              className="bg-card border border-nautical rounded-2xl p-8 shadow-soft hover:shadow-nautical transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full shadow-soft ${
                    parking.type === 'venue' ? 'bg-gradient-ocean' : 'bg-gradient-coral'
                  }`}>
                    <parking.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {parking.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {parking.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-nautical-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{parking.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-nautical-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{parking.time}</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-ocean/10 border border-ocean/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-ocean flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-ocean mb-2">Ważne informacje</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Prosimy o zachowanie ostrożności podczas parkowania</li>
                <li>• Parking przy Kuter Port jest strzeżony podczas przyjęcia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingParking;
