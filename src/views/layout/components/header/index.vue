<template>
  <header class="main-head">
    <div class="box">
      <el-icon class="icon-search"><Search /></el-icon>
      <input placeholder="请输入关键字/词" type="text" value="" name="" id="" />
    </div>
    <div class="hamburger">
      <label for="checkbox" @click="open" class="label">
        <el-icon><Fold /></el-icon> </label
      ><input type="checkbox" name="checkbox" value="" id="checkbox" />
    </div>
    <div class="menu-right">
      <div class="flex">
        <el-icon class="icon-search"><refresh /></el-icon>
        <span>刷新</span>
      </div>
      <div class="flex relative">
        <el-icon 
          style="width:1.5rem;height:1.5rem;font-size:1.3rem;"><BellFilled  /></el-icon>
          <div class="flex count"><span>8</span></div>
      </div>
      <div class="flex">
        <el-icon><SemiSelect style="transform: rotate(90deg)" />
        </el-icon>
      </div>
      <div class="flex">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div class="flex" style="color:initial">
        <span> AZU欢迎回来 </span>
        <el-icon><CaretBottom /></el-icon>
      </div>
    </div>
  </header>
</template>

<script setup lang='ts'>
import { useStore } from "../../../../store";
import { onMounted } from "vue";
const store = useStore();
function open(event: any) {
  console.log(event);
  const test = store.getters.getOpen;
  store.commit("SET_OPEN", !test);
}
</script>

<style lang='scss' scoped>
.menu-right {
  margin-left: auto;
  display: flex;
  gap: 0.3rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: #999999;
}
.hamburger {
  .label {
    display: flex;
    place-items: center;
  }
}
input {
  width: 280px;
  height: 38px;
  background: #f5f5f5;
  border-radius: 30px 30px 30px 30px;
  opacity: 1;
  border: 1px solid #d9d9d9;
}
input::-webkit-input-placeholder {
  padding-left: 1rem;
}
input::-moz-placeholder {
  padding-left: 1rem;
}
input:-moz-placeholder {
  padding-left: 1rem;
}
.box {
  width: 200px;
  position: relative;
}
.box .icon-search {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 12px;
  right: -70px;
}
.box .username {
  padding-left: 30px;
  height: 25px;
}
.relative{
  position: relative;
}
.relative .count {
  top:5px;
  right:5px;
  position:absolute;
  width:14px;
  height:14px;
  background: #FF0000;
  border-radius: 50px 50px 50px 50px;
  opacity: 1;
  padding: 0 0 0 3px;
  span{
    font-size:3px;
  }
}
.flex {
  display: flex;
  gap: 0.2rem;
  place-items: center;
}
</style>

