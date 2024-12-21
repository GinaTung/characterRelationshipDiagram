<template>
  <div class="sticky top-0" style="z-index: 10001;">
    <Menubar class="mt-3">
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
