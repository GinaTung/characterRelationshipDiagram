<template>
  <div class="card">
    <Menubar>
      <template #start>
        <h1 class="text-3xl">故事人物關係圖</h1>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        </div>
      </template>
    </Menubar>
  </div>
</template>
