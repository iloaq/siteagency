<template>
  <article class="container mx-auto px-4 py-8">
    <!-- Хлебные крошки с PrimeVue -->
    <Breadcrumb :model="breadcrumbItems" :home="breadcrumbHome" class="mb-6" />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Основной контент -->
      <div v-if="post" class="lg:col-span-8">
        <!-- Заголовок -->
        <h1 class="text-3xl md:text-4xl font-heading text-surface-800 mb-4">
          «{{ post.title }}»
        </h1>
        
        <!-- Подзаголовок -->
        <p class="text-surface-600 mb-6">{{ post.description }}</p>
        
        <!-- Мета-информация -->
        <div class="flex items-center gap-4 text-surface-500 mb-6">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-sm">{{ formatDate(post.meta?.date) }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm">Время прочтения: {{ post.meta?.readingTime || '2 минуты' }}</span>
          </div>
        </div>
  
        <!-- Изображение -->
        <img 
          :src="post.meta?.image" 
          :alt="post.title"
          class="w-full rounded-xl mb-8 aspect-video object-cover bg-transparent"
        >
  
        <!-- Контент -->
        <ContentRenderer :value="post" class="prose prose-2xl max-w-none text-1xl leading-1 text-surface-700 blog-content" />
      </div>
      
      <!-- Сайдбар -->
      <div class="lg:col-span-4">
        <div class="sticky top-8">
          <!-- Блок "Подпишитесь" -->
          <div class="mb-6">
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 class="text-xl font-heading">Подпишитесь</h3>
            </div>
            
            <!-- Социальные сети -->
            <div class="space-y-3">
              <div class="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div>
                    <h4 class="font-medium text-pink-600">Наш Instagram</h4>
                    <p class="text-sm text-surface-500">Развлекательный и полезный контент</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  <div>
                    <h4 class="font-medium text-purple-600">Telegram-канал</h4>
                    <p class="text-sm text-surface-500">Самые свежие новости о нас</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Индикатор загрузки -->
      <div v-if="!post" class="lg:col-span-12">
        <div class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
// Определяем тип для блог-поста
interface BlogPost {
  title: string;
  description?: string;
  date: string;
  author: string;
  image: string;
  readingTime?: string;
  [key: string]: any;
}

const route = useRoute();
const { locale } = useI18n();

// Используем строковый ключ
const { data: post } = await useAsyncData(`blog-${route.params.slug}-${locale.value}`, async () => {
  try {
    // @ts-ignore - игнорируем ошибку типизации
    const result = await queryCollection('blog').path(`/${locale.value}/blog/${route.params.slug}`).first();
    return result as unknown as BlogPost;
  } catch (error) {
    console.error('Ошибка при загрузке блога:', error);
    return null;
  }
});

// Настройка хлебных крошек PrimeVue
const breadcrumbHome = {
  icon: 'pi pi-home',
  to: '/'
};

const breadcrumbItems = computed(() => [
  {
    label: 'Блог',
    to: '/blog'
  },
  {
    label: post.value?.title || 'Загрузка...',
    disabled: true
  }
]);

// Обновляем данные при изменении локали
watch(locale, async () => {
  await refreshNuxtData(`blog-${route.params.slug}-${locale.value}`);
});

function formatDate(date: string | undefined) {
  if (!date) return '';
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
</script>

  