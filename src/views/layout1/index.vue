<script setup lang="ts">
import Header from "./components/header/index.vue";
import Mainer from "./components/mainer/index.vue";
</script>
import { ref, onMounted, reactive } from "vue";

<template>
  <div ref="root" class="wrapper1">
    <Header> </Header>
    <mainer class="content">
    </mainer>
  </div>
</template>

<style lang="scss" scoped>
</style>
