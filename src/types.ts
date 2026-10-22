export type Size = "S" | "M" | "L";

export interface Coffee {
  id: string;
  name: string;
  sub: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  image?: string; // e.g. "/images/mocha.jpg" (file in /public/images)
}

export interface CartItem {
  coffee: Coffee;
  size: Size;
  qty: number;
}
