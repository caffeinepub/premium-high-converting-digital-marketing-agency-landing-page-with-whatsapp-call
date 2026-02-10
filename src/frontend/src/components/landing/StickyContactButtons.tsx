import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { contactConfig } from '../../config/contact';

export function StickyContactButtons() {
  return (
    <>
      {/* WhatsApp Button - Always visible */}
      <Button
        size="lg"
        className="fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
        asChild
      >
        <a
          href={contactConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>

      {/* Call Button - Mobile only */}
      <Button
        size="lg"
        variant="secondary"
        className="fixed bottom-6 right-24 z-40 rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform md:hidden"
        asChild
      >
        <a href={contactConfig.phoneUrl} aria-label="Call us">
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </>
  );
}
