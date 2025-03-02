<template>
  <PageHeader
      title="Наш <span class='text-primary-500'>блог</span>"
      subtitle="Делимся опытом, новостями и полезными материалами"
    ></PageHeader>
  <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
    <!-- Заголовок и описание -->
    <div class="flex flex-col items-center mb-12 sm:mb-16">
      <div class="flex items-center gap-3 mb-4">
        <i class="pi pi-file-edit text-primary-400 text-xl sm:text-2xl"></i>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-surface-800">Новости и статьи</h1>
      </div>
      <p class="text-center text-surface-600 max-w-2xl text-sm sm:text-base">
        Мы регулярно делимся полезными материалами и новостями
      </p>
      
      <!-- Социальные сети -->
      <div class="flex items-center gap-4 mt-6">
        <p class="text-surface-600 text-sm">Подпишитесь на наши социальные сети</p>
        <div class="flex gap-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
             class="flex items-center justify-center w-8 h-8 rounded-full bg-surface-50 hover:bg-primary-50 text-surface-600 hover:text-primary-400 transition-colors">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" 
             class="flex items-center justify-center w-8 h-8 rounded-full bg-surface-50 hover:bg-primary-50 text-surface-600 hover:text-primary-400 transition-colors">
            <i class="pi pi-send"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Основной контент -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Список статей -->
      <div class="lg:col-span-3">
        <div class="flex items-center gap-3 mb-6">
          <i class="pi pi-list text-primary-400"></i>
          <h2 class="text-xl sm:text-2xl font-heading font-semibold text-surface-800">
            {{ selectedCategory ? `Категория: ${selectedCategory}` : 'Все записи' }}
          </h2>
        </div>
        
        <div v-if="posts && posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <BlogCard v-for="post in displayedPosts" :key="post._path || post.id" :post="post" />
        </div>
        
        <div v-else-if="loading" class="flex justify-center py-12">
          <i class="pi pi-spin pi-spinner text-4xl text-primary-400"></i>
        </div>
        
        <div v-else class="bg-surface-50 rounded-xl p-8 text-center">
          <i class="pi pi-inbox text-4xl text-surface-400 mb-4"></i>
          <p class="text-surface-600">В данной категории пока нет записей. Пожалуйста, выберите другую категорию.</p>
        </div>
        
        <!-- Пагинация -->
        <div v-if="filteredPosts.length > itemsPerPage" class="mt-8 flex justify-center">
          <Paginator 
            v-model:first="first"
            :rows="itemsPerPage" 
            :totalRecords="filteredPosts.length" 
            :rowsPerPageOptions="[6, 12, 24]"
            @page="onPageChange"
          />
        </div>
      </div>
      
      <!-- Боковая панель -->
      <div class="lg:col-span-1">
        <div class="bg-surface-50 rounded-xl p-5 sm:p-6">
          <!-- Категории -->
          <div class="mb-8">
            <div class="flex items-center gap-2 mb-4">
              <i class="pi pi-tags text-primary-400"></i>
              <h3 class="text-lg font-heading font-semibold text-surface-800">Категории</h3>
            </div>
            
            <div class="flex flex-col gap-2">
              <button 
                @click="setCategory(null)" 
                class="py-2 px-4 text-left rounded-lg text-sm transition-colors"
                :class="selectedCategory === null ? 'bg-primary-100 text-primary-600 hover:bg-primary-200' : 'bg-surface-100 text-surface-700 hover:bg-surface-200'"
              >
                Все записи
              </button>
              <button 
                v-for="category in categories" 
                :key="category"
                @click="setCategory(category)" 
                class="py-2 px-4 text-left rounded-lg text-sm transition-colors"
                :class="selectedCategory === category ? 'bg-primary-100 text-primary-600 hover:bg-primary-200' : 'bg-surface-100 text-surface-700 hover:bg-surface-200'"
              >
                {{ category }}
              </button>
            </div>
          </div>
          
          <!-- Подписка -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <i class="pi pi-bell text-primary-400"></i>
              <h3 class="text-lg font-heading font-semibold text-surface-800">Подпишитесь</h3>
            </div>
            
            <div class="flex flex-col gap-4">
              <p class="text-sm text-surface-600">Следите за нашими обновлениями в социальных сетях</p>
              
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 class="flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:opacity-90 transition-opacity">
                <i class="pi pi-instagram"></i>
                <span>Наш Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import PageHeader from '@/components/PageHeader.vue';
// Состояние загрузки
const loading = ref(true);
const posts = ref([]);
const error = ref(null);

// Состояние для фильтрации и пагинации
const selectedCategory = ref(null);
const first = ref(0);
const itemsPerPage = ref(6);

// Загрузка постов из Content
onMounted(async () => {
  try {
    // Пытаемся загрузить посты из Content
    const contentPosts = await queryContent(`${locale.value}/blog/`)
      .find();
    
    if (contentPosts && contentPosts.length > 0) {
      posts.value = contentPosts;
    } else {
      // Если постов нет, используем демо-данные
      posts.value = getDemoPosts();
    }
  } catch (err) {
    console.log(posts.value);
    console.error('Ошибка при загрузке постов:', err);
    error.value = err;
    // Используем демо-данные в случае ошибки
    posts.value = getDemoPosts();
  } finally {
    loading.value = false;
  }
});



// Функция для получения демо-постов
function getDemoPosts() {
  return [
    {
      id: 1,
      title: 'Тренды цифрового маркетинга в 2023 году',
      slug: 'trends-digital-marketing',
      description: 'Обзор ключевых трендов в цифровом маркетинге, которые будут актуальны в 2023 году. Узнайте, как оставаться впереди конкурентов.',
      date: '2023-05-15',
      image: 'https://placehold.co/600x338/8A63D2/FFFFFF?text=Маркетинг',
      category: 'Маркетинг'
    },
    {
      id: 2,
      title: 'Кейс-стади: успешные цифровые кампании',
      slug: 'case-studies-successful-digital-campaigns',
      description: 'Анализ успешных цифровых кампаний и стратегий, которые привели к значительному росту бизнеса наших клиентов.',
      date: '2023-04-22',
      image: 'https://placehold.co/600x338/8A63D2/FFFFFF?text=Кейсы',
      category: 'Бизнес'
    },
    {
      id: 3,
      title: 'Автоматизация маркетинга: инструменты и стратегии',
      slug: 'automation-marketing-tools-strategies',
      description: 'Обзор лучших инструментов и стратегий для автоматизации маркетинговых процессов и повышения эффективности.',
      date: '2023-03-10',
      image: 'https://placehold.co/600x338/8A63D2/FFFFFF?text=Автоматизация',
      category: 'Автоматизация'
    },
    {
      id: 4,
      title: 'Как разработать эффективную SEO-стратегию',
      slug: 'effective-seo-strategy',
      description: 'Пошаговое руководство по разработке SEO-стратегии, которая поможет вашему сайту занять высокие позиции в поисковой выдаче.',
      date: '2023-02-18',
      image: 'https://placehold.co/600x338/8A63D2/FFFFFF?text=SEO',
      category: 'SEO'
    },
    {
      id: 5,
      title: 'Мобильная разработка: тренды и технологии',
      slug: 'mobile-development-trends',
      description: 'Обзор последних трендов и технологий в мобильной разработке, которые помогут создать конкурентоспособное приложение.',
      date: '2023-01-25',
      image: 'https://placehold.co/600x338/8A63D2/FFFFFF?text=Разработка',
      category: 'Разработка'
    },
    {
      id: 6,
      title: 'Интеграция CRM-систем: преимущества и вызовы',
      slug: 'crm-integration-benefits',
      description: 'Анализ преимуществ и вызовов при интеграции CRM-систем в бизнес-процессы компании.',
      date: '2022-12-12',
      image: 'https://placehold.co/600x338/8A63D2/FFFFFF?text=CRM',
      category: 'Бизнес'
    }
  ];
}

// Получаем уникальные категории из постов
const categories = computed(() => {
  if (!posts.value || posts.value.length === 0) return [];
  const uniqueCategories = new Set(posts.value.map(post => post.category).filter(Boolean));
  return Array.from(uniqueCategories).sort();
});

// Фильтрация постов по категории
const filteredPosts = computed(() => {
  if (!selectedCategory.value) {
    return posts.value;
  }
  return posts.value.filter(post => post.category === selectedCategory.value);
});

// Отображаемые посты с учетом пагинации
const displayedPosts = computed(() => {
  const start = first.value;
  const end = start + itemsPerPage.value;
  return filteredPosts.value.slice(start, end);
});

// Функция для установки категории
const setCategory = (category) => {
  selectedCategory.value = category;
  first.value = 0; // Сбрасываем пагинацию при смене категории
};

// Обработчик изменения страницы
const onPageChange = (event) => {
  first.value = event.first;
  itemsPerPage.value = event.rows;
};

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

// Метаданные страницы
useHead({
  title: 'Блог | SKYBRIC',
  meta: [
    { name: 'description', content: 'Полезные материалы и новости от команды SKYBRIC' }
  ]
});

const { t } = useI18n()
</script>