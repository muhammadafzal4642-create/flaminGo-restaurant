import { motion } from 'motion/react';
import { ArrowRight, Flame } from 'lucide-react';
import { HERO_IMAGE, RESTAURANT_INFO } from '../data/restaurant';
import { FoodImage } from './FoodImage';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export function Hero({ onOpenOrderModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[580px] lg:min-h-[680px] flex items-center bg-[#181615] overflow-hidden"
    >
      {/* Full-bleed Food Photography Background */}
      <div className="absolute inset-0">
        <FoodImage
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured Contrast Scrim for >= 4.5:1 WCAG AA readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#141210]/95 via-[#141210]/78 to-[#141210]/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#141210]/85 via-transparent to-[#141210]/30"
        />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Unboxed Editorial Tagline */}
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#FDBA74] mb-4">
            <Flame className="w-4 h-4 text-[#EA580C]" aria-hidden="true" />
            <span>{RESTAURANT_INFO.tagline}</span>
          </p>

          <h1
            className="font-display font-extrabold tracking-tight text-[#FAF6F0] leading-[1.08] mb-5"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.85rem)',
              textWrap: 'balance',
            }}
          >
            Authentic Filipino Flavors, Made With Love!
          </h1>

          <p className="text-base sm:text-lg text-[#FAF6F0]/85 leading-relaxed max-w-xl mb-8">
            Experience the taste of Filipino favorites at FlaminGo Restaurant. Freshly prepared,
            delicious, and perfect for sharing!
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenOrderModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-base font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] rounded-xl shadow-lg shadow-[#EA580C]/25 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#181615]"
            >
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href="#menu"
              className="inline-flex items-center justify-center px-6 py-3.5 min-h-[48px] text-base font-semibold text-[#FAF6F0] bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore Our Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
