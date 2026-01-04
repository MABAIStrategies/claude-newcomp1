import Link from 'next/link';
import { ROUTES, SITE_CONFIG } from '@/lib/constants';

const footerLinks = {
  company: [
    { name: 'Services', href: ROUTES.services },
    { name: 'Portfolio', href: ROUTES.portfolio },
    { name: 'About', href: ROUTES.about },
  ],
  resources: [
    { name: 'Testimonials', href: ROUTES.testimonials },
    { name: 'Contact', href: ROUTES.contact },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-champagne-gold/20 bg-midnight-navy/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-champagne-gold to-yellow-600 flex items-center justify-center">
                <span className="font-cinzel text-xl font-bold text-starry-night">
                  MAB
                </span>
              </div>
              <div className="font-cinzel text-lg font-bold gold-gradient-text">
                MAB AI Strategies
              </div>
            </div>
            <p className="text-off-white/60 mb-4 max-w-md">
              {SITE_CONFIG.description}
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-champagne-gold hover:text-champagne-gold/80 transition-colors"
            >
              {SITE_CONFIG.email}
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-cinzel text-champagne-gold font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-off-white/60 hover:text-champagne-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-cinzel text-champagne-gold font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-off-white/60 hover:text-champagne-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-champagne-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-off-white/40 text-sm">
              © {currentYear} MAB AI Strategies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-off-white/40 hover:text-champagne-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-off-white/40 hover:text-champagne-gold transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
