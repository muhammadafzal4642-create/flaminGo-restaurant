import { motion } from 'motion/react';
import { Flame, Heart, Users } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/restaurant';

export function WhyChooseUs() {
  const renderIcon = (icon: 'heart' | 'flame' | 'users') => {
    switch (icon) {
      case 'heart':
        return <Heart className="w-6 h-6 text-[#EF4444]" aria-hidden="true" />;
      case 'flame':
        return <Flame className="w-6 h-6 text-[#EA580C]" aria-hidden="true" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#FDBA74]" aria-hidden="true" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#181615] text-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold tracking-wide text-[#FDBA74] mb-2">
            The FlaminGo Standard
          </p>
          <h2
            className="font-display font-bold tracking-tight text-[#FAF6F0] leading-[1.15]"
            style={{
              fontSize: 'clamp(1.85rem, 3vw, 2.75rem)',
              textWrap: 'balance',
            }}
          >
            Why Guests Love Dining With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#24211F] border border-white/10 rounded-2xl p-7 hover:border-[#EA580C]/50 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                {renderIcon(feature.icon)}
              </div>

              <h3 className="font-display text-xl font-bold text-[#FAF6F0] mb-2.5">
                {feature.title}
              </h3>

              <p className="text-sm sm:text-base text-[#FAF6F0]/75 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
