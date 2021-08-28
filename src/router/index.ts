import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import store from "@/store";
import { NetworkErrorDto } from "@/types";

Vue.use(VueRouter);

const { state } = store;

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products/:id",
    name: "SingleProduct",
    component: () =>
      import(
        /* webpackChunkName: "single-product" */ "../views/product/[id].vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (Object.keys(state.cart).length) {
    await store
      .dispatch("getCart", state.cart.id)
      .catch((err: NetworkErrorDto) => {
        console.log(err);
      });
  } else {
    await store.dispatch("createCart").catch((err: NetworkErrorDto) => {
      console.log(err);
    });
  }
  next();
});
export default router;
