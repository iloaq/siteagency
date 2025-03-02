<template>
  <section class="relative bg-surface-50 overflow-hidden py-12 md:py-16 lg:py-20 border-b border-surface-200">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <!-- Левая часть с текстом -->
        <div class="w-full md:w-1/2 mb-8 md:mb-0">
          <div class="flex items-center gap-3 mb-2">
            <i class="pi pi-envelope text-primary-500 text-xl"></i>
            <h1 
              class="font-bold text-xl sm:text-2xl lg:text-4xl text-surface-800"
              v-html="title"
            ></h1>
          </div>
          
          <!-- Подзаголовок (если есть) -->
          <p 
            v-if="subtitle" 
            class="text-lg sm:text-xl text-surface-600 mt-4 max-w-xl"
            v-html="subtitle"
          ></p>
          
          <!-- Дополнительный контент через слот -->
          <div class="mt-6">
            <slot></slot>
          </div>
        </div>
        
        <!-- Правая часть с изображением -->
        <div v-if="backgroundImage" class="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            :src="backgroundImage" 
            alt="Header illustration" 
            class="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
    
    <!-- Декоративные элементы -->
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 opacity-20 rounded-bl-full -z-10"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-50 opacity-20 rounded-tr-full -z-10"></div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'pi pi-envelope'
  }
})
</script> 