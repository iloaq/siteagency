<template>
  <div class="container mx-auto px-4 py-8 sm:py-10 md:py-12">
    <div v-if="service">
      <div class="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div class="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full md:w-1/2">
          <!-- Заголовок и основная информация из Markdown -->
          <div class="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
            <i v-if="service.meta?.icon" :class="[service.meta?.icon, service.meta?.color ? `text-${service.meta.color}` : '', 'text-3xl sm:text-3xl md:text-4xl mr-2 sm:mr-3 md:mr-4']"></i>
            <FormattedText 
              :text="service.title" 
              tag="h1" 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-surface-800" 
            />
          </div>
          
          <!-- Описание услуги -->
          <FormattedText 
            :text="service.description" 
            tag="p" 
            className="text-surface-600 text-base sm:text-lg md:text-xl" 
          />
          
          <!-- Кнопки действий -->
          <div class="flex flex-col gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4">
            <Button label="Начать работу" class="p-button-primary " />
            <Button label="Рассчитать стоимость" class="p-button-outlined" 
                    icon="pi pi-calculator" />
          </div>
        </div>
        
        <!-- Изображение услуги, если есть -->
        <img 
          v-if="service.meta?.image && typeof service.meta.image === 'string'" 
          :src="service.meta.image" 
          :alt="service.title"
          class="w-full md:w-1/2 aspect-video object-contain bg-transparent mt-4 md:mt-0"
        >
      </div>
      
      <!-- Секция "Что вы получаете" -->
      <div class="my-10 sm:my-12 md:my-14 lg:my-16">
        <div class="relative max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mx-auto">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold font-heading mb-4 sm:mb-5 md:mb-6 mx-auto text-center text-surface-800">
            <FormattedText 
              :text="safeString(service.meta?.title_poluchaete)" 
              tag="span" 
              className="font-bold font-heading text-surface-800" 
            />
          </h2>
          <img src="/why-us-icon.svg" alt="Why Us" class="absolute top-[-8px] sm:top-[-10px] right-[10%] w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8">
        </div>
        <p class=" mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl text-center text-surface-600">{{ service.meta?.description_poluchaete || 'Мы разрабатываем продукты с нуля, что позволяет реализовать любой функционал, на выходе Вы получите:' }}</p>
        
        <div class="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8">
          <div 
            v-for="(item, index) in service.meta?.poluchaete" 
            :key="index" 
            class="flex items-center justify-start"
          >
            <Avatar 
              icon="pi pi-check" 
              class="mr-2 sm:mr-3 md:mr-4 bg-primary-400 text-surface-0 h-8 w-8 sm:h-10 sm:w-10" 
            />
            <p class="text-base sm:text-lg md:text-xl font-bold text-surface-800">{{ item }}</p>
          </div>
        </div>
      </div>

      <!-- Секция "Этапы работы" -->
      <div class="my-16 sm:my-20 md:my-24 lg:my-32">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold font-heading mb-4 sm:mb-5 md:mb-6 text-center text-surface-800">
          <FormattedText 
            :text="safeString(service.meta?.title_etapy)" 
            tag="span" 
            className="font-bold font-heading text-surface-800" 
          />
        </h2>
        <p class="text-center mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl text-surface-600">{{ service.meta?.description_etapy || 'Мы работаем по удобному и проверенному алгоритму' }}</p>
        
        <div class="hidden md:block">
          <Timeline :value="getStepsFromService(service)" layout="horizontal" align="top">
            <template #content="slotProps">
              <div class="flex flex-col items-start">
                <div class="flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center rounded-full bg-primary-400 mb-2">
                  <i :class="[slotProps.item.icon, 'text-surface-0']"></i>
                </div>
                <p class="font-bold text-left text-base sm:text-lg md:text-xl text-surface-800">{{ slotProps.item.title }}</p>
              </div>
            </template>
          </Timeline>
        </div>
        
        <!-- Мобильная версия этапов для маленьких экранов -->
        <div class="md:hidden">
          <div 
            v-for="(step, index) in getStepsFromService(service)" 
            :key="index"
            class="flex items-center gap-3 mb-4 pb-4 border-b border-surface-200 last:border-b-0"
          >
            <div class="flex w-10 h-10 items-center justify-center rounded-full bg-primary-400 flex-shrink-0">
              <i :class="[step.icon, 'text-surface-0 text-lg']"></i>
            </div>
            <div>
              <p class="font-bold text-base sm:text-lg md:text-xl text-surface-800">{{ step.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Секция "Технологии" -->
      <div class="my-16 sm:my-20 md:my-24 lg:my-32">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold font-heading mb-4 sm:mb-5 md:mb-6 text-center text-surface-800">{{ service.meta?.tech_title || 'Технологии' }}</h2>
        <p class="text-center mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl text-surface-600">{{ service.meta?.tech_description || 'В наших разработках мы используем современные, но надежные и долговечные решения' }}</p>

        <Carousel 
          :value="service.meta?.techs" 
          :numVisible="4"
          :numScroll="1"
          :circular="true"
          :autoplayInterval="3000"
          :responsiveOptions="[
            {
              breakpoint: '1280px', // xl
              numVisible: 3,
              numScroll: 1
            },
            {
              breakpoint: '1024px', // lg
              numVisible: 3,
              numScroll: 1
            },
            {
              breakpoint: '768px', // md
              numVisible: 2,
              numScroll: 1
            },
            {
              breakpoint: '640px', // sm
              numVisible: 1,
              numScroll: 1
            }
          ]"
        >
          <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 text-center py-4 sm:py-5 px-2 sm:px-3">
              <div class="mb-2 sm:mb-3">
                <img v-if="slotProps.data.image"
                  :src="slotProps.data.image" 
                  :alt="slotProps.data.name"
                  class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto object-contain" 
                />
              </div>
              <div>
                <h4 class="mb-1 font-bold text-xl sm:text-2xl lg:text-3xl text-surface-800">{{ slotProps.data.name }}</h4>
                <p class="text-sm sm:text-base text-surface-600">{{ slotProps.data.description }}</p>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
    
    <!-- Индикатор загрузки -->
    <div v-else class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  </div>

  <ContactSection />
</template>

<script setup lang="ts">
// @ts-nocheck
import FormattedText from '@/components/FormattedText.vue';
import ContactSection from '@/components/ContactSection.vue';

const route = useRoute();
const { locale } = useI18n();

// Получаем данные услуги
const { data: service } = await useAsyncData(`services-${route.params.slug}-${locale.value}`, async () => {
  try {
    // Используем queryContent вместо queryCollection
    const result = await queryCollection('services').path(`/${locale.value}/services/${route.params.slug}`).first();
    console.log(result);
    return result;
    
  } catch (error) {
    console.error('Ошибка при загрузке услуги:', error);
    return null;
  }
});

// Обновляем данные при изменении локали
watch(locale, async () => {
  await refreshNuxtData(`services-${route.params.slug}-${locale.value}`);
});

// Функция для получения этапов из данных услуги
function getStepsFromService(service) {
  if (!service || !service.meta?.etapy) return [];
  
  return service.meta?.etapy.map((etap) => ({
    title: etap.title,
    icon: etap.icon || 'pi pi-file-edit'
  }));
}

// Вспомогательная функция для безопасного получения строковых значений
function safeString(value) {
  return typeof value === 'string' ? value : '';
}
</script>


