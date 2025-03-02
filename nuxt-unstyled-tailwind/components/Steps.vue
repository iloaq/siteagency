<template>
  <div class="my-6">
    <Steps :model="formattedSteps" />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

const formattedSteps = computed(() => {
  return props.items.map(step => ({
    label: step.title,
    icon: step.icon || 'pi pi-check'
  }));
});
</script> 