<script setup>
import { sideBarData } from '@/constants/sideBarData';

const handleSideBarClick = (btnValue) => {
  console.log(btnValue);
  if (btnValue === '查詢人物關係資訊') {
    window.location.href = '/characterRelationshipDiagram/#/ManageRelationshipInfo';
  } else {
    window.location.href = '/characterRelationshipDiagram/';
  }
};
</script>
<template>
  <div class="button-block">
    <Button
      v-for="(button, index) in sideBarData"
      :key="index"
      :aria-label="button.ariaLabel"
      unstyled
      class="btn btn2"
      @click="handleSideBarClick(button.text)"
    >
      <i :class="button.icon"></i>
      <span>{{ button.text }}</span>
    </Button>
  </div>
</template>

<style>
/* 固定區塊樣式 */
.button-block {
  position: fixed;
  top: 25%;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--p-surface-2);
  padding: 20px 0;
  z-index: 1003;
}
.btn {
  position: relative;
  color: var(--p-surface-0);
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  padding: 14px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.5s ease;
  z-index: 1001;
}

.btn:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  background: rgba(255, 126, 99, 0.9);
  border-radius: 28px;
  transition: all 0.5s ease;
  z-index: 0;
}
.btn i {
  position: relative;
  z-index: 1;
  margin-right: 4px;
  transition: all 0.5s ease;
}

.btn span {
  position: relative;
  opacity: 0;
  left: 4px;
   text-align: center;
  stroke: var(--p-surface-0);
  stroke-width: 1;
  transform: translateX(100);
  transition: all 0.6s ease;
}

.btn:hover:before {
  width: 100%;
  background: var(--p-slate-950);
}

.btn:hover span {
  opacity: 1;
  transform: translateX(0);
}

.btn:hover {
  color: var(--p-surface-0);
}

.btn:focus {
  color: var(--p-surface-0);
}

.btn:focus:not(:hover) {
  color: var(--p-surface-0);
}

.btn:focus:not(:hover):before {
  width: 48px;
  background: rgba(255, 126, 99, 0.9);
}

.btn:focus:not(:hover) i {
  color: var(--p-surface-0);
}

.btn:active {
  transform: scale(1.05);
}
</style>
