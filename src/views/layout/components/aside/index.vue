<template>
  <aside class="main-aside" :class="open ? 'open' : ''">
    <ul>
      <li><a href="">Nav 4</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </aside>
</template>

<script setup lang='ts'>
import { useStore } from '../../../../store'
import {computed} from 'vue'
const store = useStore()
const open = computed(()=>{
  return store.getters.getOpen
})

</script>

<style scoped>

</style>
