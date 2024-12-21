<script setup>
import RelationshipMap from './home/RelationshipMap.vue';
import SearchBar from './home/SearchBar.vue';
import RelationshipInfo from './home/RelationshipInfo.vue';
</script>

<template>
  <SearchBar />
  <main class="mx-10 flex gap-5">
    <RelationshipInfo/>
    <RelationshipMap />
  </main>
</template>
