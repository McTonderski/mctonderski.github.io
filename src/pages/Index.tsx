import WeddingHero from "@/components/WeddingHero";
import WeddingTimeline from "@/components/WeddingTimeline";
import WeddingGallery from "@/components/WeddingGallery";
import WeddingLocation from "@/components/WeddingLocation";
import WeddingAccommodation from "@/components/WeddingAccommodation";
import WeddingParking from "@/components/WeddingParking";
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
      <WeddingFooter />
    </main>
  );
};

export default Index;
