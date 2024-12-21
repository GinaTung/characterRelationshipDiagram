<script setup>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';

</script>

<template>
  <Button aria-label="Manage Relationships" style="position: absolute; top: 23%; left: 5px" unstyled class="btn btn2">
    <i class="pi pi-search"></i>
    <span>查詢人物關係圖資訊</span>
  </Button>
  <div class="mt-2 mb-8 mx-16">
    <HeaderView />
    <RouterView />
  </div>
  <FooterView />
  <Button aria-label="Manage Relationships" style="position: absolute; top: 23%; right: 5px" unstyled class="btn">
    <span>管理人物關係</span>
    <i class="pi pi-share-alt"></i>
  </Button>
  <Button aria-label="Manage Relationships" style="position: absolute; top: 30%; right: 5px" unstyled class="btn">
    <span>管理人物節點</span>
    <i class="pi pi-user"></i>
  </Button>
  <Button aria-label="Manage Relationships" style="position: absolute; top: 37%; right: 5px" unstyled class="btn">
    <span>管理整體關係圖</span>
    <i class="pi pi-folder"></i>
  </Button>
</template>
<style>
/* Floating Button Styles */
.btn {
  position: relative;
  color: var(--p-slate-950);
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  padding: 13px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 1001;
}

.btn:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  background: var(--p-surface-0);
  border-radius: 28px;
  transition: all 0.3s ease;
  z-index: 0;
}
.btn2:before {
  left: 0;
}
.btn i {
  position: relative;
  z-index: 1;
}

.btn span {
  position: relative;
  opacity: 0;
  right: 4px;
  stroke: var(--p-surface-0);
  stroke-width: 1;
  transform: translateX(0);
  transition: all 0.5s ease;
}
.btn2 span {
  right: 0px;
  left: 4px;
  transform: translateX(100);
}
.btn:hover:before {
  width: 100%;
  background: var(--p-slate-950);
}

.btn:hover span {
  opacity: 1;
  transform: translateX(0);
}

.btn:hover,
.btn:focus {
  color: var(--p-surface-0);
}

.btn:active {
  transform: scale(0.96);
}
</style>
