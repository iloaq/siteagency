<template>
    <section class="bg-surface-0 py-8 sm:py-10 md:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-6">
            <!-- Заголовок секции -->
            <div class="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
                <i class="pi pi-envelope text-primary-400 text-xl sm:text-2xl"></i>
                <h2 class="font-bold text-xl sm:text-2xl lg:text-3xl text-surface-800">Связаться с нами</h2>
            </div>

            <!-- Подзаголовок -->
            <p class="text-center text-surface-600 text-sm sm:text-base mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                Выберете наиболее удобный для Вас методы связи
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                <!-- Левая колонка - Контакты -->
                <div class="space-y-4 sm:space-y-6 md:space-y-8">
                    <h3 class="font-bold text-2xl xl:text-3xl text-surface-800">Контакты</h3>
                    <p class="text-lg xl:text-xl text-surface-600">Можете писать и звонить в любое удобное время</p>

                    <div class="space-y-3 sm:space-y-4">
                        <!-- Контактные блоки -->
                        <a href="tel:+77773365602" class="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-primary-50 transition-colors">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary-400/10 flex items-center justify-center shrink-0">
                                <i class="pi pi-phone text-primary-400 text-sm sm:text-base md:text-lg"></i>
                            </div>
                            <div>
                                <p class="text-surface-500 text-lg xl:text-xl">Номер телефона</p>
                                <p class="text-surface-800 text-lg xl:text-xl">+7 (777) 336-56-02</p>
                            </div>
                        </a>

                        <!-- Email -->
                        <a href="mailto:clients@skybric.com" class="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-primary-50 transition-colors">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary-400/10 flex items-center justify-center shrink-0">
                                <i class="pi pi-envelope text-primary-400 text-sm sm:text-base md:text-lg"></i>
                            </div>
                            <div>
                                <p class="text-surface-500 text-lg xl:text-xl">Электронная почта</p>
                                <p class="text-surface-800 text-lg xl:text-xl">clients@skybric.com</p>
                            </div>
                        </a>

                        <!-- Instagram -->
                        <a href="https://instagram.com/skybric" target="_blank" rel="noopener" class="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-primary-50 transition-colors">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary-400/10 flex items-center justify-center shrink-0">
                                <i class="pi pi-instagram text-primary-400 text-sm sm:text-base md:text-lg"></i>
                            </div>
                            <div>
                                <p class="text-surface-500 text-lg xl:text-xl">Instagram</p>
                                <p class="text-surface-800 text-lg xl:text-xl">@skybric</p>
                            </div>
                        </a>

                        <!-- Telegram -->
                        <a href="https://t.me/ardevin" target="_blank" rel="noopener" class="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-primary-50 transition-colors">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary-400/10 flex items-center justify-center shrink-0">
                                <i class="pi pi-telegram text-primary-400 text-sm sm:text-base md:text-lg"></i>
                            </div>
                            <div>
                                <p class="text-surface-500 text-lg xl:text-xl">Telegram</p>
                                <p class="text-surface-800 text-lg xl:text-xl">t.me/ardevin</p>
                            </div>
                        </a>

                        <!-- WhatsApp -->
                        <a href="https://wa.me/77773365602" target="_blank" rel="noopener" class="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-primary-50 transition-colors">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary-400/10 flex items-center justify-center shrink-0">
                                <i class="pi pi-whatsapp text-primary-400 text-sm sm:text-base md:text-lg"></i>
                            </div>
                            <div>
                                <p class="text-surface-500 text-lg xl:text-xl">WhatsApp</p>
                                <p class="text-surface-800 text-lg xl:text-xl">wa.me/77773365602</p>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Правая колонка - Форма -->
                <div class="bg-transparent">
                    <h3 class="font-bold text-2xl xl:text-3xl text-surface-800 mb-2 sm:mb-3 md:mb-4">Мы свяжемся с Вами</h3>
                    <p class="text-lg xl:text-xl text-surface-600 mb-6 sm:mb-8">Просто заполните форму и мы свяжемся с Вами самостоятельно</p>

                    <form class="space-y-4 sm:space-y-6">
                        <div>
                            <label class="block text-surface-800 mb-1.5 sm:mb-2 text-lg xl:text-xl">Как к Вам обращаться?</label>
                            <InputText v-model="form.name" placeholder="Напишите Ваше имя" class="w-full !p-2.5 sm:!p-3" />
                        </div>

                        <div>
                            <label class="block text-surface-800 mb-1.5 sm:mb-2 text-lg xl:text-xl">Удобный для Вас способ связи</label>
                            <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                                <Dropdown v-model="form.contactMethod" 
                                    :options="contactMethods" 
                                    optionLabel="label"
                                    placeholder="Выберите способ связи"
                                    class="w-full sm:w-[180px] md:w-[200px] items-center" />
                                <InputText v-model="form.contact" placeholder="Напишите Ваш контакт" class="w-full !p-2.5 sm:!p-3" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-surface-800 mb-1.5 sm:mb-2 text-lg xl:text-xl">Опишите Ваш проект</label>
                            <Textarea v-model="form.description" 
                                placeholder="Описание Вашего проекта" 
                                rows="4" 
                                class="w-full !p-2.5 sm:!p-3" />
                        </div>

                        <Button label="Отправить заявку" 
                            class="w-full p-button-lg" />
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    name: '',
    contactMethod: 'telegram',
    contact: '',
    description: ''
})

const contactMethods = [
    { label: 'Telegram', value: 'telegram' },
    { label: 'WhatsApp', value: 'whatsapp' },
    { label: 'Телефон', value: 'phone' },
    { label: 'Email', value: 'email' }
]
</script> 