<script setup>
import RelationshipMap from './home/RelationshipMap.vue';
import SearchBar from './home/SearchBar.vue';
import RelationshipInfo from './home/RelationshipInfo.vue';
import SideBarView from '../components/SideBarView.vue';
</script>

<template>
  <SearchBar />
  <main >
    <SideBarView class="siderbar-hide" />
    123
    <div class="flex gap-5 flex-wrap lg:flex-nowrap h-[100vh-100px]">
      <RelationshipInfo/>
      <RelationshipMap />
    </div>
  </main>
</template>
<style>
.siderbar-hide {
  display: none !important;
}
@media(min-width: 1024px){
  .siderbar-hide {
  display: flex !important;
}
}
</style>
