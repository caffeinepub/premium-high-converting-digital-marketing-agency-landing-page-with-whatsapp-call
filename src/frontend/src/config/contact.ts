// Contact configuration - update these values with your actual contact details
export const contactConfig = {
  // WhatsApp number (include country code without + or spaces)
  whatsappNumber: '918824495515',
  // Phone number for tel: links
  phoneNumber: '+971501234567',
  
  // Computed URLs
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  get phoneUrl() {
    return `tel:${this.phoneNumber}`;
  },
};
