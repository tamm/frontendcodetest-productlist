<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>Outline of this prototype:</p>
    <ul>
      <li>Built with <a href="vuejs.org">VueJS</a></li>
      <li>
        Data is fetched from https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3
      </li>
      <li>The main view has a responsive grid layout using flexbox</li>
      <li>
        There is a dropdown to filter data by size
        <ul>
          <li>
            I am using vue-router to pass filterSize as a prop, enabling
            deeplinking
          </li>
          <li>Changing the filter changes the route</li>
        </ul>
      </li>
      <li>
        There is a filler element in the product list to avoid showing an empty
        space at the end of a row
      </li>
      <li>
        If you click a product you see a full product page including which sizes
        it has
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
h1
  text-align center
</style>
