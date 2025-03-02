<template>
  <div class="space-y-3 sm:space-y-4 my-4 sm:my-6">
    <div v-for="(item, index) in items" :key="index" class="flex items-start">
      <i class="pi pi-star-fill text-purple-400 mr-2 sm:mr-3 mt-1"></i>
      <span class="text-sm sm:text-base">{{ item }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script> 