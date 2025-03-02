<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

// Форматирование даты
const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};
</script>

<template>
  <div class="bg-surface-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
    <!-- Изображение -->
    <div class="relative aspect-[16/9] overflow-hidden">
      <img 
        :src="post.image || 'https://placehold.co/600x338/8A63D2/FFFFFF?text=SKYBRIC'" 
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        width="600"
        height="338"
      >
      <!-- Категория -->
      <div class="absolute top-3 left-3 bg-primary-400 text-white text-xs py-1 px-2 rounded-md">
        {{ post.category || 'Новости' }}
      </div>
    </div>
    
    <!-- Контент -->
    <div class="p-4 sm:p-5 flex flex-col flex-grow">
      <!-- Дата -->
      <div class="flex items-center gap-2 text-xs text-surface-500 mb-2">
        <i class="pi pi-calendar"></i>
        <span>{{ formatDate(post.date) }}</span>
      </div>
      
      <!-- Заголовок -->
      <h3 class="text-lg font-heading font-semibold text-surface-800 mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
        {{ post.title }}
      </h3>
      
      <!-- Описание -->
      <p class="text-sm text-surface-600 mb-4 line-clamp-3">
        {{ post.description }}
      </p>
      
      <!-- Кнопка "Читать далее" -->
      <div class="mt-auto">
        <span class="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors">
          Читать далее
          <i class="pi pi-arrow-right text-xs"></i>
        </span>
      </div>
    </div>
  </div>
</template> 