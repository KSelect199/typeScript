import { Cart, IPurchasable } from "../cart";

// Заглушка для товара
const item1: IPurchasable = { id: 1, price: 300 };
const item2: IPurchasable = { id: 2, price: 500 };
const item3: IPurchasable = { id: 3, price: 200 };

describe("Cart", () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test("should add items to cart", () => {
    cart.add(item1);
    expect(cart.toArray()).toEqual([item1]);
  });

  test("should calculate total price correctly", () => {
    cart.add(item1);
    cart.add(item2);
    cart.add(item3);
    expect(cart.getTotalPrice()).toBe(1000);
  });

  test("should calculate discounted price correctly", () => {
    cart.add(item1);
    cart.add(item2); // total = 800

    expect(cart.getDiscountedPrice(10)).toBe(720);
    expect(cart.getDiscountedPrice(0)).toBe(800);
    expect(cart.getDiscountedPrice(100)).toBe(0);
  });

  test("should throw error if discount is invalid", () => {
    expect(() => cart.getDiscountedPrice(-1)).toThrow(
      "Discount must be a number between 0 and 100"
    );
    expect(() => cart.getDiscountedPrice(101)).toThrow(
      "Discount must be a number between 0 and 100"
    );
    expect(() => cart.getDiscountedPrice("10" as any)).toThrow(
      "Discount must be a number between 0 and 100"
    );
    expect(() => cart.getDiscountedPrice(null as any)).toThrow(
      "Discount must be a number between 0 and 100"
    );
  });

  test("should remove item by id", () => {
    cart.add(item1);
    cart.add(item2);
    cart.add(item3);

    cart.removeItemById(2);
    expect(cart.toArray()).toEqual([item1, item3]);
  });

  test("should throw error when removing non-existent item", () => {
    expect(() => cart.removeItemById(999)).toThrow("Item not found");
  });

  test("should return a copy of the items array", () => {
    cart.add(item1);
    const arr = cart.toArray();
    arr.push(item2);
    expect(cart.toArray().length).toBe(1);
  });
});
