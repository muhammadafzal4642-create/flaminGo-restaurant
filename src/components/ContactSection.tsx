import { useState, type FormEvent } from 'react';
import { CheckCircle2, Clock, Facebook, MapPin, Phone, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurant';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedMsg = message.trim();

    if (!trimmedName || !trimmedPhone || !trimmedMsg) {
      setError('Please fill in your name, phone number, and message before sending.');
      return;
    }

    if (trimmedPhone.replace(/\D/g, '').length < 7) {
      setError('Please enter a valid phone number so we can reach you back.');
      return;
    }

    setError('');
    setSubmittedName(trimmedName);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Restaurant Details */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-wide text-[#991B1B] mb-2">
              Find Us &amp; Get In Touch
            </p>
            <h2
              className="font-display font-bold tracking-tight text-[#181615] leading-[1.15] mb-4"
              style={{
                fontSize: 'clamp(1.85rem, 3vw, 2.75rem)',
                textWrap: 'balance',
              }}
            >
              Visit or Contact Us
            </h2>
            <p className="text-base text-[#5C534E] leading-relaxed mb-8">
              Have a question about bulk family platters, party orders, or daily availability? Reach
              out directly or drop by {RESTAURANT_INFO.name}.
            </p>

            <dl className="divide-y divide-[#181615]/10 border-t border-b border-[#181615]/10">
              <div className="py-4 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-[#5C534E]">
                    Location
                  </dt>
                  <dd className="text-base font-medium text-[#181615] mt-0.5">
                    {RESTAURANT_INFO.address}
                  </dd>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-[#5C534E]">Phone</dt>
                  <dd className="text-base font-medium tabular-nums text-[#181615] mt-0.5">
                    <a
                      href={`tel:+${RESTAURANT_INFO.whatsappDigits}`}
                      className="hover:text-[#EA580C] transition-colors"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <Facebook className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-[#5C534E]">
                    Facebook
                  </dt>
                  <dd className="text-base font-medium text-[#181615] mt-0.5">
                    <a
                      href={RESTAURANT_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#181615]/30 underline-offset-4 hover:text-[#EA580C] hover:decoration-[#EA580C] transition-colors"
                    >
                      {RESTAURANT_INFO.facebookLabel}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-[#5C534E]">
                    Opening Hours
                  </dt>
                  <dd className="text-base font-medium tabular-nums text-[#181615] mt-0.5">
                    {RESTAURANT_INFO.openingHours}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#F3ECE2] border border-[#181615]/10 rounded-2xl p-6 sm:p-8 lg:p-10">
            <h3 className="font-display text-2xl font-bold text-[#181615] mb-2">
              Send Us a Message
            </h3>
            <p className="text-sm text-[#5C534E] mb-6">
              Planning a family meal or inquiry? Leave your contact details and our team will get
              back to you promptly.
            </p>

            {submittedName ? (
              <div
                role="status"
                className="bg-[#FAF6F0] border border-[#181615]/10 rounded-xl p-6 text-center"
              >
                <CheckCircle2
                  className="w-10 h-10 text-emerald-700 mx-auto mb-3"
                  aria-hidden="true"
                />
                <h4 className="font-display text-xl font-bold text-[#181615] mb-1">
                  Message Received, {submittedName}!
                </h4>
                <p className="text-sm text-[#5C534E] mb-5">
                  Thank you for reaching out to {RESTAURANT_INFO.name}. We will contact you shortly
                  at the phone number you provided.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedName(null)}
                  className="px-4 py-2 text-sm font-semibold text-[#181615] bg-[#F3ECE2] hover:bg-[#E7DDD0] rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {error && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-xl bg-[#991B1B]/10 border border-[#991B1B]/25 text-sm font-medium text-[#991B1B]"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[#181615] mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Juan Dela Cruz"
                      className="w-full px-4 py-3 min-h-[44px] text-sm text-[#181615] bg-[#FAF6F0] border border-[#181615]/15 rounded-xl placeholder:text-[#8A7F78] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold text-[#181615] mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+63 917 123 4567"
                      className="w-full px-4 py-3 min-h-[44px] text-sm text-[#181615] bg-[#FAF6F0] border border-[#181615]/15 rounded-xl placeholder:text-[#8A7F78] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-[#181615] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about menu prices, family trays, or pickup times..."
                    className="w-full px-4 py-3 text-sm text-[#181615] bg-[#FAF6F0] border border-[#181615]/15 rounded-xl placeholder:text-[#8A7F78] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3ECE2]"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
