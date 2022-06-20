<template>
  <aside ref="root" class="main-aside" :class="open ? 'open' : ''">
    <div class="aside-header">
        <el-avatar class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
          <div class="content">
            <span>东方日升</span>
            <span class="down">工业互联网平台</span>
          </div>
          </div>
    <ul>
      <router-link
        :to="'/system/item?id='+item.id"
          :key =item.icon 
          v-for="item in navList"
        >
        <li 
          @click="link"
          >
          <div class="decoration">
          </div>
          <div class="nav">
            <img :src="item.icon" alt="" />
            <a >{{item.name}}</a>
          </div>
        </li>
        </router-link>
    </ul>
  </aside>
</template>

<script setup lang='ts'>
import { useStore } from '../../../../store'
import {ref,computed, nextTick,onMounted} from 'vue'
const store = useStore()
const open = computed(()=>{
  return store.getters.getOpen
})
const navList = [
  {
    id:1,
    name:"研发板块",
    icon:"/src/assets/images/组 9394.png",
  },
  {
    id:2,
    name:"制造板块",
    icon:"/src/assets/images/路径 15700.png",
  },
  {
    id:3,
    name:"运营板块",
    icon:"/src/assets/images/组 9395.png",
  },
  {
    id:4,
    name:"采购板块",
    icon:"/src/assets/images/组 9396.png",
  },
  {
    id:5,
    name:"物流板块",
    icon:"/src/assets/images/组 9397.png",
  },
  {
    id:6,
    name:"运维服务",
    icon:"/src/assets/images/组 9398.png",
  },
  {
    id:7,
    name:"信息安全",
    icon:"/src/assets/images/路径 15710.png",
  },
  {
    id:8,
    name:"财务板块",
    icon:"/src/assets/images/路径 15711.png",
  },
    {
    id:9,
    name:"办公板块",
    icon:"/src/assets/images/路径 15712.png",
  },
]
function link(event:any){
  let li:any = event.srcElement
  let flag:boolean = true
  while(flag)
  {
    if( li.tagName === "LI")
    {
      flag = false
    }else{
      li = li.parentElement
    }
  }
  let ul:any = li.parentElement.parentElement
  let activeChildren:any = ul.getElementsByClassName("active")
  for (let child of activeChildren)
  {
    nextTick(()=>{
      child.classList.remove("active")
    })
  }
  const children = li.childNodes
  for (let child of children)
  {
    nextTick(()=>{
      child.classList.add("active")
    })
  }
}
const root = ref(null)
onMounted(() => {
    let li:any = root.value 
    li = li.getElementsByTagName("li")[0]
    const children = li.childNodes
    for (let child of children)
    {
      nextTick(()=>{
        child.classList.add("active")
      })
    }

})

</script>

<style  lang='scss' scoped>
  .main-aside{
    display:flex;
    flex-flow:column;
    color: #FFFFFF;
    place-items:center;
  }
  .aside-header{
    display:flex;
    gap:15px;
    padding:30px;
    place-items:center;
    .avatar{
      width:50px;
      height:50px;
    }
    .content{
      display:flex;
      flex-flow:column;
      font-weight: 800;
      letter-spacing:2px;
      .down{
        font-size:13px;
      letter-spacing:3px;
      }
    }
    
  }
  ul{
    display:flex;
    flex-flow:column;
    width:100%;
    li{
      list-style:none;
      display:grid;
      height:56px;
      grid-template-columns:1fr 50fr;
      gap:15px;
      cursor:pointer;
      div{
        border-radius: 4px 4px 4px 4px;
        display:flex;
        place-items:center;
      }
      .nav{
        display:flex;
        gap:10px;
        margin-right:30px;
        padding-left:5px;
        font-size: 18px;
        font-weight: normal;
      }
    }

  }
  a{
    color:#FFFFFF;
    text-decoration:none;
  }
  .active{
    background:#4880FF;
  }

</style>
