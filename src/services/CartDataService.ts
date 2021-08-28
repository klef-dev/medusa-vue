import createClient from "@/storeClient";
import { LineItemsDto } from "@/types";

const client = createClient();

class CartDataService {
  create(): Promise<never> {
    return client.carts.create();
  }
  get(id: string): Promise<never> {
    return client.carts.retrieve(id);
  }
  add(id: string, payload: LineItemsDto): Promise<never> {
    return client.carts.lineItems.create(id, payload);
  }
  updateQuantity(id: string, payload: LineItemsDto): Promise<never> {
    return client.carts.lineItems.update(id, payload.item_id, {
      quantity: payload.quantity,
    });
  }
  removeFromCart(id: string, item_id: string): Promise<never> {
    return client.carts.lineItems.delete(id, item_id);
  }
}

export default new CartDataService();
