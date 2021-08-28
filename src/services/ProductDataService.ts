import createClient from "@/storeClient";

const client = createClient();

class ProductDataService {
  index(): Promise<never> {
    return client.products.list();
  }
}

export default new ProductDataService();
