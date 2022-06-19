<template>
  <header class="main-head">
    <div class="hamburger">
      <label for="checkbox" @click="open" class="label">
        <el-icon><Fold /></el-icon> </label
      ><input type="checkbox" name="checkbox" value="" id="checkbox" />
    </div>
    <div class="menu-right">
      <div>i11</div>
    </div>
  </header>
</template>

<script setup lang='ts'>
import { useStore } from '../../../../store'
import {onMounted} from 'vue'
const store = useStore()
function open(event:any){
  console.log(event)
  const test = store.getters.getOpen;
  store.commit("SET_OPEN",!test)
}
</script>

<style lang='scss' scoped>
.menu-right{
  margin-left:auto;
}
.hamburger{
  .label{
    display:flex;
    place-items:center;
  }
}

</style>

