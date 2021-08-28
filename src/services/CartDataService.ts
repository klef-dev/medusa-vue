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
}

export default new CartDataService();
