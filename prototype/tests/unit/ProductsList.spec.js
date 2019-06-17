import Vuex from "vuex";
import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import ProductsList from "@/components/ProductsList.vue";
import { products } from "@/store/module.products.js";
import * as staticProducts from "@/assets/products.json";

describe("ProductsList.vue", () => {
  const localVue = createLocalVue();
  let store;
  let actions;

  beforeEach(() => {
    localVue.use(Vuex);
    actions = {
      getProducts: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        products,
      },
      actions,
    });
  });

  it("tries to get products from api", () => {
    const wrapper = mount(ProductsList, {
      store,
      localVue,
      stubs: { RouterLink: RouterLinkStub },
    });

    expect(wrapper.exists()).toBe(true);
    expect(actions.getProducts).toHaveBeenCalled();
  });

  it("renders list of products in store", () => {
    store.commit("updateProducts", staticProducts.default);

    const wrapper = mount(ProductsList, {
      store,
      localVue,
      stubs: { RouterLink: RouterLinkStub },
    });

    expect(wrapper.vm.products).toHaveLength(8);
    expect(wrapper.find(".product-list").exists()).toBe(true);
    expect(wrapper.findAll(".product-list .product")).toHaveLength(9);
  });

  it("renders filter dropdown", () => {
    store.commit("updateProducts", staticProducts.default);

    const wrapper = mount(ProductsList, {
      store,
      localVue,
      stubs: { RouterLink: RouterLinkStub },
    });

    expect(wrapper.vm.sizes).toHaveLength(5);
    expect(wrapper.find(".filters select").exists()).toBe(true);
    expect(wrapper.findAll(".filters select option")).toHaveLength(6);
  });
});
