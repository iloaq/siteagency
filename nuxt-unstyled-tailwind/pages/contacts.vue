<template>
  <PageHeader
      title="Наши <span class='text-primary-500'>контакты</span>"
      subtitle="Свяжитесь с нами, чтобы обсудить ваши проекты и получить помощь"
      icon="pi pi-phone"
    >
      <div class="flex flex-wrap gap-3 mt-4">
        <a href="tel:+77773365602" class="flex items-center gap-2 px-4 py-2 bg-surface-100 hover:bg-surface-200 rounded-lg transition-colors">
          <i class="pi pi-phone text-primary-500"></i>
          <span>+7 (777) 336-56-02</span>
        </a>
        <a href="mailto:client@skybric.com" class="flex items-center gap-2 px-4 py-2 bg-surface-100 hover:bg-surface-200 rounded-lg transition-colors">
          <i class="pi pi-envelope text-primary-500"></i>
          <span>client@skybric.com</span>
        </a>
      </div>
    </PageHeader>
  <ContactSection />
</template> 