<template>
    <section class="bg-surface-0 py-10 md:py-20 relative overflow-hidden" ref="section">
        <div class="container  mx-auto px-4">
            <div class="flex flex-col lg:min-h-[calc(60vh)] lg:flex-row items-center gap-8 lg:gap-12 px-[15px] md:px-[30px]">
                <!-- Левая колонка с текстом -->
                <div class="flex-1 space-y-6 md:space-y-8 w-full lg:w-1/2 max-w-full lg:max-w-[420px] text-center lg:text-left">
                    <!-- Бейджи -->
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-between">
                        <span class="inline-flex items-center justify-center gap-2 sm:gap-4 bg-primary-400 bg-opacity-10 text-primary-400 px-[16px] py-[10px] rounded-[100px] text-xs font-medium whitespace-nowrap">
                            <i class="pi pi-clock"></i>
                            {{ $t('hero.experience') }}
                        </span>
                        <span class="inline-flex items-center justify-center gap-2 bg-surface-800 bg-opacity-10 text-surface-800 px-[16px] py-[10px] rounded-[100px] text-xs font-medium whitespace-nowrap">
                            {{ $t('hero.projects') }}
                        </span>
                    </div>

                    <!-- Заголовок -->
                    <h1 class="font-bold text-3xl lg:text-4xl text-surface-800 leading-[110%] md:leading-[100%] tracking-[-0.02em]">
                        {{ $t('hero.title') }}
                    </h1>

                    <!-- Подзаголовок -->
                    <p class="text-1 lg:text-2 text-surface-600 leading-[150%] max-w-[460px] mx-auto lg:mx-0">
                        {{ $t('hero.subtitle') }}
                    </p>

                    <!-- Кнопки -->
                    <div class="flex flex-col sm:flex-col gap-4 justify-center lg:justify-start">
                        <Button 
                            :label="$t('hero.startProject')"
                            fullWidth
                            size="medium"
                            secondary/>
                        <Button 
                            :label="$t('hero.calculateCost')"
                            outlined
                            fullWidth
                            size="medium"
                            icon="pi pi-calculator"
                            iconPos="left" />
                    </div>
                </div>

                <!-- Правая колонка с изображением -->
                <div class="flex-1 relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <!-- Основное изображение -->
                    <img 
                        src="/hero-vr-person.svg" 
                        alt="VR Experience" 
                        class="relative z-10 w-[80%] sm:w-[70%] lg:w-90 max-w-none object-contain"
                    >

                    <!-- Плавающие иконки - видны только на планшете и десктопе -->
                    <div class="hidden sm:flex absolute items-center justify-center top-0 z-10 right-[10%] lg:right-0 bg-surface-0 p-[10px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] border border-[#a4c639]">
                        <i class="pi pi-android text-[#a4c639] text-xl"></i>
                    </div>
                    <div class="hidden sm:flex absolute items-center justify-center top-1/4 z-10 left-[20%] lg:left-1/4 bg-surface-0 p-[10px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] border border-primary-400">
                        <i class="pi pi-globe text-primary-400 text-xl"></i>
                    </div>
                    <div class="hidden sm:flex absolute items-center justify-center bottom-[10%] z-10 right-[15%] lg:right-20 bg-surface-0 p-[10px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] border border-[#C13584]">
                        <i class="pi pi-instagram text-[#C13584] text-xl"></i>
                    </div>
                    <div class="hidden sm:flex absolute items-center justify-center bottom-[5%] z-10 left-[20%] lg:left-1/4 bg-surface-0 p-[10px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] border border-[#C4C4C4]">
                        <i class="pi pi-wrench text-[#C4C4C4] text-xl"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-surface-0 relative overflow-hidden">
        <div class="flex skybrick-marquee" :style="{ backgroundPosition: `${scrollPosition}px` }">
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const section = ref(null)
const scrollPosition = ref(0)

const handleScroll = () => {
    const rect = section.value.getBoundingClientRect()
    scrollPosition.value = rect.top * 0.5 // Множитель 0.5 регулирует скорость движения
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Добавляем плавные переходы для адаптивности */
@media (max-width: 1024px) {
    .container {
        max-width: 100%;
    }
}

/* Оптимизация для маленьких экранов */
@media (max-width: 640px) {
    .pi {
        font-size: 1rem;
    }
}
</style>

