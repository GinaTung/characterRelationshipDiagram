<script setup>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';

</script>

<template>
  <div class="mt-2 mb-8 mx-4">
    <HeaderView />
    <RouterView />
  </div>
  <FooterView />
</template>
