/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// Services
import { CartDataService, ProductDataService } from "@/services";
import { LineItemsDto, ProductDto } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {},
    product: {},
    cart: {},
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
    async createCart({ commit }) {
      const { data }: any = await CartDataService.create();
      commit("setValue", { key: "cart", value: data.cart });
      return data;
    },
    async getCart({ commit }, id: string) {
      const { data }: any = await CartDataService.get(id);
      commit("setValue", { key: "cart", value: data.cart });
      return data;
    },
    async addToCart({ commit, state }, payload: LineItemsDto) {
      const { data }: any = await CartDataService.add(state.cart.id, payload);
      commit("setValue", { key: "cart", value: data.cart });
      return data;
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
