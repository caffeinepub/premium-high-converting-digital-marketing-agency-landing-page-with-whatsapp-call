import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ServicesGrid } from './ServicesGrid';
import { ProcessSteps } from './ProcessSteps';
import { LeadForm } from './LeadForm';
import { contactConfig } from '../../config/contact';
import { homeCopy } from '../../content/homeCopy';
import { MotionDiv } from './Motion';
import { Target, TrendingUp, Shield, Users, DollarSign } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <MotionDiv className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            {homeCopy.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            {homeCopy.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-base sm:text-lg px-8 py-6 h-auto w-full sm:w-auto"
              onClick={scrollToContact}
            >
              🚀 {homeCopy.hero.primaryCTA}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-8 py-6 h-auto w-full sm:w-auto"
              asChild
            >
              <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                📲 {homeCopy.hero.secondaryCTA}
              </a>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {homeCopy.trust.headline}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <Card className="border-2">
              <CardHeader>
                <Target className="w-10 h-10 mb-2 text-primary" />
                <CardTitle className="text-xl">Results Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We measure success by your growth, not vanity metrics
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <TrendingUp className="w-10 h-10 mb-2 text-primary" />
                <CardTitle className="text-xl">ROI Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every rupee spent is tracked and optimized for maximum returns
                </p>
              </CardContent>
            </Card>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {homeCopy.services.headline}
          </h2>
          <p className="text-lg text-muted-foreground">
            {homeCopy.services.subheadline}
          </p>
        </MotionDiv>
        <ServicesGrid />
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Target,
      title: 'Data-Driven Strategy',
      description: 'Every decision backed by analytics and market research',
    },
    {
      icon: Shield,
      title: 'No Fake Promises',
      description: 'Honest timelines and realistic growth projections',
    },
    {
      icon: Users,
      title: 'Dedicated Account Manager',
      description: 'Your personal point of contact for all campaigns',
    },
    {
      icon: TrendingUp,
      title: 'Transparent Reporting',
      description: 'Real-time dashboards showing exactly where your money goes',
    },
    {
      icon: DollarSign,
      title: 'Affordable Packages',
      description: 'Flexible pricing designed for growing businesses',
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {homeCopy.whyUs.headline}
          </h2>
          <p className="text-lg text-muted-foreground">
            {homeCopy.whyUs.subheadline}
          </p>
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <MotionDiv key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <reason.icon className="w-12 h-12 mb-3 text-primary" />
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResultsSection() {
  const stats = [
    { label: 'Before', value: '10', unit: 'Leads/Month', color: 'text-muted-foreground' },
    { label: 'After', value: '50+', unit: 'Leads/Month', color: 'text-primary' },
  ];

  return (
    <section id="results" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {homeCopy.results.headline}
          </h2>
          <p className="text-lg text-muted-foreground">
            {homeCopy.results.subheadline}
          </p>
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <MotionDiv key={index} delay={index * 0.2}>
              <Card className="text-center p-8 border-2">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-5xl md:text-6xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <p className="text-lg text-muted-foreground">{stat.unit}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
        <MotionDiv delay={0.4} className="text-center mt-8">
          <p className="text-xl font-semibold text-primary">
            Average 2x–5x growth in qualified leads within 90 days
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {homeCopy.process.headline}
          </h2>
          <p className="text-lg text-muted-foreground">
            {homeCopy.process.subheadline}
          </p>
        </MotionDiv>
        <ProcessSteps />
      </div>
    </section>
  );
}

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <MotionDiv className="max-w-4xl mx-auto text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
            <CardHeader>
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {homeCopy.cta.headline}
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                {homeCopy.cta.subheadline}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-8 py-6 h-auto w-full sm:w-auto"
                  onClick={scrollToContact}
                >
                  {homeCopy.cta.primaryCTA}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-8 py-6 h-auto w-full sm:w-auto"
                  asChild
                >
                  <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {homeCopy.cta.secondaryCTA}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {homeCopy.contact.headline}
          </h2>
          <p className="text-lg text-muted-foreground">
            {homeCopy.contact.subheadline}
          </p>
        </MotionDiv>
        <div className="max-w-2xl mx-auto">
          <LeadForm />
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  📲 WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={contactConfig.phoneUrl}>
                  📞 Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
