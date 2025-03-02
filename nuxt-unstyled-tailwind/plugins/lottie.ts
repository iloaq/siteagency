import { defineNuxtPlugin } from '#app'
import lottie from 'lottie-web/build/player/lottie';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Vue3Lottie', lottie)
}) 