<template>
  <div>
    <ul ref="root">
        <li @click="navigator" name="introduction">应用介绍</li>
        <li @click="navigator" name="version">版本说明</li>
        <li @click="navigator" name="comments">评介说明</li>
    </ul>
    <component :is="currentTabComponent" :item="item"></component>
  </div>
</template>

<script setup lang='ts'>
import {shallowRef, nextTick, computed,defineProps, onMounted, ref } from "vue";
  import {useStore} from "../../../../../store"
import introduction from "./introduction.vue"
import version from "./version.vue"
import comments from "./comments.vue"
const root = ref(null);
const store = useStore()
const item = computed(() =>{
  return store.getters.getItemById;
})
const currentTabComponent = shallowRef(introduction);
onMounted(() => {
  let li: any = root.value;
  li = li.getElementsByTagName("li")[0];
  li.classList.add("active");
});
function navigator(event: any) {
  const li = event.srcElement;
  debugger
  const name = li.getAttribute('name')
  switch (name) {
    case 'introduction':
     currentTabComponent.value = introduction; 
      break;
    case 'version':
     currentTabComponent.value = version; 
      break;
    case 'comments':
     currentTabComponent.value = comments; 
      break;
  }
  const ul = li.parentElement;
  const lis = ul.getElementsByTagName("li");
  for (let item of lis) {
    nextTick(() => {
      item.classList.remove("active");
    });
  }
  nextTick(() => {
    li.classList.add("active");
  });
}
</script>

<style lang='scss' scoped>
ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  li {
    font-size: 0.6rem;
    color: initial;
    border-bottom: none;
  }
  .active {
    color: #335fe7;
    padding-bottom: 13px;
    border-bottom: 3px solid #335fe7;
  }
}
</style>

