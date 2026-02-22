import Navbar from "@/components/Navbar";
import NextLevelHero from "@/components/NextLevelHero";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ArchitectsSection from "@/components/ArchitectsSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import MethodologySection from "@/components/MethodologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import AIReadinessQuiz from "@/components/AIReadinessQuiz";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <NextLevelHero />
      <TrustSection />
      <ShowcaseSection />
      <MethodologySection />
      <TestimonialsSection />
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <ArchitectsSection />
      <AIReadinessQuiz />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
