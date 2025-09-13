import WeddingHero from "@/components/WeddingHero";
import WeddingTimeline from "@/components/WeddingTimeline";
import WeddingGallery from "@/components/WeddingGallery";
import WeddingLocation from "@/components/WeddingLocation";
import WeddingAccommodation from "@/components/WeddingAccommodation";
import WeddingParking from "@/components/WeddingParking";
import WeddingPhotos from "@/components/WeddingPhotos";
import WeddingFooter from "@/components/WeddingFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <WeddingHero />
      <WeddingTimeline />
      <WeddingGallery />
      <WeddingLocation />
      <WeddingAccommodation />
      <WeddingParking />
      <WeddingPhotos />
      <WeddingFooter />
    </main>
  );
};

export default Index;
