<template>
  <div class="products">
    <div class="title-bar">
      <h2>Women's tops</h2>

      <div class="filters">
        <select v-model="localFilterSize" placeholder="Filter by size">
          <option :value="undefined" selected>Filter by size</option>
          <option v-for="size in sizes" :key="size" :value="size">{{
            size
          }}</option>
        </select>
      </div>
    </div>

    <div class="product-list">
      <ProductListing
        :product="product"
        v-for="product in filteredProducts"
        :key="product.index"
      />

      <div class="product uneven-products-placeholder">
        <div class="product-image">
          ?
        </div>
        <div class="product-info">
          <div class="product-name">Have you seen our latest sale?</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ProductListing from "@/components/ProductListing.vue";

export default {
  name: "ProductsList",
  props: ["filterSize"],
  data() {
    return {};
  },
  components: {
    ProductListing,
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
    ...mapGetters(["sizes"]),
    filteredProducts() {
      if (this.filterSize) {
        return this.products.filter(product => {
          return product.size.includes(this.filterSize);
        });
      } else {
        return this.products;
      }
    },
    localFilterSize: {
      get() {
        return this.filterSize;
      },
      set(filterSize) {
        this.changeRoute(filterSize);
      },
    },
  },
  methods: {
    ...mapActions(["getProducts"]),
    changeRoute(size) {
      this.$router.push({ name: "home", params: { filterSize: size } });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "../stylus/variables.styl"
@import "../stylus/mixins.styl"

.products
  margin auto
  +wider-than(lg)
    max-width lg

.title-bar
  display flex
  justify-content space-between
  align-items center
  background-color silver
  margin-bottom 1rem
  padding .5rem
  h2
    margin 0

.product-list
  display flex
  flex-wrap wrap
  border-left 1px solid silver
  border-top 1px solid silver
  .product
    flex-basis 100%
    max-width 100%
    box-sizing border-box
    border-right 1px solid silver
    border-bottom 1px solid silver

    +wider-than(xs)
      flex-basis 50%
      max-width 50%

    +wider-than(sm)
      flex-basis 33.33%
      max-width 33.33%

    +wider-than(md)
      flex-basis 25%
      max-width 25%

  .uneven-products-placeholder
    display none
    flex-direction column
    justify-content center
    padding 2rem
    flex-basis auto
    max-width none
    flex-grow 1

    // Show if this is the last item on a row, but not the only item on a row
    +wider-than(xs)
      &:nth-child(2n)
        display flex
    +wider-than(sm)
      &:nth-child(3n)
        display flex
        flex-basis 33.333%
        max-width 33.333%
      &:nth-child(3n - 1)
        display flex
        flex-basis 66.666%
        max-width 66.666%
      &:nth-child(3n + 1)
        display none
    +wider-than(md)
      &:nth-child(4n)
        display flex
        flex-basis 25%
        max-width 25%
      &:nth-child(4n - 1)
        display flex
        flex-basis 50%
        max-width 50%
      &:nth-child(4n - 2)
        display flex
        flex-basis 75%
        max-width 75%
      &:nth-child(4n + 1)
        display none

    .product-image
      font-size 7rem
      font-weight bold
      text-align center
    .product-info
      text-align center
</style>
