import createClient from "@/storeClient";

const client = createClient();

class ProductDataService {
  index(): Promise<never> {
    return client.products.list();
  }
  get(id: string): Promise<never> {
    return client.products.retrieve(id);
  }
}

export default new ProductDataService();
