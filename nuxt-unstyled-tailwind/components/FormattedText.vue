<template>
  <component :is="tag" v-html="processedText" :class="className"></component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: 'div'
  },
  className: {
    type: String,
    default: ''
  },
  highlightColor: {
    type: String,
    default: 'primary'
  }
});

// Обработка текста с поддержкой иконок
const processedText = computed(() => {
  if (!props.text) return '';
  
  // Заменяем шаблоны иконок на HTML с иконками PrimeVue
  // Пример: [icon:pi-home] -> <i class="pi pi-home"></i>
  let processed = props.text.replace(/\[icon:([\w-]+)\]/g, '<i class="pi pi-$1"></i>');
  
  return processed;
});
</script>

<style scoped lang="postcss">
:deep(span) {
  @apply font-extrabold text-primary-400;
}

:deep(span.highlight) {
  @apply text-primary-500;
}

:deep(span.ios) {
  @apply text-blue-500;
}

:deep(span.android) {
  @apply text-green-500;
}

:deep(i.pi) {
  @apply inline-block align-middle mx-1;
}

:deep(.icon-small i.pi) {
  @apply text-sm;
}

:deep(.icon-large i.pi) {
  @apply text-xl;
}
</style> 