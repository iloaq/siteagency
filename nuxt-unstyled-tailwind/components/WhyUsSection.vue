<template>
    <section class="py-8 sm:py-12 md:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-6">
            <!-- Заголовок секции -->
            <div class="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                <h2 class="relative font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-surface-800">
                    Почему мы?
                    <img src="/why-us-icon.svg" alt="Why Us" 
                        class="absolute top-[-5px] right-[-10%] w-5 h-5 sm:w-6 sm:h-6">
                </h2>
            </div>

            <!-- Сетка преимуществ -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-4 sm:gap-6 md:gap-8">
                <!-- Первый ряд -->
                <div class="sm:col-span-1 lg:col-span-3 bg-transparent border border-[#2A2A2A] p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl">
                    <h3 class="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 md:mb-4 text-[#2A2A2A]">Экспертиза и опыт</h3>
                    <p class="text-[#8A8A8A] text-sm sm:text-base leading-relaxed">
                        Наша команда состоит из специалистов с многолетним опытом в digital-маркетинге. 
                        Мы знаем, как эффективно продвигать бизнес в онлайне и достигать ощутимых результатов.
                    </p>
                </div>
                
                <div class="hidden lg:block lg:col-span-2 lg:col-start-4 bg-[#2A2A2A] p-8 rounded-2xl overflow-hidden relative">
                    <img src="/abstract1.svg" alt="abstractfigure" class="absolute top-[-100px] left-[-50px] w-full h-full">
                    <img src="/abstract2.svg" alt="abstractfigure" class="absolute top-[-60px] left-[-25px] w-full h-full">
                </div>
                
                <div class="sm:col-span-1 lg:col-span-4 lg:col-start-6 bg-transparent border border-[#2A2A2A] p-4 sm:p-5 md:p-6 rounded-[12px]">
                    <h3 class="font-semibold text-lg lg:text-xl mb-3 sm:mb-4 text-[#2A2A2A]">Индивидуальный подход</h3>
                    <p class="text-[#8A8A8A] text-base lg:text-lg leading-relaxed">
                        Мы разрабатываем решения, исходя из уникальных целей каждого клиента. 
                        Никаких шаблонов — только персонализированные стратегии и чёткая ориентация на ваш успех.
                    </p>
                </div>

                <!-- Второй ряд -->
                <div class="hidden lg:block lg:col-span-1 lg:row-start-2 bg-[#2A2A2A] p-8 rounded-2xl overflow-hidden relative">
                    <img src="/abstract1.svg" alt="abstractfigure" class="absolute top-[0px] left-[5px] w-full h-full">
                    <img src="/abstract2.svg" alt="abstractfigure" class="absolute top-[20px] left-[25px] w-full h-full">
                </div>
                
                <div class="sm:col-span-1 lg:col-span-3 lg:col-start-2 lg:row-start-2 bg-transparent border border-[#2A2A2A] p-4 sm:p-5 md:p-6 rounded-[12px]">
                    <h3 class="font-semibold text-lg lg:text-xl mb-3 sm:mb-4 text-[#2A2A2A]">Прозрачность работы</h3>
                    <p class="text-[#8A8A8A] text-base lg:text-lg leading-relaxed">
                        Предоставляем детальные отчёты и открытую статистику по всем каналам продвижения. 
                        Вы всегда видите, как распределяется бюджет и какие результаты даёт каждая активность.
                    </p>
                </div>
                
                <div class="hidden lg:block lg:col-span-2 lg:col-start-5 lg:row-start-2 bg-[#2A2A2A] p-8 rounded-2xl overflow-hidden relative">
                    <img src="/abstract1.svg" alt="abstractfigure" class="absolute top-[140px] left-[100px] w-full h-full">
                    <img src="/abstract2.svg" alt="abstractfigure" class="absolute top-[50px] left-[100px] w-full h-full">
                </div>
                
                <div class="sm:col-span-1 lg:col-span-3 lg:col-start-7 lg:row-start-2 bg-transparent border border-[#2A2A2A] p-4 sm:p-5 md:p-6 rounded-[12px]">
                    <h3 class="font-semibold text-lg lg:text-xl mb-3 sm:mb-4 text-[#2A2A2A]">Технологии и инновации</h3>
                    <p class="text-[#8A8A8A] text-base lg:text-lg leading-relaxed">
                        Используем передовые инструменты, автоматизацию и трендовые форматы продвижения. 
                        Это помогает опережать конкурентов и давать вам конкурентное преимущество.
                    </p>
                </div>
            </div>

            <!-- Форма консультации -->
            <div class="mt-6 sm:mt-8 md:mt-12 lg:mt-16 bg-[#2A2A2A] rounded-[12px] p-4 sm:p-5 md:p-6 relative overflow-hidden">
                <div class="relative z-10">
                    <h3 class="font-semibold text-lg lg:text-xl text-white mb-3 sm:mb-4">
                        Получите бесплатную консультацию прямо сейчас
                    </h3>
                    <p class="text-[#8A8A8A] text-base lg:text-lg mb-4 sm:mb-6 md:mb-8">
                        Мы перезвоним вам в течении 2-ух часов
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Dropdown v-model="selectedContact" 
                            secondary
                            :options="contactMethods" 
                            placeholder="Способ связи"
                            optionLabel="label"
                            class="select-secondary w-full sm:w-[180px] md:w-[200px] items-center !border-surface-0 bg-surface-900"
                            :panelClass="'bg-surface-0'">
                            <template #option="slotProps">
                                <div class="flex items-center gap-2 text-surface-800 text-sm sm:text-base">
                                    <i :class="slotProps.option.icon"></i>
                                    <span>{{ slotProps.option.label }}</span>
                                </div>
                            </template>
                            <template #value="slotProps">
                                <div class="flex items-center gap-2 text-surface-0 text-sm sm:text-base" v-if="slotProps.value">
                                    <i :class="slotProps.value.icon"></i>
                                    <span>{{ slotProps.value.label }}</span>
                                </div>
                                <span v-else class="text-sm sm:text-base">Способ связи</span>
                            </template>
                        </Dropdown>

                        <InputText 
                            placeholder="Ваши контактные данные"
                            class="w-full sm:w-[250px] md:w-[300px] p-inputtext-secondary text-sm sm:text-base" 
                        />

                        <Button 
                            label="Отправить" 
                            class="p-button-lg text-sm sm:text-base w-full sm:w-auto" 
                        />
                    </div>

                    <div class="flex items-start sm:items-center gap-2 mt-3 sm:mt-4">
                        <Checkbox v-model="agreed" :binary="true" />
                        <label class="text-[#8A8A8A] text-xs sm:text-sm">
                            Я согласен с условиями пользовательского соглашения и даю согласие на обработку моих персональных данных
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedContact = ref(null)
const agreed = ref(false)
const contactMethods = [
    { label: 'Телефон', value: 'phone', icon: 'pi pi-phone' },
    { label: 'Email', value: 'email', icon: 'pi pi-envelope' },
    { label: 'Telegram', value: 'telegram', icon: 'pi pi-telegram' }
]
</script> 