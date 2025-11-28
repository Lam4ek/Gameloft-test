export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Classic Yellow Rubber Duck",
    description:
      "Soft, safe, and perfect for bath time. Lightweight rubber toy for kids of all ages.",
    image: "/images/product-1.jpg",
    price: 120,
  },
  {
    id: 2,
    title: "Mini Brick Racer Set",
    description:
      "Small racing vehicle with two brick-style figures. Fun, durable, and great for creative play.",
    image: "/images/product-2.jpg",
    price: 60,
  },
  {
    id: 3,
    title: "Hero Duck-Dark Knight Edition",
    description:
      "A fun superhero rubber duck made of safe, flexible material. Perfect for bath time and collectors.",
    image: "/images/product-3.jpg",
    price: 90,
  },
  {
    id: 4,
    title: "Robot Action Pack (5-Piece Set)",
    description:
      "Set of five colorful mini robots. Durable and great for imaginative play and display.",
    image: "/images/product-4.jpg",
    price: 70,
  },
  {
    id: 5,
    title: "Classic Puzzle Cube",
    description:
      "Iconic rotating puzzle that improves focus and logic. Smooth turning and vibrant colors.",
    image: "/images/product-5.jpg",
    price: 59.99,
  },
  {
    id: 6,
    title: "Galaxy Droid Sphere",
    description:
      "A space-themed rolling droid toy inspired by sci-fi classics. Smooth movement and sturdy build.",
    image: "/images/product-6.jpg",
    price: 55.5,
  },
  {
    id: 7,
    title: "WALL-E Inspired Robot Toy",
    description: "WALL-E Inspired Robot Toy",
    image: "/images/product-7.jpg",
    price: 10,
  },
  {
    id: 8,
    title: "Construction Mixer Duo Set",
    description:
      "Two durable mini cement mixer trucks for construction-themed play. Perfect for young builders.",
    image: "/images/product-8.jpg",
    price: 3,
  },
];
