<template>
  <div>
    <ul ref="root">
        <li @click="navigator" name="introduction">应用介绍</li>
        <li @click="navigator" name="version">版本说明</li>
        <li @click="navigator" name="comments">评介说明</li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import {useStore} from "../../../../../store"
import { nextTick, computed, onMounted, ref,defineEmits } from "vue";
const emit = defineEmits(['selectComponent'])
const root = ref(null);
const store = useStore()
const item = computed(() =>{
  return store.getters.getItemById;
})
onMounted(() => {
  let li: any = root.value;
  li = li.getElementsByTagName("li")[0];
  li.classList.add("active");
});
function navigator(event: any) {
  const li = event.srcElement;
  const name = li.getAttribute('name')
  emit('selectComponent',name)
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
    cursor:pointer;
  }
  .active {
    color: #335fe7;
    padding-bottom: 13px;
    border-bottom: 3px solid #335fe7;
  }
}
</style>

