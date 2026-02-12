import { siteConfig } from '../config/siteConfig';

/**
 * Homepage copy and content
 * CTA labels are now centralized in siteConfig
 */
export const homeCopy = {
  hero: {
    headline: 'We Help Businesses Get More Leads, Sales & Growth — Not Just Likes',
    subheadline: 'Performance-driven digital marketing that delivers real results in 30 days.',
    primaryCTA: siteConfig.cta.primaryButton,
    secondaryCTA: siteConfig.cta.secondaryButton,
  },
  trust: {
    headline: 'Trusted by Growing Brands',
    subheadline: 'Results focused, ROI driven approach',
  },
  services: {
    headline: 'Our Services',
    subheadline: 'Complete digital marketing solutions to scale your business',
  },
  whyUs: {
    headline: 'Why Choose Us',
    subheadline: 'We deliver results, not excuses',
  },
  results: {
    headline: 'Clients saw 2x–5x growth in leads',
    subheadline: 'Real businesses, real results',
  },
  process: {
    headline: 'How We Work',
    subheadline: 'Simple, transparent, and effective',
  },
  cta: {
    headline: 'Ready to Scale Your Business?',
    subheadline: 'Talk to a Marketing Expert Now',
    primaryCTA: siteConfig.cta.bookCall,
    secondaryCTA: siteConfig.cta.whatsappUs,
  },
  contact: {
    headline: 'Get Started Today',
    subheadline: 'Free 30-Minute Strategy Call — No obligations, just results-focused advice',
  },
};
