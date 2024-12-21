<script setup>
import RelationshipMap from './home/RelationshipMap.vue';
import SearchBar from './home/SearchBar.vue';
import RelationshipInfo from './home/RelationshipInfo.vue';
</script>

<template>
  <SearchBar />
  <main class="flex gap-5">
    <RelationshipInfo/>
    <RelationshipMap />
  </main>
</template>
