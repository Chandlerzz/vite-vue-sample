<script setup lang='ts'>
  import {computed} from 'vue'
  import {useStore} from "../../../../store"
  const store = useStore();
  const content = computed(() =>{
    return store.getters.getItemById;
  })
</script>


<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in content.imgUrl" :key="item">
      <img :src="'https://object.risen.com/risen-industries-apps/images/carousel/'+content.name+'/'+item" justify="center" alt=""/>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img{
  width:110%;
  height:110%;
  object-fit:cover;
}
</style>
