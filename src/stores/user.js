import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
    state: () => ({
        isMenuOverlay: false,
        isLoading: false,
        isIntro: true
    }),
    persist: true
})