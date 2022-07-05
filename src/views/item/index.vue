<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useStore } from "../../store";
const store = useStore();
store.dispatch("filterItems", 1);
const itemList = computed(() => {
  return store.getters.getItemByMenuId;
});

function clickDetail(event: any) {
  const id = event.currentTarget.getAttribute("itemId");
  store.dispatch("filterItemById", parseInt(id));
}
const test15688 = "https://object.risen.com/risen-industries-apps/images/路径 15688.png";
const test15654 = "https://object.risen.com/risen-industries-apps/images/路径 15654.png";
</script>
<template>
  <div class="container">
    <div :key="item.id" class="item" v-for="item in itemList">
      <img  class="avatar" :src="'https://object.risen.com/risen-industries-apps/images/logo/'+item.name+'.png'" />
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
            <el-button type="primary">公司官网</el-button>
          </a>
        </div>
        <router-link to="/detail" class="showDetail">
          <div class="showDetail" :itemId="item.id" @click="clickDetail">
            查看详情→
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style  lang='scss' scoped>
.container {
  grid-template-columns: 1fr;
  display: grid;
  .item {
    padding: 20px 20px 0 0;
    margin: 20px 20px 0 15px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 260px;
    background: #ffffff;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    border: 1px solid #eeeeee;
    .avatar {
      display: flex;
      margin: 0 40px;
      width: 40px;
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
        text-decoration:none;
      }
      .avatar {
        margin-left: auto;
      }
    }
  }
  .item:hover{
    box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.08);
    
  }
}
@media screen and (min-width: 1000px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 1500px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
