import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";

const WeddingGallery = () => {
  const photos = [
    { id: 1, src: couple1, alt: "Patrycja i Maciej - spacer" },
    { id: 2, src: couple2, alt: "Patrycja i Maciej nad wodą" },
    { id: 3, src: couple3, alt: "Patrycja i Maciej o zachodzie słońca" },
    { id: 4, src: couple4, alt: "Patrycja i Maciej w plenerze" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-nautical">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nasze wspólne chwile
          </h2>
          <div className="w-16 h-0.5 bg-gradient-hero mx-auto"></div>
          <p className="font-elegant text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Każde zdjęcie opowiada historię naszej miłości
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={photo.id}
              className={`relative overflow-hidden rounded-2xl shadow-soft hover:shadow-nautical transition-all duration-500 group ${
                index % 3 === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nautical/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingGallery;