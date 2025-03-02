<template>
    <footer class="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden">
        
        <div class="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
            <!-- Верхняя часть футера с логотипом и описанием -->
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
                <!-- Логотип и описание -->
                <div class="lg:w-1/3">
                    <div class="mb-6">
                        <NuxtLink to="/" class="inline-block">
                            <h2 class="text-3xl font-bold">SKYBRIC</h2>
                        </NuxtLink>
                    </div>
                    <p class="text-white/80 mb-8 max-w-md">
                        Мы создаем инновационные цифровые решения, которые помогают бизнесу расти и развиваться в современном мире.
                    </p>
                    <div class="flex gap-4">
                        <a href="https://instagram.com/iloaq" target="_blank" 
                           class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                            <i class="pi pi-instagram text-xl"></i>
                        </a>
                        <a href="https://t.me/ardevin" target="_blank" 
                           class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                            <i class="pi pi-telegram text-xl"></i>
                        </a>
                        <a href="https://wa.me/77773365602" target="_blank" 
                           class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                            <i class="pi pi-whatsapp text-xl"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Ссылки и Telegram канал -->
                <div class="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Услуги -->
                    <div>
                        <h3 class="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
                            <i class="pi pi-briefcase text-primary-200"></i>
                            <span>Услуги</span>
                        </h3>
                        <ul class="space-y-3">
                            <li>
                                <NuxtLink to="/services/mobile" 
                                    class="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                                    <i class="pi pi-mobile text-xs"></i>
                                    <span>Мобильные приложения</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services/web" 
                                    class="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                                    <i class="pi pi-desktop text-xs"></i>
                                    <span>Веб-сайты</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/services/crm" 
                                    class="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                                    <i class="pi pi-cog text-xs"></i>
                                    <span>CRM-системы</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Полезные ссылки -->
                    <div>
                        <h3 class="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
                            <i class="pi pi-link text-primary-200"></i>
                            <span>Навигация</span>
                        </h3>
                        <ul class="space-y-3">
                            <li>
                                <NuxtLink to="/#calculator" 
                                    class="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                                    <i class="pi pi-calculator text-xs"></i>
                                    <span>Калькулятор стоимости</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog" 
                                    class="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                                    <i class="pi pi-file-edit text-xs"></i>
                                    <span>Блог</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contacts" 
                                    class="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                                    <i class="pi pi-envelope text-xs"></i>
                                    <span>Контакты</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Telegram канал -->
                    <div>
                        <h3 class="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
                            <i class="pi pi-telegram text-primary-200"></i>
                            <span>Telegram-канал</span>
                        </h3>
                        <p class="text-white/80 mb-6 text-sm">
                            Подписывайтесь на наш канал, чтобы получать полезные материалы и новости
                        </p>
                        <a href="https://t.me/kioktunov" target="_blank" 
                            class="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors">
                            <i class="pi pi-telegram"></i>
                            <span>Подписаться</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Нижняя часть футера -->
            <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <!-- Копирайт -->
                <p class="text-white/70 text-sm">SKYBRIC © 2025 | Все права защищены</p>
                
                <!-- Правовые ссылки -->
                <div class="flex flex-wrap gap-6">
                    <NuxtLink to="/privacy" class="text-white/70 text-sm hover:text-white transition-colors">
                        Политика конфиденциальности
                    </NuxtLink>
                    <NuxtLink to="/terms" class="text-white/70 text-sm hover:text-white transition-colors">
                        Условия использования
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template> 