<script setup>
    import { useUserStore } from '../stores/user';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';

    const userStore = useUserStore();

</script>

<template>
    <div id="MainLayout">
        <HeaderComponent></HeaderComponent>

        <div class="md:pt-[120px] pt-[90px]"></div>

        <div class="min-h-[50vh] bg-white">
            <slot></slot>
        </div>        

        <FooterComponent v-if="!userStore.isLoading"></FooterComponent>
        
    </div>   
    
</template>