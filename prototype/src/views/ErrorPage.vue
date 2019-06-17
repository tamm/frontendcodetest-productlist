<template>
  <div class="error-page">
    <h1>OOOPS!</h1>
    <p>
      The page you were looking for doesn't exist
      <router-link to="/">try going back to the start page.</router-link>
    </p>
  </div>
</template>

<style lang="stylus" scoped>
.error-page
  text-align center
</style>
