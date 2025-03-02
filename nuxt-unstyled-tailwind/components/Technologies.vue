<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-4 sm:my-6">
    <div v-for="tech in items" :key="tech.name" 
         class="border border-surface-200 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center hover:shadow-md transition-shadow">
      <img :src="tech.image" :alt="tech.name" class="h-16 sm:h-20 mb-3 sm:mb-4" loading="lazy">
      <h4 class="text-lg sm:text-xl font-medium">{{ tech.name }}</h4>
      <p v-if="tech.description" class="text-xs sm:text-sm text-center text-surface-500 mt-2">{{ tech.description }}</p>
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