export interface MenuItem {
  id: string;
  name: string;
  category: 'Street Snacks' | 'Mains & Sharing' | 'Chef Selection';
  description: string;
  priceLabel: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: 'heart' | 'flame' | 'users';
}

/**
 * Editable Restaurant Configuration
 * Update address, phone, WhatsApp number, Facebook URL, and hours before client handoff.
 */
export const RESTAURANT_INFO = {
  name: 'FlaminGo Restaurant',
  shortName: 'FlaminGo',
  tagline: 'Good Food. Great Moments. Filipino Flavor.',
  // Editable placeholder details
  address: '123 Mabuhay Street, Barangay Poblacion (Editable Address)',
  phoneDisplay: '+63 917 000 0000 (Editable Phone)',
  whatsappDigits: '639170000000', // Digits only with country code, no "+" or spaces
  facebookLabel: 'facebook.com/FlaminGoRestaurant',
  facebookUrl: 'https://facebook.com/FlaminGoRestaurant',
  openingHours: 'Monday – Sunday: 10:00 AM – 10:00 PM',
};

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_filipino_feast_1794896332935.jpg',
  alt: 'Authentic Filipino street food spread at FlaminGo Restaurant with palabok, grilled skewers, and crispy bites',
};

export const ABOUT_IMAGE = {
  src: '/src/assets/images/about_filipino_table_1794896333028.jpg',
  alt: 'Friends and family sharing freshly prepared Filipino dishes around a warm wooden table at FlaminGo Restaurant',
};

export const CTA_IMAGE = {
  src: '/src/assets/images/cta_filipino_kitchen_1794896335554.jpg',
  alt: 'Chefs grilling sizzling Filipino street food over glowing charcoal flames at FlaminGo Restaurant',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'taho',
    name: 'Taho',
    category: 'Street Snacks',
    description:
      'Classic Filipino street food made with soft silken tofu, sweet arnibal syrup, and sago pearls.',
    priceLabel: 'Contact for Price',
    image: '/src/assets/images/menu_taho_1794896332719.jpg',
    imageAlt: 'A warm cup of classic Filipino taho layered with silken tofu, sweet arnibal syrup, and sago pearls',
  },
  {
    id: 'plain-rice',
    name: 'Plain Rice',
    category: 'Mains & Sharing',
    description:
      'Freshly cooked, fluffy rice. The perfect partner for your favorite Filipino meals.',
    priceLabel: 'Contact for Price',
    image: '/src/assets/images/menu_plain_rice_1794896334016.jpg',
    imageAlt: 'A ceramic bowl of freshly steamed, fluffy white rice',
  },
  {
    id: 'family-palabok',
    name: 'Family FlaminGo Palabok',
    category: 'Mains & Sharing',
    description:
      'A flavorful Filipino noodle favorite topped with rich palabok sauce and delicious toppings, perfect for sharing with family.',
    priceLabel: 'Contact for Price',
    image: '/src/assets/images/menu_palabok_1794896334213.jpg',
    imageAlt: 'A generous family-size platter of Filipino pancit palabok with shrimp, boiled eggs, and crispy chicharon',
  },
  {
    id: 'takoyaki',
    name: 'Takoyaki',
    category: 'Street Snacks',
    description:
      'Delicious golden Japanese-style street food balls with savory toppings and sauce.',
    priceLabel: 'Contact for Price',
    image: '/src/assets/images/menu_takoyaki_1794896333994.jpg',
    imageAlt: 'Freshly prepared golden takoyaki balls drizzled with savory sauce, mayo, and bonito flakes',
  },
  {
    id: 'flamingo-specials',
    name: 'FlaminGo Specials',
    category: 'Chef Selection',
    description:
      'Our curated signature street food selection — smoky flame-grilled skewers, crispy golden rolls, and house dipping sauces crafted fresh for sharing.',
    priceLabel: 'Contact for Price',
    image: '/src/assets/images/menu_flamingo_specials_1794896336192.jpg',
    imageAlt: 'FlaminGo Specials signature Filipino street food platter with grilled skewers, crispy rolls, and dipping sauces',
    featured: true,
  },
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: 'freshly-prepared',
    title: 'Freshly Prepared Food',
    description:
      'Every cup of taho, noodle tray, and street snack is cooked fresh to order using trusted local ingredients.',
    icon: 'heart',
  },
  {
    id: 'delicious-flavors',
    title: 'Delicious Flavors',
    description:
      'Bold savory sauces, smoky street-grill character, and comforting Filipino classics balanced in every bite.',
    icon: 'flame',
  },
  {
    id: 'family-friends',
    title: 'Perfect for Family & Friends',
    description:
      'Generous sharing platters and crowd-pleasing snacks built for weekend hangouts, celebrations, and everyday cravings.',
    icon: 'users',
  },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${RESTAURANT_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
