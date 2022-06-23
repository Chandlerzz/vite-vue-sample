<template>
  <section class="version">
    <div class="point" :key="item" v-for="item in 3">
      <div class="one">
        <div>版本信息</div>
        <div class="right">版本说明</div>
      </div>
      <div>版本号10.3</div>
      <div>发布时间 2021-06-10 10:00:00</div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { defineProps } from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.version{
  display:flex;
  flex-flow:row;
  gap:1rem;
}
.point {
  display:grid ;
  justify-items:start;
  padding: 10px 10px 10px 0;
  font-size: 0.56rem;
  font-weight: normal;
  color: #666666;
  background: white;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #e6e6e6;
  min-height: 2rem;
  .one{
    width:100%;
    display:flex;
  }
  .right{
    color:#4880FF;
    margin-left:auto;
    border-radius: 2px 2px 2px 2px;
    border: 1px solid #4880FF ;
}
}
</style>
