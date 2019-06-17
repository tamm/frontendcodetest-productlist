import { shallowMount } from "@vue/test-utils";
import ProductSingle from "@/components/ProductSingle.vue";
import * as staticProducts from "@/assets/products.json";

describe("ProductSingle.vue", () => {
  it("renders product from prop", () => {
    const staticProduct = staticProducts.default[0];
    const wrapper = shallowMount(ProductSingle, {
      propsData: { product: staticProduct },
    });

    expect(wrapper.vm.product).toHaveProperty("index");

    expect(wrapper.find(".product-name").text()).toBe(
      staticProduct.productName,
    );
    expect(wrapper.find(".product-price").text()).toBe(staticProduct.price);
    expect(wrapper.find(".sale-flag").exists()).toBe(staticProduct.isSale);
    expect(wrapper.find(".exclusive-flag").exists()).toBe(
      staticProduct.isExclusive,
    );
  });
});
