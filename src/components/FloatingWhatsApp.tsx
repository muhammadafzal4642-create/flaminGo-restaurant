import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, RESTAURANT_INFO } from '../data/restaurant';

export function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppUrl(
    `Hello ${RESTAURANT_INFO.name}! I would like to place an order.`,
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order now via WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 px-4 h-11 sm:h-12 text-sm font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-full shadow-lg shadow-[#181615]/25 hover:-translate-y-0.5 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#181615]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Order</span>
    </a>
  );
}
