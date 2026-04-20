export interface Product {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
  category?: string;
  dimensions?: string;
  materials?: string;
  year?: string;
  story?: string;
  features?: string[];
}

const createSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const RAW_PRODUCTS: Omit<Product, 'slug'>[] = [
  {
    id: 1,
    title: "Divine Ganesha",
    imageUrl: "/assets/images/ganesh/g1.jpeg",
    description: "Exquisite hand-carved Ganesha in pure Makrana marble, capturing the essence of wisdom and prosperity.",
    category: "Ganesha",
    dimensions: "24 in (H) x 12 in (W)",
    materials: "Makrana Marble",
    year: "2025",
    story: "Inspired by Rajasthan's living temple traditions, this piece moves from rough hewing to meditative refinement.",
    features: ["Hand-carved by senior artisans", "Premium marble finish", "Suited for modern interiors"]
  },
  {
    id: 2,
    title: "Ganesha Blessing",
    imageUrl: "/assets/images/ganesh/g2.jpeg",
    description: "A joyful Ganesha carving with raised trunk, designed to invite success and remove obstacles.",
    category: "Ganesha",
    dimensions: "20 in (H) x 14 in (W)",
    materials: "White Marble",
    year: "2025",
    story: "Celebrating the auspicious arrival of blessings through detailed craftsmanship.",
    features: ["Blessing pose", "Detailed carving", "Ideal for home puja"]
  },
  {
    id: 3,
    title: "Ganesha Guardian",
    imageUrl: "/assets/images/ganesh/g3.jpeg",
    description: "A warm seated Ganesha icon with serene features, crafted to bring protection and harmony.",
    category: "Ganesha",
    dimensions: "22 in (H) x 13 in (W)",
    materials: "Makrana Marble",
    year: "2025",
    story: "Designed as a guardian presence for living spaces, with intricate jewelry and peaceful expression.",
    features: ["Protective symbolism", "Fine detailing", "Smooth finish"]
  },
  {
    id: 4,
    title: "Ganesha Harmony",
    imageUrl: "/assets/images/ganesh/g4.jpeg",
    description: "A harmonious Ganesha carving with textured floral detailing, created for spiritual balance.",
    category: "Ganesha",
    dimensions: "26 in (H) x 15 in (W)",
    materials: "White Marble",
    year: "2024",
    story: "A sculptural study in calmness, meant to inspire a tranquil atmosphere in devotional spaces.",
    features: ["Floral motifs", "Calm expression", "Premium polish"]
  },
  {
    id: 5,
    title: "Ganesha Prosperity",
    imageUrl: "/assets/images/ganesh/g5.jpeg",
    description: "A beautifully balanced Ganesha form symbolizing prosperity, growth, and new beginnings.",
    category: "Ganesha",
    dimensions: "24 in (H) x 14 in (W)",
    materials: "Makrana Marble",
    year: "2025",
    story: "Crafted to represent abundance, this piece blends traditional iconography with contemporary finish.",
    features: ["Prosperity icon", "Detailed carving", "Versatile placement"]
  },
  {
    id: 6,
    title: "Ganesha Joy",
    imageUrl: "/assets/images/ganesh/g6.jpeg",
    description: "An expressive Ganesha sculpture with joyful features, designed to uplift the home altar.",
    category: "Ganesha",
    dimensions: "23 in (H) x 13 in (W)",
    materials: "White Marble",
    year: "2024",
    story: "This lively Ganesha celebrates auspicious beginnings with a bright, warm presence.",
    features: ["Uplifting presence", "Fine texture", "Hand-finished details"]
  },
  {
    id: 7,
    title: "Ganesha Serenity",
    imageUrl: "/assets/images/ganesh/g7.jpeg",
    description: "A serene Ganesha figure sculpted with soft contours and quiet divinity.",
    category: "Ganesha",
    dimensions: "25 in (H) x 14 in (W)",
    materials: "Makrana Marble",
    year: "2025",
    story: "Designed for contemplative corners, this piece brings a gentle calm to any sacred space.",
    features: ["Soft finish", "Elegant posture", "Sacred detailing"]
  },
  {
    id: 8,
    title: "Radha Krishna",
    imageUrl: "/assets/images/radha-krishna/rk1.jpeg",
    description: "A divine representation of eternal love, carved in pristine white marble with delicate gold leaf work.",
    category: "Radha Krishna",
    dimensions: "36 in (H) x 24 in (W)",
    materials: "White Makrana Marble",
    year: "2024",
    story: "Capturing the divine romance of Radha and Krishna through fluid lines and serene expressions.",
    features: ["Gold leaf detailing", "Hand-painted accents", "Polished to perfection"]
  },
  {
    id: 9,
    title: "Radha Krishna Couple",
    imageUrl: "/assets/images/radha-krishna/rk2.jpeg",
    description: "An intimate Radha Krishna composition carved to evoke devotion and love.",
    category: "Radha Krishna",
    dimensions: "28 in (H) x 18 in (W)",
    materials: "White Marble",
    year: "2024",
    story: "Designed to honor divine romance with graceful features and flowing forms.",
    features: ["Serene expressions", "Elegant drapery", "Gold accent details"]
  },
  {
    id: 10,
    title: "Krishna Melody",
    imageUrl: "/assets/images/radha-krishna/rk3.jpeg",
    description: "A poetic Krishna sculpture celebrating music, devotion, and divine play.",
    category: "Radha Krishna",
    dimensions: "30 in (H) x 20 in (W)",
    materials: "White Marble",
    year: "2025",
    story: "A tribute to the flute-bearing Lord, this piece balances movement with classical grace.",
    features: ["Musical posture", "Fine garments", "Radiant presence"]
  },
  {
    id: 11,
    title: "Krishna Play",
    imageUrl: "/assets/images/radha-krishna/rk4.jpeg",
    description: "A playful Krishna icon with expressive details, designed to bring joy and color.",
    category: "Radha Krishna",
    dimensions: "26 in (H) x 16 in (W)",
    materials: "White Marble",
    year: "2024",
    story: "Blending youthful charm with traditional form, this piece celebrates divine pastimes.",
    features: ["Playful energy", "Graceful carving", "Fine finish"]
  },
  {
    id: 12,
    title: "Radha Krishna Devotion",
    imageUrl: "/assets/images/radha-krishna/rk5.jpeg",
    description: "A devotional Radha Krishna pair carved with deep reverence and refined detail.",
    category: "Radha Krishna",
    dimensions: "32 in (H) x 22 in (W)",
    materials: "White Marble",
    year: "2024",
    story: "This sculptural duo is designed to inspire heartfelt prayer and calm reflection.",
    features: ["Devotional pose", "Intricate ornament", "Soft finish"]
  },
  {
    id: 13,
    title: "Radha Krishna Elegance",
    imageUrl: "/assets/images/radha-krishna/rk6.jpeg",
    description: "An elegant Radha Krishna sculpture featuring delicate lines and serene grace.",
    category: "Radha Krishna",
    dimensions: "34 in (H) x 24 in (W)",
    materials: "White Marble",
    year: "2025",
    story: "Created for refined devotional spaces, this piece highlights divine beauty.",
    features: ["Elegant form", "Layered drapery", "Polished surface"]
  },
  {
    id: 14,
    title: "Radha Krishna Celebration",
    imageUrl: "/assets/images/radha-krishna/rk7.jpeg",
    description: "A celebratory depiction of Radha and Krishna embodying joy and spiritual bliss.",
    category: "Radha Krishna",
    dimensions: "30 in (H) x 20 in (W)",
    materials: "White Marble",
    year: "2025",
    story: "Designed to evoke the festive spirit of devotion, this sculpture brings warmth to any altar.",
    features: ["Joyful expression", "Flowing textures", "Fine finishing"]
  },
  {
    id: 15,
    title: "Shiva Lingam",
    imageUrl: "/assets/images/shiva/m1.jpeg",
    description: "Abstract representation of Lord Shiva, carved from sacred Narmada stone with a polished finish.",
    category: "Shiva",
    dimensions: "12 in (H) x 10 in (W)",
    materials: "Narmada Stone",
    year: "2024",
    story: "A minimalist yet powerful symbol of the infinite, following traditional proportions.",
    features: ["Natural stone texture", "Smooth finish", "Ideal for home altars"]
  },
  {
    id: 16,
    title: "Krishna Divine",
    imageUrl: "/assets/images/krishna/krishna.png",
    description: "A striking Krishna portrait celebrating devotion, music, and spiritual beauty.",
    category: "Krishna",
    dimensions: "28 in (H) x 18 in (W)",
    materials: "White Marble",
    year: "2025",
    story: "A standalone Krishna piece created for devotional spaces and artistic display.",
    features: ["Musical icon", "Expressive details", "Refined polish"]
  },
  {
    id: 17,
    title: "Ram Darbar",
    imageUrl: "/assets/images/ram/r1.jpeg",
    description: "Complete set of Lord Ram, Sita, Laxman, and Hanuman, carved with royal elegance.",
    category: "Ram",
    dimensions: "36 in (H) x 48 in (W)",
    materials: "Makrana Marble",
    year: "2025",
    story: "A grand ensemble representing the ideal family and kingdom, perfect for large temple spaces.",
    features: ["Multiple figures", "Royal attire carving", "Unified base"]
  },
  {
    id: 18,
    title: "Ram Lalla",
    imageUrl: "/assets/images/ram/r2.jpeg",
    description: "A dignified depiction of Lord Ram, symbolizing strength, righteousness, and devotion.",
    category: "Ram",
    dimensions: "30 in (H) x 18 in (W)",
    materials: "White Marble",
    year: "2024",
    story: "Carved to emphasize the gentle strength and noble presence of the prince of Ayodhya.",
    features: ["Regal features", "Sacred bow detail", "Fine polish"]
  },
  {
    id: 19,
    title: "Ram Victory",
    imageUrl: "/assets/images/ram/r3.jpeg",
    description: "A bold Ram sculpture celebrating dharma, courage, and righteous leadership.",
    category: "Ram",
    dimensions: "32 in (H) x 20 in (W)",
    materials: "White Marble",
    year: "2025",
    story: "Designed as a commanding devotional piece, this sculpture carries protective grace.",
    features: ["Strong posture", "Detailed armor", "Polished finish"]
  },
  {
    id: 20,
    title: "Durga Maa",
    imageUrl: "/assets/images/durga/d1.jpeg",
    description: "Majestic sculpture of Goddess Durga on her lion, representing the victory of good over evil.",
    category: "Durga",
    dimensions: "40 in (H) x 30 in (W)",
    materials: "White Marble",
    year: "2025",
    story: "An intricate piece showcasing the ten arms of the Goddess, each holding a divine weapon.",
    features: ["Dynamic composition", "Intricate jewelry carving", "Powerful presence"]
  },
  {
    id: 21,
    title: "Durga Shakti",
    imageUrl: "/assets/images/durga/d5.jpeg",
    description: "A powerful Durga portrait conveying strength, protection and divine courage.",
    category: "Durga",
    dimensions: "32 in (H) x 22 in (W)",
    materials: "White Marble",
    year: "2025",
    story: "Showcasing the energy of the Goddess in a compact yet majestic sculptural form.",
    features: ["Bold expression", "Detailed armor", "Dynamic presence"]
  },
  {
    id: 22,
    title: "Durga Triumph",
    imageUrl: "/assets/images/durga/d6.jpeg",
    description: "A triumphant Durga sculpture celebrating the victory of divine power over darkness.",
    category: "Durga",
    dimensions: "34 in (H) x 24 in (W)",
    materials: "White Marble",
    year: "2025",
    story: "Designed to inspire courage and devotion in any sacred setting.",
    features: ["Victorious pose", "Detailed ornament", "Fine finish"]
  },
  {
    id: 23,
    title: "Saraswati Idol",
    imageUrl: "/assets/images/saraswati/s1.jpeg",
    description: "Elegant carving of Goddess Saraswati with her Veena, symbolizing knowledge and the arts.",
    category: "Saraswati",
    dimensions: "24 in (H) x 16 in (W)",
    materials: "Italian Marble",
    year: "2024",
    story: "Focused on the grace and musicality of the Goddess, with flowing drapery and a serene face.",
    features: ["Delicate Veena details", "Swan companion", "Smooth white finish"]
  },
  {
    id: 24,
    title: "Saraswati Melody",
    imageUrl: "/assets/images/saraswati/s2.jpeg",
    description: "A graceful Saraswati carving with musical attributes, celebrating knowledge and art.",
    category: "Saraswati",
    dimensions: "22 in (H) x 14 in (W)",
    materials: "White Marble",
    year: "2024",
    story: "Designed to bring calm creativity and learning into a devotional space.",
    features: ["Veena details", "Swan companion", "Fine drapery carving"]
  }
];

export const PRODUCTS: Product[] = RAW_PRODUCTS.map((product) => ({
  ...product,
  slug: createSlug(product.title),
}));
