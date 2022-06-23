<template>
  <div class="point one">
    <div>基本介绍</div>
      <span class="graph">
        {{ props.item.introduction }}
      </span>
  </div>
  <div class="point two">
    <div>成品优势</div>
    <div>
      ...
    </div>
  </div>
  <div class="point tree">
    <div>应用场景</div>
    <div>
      ...
    </div>
  </div>
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
.point {
  display: grid;
  padding:10px 10px 10px 0;
  font-size: 0.56rem;
  font-weight: normal;
  grid-template-columns: 1fr 11fr;
  color: #666666;
  background: white;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #E6E6E6;
  min-height:2rem;
  .graph{
    overflow:hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}
.one {
}
</style>

