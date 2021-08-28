import Medusa from "@medusajs/medusa-js";

const createClient = (): Medusa =>
  new Medusa({
    baseUrl: process.env.VUE_APP_STORE_API || "http://127.0.0.1:9000",
  });

export default createClient;
