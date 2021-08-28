/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import Vuex from "vuex";

// Services
import { ProductDataService } from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {},
  },
  mutations: {
    setValue(state: any, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const { data } = await ProductDataService.index();
      commit("setValue", { key: "products", value: data });
      return data;
    },
  },
  modules: {},
});
