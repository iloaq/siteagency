<template>
    <section class="bg-surface-0 py-8 sm:py-12 md:py-16 lg:py-24 relative">
        <div class="container mx-auto px-4">
            <!-- Заголовок секции -->
            <div class="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <i class="pi pi-objects-column text-xl sm:text-2xl text-primary-400"></i>
                <h2 class="font-bold text-xl sm:text-2xl lg:text-3xl text-surface-900">
                    Наши <span class="text-primary-400">услуги</span>
                </h2>
            </div>

            <!-- Подзаголовок -->
            <p class="text-center text-surface-600 text-lg lg:text-xl max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                Комплексные решения для развития вашего бизнеса в цифровом пространстве
            </p>
        </div>

        <!-- Карусель -->
        <div class="relative container mx-auto pb-8 sm:pb-10 md:pb-12 lg:pb-[450px]">
            <div class="relative lg:absolute left-0 right-0 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
                <Carousel 
                    :value="services"
                    :numVisible="3"
                    :numScroll="1"
                    :responsiveOptions="responsiveOptions"
                    :showNavigators="!isMobile"
                    :showIndicators="false"
                    :circular="false"
                    class="[&_.p-carousel-container]:px-0 [&_.p-carousel-items-content]:touch-pan-x [&_.p-carousel-items-content]:cursor-grab active:[&_.p-carousel-items-content]:cursor-grabbing">
                    <template #item="slotProps">
                        <div class="px-2 sm:px-3 md:px-4 h-full">
                            <div class="bg-surface-0 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-surface-200 hover:border-primary-400 h-full flex flex-col transition-all duration-300 shadow-sm hover:shadow-md">
                                <i :class="slotProps.data.icon" 
                                   class="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6" 
                                   :style="{ color: slotProps.data.iconColor }">
                                </i>
                                <h3 class="font-heading text-xl mb-3 sm:mb-4 text-surface-900">
                                    {{ slotProps.data.title }}
                                </h3>
                                <p class="text-surface-600 text-lg mb-6 sm:mb-8 flex-grow leading-relaxed">
                                    {{ slotProps.data.description }}
                                </p>
                                <div class="flex flex-col gap-2 sm:gap-3 mt-auto">
                                    <NuxtLink :to="slotProps.data.link" class="w-full">
                                        <Button 
                                            label="Узнать подробнее" 
                                            class="p-button-primary w-full" 
                                        />
                                    </NuxtLink>
                                    <Button 
                                        label="Рассчитать стоимость" 
                                        class="p-button-outlined w-full"
                                        icon="pi pi-calculator"
                                        iconPos="left" />
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const services = ref([
    {
        icon: 'pi pi-globe',
        iconColor: '#2196F3',
        title: 'Веб-разработка',
        description: 'Создаем стильные и функциональные сайты, интернет-магазины и веб-приложения с учетом последних технологий для максимальной эффективности вашего бизнеса.',
        link: '/services/web'
    },
    {
        icon: 'pi pi-chart-line',
        iconColor: '#E91E63', 
        title: 'Маркетинговая стратегия',
        description: 'Анализируем рынок и конкурентов, создаем эффективный план продвижения, который привлечет больше клиентов и увеличит продажи.',
        link: '/services/marketing'
    },
    {
        icon: 'pi pi-instagram',
        iconColor: '#9C27B0',
        title: 'SMM и таргетированная реклама',
        description: 'Ведём социальные сети, создаем вовлекающий контент и настраиваем точную рекламу для привлечения целевой аудитории.',
        link: '/services/smm-target'
    },
    {
        icon: 'pi pi-search',
        iconColor: '#4CAF50',
        title: 'SEO-продвижение',
        description: 'Оптимизируем сайты для поисковых систем, увеличиваем органический трафик и улучшаем позиции в поисковой выдаче.',
        link: '/services/seo'
    },
    {
        icon: 'pi pi-flag',
        iconColor: '#FF9800',
        title: 'Контекстная реклама',
        description: 'Настраиваем и оптимизируем рекламные кампании в поисковых системах для привлечения заинтересованных клиентов.',
        link: '/services/contextual-advertising'
    },
    {
        icon: 'pi pi-envelope',
        iconColor: '#795548',
        title: 'Email-маркетинг',
        description: 'Разрабатываем эффективные рассылки и автоматические серии писем для увеличения продаж и удержания клиентов.',
        link: '/services/email-marketing'
    },
    {
        icon: 'pi pi-images',
        iconColor: '#607D8B',
        title: 'Контент-маркетинг',
        description: 'Создаем качественный контент всех форматов (текст, фото, видео), который привлекает внимание и конвертирует аудиторию в клиентов.',
        link: '/services/content-marketing'
    },
    {
        icon: 'pi pi-chart-bar',
        iconColor: '#00BCD4',
        title: 'Аналитика и CRO',
        description: 'Анализируем данные, тестируем гипотезы и оптимизируем конверсии для увеличения эффективности маркетинга.',
        link: '/services/analytics-and-cro'
    },
    {
        icon: 'pi pi-mobile',
        iconColor: '#3F51B5',
        title: 'Мобильная разработка',
        description: 'Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android с современным дизайном и функционалом.',
        link: '/services/mobile'
    },
    {
        icon: 'pi pi-cog',
        iconColor: '#FF5722',
        title: 'Интеграция и автоматизация',
        description: 'Внедряем CRM-системы, настраиваем интеграции между сервисами и автоматизируем бизнес-процессы.',
        link: '/services/integration-and-automation'
    },
    {
        icon: 'pi pi-cloud',
        iconColor: '#8BC34A',
        title: 'Облачные технологии',
        description: 'Переносим инфраструктуру в облако, настраиваем DevOps процессы и обеспечиваем стабильную работу сервисов.',
        link: '/services/cloud-technologies'
    },
    {
        icon: 'pi pi-shield',
        iconColor: '#F44336',
        title: 'Кибербезопасность',
        description: 'Защищаем бизнес от кибератак, проводим аудит безопасности и внедряем современные средства защиты данных.',
        link: '/services/cybersecurity'
    },
    {
        icon: 'pi pi-desktop',
        iconColor: '#673AB7',
        title: 'Разработка ПО',
        description: 'Создаем заказное программное обеспечение для автоматизации и оптимизации бизнес-процессов вашей компании.',
        link: '/services/software-development'
    },
    {
        icon: 'pi pi-comments',
        iconColor: '#009688',
        title: 'IT-консалтинг',
        description: 'Предоставляем экспертные консультации по внедрению технологий и помогаем с цифровой трансформацией бизнеса.',
        link: '/services/it-consulting'
    }
])

const responsiveOptions = ref([
    {
        breakpoint: '1536px', // 2xl
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1280px', // xl
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1024px', // lg
        numVisible: 2,
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
])

const isMobile = ref(false)

const checkMobile = () => {
    isMobile.value = window.innerWidth < 768
}

onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})
</script>
