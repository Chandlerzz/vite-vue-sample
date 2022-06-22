<script setup lang="ts">
  import {computed} from 'vue'
  import {useStore} from "../../../../store"
  const pngs = import.meta.globEager('/src/assets/images/*.png')
  const test15688 = pngs["/src/assets/images/路径 15688.png"].default
  const test15654 = pngs["/src/assets/images/路径 15688.png"].default
  const risenLogo = pngs["/src/assets/images/risen-logo.png"].default
  const store = useStore();
  const item = computed(() =>{
    return store.getters.getItemById;
  })
</script>
<template>
  <div class="item">
    <el-avatar class="avatar" :src="risenLogo" />
    <div class="item-content">
      <div class="header">
        <span>{{ item.name }}</span>
        <img class="favorite" :src="test15688" />
      </div>
      <div class="grade">
        <img
          class="pentagram"
          :src="test15654"
          :ley="item"
          v-for="item in [1, 2, 3, 4, 5]"
          alt=""
        />
      </div>
      <div class="description">
        <span>
          {{ item.description }}
        </span>
      </div>
      <div class="link">
        <a :href="item.url" target="_blank">
          <el-button type="primary" >公司官网</el-button>
        </a>
      </div>
      <div class="showDetail">查看详情→</div>
    </div>
  </div>
</template>


<style  lang='scss' scoped>
  .item {
    display: grid;
    grid-template-columns: 1fr 4fr;
    background: #ffffff;
    height:100%;
    .avatar {
      display: flex;
      margin: 0 auto;
    }
    .item-content {
      padding-bottom: 40px;
      height: inherit;
      overflow: hidden;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      .header {
        font-size: 0.77rem;
        display: flex;
        .favorite {
          width: 24px;
          height: 24px;
          margin-left: auto;
        }
      }
      .grade {
        display: flex;
        gap: 4px;
        .pentagram {
          width: 0.8rem;
          height: 0.8rem;
        }
      }
      .description {
        font-size: 0.55rem;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--main-item-color);
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
      .link {
        display: flex;
        a {
          text-decoration: none;
        }
      }
      .showDetail {
        display: flex;
        font-weight: 400;
        color: #4880ff;
        font-size: 0.66rem;
        cursor: pointer;
      }
      .avatar {
        margin-left: auto;
      }
    }
  }
</style>
