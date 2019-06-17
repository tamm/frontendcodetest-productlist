<template>
  <div class="home">
    <ProductsList :filterSize="filterSize" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsList from "@/components/ProductsList.vue";

export default {
  name: "home",
  props: ["filterSize"],
  components: {
    ProductsList,
  },
};
</script>
