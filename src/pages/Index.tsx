import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import AIReadinessQuiz from "@/components/AIReadinessQuiz";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ShowcaseSection />
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <AIReadinessQuiz />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
