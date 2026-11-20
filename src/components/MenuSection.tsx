import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flame } from 'lucide-react';
import { MENU_ITEMS, type MenuItem } from '../data/restaurant';
import { FoodImage } from './FoodImage';

interface MenuSectionProps {
  onOrderDish: (item: MenuItem) => void;
}

type FilterOption = 'All' | MenuItem['category'];

const FILTER_OPTIONS: FilterOption[] = [
  'All',
  'Street Snacks',
  'Mains & Sharing',
  'Chef Selection',
];

export function MenuSection({ onOrderDish }: MenuSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  const visibleItems =
    activeFilter === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#F3ECE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Segmented Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#991B1B] mb-2">
              Fresh From Our Kitchen
            </p>
            <h2
              className="font-display font-bold tracking-tight text-[#181615] leading-[1.15]"
              style={{
                fontSize: 'clamp(1.85rem, 3vw, 2.75rem)',
                textWrap: 'balance',
              }}
            >
              Our Delicious Menu
            </h2>
            <p className="text-base sm:text-lg text-[#5C534E] mt-2">
              Your Filipino favorites, all in one place.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter menu items by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#FAF6F0] border border-[#181615]/10 rounded-xl self-start md:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(option)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] ${
                    isActive
                      ? 'bg-[#181615] text-[#FAF6F0]'
                      : 'text-[#5C534E] hover:text-[#181615]'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleItems.map((item, idx) => {
            const isFeaturedWide = item.featured && activeFilter === 'All';

            if (isFeaturedWide) {
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group md:col-span-2 lg:col-span-2 bg-[#181615] text-[#FAF6F0] rounded-2xl overflow-hidden border border-[#181615]/10 shadow-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 grid grid-cols-1 lg:grid-cols-12"
                >
                  <div className="lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-[#24211F]">
                    <FoodImage
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-[#FDBA74] mb-2">
                        <Flame className="w-3.5 h-3.5 text-[#EA580C]" aria-hidden="true" />
                        <span>Chef Selection</span>
                        <span aria-hidden="true">·</span>
                        <span>House Favorite</span>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-[#FAF6F0] mb-3">
                        {item.name}
                      </h3>

                      <p className="text-sm sm:text-base text-[#FAF6F0]/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold tabular-nums text-[#FDBA74]">
                        {item.priceLabel}
                      </span>

                      <button
                        type="button"
                        onClick={() => onOrderDish(item)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <span>Order Now</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            }

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-[#FAF6F0] rounded-2xl overflow-hidden border border-[#181615]/10 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#24211F]">
                  <FoodImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#991B1B] mb-1.5">{item.category}</p>
                    <h3 className="font-display text-xl font-bold text-[#181615] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#5C534E] leading-relaxed">{item.description}</p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#181615]/10 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold tabular-nums text-[#181615]">
                      {item.priceLabel}
                    </span>

                    <button
                      type="button"
                      onClick={() => onOrderDish(item)}
                      className="inline-flex items-center justify-center px-4 py-2 min-h-[40px] text-sm font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F0]"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
