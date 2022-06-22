<template>
  <header class="main-head">
    <div>
      <img :src="test9400" alt=""/>
    </div>
    <div class="menu-right">
      <div class="flex">
        <el-icon class="icon-search"><refresh /></el-icon>
        <span>刷新</span>
      </div>
      <div class="flex relative">
        <el-icon style="width: 1.5rem; height: 1.5rem; font-size: 1.3rem"
          ><BellFilled
        /></el-icon>
        <div class="flex count"><span>8</span></div>
      </div>
      <div class="flex">
        <el-icon><SemiSelect style="transform: rotate(90deg)" /> </el-icon>
      </div>
      <div class="flex">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div class="flex" style="color: white">
        <span> AZU欢迎回来 </span>
        <el-icon><CaretBottom /></el-icon>
      </div>
    </div>
  </header>
</template>

<script setup lang='ts'>
const pngs = import.meta.globEager('/src/assets/images/*.png')
const test9400 = pngs['/src/assets/images/组 9400.png'].default
</script>

<style lang='scss' scoped>
.main-head{
  height: 3rem;
  background: #2B3342;
  box-shadow: 1px 2px 8px 1px rgba(15, 6, 14, 0.13);
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
}
.menu-right {
  margin-left: auto;
  display: flex;
  gap: 0.3rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: white;
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
.relative {
  position: relative;
}
.relative .count {
  top: 5px;
  right: 5px;
  position: absolute;
  width: 14px;
  height: 14px;
  background: #ff0000;
  border-radius: 50px 50px 50px 50px;
  opacity: 1;
  padding: 0 0 0 3px;
  span {
    font-size: 3px;
  }
}
.flex {
  display: flex;
  gap: 0.2rem;
  place-items: center;
}
</style>

