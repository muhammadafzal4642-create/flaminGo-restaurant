import { useState } from 'react';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { CtaBanner } from './components/CtaBanner';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Navbar } from './components/Navbar';
import { OrderModal } from './components/OrderModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import type { MenuItem } from './data/restaurant';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const handleOpenGeneralOrder = () => {
    setSelectedDish(null);
    setOrderModalOpen(true);
  };

  const handleOrderDish = (dish: MenuItem) => {
    setSelectedDish(dish);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#181615]">
      <Navbar onOpenOrderModal={handleOpenGeneralOrder} />

      <main className="flex-1">
        <Hero onOpenOrderModal={handleOpenGeneralOrder} />
        <About />
        <MenuSection onOrderDish={handleOrderDish} />
        <WhyChooseUs />
        <CtaBanner onOpenOrderModal={handleOpenGeneralOrder} />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <OrderModal
        isOpen={orderModalOpen}
        initialDish={selectedDish}
        onClose={() => setOrderModalOpen(false)}
      />
    </div>
  );
}
