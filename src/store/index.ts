/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import Vuex from "vuex";

// Services
import { ProductDataService } from "@/services";
import { ProductDto } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {},
    product: {},
  },
  mutations: {
    setValue(state: any, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const { data } = await ProductDataService.index();
      if (data) {
        const prod: ProductDto = data;
        commit("setValue", { key: "products", value: prod.products });
      }
      return data;
    },
    async getProduct({ commit }, id: string) {
      const { data }: any = await ProductDataService.get(id);
      commit("setValue", { key: "product", value: data.product });
      return data;
    },
  },
  modules: {},
});
