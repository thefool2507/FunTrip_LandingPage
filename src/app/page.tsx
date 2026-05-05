import HeroSection from "@/components/hero";
import CategoriesSection from "@/components/categories";
import DestinationsSection from "@/components/destinations";
import StatsSection from "@/components/stats";
import PricingGuide from "@/components/pricing-guide";
import ReviewsSection from "@/components/reviews";
import NewsletterSection from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <DestinationsSection />
      <StatsSection />
      <PricingGuide />
      <ReviewsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
