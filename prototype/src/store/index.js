import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { products } from "./module.products";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: process.env.VUE_APP_NAME,
  storage: localStorage,
});

let store = false;

// This slightly more complex pattern allows for possible async rehydration
// Example use case: IndexedDb with localForage
export const createStore = async () => {
  if (!store) {
    store = new Vuex.Store({
      modules: {
        products,
      },
      plugins: [vuexPersist.plugin],
    });
  }

  return store;
};
