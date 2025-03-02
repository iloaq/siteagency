<template>
    <section class="bg-surface-0 py-8 sm:py-12 md:py-16 lg:py-24" id="pricing">
        <div class="container mx-auto px-4 sm:px-6">
            <!-- Заголовок секции (всегда виден) -->
            <div class="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <i class="pi pi-calculator text-xl sm:text-2xl lg:text-3xl text-primary-400"></i>
                <h2 class="font-bold text-xl sm:text-2xl lg:text-3xl text-surface-900">
                    Онлайн <span class="text-primary-400">калькулятор</span>
                </h2>
            </div>

            <!-- Начальный контент -->
            <div v-if="!showStepper">
                <!-- Основной контент -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 bg-surface-50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl">
                    <!-- Левая колонка -->
                    <div class="space-y-3 sm:space-y-4 md:space-y-6">
                        <!-- Категории -->
                        <div class="flex flex-wrap gap-2 sm:gap-3">
                            <Button 
                                v-for="category in categories" 
                                :key="category.id"
                                :label="category.name" 
                                :icon="category.icon"
                                :class="['p-button-rounded text-xs sm:text-sm', 
                                         selectedCategory === category.id ? 'p-button-primary' : 'p-button-outlined']"
                                @click="selectedCategory = category.id" />
                        </div>

                        <!-- Преимущества -->
                        <div class="space-y-2 sm:space-y-3 md:space-y-4">
                            <div v-for="benefit in benefits" :key="benefit.text" 
                                 class="flex items-center gap-2 sm:gap-3">
                                <i :class="benefit.icon" class="text-primary-400 text-sm sm:text-base md:text-lg"></i>
                                <p class="text-surface-600 text-sm sm:text-base md:text-lg">{{ benefit.text }}</p>
                            </div>
                        </div>

                        <!-- Кнопка -->
                        <Button 
                            label="Рассчитать стоимость" 
                            icon="pi pi-calculator"
                            class="p-button-primary w-full md:w-auto py-2 sm:py-2.5 text-xs sm:text-sm md:text-base"
                            @click="showStepper = true" />
                    </div>

                    <!-- Правая колонка с анимацией -->
                    <div class="relative flex items-center justify-center mt-4 lg:mt-0">
                        <Vue3Lottie
                            :animation-data="calculatorAnimation"
                            :height="isMobile ? 200 : isTablet ? 250 : 350"
                            :width="isMobile ? 200 : isTablet ? 250 : 350"
                            :loop="true"
                            :auto-play="true"
                        />
                    </div>
                </div>
            </div>

            <!-- Степпер с формами -->
            <div v-else class="bg-surface-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 relative">
                <Button 
                    icon="pi pi-times"
                    class="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 p-button-rounded p-button-text"
                    @click="showStepper = false" />
                    
                <Stepper v-model:value="currentStep" :linear="true">
                    <!-- Содержимое степпера из предыдущего кода -->
                </Stepper>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'

const showStepper = ref(false)
const selectedCategory = ref('it')
const calculatorAnimation = ref(null)
const currentStep = ref(0)
const windowWidth = ref(0)

const isMobile = computed(() => windowWidth.value < 640) // sm
const isTablet = computed(() => windowWidth.value >= 640 && windowWidth.value < 1024) // sm to lg

const categories = ref([
    { id: 'it', name: 'IT', icon: 'pi pi-desktop' },
    { id: 'marketing', name: 'Marketing', icon: 'pi pi-chart-line' }
])

const benefits = ref([
    { icon: 'pi pi-clock', text: 'Быстрый расчет стоимости без ожидания' },
    { icon: 'pi pi-check-circle', text: 'Точная предварительная оценка проекта' },
    { icon: 'pi pi-shield', text: 'Конфиденциальность ваших данных' }
])

// Загрузка анимации и определение размера окна
onMounted(async () => {
    calculatorAnimation.value = await import('@/assets/animations/calculator.json')
    
    // Определение размера окна
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth
    })
})

// Очистка слушателя событий
onUnmounted(() => {
    window.removeEventListener('resize', () => {})
})
</script>
