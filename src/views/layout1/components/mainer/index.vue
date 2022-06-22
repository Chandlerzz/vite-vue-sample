<template>
  <div class="container">
    <div class="description"> 
      <item></item>
    </div>
    <div class="picture"> 
      <carousel></carousel>
    </div>
    <div class="introduction">
      <introduction></introduction>
    </div>
  </div>
</template>

<script setup lang='ts'>
import item from './item.vue'
import carousel from './carousel.vue'
import introduction from './introduction/index.vue'
</script>

<style lang='scss' scoped>
.container{
  display:grid; 
  padding:1rem  1rem 0 1rem;
}

@media screen and (min-width: 1000px) {
  .container{
    display:grid; 
    gap:1rem 5rem;
    padding:3rem 5rem 0 5rem;
    height:calc( 100vh - 3rem );
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 2fr 3fr;
    grid-template-areas:
      "description picture"
      "introduction introduction";
  }
  .description{
    grid-area:description;
  }
  .picture{
    grid-area:picture;
  }
  .introduction{
    grid-area:introduction;
  }
}
</style>

