<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <!-- Липкий хедер -->
        <TheHeader class="sticky top-0 z-50" />

        <!-- Основной контент -->
        <main class="flex-grow">
            <NuxtPage />
        </main>

        <!-- Статичный футер -->
        <TheFooter />
    </div>
</template>
