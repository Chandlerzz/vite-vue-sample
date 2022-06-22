<template>
  <aside ref="root" class="main-aside" :class="open ? 'open' : ''">
    <div class="aside-header">
          <img src="/src/assets/images/组 9393.png" alt=""/>
          </div>
    <ul>
      <router-link
        to="/home"
        :key =item.icon 
        v-for="item in menu"
        >
        <li 
          @click="link" :menuId="item.id"
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
import {menu} from '../../../../data/menu'
import {applications} from '../../../../data/applications'
debugger
const aa = applications
console.log(aa)
const store = useStore()
const open = computed(()=>{
  return store.getters.getOpen
})
function navigator(){

}
function link(event:any){
  //active item
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
  // update the main content
  const id = event.currentTarget.getAttribute("menuId")
  store.dispatch('filterItems',parseInt(id))
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
    color: var(--aside-color);
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
    color:var(--aside-color);
    text-decoration:none;
  }
  .active{
    background:var(--aside-link-background);
  }

</style>
