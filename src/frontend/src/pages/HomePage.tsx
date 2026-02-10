import { Header } from '../components/landing/Header';
import { HeroSection } from '../components/landing/Sections';
import { TrustSection } from '../components/landing/Sections';
import { ServicesSection } from '../components/landing/Sections';
import { WhyChooseUsSection } from '../components/landing/Sections';
import { ResultsSection } from '../components/landing/Sections';
import { ProcessSection } from '../components/landing/Sections';
import { CTASection } from '../components/landing/Sections';
import { ContactSection } from '../components/landing/Sections';
import { Footer } from '../components/landing/Footer';
import { StickyContactButtons } from '../components/landing/StickyContactButtons';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ResultsSection />
        <ProcessSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <StickyContactButtons />
    </div>
  );
}
