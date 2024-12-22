<script setup>
import RelationshipMap from './home/RelationshipMap.vue';
import SearchBar from './home/SearchBar.vue';
import RelationshipInfo from './home/RelationshipInfo.vue';
import SideBarView from '../components/SideBarView.vue';
</script>

<template>
  <SearchBar />
  <main >
    <SideBarView />
    <div class="flex gap-5" style="height: calc(100vh - 100px);">
      <RelationshipInfo/>
      <RelationshipMap />
    </div>
  </main>
</template>
