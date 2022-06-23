<template>
  <h5>评论信息</h5>
  <section class="comments">
    <div class="mark">
      <div class="mark-one">
        <span>评分</span>
        <div class="grade">
          <img
            class="pentagram"
            :src="test15654"
            :key="item"
            v-for="item in 5"
            alt=""
          />
        </div>
        <span>十个评价</span>
      </div>
      <span></span>
      <div class="mark-two">
        <div class="progress" :key="item" v-for="item in 5">
          <span>{{item}}</span>
          <div> </div>
          <span>{{item*20}}.00% </span>
        </div>
      </div>
    </div>
    <div class="comment-detial"></div>
  </section>
</template>

<script setup lang='ts'>
import { defineProps } from "vue";
const pngs = import.meta.globEager("/src/assets/images/*.png");
const test15654 = pngs["/src/assets/images/路径 15654.png"].default;
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<style  lang='scss' scoped>
.comments {
  display: flex;
  font-size:0.56rem;
  .mark {
    display: flex;
    width: 100%;
    > div {
      width: 33%;
    }
    .grade{
      display:flex;
      gap:0.5rem;
      justify-content:center;
      .pentagram{
        width: 0.8rem;
        height: 0.8rem;

      }
    }
    &-one {
      display: grid;
      grid-template-rows:1fr 3fr 2fr;
      align-items:end;
      :first-child{
        justify-self:start;
      }
    }
    &-two {
      display:grid;
      gap:0.3rem;
      .progress{
        display:grid;
        grid-template-columns:10px 6fr 30px;
        gap:0.2rem;
        div{
          background:#89C7FD;
          flex:1;
        }
      }
    }
  }
}
</style>

