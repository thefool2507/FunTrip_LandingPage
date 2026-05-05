export interface Destination {
  id: string;
  name: string;
  location: string;
  country: string;
  category: string;
  rating: number;
  reviewCount: number;
  priceMin: number;
  priceMax: number;
  currency: string;
  image: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface Review {
  id: string;
  destinationId: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
  destination: string;
  location: string;
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Raja Ampat",
    location: "West Papua",
    country: "Indonesia",
    category: "Beach",
    rating: 4.9,
    reviewCount: 2847,
    priceMin: 800,
    priceMax: 3500,
    currency: "IDR",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    description: "Paradise archipelago with world-class diving, pristine coral reefs, and breathtaking karst islands.",
    tags: ["Diving", "Snorkeling", "Island Hopping"],
    featured: true,
  },
  {
    id: "2",
    name: "Bali",
    location: "Bali",
    country: "Indonesia",
    category: "Cultural",
    rating: 4.8,
    reviewCount: 15432,
    priceMin: 500,
    priceMax: 5000,
    currency: "IDR",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description: "The Island of Gods — spiritual temples, lush rice terraces, vibrant arts scene, and world-class surf.",
    tags: ["Temple", "Surfing", "Wellness"],
    featured: true,
  },
  {
    id: "3",
    name: "Komodo Island",
    location: "East Nusa Tenggara",
    country: "Indonesia",
    category: "Adventure",
    rating: 4.7,
    reviewCount: 3921,
    priceMin: 1200,
    priceMax: 4000,
    currency: "IDR",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Home to ancient Komodo dragons and spectacular pink beaches with crystal-clear turquoise waters.",
    tags: ["Wildlife", "Trekking", "Diving"],
    featured: true,
  },
  {
    id: "4",
    name: "Yogyakarta",
    location: "Java",
    country: "Indonesia",
    category: "Cultural",
    rating: 4.8,
    reviewCount: 8765,
    priceMin: 300,
    priceMax: 1500,
    currency: "IDR",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80",
    description: "The cultural heart of Java — Borobudur temple, royal kraton palace, and vibrant batik traditions.",
    tags: ["Temple", "Culture", "Art"],
    featured: false,
  },
  {
    id: "5",
    name: "Labuan Bajo",
    location: "Flores",
    country: "Indonesia",
    category: "Beach",
    rating: 4.7,
    reviewCount: 4231,
    priceMin: 900,
    priceMax: 3800,
    currency: "IDR",
    image: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=800&q=80",
    description: "Gateway to Komodo National Park with stunning sunsets, liveaboard diving, and pristine nature.",
    tags: ["Diving", "Sunset", "Nature"],
    featured: false,
  },
  {
    id: "6",
    name: "Lombok",
    location: "West Nusa Tenggara",
    country: "Indonesia",
    category: "Beach",
    rating: 4.6,
    reviewCount: 6109,
    priceMin: 600,
    priceMax: 4000,
    currency: "IDR",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
    description: "Pristine beaches, epic surf breaks, and the majestic Mount Rinjani volcano for trekkers.",
    tags: ["Surfing", "Trekking", "Beach"],
    featured: false,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    destinationId: "2",
    author: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    date: "March 2024",
    content: "Bali completely stole my heart! From the sacred Tanah Lot temple at sunset to the incredible rice terraces of Tegalalang — every moment was pure magic. The locals are incredibly warm and the food is absolutely divine.",
    helpful: 234,
    destination: "Bali",
    location: "Bali, Indonesia",
  },
  {
    id: "2",
    destinationId: "1",
    author: "Marco Rossi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    date: "February 2024",
    content: "Raja Ampat is hands down the most beautiful place I've ever dived. The marine biodiversity is absolutely unreal — whale sharks, manta rays, and coral gardens that look like something from a dream. A bucket list destination.",
    helpful: 187,
    destination: "Raja Ampat",
    location: "West Papua, Indonesia",
  },
  {
    id: "3",
    destinationId: "3",
    author: "Ayu Pratiwi",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    date: "January 2024",
    content: "Seeing the Komodo dragons up close was surreal, but the pink beach completely stole the show. The underwater world around Komodo is also spectacular — one of the best diving spots in Asia without a doubt.",
    helpful: 156,
    destination: "Komodo Island",
    location: "Flores, Indonesia",
  },
  {
    id: "4",
    destinationId: "4",
    author: "James Walker",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 4,
    date: "April 2024",
    content: "Yogyakarta is a treasure trove of Javanese culture. Watching sunrise at Borobudur was a spiritual experience unlike any other. The street food scene is amazing and incredibly affordable. Highly recommend!",
    helpful: 143,
    destination: "Yogyakarta",
    location: "Java, Indonesia",
  },
];

export const categories = [
  { name: "Beach", icon: "🏖️", count: 48, color: "from-cyan-400 to-blue-500" },
  { name: "Adventure", icon: "🧗", count: 32, color: "from-orange-400 to-red-500" },
  { name: "Cultural", icon: "🏛️", count: 27, color: "from-purple-400 to-pink-500" },
  { name: "Nature", icon: "🌿", count: 41, color: "from-emerald-400 to-teal-500" },
  { name: "City", icon: "🏙️", count: 19, color: "from-slate-400 to-gray-600" },
  { name: "Mountain", icon: "⛰️", count: 23, color: "from-indigo-400 to-blue-600" },
];
