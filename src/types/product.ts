export type ProductSpecs = Record<string, string>;

export type Product = {
  id: string;
  name: string;
  brand: "Apple" | "Samsung" | "Xiaomi" | "Nothing" | string;
  storage: string;
  color: string;
  price: number;
  oldPrice: number;
  stock: number;
  rate: number;
  reviews: number;
  image: string;
  badge: string;
  desc: string;
  specs: ProductSpecs;
};

export type Post = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  date: string;
};

export type CartItem = {
  id: string;
  qty: number;
  size?: string;
};

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipping"
  | "delivered"
  | "cancelled";

export type DemoOrder = {
  id: string;
  createdAt: string;
  status: OrderStatus;
  total: number;
  items: CartItem[];
  customer: {
    name: string;
    phone: string;
    address: string;
  };
};
