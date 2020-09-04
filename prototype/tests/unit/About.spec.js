import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About.vue", () => {
  it("renders a list", () => {
    const wrapper = shallowMount(About);
    expect(wrapper.find("ul").exists()).toBe(true);
  });
});