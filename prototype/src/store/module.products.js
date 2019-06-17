import { initialState } from "./defaults";
import { apiRequest } from "@/utils/api";
import { unionBy } from "lodash";

export const products = {
  state: {
    ...initialState.products,
  },
  mutations: {
    updateProducts(state, products) {
      if (products) {
        state.list = unionBy(state.list, products, "index");
      } else {
        state.list = initialState.products.list;
      }
    },
  },
  actions: {
    resetProducts({ commit, dispatch }) {
      commit("updateProducts", false);
      return dispatch("getProducts");
    },
    getProducts({ commit }) {
      return apiRequest({
        // Normally we would have some parameters here, like pagination
      }).then(data => {
        if (data) {
          commit("updateProducts", data);
        }

        return data;
      });
    },
  },
  getters: {
    sizes: state => {
      return state.list
        .reduce((sizes, product) => {
          return sizes.concat(
            product.size.filter(size => !sizes.includes(size)),
          );
        }, [])
        .sort((sizeA, sizeB) => {
          // Sort XS first
          if (sizeA == "XS") {
            return -1;
          }
          // Sort SM first unless comparing to XS
          if (sizeA == "S" && sizeB != "XS") {
            return -1;
          }

          // Sort L last unless comparing to XL
          if (sizeA == "L" && sizeB != "XL") {
            return 1;
          }
          // Sort XL last
          if (sizeA == "XL") {
            return 1;
          }

          return 0;
        });
    },
    productById: state => id => {
      return state.list.find(product => product.index === id);
    },
  },
};
