import createClient from "@/storeClient";

const client = createClient();

class CartDataService {
  create(): Promise<never> {
    return client.carts.create();
  }
  get(id: string): Promise<never> {
    return client.carts.retrieve(id);
  }
}

export default new CartDataService();
