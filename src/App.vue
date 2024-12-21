<script setup>
import { RouterView } from 'vue-router';
import HeaderView from './components/HeaderView.vue';
</script>

<template>
  <div class="my-8">
    <HeaderView />
    <RouterView />
  </div>
</template>
