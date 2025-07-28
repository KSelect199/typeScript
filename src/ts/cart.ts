export interface IPurchasable {
  id: number;
  price: number;
}

export class Cart {
  private items: IPurchasable[] = [];

  /**
   * Добавляет товар в корзину
   * @param item - объект с полями id и price
   */
  add(item: IPurchasable): void {
    this.items.push(item);
  }

  /**
   * Возвращает общую стоимость товаров без скидки
   * @returns сумма в рублях
   */
  getTotalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  /**
   * Возвращает стоимость со скидкой
   * @param discount - скидка в процентах (от 0 до 100)
   * @returns сумма в рублях
   */
  getDiscountedPrice(discount: number): number {
    if (typeof discount !== "number" || discount < 0 || discount > 100) {
      throw new Error("Discount must be a number between 0 and 100");
    }

    const total = this.getTotalPrice();
    return total - (total * discount) / 100;
  }

  /**
   * Удаляет товар из корзины по id
   * @param id - уникальный идентификатор товара
   */
  removeItemById(id: number): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Item not found");
    }
    this.items.splice(index, 1);
  }

  /**
   * Возвращает копию массива товаров
   */
  toArray(): IPurchasable[] {
    return [...this.items];
  }
}
