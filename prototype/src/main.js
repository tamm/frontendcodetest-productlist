import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "./store";
import "./stylus/main.styl";

Vue.config.productionTip = false;

const init = async () => {
  const store = await createStore();

  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount("#app");
};

init();
