import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, ExternalLink, Flame, MessageCircle, Minus, Plus, X } from 'lucide-react';
import { buildWhatsAppUrl, MENU_ITEMS, RESTAURANT_INFO, type MenuItem } from '../data/restaurant';
import { FoodImage } from './FoodImage';

interface OrderModalProps {
  isOpen: boolean;
  initialDish: MenuItem | null;
  onClose: () => void;
}

interface OrderConfirmation {
  orderCode: string;
  dishName: string;
  quantity: number;
  customerName: string;
  contactNumber: string;
  orderType: 'Pickup' | 'Delivery';
  notes: string;
  whatsappUrl: string;
}

export function OrderModal({ isOpen, initialDish, onClose }: OrderModalProps) {
  const [selectedDishId, setSelectedDishId] = useState<string>(MENU_ITEMS[0].id);
  const [quantity, setQuantity] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [orderType, setOrderType] = useState<'Pickup' | 'Delivery'>('Pickup');
  const [notes, setNotes] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [confirmation, setConfirmation] = useState<OrderConfirmation | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedDishId(initialDish?.id ?? MENU_ITEMS[0].id);
      setQuantity(1);
      setError('');
      setConfirmation(null);
    }
  }, [isOpen, initialDish]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedDish = MENU_ITEMS.find((item) => item.id === selectedDishId) ?? MENU_ITEMS[0];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = customerName.trim();
    const trimmedPhone = contactNumber.trim();

    if (!trimmedName || !trimmedPhone) {
      setError('Please enter your name and contact number to complete your order.');
      return;
    }

    if (trimmedPhone.replace(/\D/g, '').length < 7) {
      setError('Please enter a valid contact number.');
      return;
    }

    setError('');
    const orderCode = `FG-${Math.floor(1000 + Math.random() * 9000)}`;
    const messageLines = [
      `Hello ${RESTAURANT_INFO.name}! I'd like to place an order (${orderCode}):`,
      `• Dish: ${selectedDish.name}`,
      `• Quantity: ${quantity}`,
      `• Order Type: ${orderType}`,
      `• Name: ${trimmedName}`,
      `• Contact: ${trimmedPhone}`,
      notes.trim() ? `• Notes: ${notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    setConfirmation({
      orderCode,
      dishName: selectedDish.name,
      quantity,
      customerName: trimmedName,
      contactNumber: trimmedPhone,
      orderType,
      notes: notes.trim(),
      whatsappUrl: buildWhatsAppUrl(messageLines),
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141210]/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF6F0] text-[#181615] rounded-2xl shadow-2xl border border-[#181615]/15 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#181615] text-[#FAF6F0]">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#EA580C] fill-[#EA580C]" aria-hidden="true" />
            <h2 id="order-modal-title" className="font-display text-lg font-bold">
              Order From {RESTAURANT_INFO.shortName}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close order modal"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#FAF6F0]/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmation ? (
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <CheckCircle2
                className="w-12 h-12 text-emerald-700 mx-auto mb-3"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold tracking-wide text-[#991B1B] tabular-nums">
                Order Reference {confirmation.orderCode}
              </p>
              <h3 className="font-display text-2xl font-bold text-[#181615] mt-1">
                Order Ready to Confirm!
              </h3>
              <p className="text-sm text-[#5C534E] mt-1">
                Send your prepared order straight to our kitchen via WhatsApp for quick confirmation
                and pricing.
              </p>
            </div>

            <div className="bg-[#F3ECE2] rounded-xl p-4 border border-[#181615]/10 space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-[#5C534E]">Dish</span>
                <span className="font-semibold text-[#181615]">{confirmation.dishName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C534E]">Quantity</span>
                <span className="font-semibold tabular-nums text-[#181615]">
                  {confirmation.quantity}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C534E]">Service</span>
                <span className="font-semibold text-[#181615]">{confirmation.orderType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C534E]">Customer</span>
                <span className="font-semibold text-[#181615]">{confirmation.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C534E]">Contact Number</span>
                <span className="font-semibold tabular-nums text-[#181615]">
                  {confirmation.contactNumber}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={confirmation.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-base font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>Send Order on WhatsApp</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setConfirmation(null)}
                className="w-full px-4 py-2.5 text-sm font-semibold text-[#181615] hover:bg-[#F3ECE2] rounded-xl transition-colors cursor-pointer"
              >
                Place Another Order
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-6 space-y-5">
            {/* Selected Dish Preview */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-[#F3ECE2] border border-[#181615]/10">
              <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-[#24211F]">
                <FoodImage
                  src={selectedDish.image}
                  alt={selectedDish.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#991B1B]">{selectedDish.category}</p>
                <p className="font-display font-bold text-[#181615] truncate">
                  {selectedDish.name}
                </p>
                <p className="text-xs font-semibold text-[#5C534E]">{selectedDish.priceLabel}</p>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="p-3 rounded-xl bg-[#991B1B]/10 border border-[#991B1B]/25 text-sm font-medium text-[#991B1B]"
              >
                {error}
              </div>
            )}

            {/* Dish Selector & Quantity Stepper */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-7">
                <label
                  htmlFor="order-dish"
                  className="block text-sm font-semibold text-[#181615] mb-1.5"
                >
                  Select Dish
                </label>
                <select
                  id="order-dish"
                  value={selectedDishId}
                  onChange={(e) => setSelectedDishId(e.target.value)}
                  className="w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#181615] bg-white border border-[#181615]/15 rounded-xl focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20"
                >
                  {MENU_ITEMS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-5">
                <span className="block text-sm font-semibold text-[#181615] mb-1.5">Quantity</span>
                <div className="flex items-center justify-between px-2 min-h-[44px] bg-white border border-[#181615]/15 rounded-xl">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-[#181615] hover:bg-[#F3ECE2] transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-semibold tabular-nums text-base">{quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                    className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-[#181615] hover:bg-[#F3ECE2] transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pickup or Delivery Toggle */}
            <div>
              <span className="block text-sm font-semibold text-[#181615] mb-1.5">Order Type</span>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#F3ECE2] rounded-xl border border-[#181615]/10">
                {(['Pickup', 'Delivery'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setOrderType(type)}
                    className={`py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      orderType === type
                        ? 'bg-[#181615] text-[#FAF6F0]'
                        : 'text-[#5C534E] hover:text-[#181615]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Name & Contact Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="order-name"
                  className="block text-sm font-semibold text-[#181615] mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="order-name"
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Maria Santos"
                  className="w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#181615] bg-white border border-[#181615]/15 rounded-xl placeholder:text-[#8A7F78] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="order-contact"
                  className="block text-sm font-semibold text-[#181615] mb-1.5"
                >
                  Contact Number
                </label>
                <input
                  id="order-contact"
                  type="tel"
                  required
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="+63 917 000 0000"
                  className="w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#181615] bg-white border border-[#181615]/15 rounded-xl placeholder:text-[#8A7F78] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="order-notes"
                className="block text-sm font-semibold text-[#181615] mb-1.5"
              >
                Delivery Address or Notes (Optional)
              </label>
              <input
                id="order-notes"
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Extra calamansi, pickup at 6:00 PM..."
                className="w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#181615] bg-white border border-[#181615]/15 rounded-xl placeholder:text-[#8A7F78] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-base font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] rounded-xl transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F0]"
            >
              <span>Confirm &amp; Order via WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
