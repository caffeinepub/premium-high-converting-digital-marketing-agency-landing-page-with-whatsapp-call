import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { contactConfig } from '../../config/contact';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/generated/agency-logo.dim_512x192.png"
              alt="Digital Marketing Agency"
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Strategy Call
            </Button>
            <Button
              size="sm"
              asChild
            >
              <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <div className="px-4 pt-2 space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Free Strategy Call
                </Button>
                <Button
                  className="w-full"
                  asChild
                >
                  <a href={contactConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    WhatsApp Now
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
