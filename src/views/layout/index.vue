<script setup lang="ts">
import Header from "./components/header/index.vue";
import Aside from "./components/aside/index.vue";
import { ref, onMounted, reactive } from "vue";
const open = ref(false);
const root = ref(null);
function open1() {
  open.value = !open.value;
}
onMounted(() => {
  if (document.body.clientWidth >= 700) {
    open.value = false;
  }
});
</script>

<template>
  <div ref="root" class="wrapper">
    <Header> </Header>
    <Aside> </Aside>
    <main class="content">
      <router-view />
    </main>

    <footer class="main-footer"></footer>
  </div>
</template>

<style lang="scss" scoped>
</style>
