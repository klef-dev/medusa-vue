import Vue from "vue";
import Vue2Filters from "vue2-filters";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";

Vue.config.productionTip = false;

Vue.use(Vue2Filters);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
