"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { VOUCHER_CODE, VOUCHER_DISCOUNT, getProduct } from "@/data/catalog";
import type { CartItem, DemoOrder } from "@/types/product";

type ShopState = {
  cart: CartItem[];
  wishlist: string[];
  compare: string[];
  voucher: string;
  orders: DemoOrder[];
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  addToCart: (id: string, size?: string) => void;
  setQty: (id: string, amount: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  toggleCompare: (id: string) => void;
  setVoucher: (code: string) => void;
  placeOrder: (customer: DemoOrder["customer"]) => DemoOrder | null;
  updateOrderStatus: (id: string, status: DemoOrder["status"]) => void;
};

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      compare: [],
      voucher: "",
      orders: [],
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),
      addToCart: (id, size) => {
        const cart = [...get().cart];
        const existing = cart.find((x) => x.id === id);
        if (existing) {
          existing.qty += 1;
          if (size) existing.size = size;
        } else {
          cart.push({ id, qty: 1, size });
        }
        set({ cart });
      },
      setQty: (id, amount) => {
        const cart = get()
          .cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + amount } : item,
          )
          .filter((item) => item.qty > 0);
        set({ cart });
      },
      removeFromCart: (id) =>
        set({ cart: get().cart.filter((item) => item.id !== id) }),
      clearCart: () => set({ cart: [], voucher: "" }),
      toggleWishlist: (id) => {
        const wishlist = get().wishlist.includes(id)
          ? get().wishlist.filter((x) => x !== id)
          : [...get().wishlist, id];
        set({ wishlist });
      },
      toggleCompare: (id) => {
        const current = get().compare;
        if (current.includes(id)) {
          set({ compare: current.filter((x) => x !== id) });
          return;
        }
        if (current.length >= 3) return;
        set({ compare: [...current, id] });
      },
      setVoucher: (code) => set({ voucher: code.trim().toUpperCase() }),
      placeOrder: (customer) => {
        const { cart, voucher } = get();
        if (!cart.length) return null;
        const items = cart
          .map((item) => {
            const product = getProduct(item.id);
            return product ? { product, item } : null;
          })
          .filter(Boolean) as { product: NonNullable<ReturnType<typeof getProduct>>; item: CartItem }[];
        const sub = items.reduce((s, x) => s + x.product.price * x.item.qty, 0);
        const discount =
          voucher === VOUCHER_CODE ? VOUCHER_DISCOUNT : 0;
        const total = Math.max(0, sub - discount);
        const order: DemoOrder = {
          id: `DD${Date.now().toString().slice(-8)}`,
          createdAt: new Date().toISOString(),
          status: "pending",
          total,
          items: cart,
          customer,
        };
        set({
          orders: [order, ...get().orders],
          cart: [],
          voucher: "",
        });
        return order;
      },
      updateOrderStatus: (id, status) =>
        set({
          orders: get().orders.map((o) =>
            o.id === id ? { ...o, status } : o,
          ),
        }),
    }),
    {
      name: "datdev-shop",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        compare: state.compare,
        voucher: state.voucher,
        orders: state.orders,
      }),
    },
  ),
);

export function useCartSummary() {
  const cart = useShopStore((s) => s.cart);
  const voucher = useShopStore((s) => s.voucher);
  const items = cart
    .map((item) => {
      const product = getProduct(item.id);
      return product ? { product, item } : null;
    })
    .filter(Boolean) as {
    product: NonNullable<ReturnType<typeof getProduct>>;
    item: CartItem;
  }[];
  const sub = items.reduce((s, x) => s + x.product.price * x.item.qty, 0);
  const discount = voucher === VOUCHER_CODE ? VOUCHER_DISCOUNT : 0;
  const total = Math.max(0, sub - discount);
  const count = items.reduce((s, x) => s + x.item.qty, 0);
  return { items, sub, discount, total, count, voucher };
}
