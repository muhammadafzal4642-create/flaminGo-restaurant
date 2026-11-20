import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CTA_IMAGE } from '../data/restaurant';
import { FoodImage } from './FoodImage';

interface CtaBannerProps {
  onOpenOrderModal: () => void;
}

export function CtaBanner({ onOpenOrderModal }: CtaBannerProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-[#181615] overflow-hidden">
      {/* Background Kitchen Flames Photography */}
      <div className="absolute inset-0">
        <FoodImage
          src={CTA_IMAGE.src}
          alt={CTA_IMAGE.alt}
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#141210]/92 via-[#141210]/80 to-[#141210]/65"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <h2
            className="font-display font-extrabold tracking-tight text-[#FAF6F0] leading-[1.1] mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              textWrap: 'balance',
            }}
          >
            Craving Something Delicious?
          </h2>

          <p className="text-base sm:text-xl text-[#FAF6F0]/85 max-w-xl mx-auto mb-8">
            Your favorite Filipino dishes are just one click away!
          </p>

          <button
            type="button"
            onClick={onOpenOrderModal}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[52px] text-base font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] rounded-xl shadow-xl shadow-[#EA580C]/30 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#181615]"
          >
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
