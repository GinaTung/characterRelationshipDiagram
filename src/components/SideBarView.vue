<template>
  <Button
    aria-label="Manage RelationshipInformation"
    style="position: absolute; top: 23%; left: 16px"
    unstyled
    class="btn btn2"
  >
    <i class="pi pi-search"></i>
    <span>查詢人物關係圖資訊</span>
  </Button>
  <Button
    aria-label="Manage Relationships"
    style="position: absolute; top: 30%; left: 16px"
    unstyled
    class="btn btn2"
  >
    <i class="pi pi-share-alt"></i>
    <span>管理人物關係</span>
  </Button>
  <Button
    aria-label="Manage Nodes"
    style="position: absolute; top: 37%; left: 16px"
    unstyled
    class="btn btn2"
  >
    <i class="pi pi-user"></i>
    <span>管理人物節點</span>
  </Button>
  <Button
    aria-label="Manage RelationshipGraph"
    style="position: absolute; top: 44%; left: 16px"
    unstyled
    class="btn btn2"
  >
    <i class="pi pi-folder"></i>
    <span>管理整體關係圖</span>
  </Button>
</template>
<style>
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
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
  z-index: 0;
}
.btn2:before {
  left: 0;
}
.btn i {
  position: relative;
  z-index: 1;
  transition: color 0.5s ease; /* 讓圖標顏色過渡 */
}

.btn span {
  position: relative;
  opacity: 0;
  right: 4px;
  stroke: var(--p-surface-0);
  stroke-width: 1;
  transform: translateX(0);
  transition: all 0.6s ease;
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

.btn:hover {
  color: var(--p-surface-0);
}

.btn:focus {
  color: var(--p-surface-0);
}

.btn:focus:not(:hover) {
  color: var(--p-slate-950); /* 恢復原始文字顏色 */
}

.btn:focus:not(:hover):before {
  width: 48px; /* 恢復原始寬度 */
  background: var(--p-surface-0); /* 恢復原始背景色 */
}

.btn:focus:not(:hover) i {
  color: var(--p-slate-950); /* 恢復圖標顏色 */
}

.btn:active {
  transform: scale(1.05);
}
</style>
