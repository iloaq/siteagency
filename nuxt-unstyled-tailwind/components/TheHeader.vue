<template>
    <header class="bg-surface-0/50 backdrop-blur-[10px] border-b border-surface-200 py-3 sm:py-4">
        <nav class="container mx-auto px-4 sm:px-6 flex items-center justify-between">
            <!-- Логотип -->
            <div class="flex items-center">
                <NuxtLink to="/">
                    <img src="/skybric-logo.svg" alt="SKYBRIC" class="h-6 sm:h-7 md:h-8">
                </NuxtLink>
            </div>
            
            <!-- Навигация -->
            <div class="hidden lg:block">
                <Menubar :model="menuItems">
                    <template #item="{ item }">
                        <NuxtLink 
                            v-if="item.to" 
                            :to="item.to"
                            class="font-body text-sm sm:text-base text-surface-800 hover:text-primary-400"
                        >
                            {{ item.label }}
                        </NuxtLink>
                        <a 
                            v-else-if="item.href" 
                            :href="item.href"
                            class="font-body text-sm sm:text-base text-surface-800 hover:text-primary-400"
                        >
                            {{ item.label }}
                        </a>
                        <div 
                            v-else 
                            class="font-body text-sm sm:text-base text-surface-800 hover:text-primary-400 flex items-center gap-1"
                        >
                            {{ item.label }}
                            <i v-if="item.items" class="pi pi-angle-down text-xs"></i>
                        </div>
                    </template>
                </Menubar>
            </div>

            <div class="flex items-center gap-2">
                <div class="lg:hidden flex-grow-0 order-last">
                    <Button 
                        icon="pi pi-bars" 
                        @click="toggleMenu" 
                        class="p-button-text text-surface-800"
                        aria-label="Открыть меню"
                        :aria-expanded="showMenu"
                        aria-controls="mobile-menu"
                    />
                </div>

                <div class="hidden md:flex md:items-center">
                    <!-- Селектор языка (Dropdown) -->
                    <Dropdown 
                        v-model="selectedLanguage" 
                        :options="languages" 
                        optionLabel="name"
                        optionValue="code"
                        class="language-dropdown"
                    >
                        <template #value="slotProps">
                            <div class="flex items-center" v-if="slotProps.value">
                                <img 
                                    :src="languages.find(lang => lang.code === slotProps.value)?.flag" 
                                    :alt="slotProps.value"
                                    class="w-4 sm:w-5 h-4 sm:h-5 rounded-sm object-cover">
                                <span class="ml-2 text-xs sm:text-sm">{{ languages.find(lang => lang.code === slotProps.value)?.name }}</span>
                            </div>
                            <span v-else>{{ t('select_language') }}</span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex items-center">
                                <img :src="slotProps.option.flag" 
                                    :alt="slotProps.option.code"
                                    class="w-4 sm:w-5 h-4 sm:h-5 rounded-sm object-cover">
                                <span class="ml-2 text-xs sm:text-sm">{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </Dropdown>
                </div>
                <!-- Правая секция -->
                <div class="hidden lg:flex items-center">
                    <!-- Кнопка "Связаться" -->
                    <Button 
                        :label="t('contact.button')" 
                        size="fullwidth"
                        class="bg-primary-400 text-surface-0 rounded-md hover:bg-primary-500" 
                    />
                </div>
            </div>
        </nav>

        <!-- Мобильное меню с использованием Drawer -->
        <Drawer 
            v-model:visible="showMenu" 
            position="left"
            class="lg:hidden mobile-menu-drawer"
            id="mobile-menu"
            aria-labelledby="mobile-menu-title"
            :modal="true"
            :closeOnEscape="true"
            :dismissable="true"
        >
            <template #header>
                <div class="flex items-center justify-between w-full">
                    <h2 id="mobile-menu-title" class="text-base sm:text-lg font-medium text-surface-800">Меню</h2>
                    <div class="md:hidden flex items-center gap-2">
                        <!-- Мобильный селектор языка (Dropdown) -->
                        <Dropdown 
                            v-model="selectedLanguage" 
                            :options="languages" 
                            optionLabel="name"
                            optionValue="code"
                            class="mobile-language-dropdown"
                        >
                            <template #value="slotProps">
                                <div class="flex items-center" v-if="slotProps.value">
                                    <img 
                                        :src="languages.find(lang => lang.code === slotProps.value)?.flag" 
                                        :alt="slotProps.value"
                                        class="w-4 h-4 rounded-sm object-cover">
                                    <span class="ml-1 text-xs">{{ languages.find(lang => lang.code === slotProps.value)?.name }}</span>
                                </div>
                                <span v-else class="text-xs">{{ t('select_language') }}</span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex items-center">
                                    <img :src="slotProps.option.flag" 
                                        :alt="slotProps.option.code"
                                        class="w-4 h-4 rounded-sm object-cover">
                                    <span class="ml-1 text-xs">{{ slotProps.option.name }}</span>
                                </div>
                            </template>
                        </Dropdown>
                    </div>
                </div>
            </template>
            
            <div class="flex flex-col gap-3 sm:gap-4 py-1 sm:py-2">
                <div v-for="item in menuItems" :key="item.label" class="border-b border-surface-200 pb-2 sm:pb-3">
                    <div v-if="item.items" class="flex flex-col gap-1 sm:gap-2">
                        <div class="font-medium text-surface-800 text-sm sm:text-base mb-1 sm:mb-2">{{ item.label }}</div>
                        <NuxtLink 
                            v-for="subItem in item.items" 
                            :key="subItem.label"
                            :to="subItem.to"
                            class="pl-3 sm:pl-4 py-1.5 sm:py-2 text-xs sm:text-sm text-surface-600 hover:text-primary-400 hover:bg-surface-50 rounded-md"
                            @click="showMenu = false"
                        >
                            {{ subItem.label }}
                        </NuxtLink>
                    </div>
                    <NuxtLink 
                        v-else
                        :to="item.to || item.href"
                        class="block py-1.5 sm:py-2 text-sm sm:text-base text-surface-800 hover:text-primary-400"
                        @click="showMenu = false"
                    >
                        {{ item.label }}
                    </NuxtLink>
                </div>
            </div>
            
            <template #footer>
                <Button 
                    :label="t('contact.button')" 
                    class="w-full bg-primary-400 text-surface-0 rounded-md hover:bg-primary-500" 
                    @click="showMenu = false"
                />
            </template>
        </Drawer>
    </header>
</template> 

<script setup>
import { ref, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, setLocale, t } = useI18n();
const selectedLanguage = ref(locale.value);

watch(selectedLanguage, (newLocale) => {
  setLocale(newLocale);
});

const languages = [
    { name: 'Рус', code: 'ru', flag: '/flags/ru.svg' },
    { name: 'Eng', code: 'en', flag: '/flags/en.svg' },
    { name: 'Қаз', code: 'kz', flag: '/flags/kz.svg' },
    { name: 'Укр', code: 'ua', flag: '/flags/ua.svg' }
];

const showMenu = ref(false);

const servicesItems = [
    {
        label: 'Веб-разработка',
        to: '/services/web'
    },
    {
        label: 'Мобильная разработка',
        to: '/services/mobile'
    },
    {
        label: 'SMM и таргетированная реклама',
        to: '/services/smm-target'
    },
    {
        label: 'SEO-оптимизация и продвижение',
        to: '/services/seo'
    },
    {
        label: 'Маркетинговая стратегия и консалтинг',
        to: '/services/marketing'
    },
    {
        label: 'Интеграция и автоматизация бизнес-систем',
        to: '/services/integration'
    },
    {
        label: 'Разработка ПО для автоматизации бизнес-процессов',
        to: '/services/automation'
    },
    {
        label: 'Email-маркетинг и автоматизация',
        to: '/services/email-marketing'
    },
    {
        label: 'Кибербезопасность и IT-защита',
        to: '/services/cybersecurity'
    },
    {
        label: 'Разработка и интеграция CRM-систем',
        to: '/services/crm'
    },
    {
        label: 'Аналитика и оптимизация конверсий',
        to: '/services/conversion-analytics'
    },
    {
        label: 'Контент-маркетинг',
        to: '/services/content-marketing'
    },
    {
        label: 'IT-консалтинг и сопровождение',
        to: '/services/consulting'
    },
    {
        label: 'Облачные технологии и DevOps',
        to: '/services/cloud-devops'
    }
];

const menuItems = computed(() => {
  return [
    {
      label: t('nav.services'),
      items: servicesItems
    },
    {
      label: t('nav.pricing'),
      href: '/#pricing'
    },
    {
      label: t('nav.blog'),
      to: '/blog'
    },
    {
      label: t('nav.contacts'),
      to: '/contacts'
    }
  ];
});

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>



