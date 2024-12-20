<script setup>
import { RouterView } from 'vue-router';
import HeaderView from './components/HeaderView.vue';
</script>

<template>
  <div class="bg-kg-color">
    <HeaderView />
    <RouterView />
  </div>
</template>
