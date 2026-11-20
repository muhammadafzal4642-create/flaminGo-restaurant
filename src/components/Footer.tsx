import { Facebook, Flame, MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl, RESTAURANT_INFO } from '../data/restaurant';

export function Footer() {
  const quickWhatsAppUrl = buildWhatsAppUrl(
    `Hello ${RESTAURANT_INFO.name}! I would like to place an order.`,
  );

  return (
    <footer className="bg-[#181615] text-[#FAF6F0] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          {/* Brand & Short Description */}
          <div className="md:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight text-[#FAF6F0] mb-3"
            >
              <Flame className="w-5 h-5 text-[#EA580C] fill-[#EA580C]" aria-hidden="true" />
              <span>{RESTAURANT_INFO.name}</span>
            </a>
            <p className="text-sm text-[#FAF6F0]/70 leading-relaxed max-w-sm">
              Modern Filipino street food and comforting classics crafted fresh daily for sharing
              with family and friends.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-wide text-[#FDBA74] mb-4">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-sm text-[#FAF6F0]/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wide text-[#FDBA74] mb-4">
              Connect With Us
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FlaminGo Restaurant on Facebook"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#EA580C] border border-white/10 flex items-center justify-center text-[#FAF6F0] transition-colors"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order via WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#EA580C] border border-white/10 flex items-center justify-center text-[#FAF6F0] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={`tel:+${RESTAURANT_INFO.whatsappDigits}`}
                aria-label="Call FlaminGo Restaurant"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#EA580C] border border-white/10 flex items-center justify-center text-[#FAF6F0] transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6F0]/60">
          <p>&copy; {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</p>
          <p>{RESTAURANT_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
