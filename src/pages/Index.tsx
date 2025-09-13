import WeddingHero from "@/components/WeddingHero";
import WeddingTimeline from "@/components/WeddingTimeline";
import WeddingLocation from "@/components/WeddingLocation";
import WeddingFooter from "@/components/WeddingFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <WeddingHero />
      <WeddingTimeline />
      <WeddingLocation />
      <WeddingFooter />
    </main>
  );
};

export default Index;
