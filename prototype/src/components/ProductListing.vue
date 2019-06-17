<template>
  <router-link
    :to="{ name: 'product', params: { id: product.index } }"
    class="product"
  >
    <div class="product-image">
      <img :src="productImage" alt="Product image" />
    </div>
    <div class="product-flags">
      <div class="sale-flag" v-if="product.isSale">Sale</div>
      <div class="exclusive-flag" v-if="product.isExclusive">Exclusive</div>
    </div>
    <div class="product-info">
      <div class="product-name" :title="product.productName">
        {{ product.productName }}
      </div>
      <div class="product-price">{{ product.price }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductListing",
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
.product
  text-align left
  padding .5rem
  display flex
  flex-direction column
  text-decoration none
  color black

  &:hover
    background-color silver
    cursor pointer

  .product-image
    text-align center
    img
      max-width 100%

  .product-flags
    flex-grow 1

    .sale-flag,
    .exclusive-flag
      padding 10px 20px
      color white
      background red
      display inline-block
    .exclusive-flag
      background green

  .product-info
    display flex
    justify-content space-between
    align-items flex-end
    max-width 100%
    margin-top 1rem
    margin-bottom 1rem

    .product-name
      font-weight bold
      overflow-x hidden
      text-overflow ellipsis
      white-space nowrap

    .product-price
      font-weight bold
      font-size 1.5rem
</style>
