import { siteConfig } from './siteConfig';

/**
 * Contact configuration
 * Update WhatsApp and phone numbers here
 */
export const contactConfig = {
  // WhatsApp number (include country code without + or spaces)
  whatsappNumber: '918824495515',
  // Phone number for tel: links
  phoneNumber: '+918824495515',
  
  // Display labels (from central config)
  get labels() {
    return {
      whatsapp: siteConfig.cta.secondaryButton,
      call: 'Call Now',
    };
  },
  
  // Computed URLs
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  get phoneUrl() {
    return `tel:${this.phoneNumber}`;
  },
};
