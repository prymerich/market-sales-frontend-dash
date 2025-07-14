import { Navigation } from "@/components/Navigation";
import { MarketingSalesHeader } from "@/components/MarketingSalesHeader";
import { MetricsDashboard } from "@/components/MetricsDashboard";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MarketingSalesHeader />
      <MetricsDashboard />
      <ServicesGrid />
      <CTASection />
    </div>
  );
};

export default Index;
