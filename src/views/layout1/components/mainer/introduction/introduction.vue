<template>
  <div>
    {{props.item.introduction}}
  </div>
</template>

<script setup lang='ts'>
import {defineProps} from 'vue'
const props = defineProps({
  item :{
  type:Object,
  default:{},
  }
});
</script>

<style scoped>

</style>

