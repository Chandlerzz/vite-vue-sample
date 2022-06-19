<script setup lang="ts">
  import {ref, reactive} from 'vue';
  const a =ref(0)
  const buttons = [
    { type: '', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' },
  ] as const  
</script>
<template>
  <div class="container">
    <div :key="item" v-for=" item in [1,2,3,4,5]">  
       1 
    </div>
</div>
</template>


<style scoped>
.container{
  grid-template-columns:1fr 1fr 1fr;
  gap:2rem;
  display:grid;
}

</style>
