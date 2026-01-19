import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Shortcuts from "@/components/Shortcuts";
import Privacy from "@/components/Privacy";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Shortcuts />
      <Privacy />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
