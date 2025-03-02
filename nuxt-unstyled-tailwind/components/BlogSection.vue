<template>
    <section class="bg-surface-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-6">
            <!-- Заголовок секции -->
            <div class="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
                <i class="pi pi-file-edit text-primary-400 text-xl sm:text-2xl"></i>
                <h2 class="font-bold text-xl sm:text-2xl lg:text-3xl text-surface-800">Новости и статьи</h2>
            </div>

            <!-- Подзаголовок -->
            <p class="text-center text-surface-600 text-sm sm:text-base mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                Мы регулярно делимся полезными материалами и новостями
            </p>

            <!-- Сетка статей -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
                <NuxtLink v-for="post in blogPosts" :key="post.id" :to="post.link" 
                    class="group bg-surface-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img :src="post.image" :alt="post.title" class="w-full aspect-[4/3] object-cover">
                    <div class="p-4 sm:p-5 md:p-6">
                        <h3 class="font-bold text-lg lg:text-xl text-surface-800 group-hover:text-primary-400 mb-2 transition-colors duration-200">
                            {{ post.title }}
                        </h3>
                        <p class="text-surface-600 text-base lg:text-xl line-clamp-2">{{ post.description }}</p>
                    </div>
                </NuxtLink>
            </div>

            <!-- Кнопка "Посмотреть все" -->
            <div class="flex justify-center">
                <Button label="Посмотреть все записи" 
                    icon="pi pi-arrow-right" 
                    iconPos="right"
                    class="p-button-outlined py-2 sm:py-2.5 px-4 sm:px-5" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface BlogPost {
    id: number
    title: string
    description: string
    image: string
    link: string
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Тренды digital-маркетинга 2025',
        description: 'Обзор актуальных трендов и прогнозов, которые помогут компаниям адаптироваться к новым условиям рынка.',
        image: '/blog/digital-marketing-trends-2025.jpg',
        link: '/blog/trends-digital-marketing'
    },
    {
        id: 3,
        title: 'Кейс-стади успешных digital-кампаний',
        description: 'Разбор реальных примеров, анализ ошибок и успехов для выработки оптимальных стратегий.',
        image: '/blog/case-studies-successful-digital-campaigns.jpg',
        link: '/blog/case-studies-successful-digital-campaigns'
    },
    {
        id: 4,
        title: 'Автоматизация маркетинга: инструменты и стратегии',
        description: 'Обзор современных инструментов и подходов к автоматизации процессов, которые экономят время и повышают эффективность.',
        image: '/blog/automation-marketing-tools-strategies.jpg',
        link: '/blog/automation-marketing-tools-strategies'
    },
]
</script> 