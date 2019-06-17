<template>
  <div class="product">
    <div class="product-image">
      <img :src="productImage" alt="Product image" />
    </div>
    <div class="product-info">
      <div class="product-name" :title="product.productName">
        {{ product.productName }}
      </div>
      <div class="product-price">{{ product.price }}</div>

      <div class="product-flags">
        <div class="sale-flag" v-if="product.isSale">Sale</div>
        <div class="exclusive-flag" v-if="product.isExclusive">Exclusive</div>
      </div>

      Sizes
      <div class="product-sizes">
        <div class="size" v-for="size in product.size" :key="size">
          {{ size }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSingle",
  props: {
    product: Object,
  },
  computed: {
    productImage() {
      return require("../assets/products/" + this.product.productImage);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "../stylus/variables.styl"
@import "../stylus/mixins.styl"

.product
  text-align left
  display flex
  flex-wrap wrap

  .product-image
    text-align center
    img
      max-width 100%

    flex-basis 100%
    max-width 100%
    +wider-than(sm)
      flex-basis 50%
      max-width 50%

  .product-flags
    flex-grow 1
    margin-bottom .5rem

    .sale-flag,
    .exclusive-flag
      padding 10px 20px
      color white
      background red
      display inline-block
    .exclusive-flag
      background green

  .product-info
    flex-basis 100%
    max-width 100%
    +wider-than(sm)
      flex-basis 50%
      max-width 50%


    .product-name
      font-weight bold
      font-size 2rem
      margin-bottom .5rem

    .product-price
      font-weight bold
      font-size 1.5rem
      margin-bottom .5rem

    .product-sizes
      .size
        display inline-block
        padding 10px 20px
        background silver
        margin-right .5rem
        margin-bottom .5rem
</style>
