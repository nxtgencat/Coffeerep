import type { Coffee } from "@/types";

export const categories = ["All Coffee", "Machiato", "Latte", "Americano", "Cappuccino"];

const text =
  "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foam on top is thick and velvety, making it a perfectly balanced cup.";

export const coffees: Coffee[] = [
  {
    id: "caffe-mocha",
    name: "Caffe Mocha",
    sub: "Deep Foam",
    category: "Latte",
    price: 4.53,
    rating: 4.8,
    reviews: 230,
    description: text,
    image: "/images/caffe-mocha.jpg",
  },
  {
    id: "flat-white",
    name: "Flat White",
    sub: "Espresso",
    category: "Latte",
    price: 3.53,
    rating: 4.8,
    reviews: 180,
    description: text,
    image: "/images/flat-white.jpg",
  },
  {
    id: "latte",
    name: "Latte",
    sub: "With Milk",
    category: "Latte",
    price: 3.99,
    rating: 4.7,
    reviews: 142,
    description: text,
    image: "/images/latte.jpg",
  },
  {
    id: "americano",
    name: "Americano",
    sub: "Black",
    category: "Americano",
    price: 2.99,
    rating: 4.6,
    reviews: 98,
    description: text,
    image: "/images/americano.jpg",
  },
  {
    id: "machiato",
    name: "Macchiato",
    sub: "Espresso Stain",
    category: "Machiato",
    price: 3.29,
    rating: 4.5,
    reviews: 76,
    description: text,
    image: "/images/machiato.jpg",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    sub: "Thick Foam",
    category: "Cappuccino",
    price: 4.19,
    rating: 4.9,
    reviews: 312,
    description: text,
    image: "/images/cappuccino.jpg",
  },
];
