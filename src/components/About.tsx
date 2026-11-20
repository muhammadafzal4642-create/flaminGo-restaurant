import { motion } from 'motion/react';
import { ABOUT_IMAGE } from '../data/restaurant';
import { FoodImage } from './FoodImage';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-sm font-semibold tracking-wide text-[#991B1B] mb-3">
              Our Kitchen Story
            </p>

            <h2
              className="font-display font-bold tracking-tight text-[#181615] leading-[1.15] mb-6"
              style={{
                fontSize: 'clamp(1.85rem, 3vw, 2.75rem)',
                textWrap: 'balance',
              }}
            >
              Welcome to FlaminGo Restaurant
            </h2>

            <p className="text-base sm:text-lg text-[#443E3A] leading-relaxed mb-8 max-w-xl">
              At FlaminGo Restaurant, we bring people together through delicious Filipino favorites.
              From comforting classics to tasty street food snacks, every dish is prepared to bring
              you a satisfying experience.
            </p>

            {/* Unboxed Editorial Highlights with typographic separators */}
            <div className="pt-6 border-t border-[#181615]/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="font-display text-lg font-bold text-[#181615]">Made Fresh Daily</p>
                <p className="text-sm text-[#5C534E] mt-1">
                  Cooked to order with authentic Filipino flavors
                </p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-[#181615]">Street Classics</p>
                <p className="text-sm text-[#5C534E] mt-1">
                  Silky taho, crispy takoyaki, and savory platters
                </p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-[#181615]">Built for Sharing</p>
                <p className="text-sm text-[#5C534E] mt-1">
                  Generous family trays for every gathering
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Media Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] rounded-2xl overflow-hidden shadow-lg shadow-[#181615]/10">
              <FoodImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
