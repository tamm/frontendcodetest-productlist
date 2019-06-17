<template>
  <div class="product-page">
    <ProductSingle :product="product" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductSingle from "@/components/ProductSingle.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  props: ["id"],
  components: {
    ProductSingle,
  },
  created() {
    if (this.products.length < 1) {
      this.getProducts();
    }
  },
  computed: {
    ...mapState({
      products: state => state.products.list,
    }),
    ...mapGetters(["productById"]),
    product() {
      return this.productById(parseInt(this.id));
    },
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>
