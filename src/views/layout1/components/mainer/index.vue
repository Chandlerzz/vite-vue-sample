<template>
  <div class="container">
    <div class="description"> 
      <item></item>
    </div>
    <div class="picture"> 
      <carousel></carousel>
    </div>
    <div class="introduction">
      <introduction @selectComponent="selectComponent"></introduction>
    </div>
    <div class="introductionDetail">
      <component :is="currentTabComponent" :item="item1"></component>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import {useStore} from "../../../../store"
  import item from './item.vue'
  import carousel from './carousel.vue'
  import introduction from './introduction/index.vue'
  import introductionDetail from "./introduction/introduction.vue"
  import version from "./introduction/version.vue"
  import comments from "./introduction/comments.vue"
  import {shallowRef, nextTick, computed,defineProps, onMounted, ref } from "vue";
  const store = useStore()
  const item1 = computed(() =>{
    return store.getters.getItemById;
  })
  const currentTabComponent = shallowRef(introductionDetail);
  function selectComponent(name:string){
    switch (name) {
      case 'introduction':
       currentTabComponent.value = introductionDetail; 
        break;
      case 'version':
       currentTabComponent.value = version; 
        break;
      case 'comments':
       currentTabComponent.value = comments; 
        break;
    }
  }
</script>

<style lang='scss' scoped>
.container{
  display:grid; 
  padding:1rem  0 0 0;
}

@media screen and (min-width: 1000px) {
  .container{
    display:grid; 
    gap:1rem 5rem;
    padding:3rem 0 0 0;
    height:calc( 100vh - 3rem );
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 8fr 1fr 12fr;
    grid-template-areas:
      "description picture"
      "introduction introduction"
      "introductionDetail introductionDetail";
  }
  .description{
    grid-area:description;
    margin-left:150px;
  }
  .picture{
    grid-area:picture;
    margin-right:100px;
  }
  .introduction{
    grid-area:introduction;
    margin:0 200px;
  }
  .introductionDetail{
    grid-area:introductionDetail;
    background:#F9F9F9;
    padding:2rem 200px 0;
    display:flex;
    flex-flow:column;
    gap:0.5rem;
  }
}
</style>

