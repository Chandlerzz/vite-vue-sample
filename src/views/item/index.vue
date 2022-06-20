<script setup lang="ts">
  import {ref, reactive} from 'vue';
  const itemList =[
    {
      id:1,
      name:"阿里云-上云就上阿里云",
      detail:"阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准",
    },
    {
      id:1,
      name:"阿里云-上云就上阿里云",
      detail:"阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准",
    },
    {
      id:1,
      name:"阿里云-上云就上阿里云",
      detail:"阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准",
    },
    {
      id:1,
      name:"阿里云-上云就上阿里云",
      detail:"阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准",
    },
    {
      id:1,
      name:"阿里云-上云就上阿里云",
      detail:"阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准",
    },
    {
      id:1,
      name:"阿里云-上云就上阿里云",
      detail:"阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准",
    },
    {
      id:1,
      name:"阿里云-上云就上阿里云",
      detail:"阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准",
    },
    {
      id:1,
      name:"阿里云-上云就上阿里云",
      detail:"阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准",
    },
  ]
</script>
<template>
  <div class="container">
    <div :key="item" class="item" v-for=" item in itemList">  
      <el-avatar class="avatar"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <div class="item-content">
        <div class="header">
          <span>{{item.name}}</span>
          <el-avatar class="favorite"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
      </div>
    </div>
</div>
</template>


<style  lang='scss' scoped>
.container{
  grid-template-columns:1fr 1fr 1fr;
  display:grid;
  margin:20px 20px;
  background:#FFFFFF;
  box-shadow: 0px 3px 12px 1px rgba(0, 0, 0, 0.06);
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  .item{
    margin-top:20px;
    margin-left:15px;
    display:grid;
    grid-template-columns:1fr 4fr;
    height: 260px;
    background: #FFFFFF;
    box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    border: 1px solid #EEEEEE;
    .avatar{
      display:flex;
      margin:0 auto;
    }
    .item-content{
      display:grid;
      .header{
        display:flex;
        .favorite{
          margin-left:auto
        }
      }
      .avatar{
        margin-left:auto;
      }
    }
  }
}
</style>
