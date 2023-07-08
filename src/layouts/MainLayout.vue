<script setup>
    import { useUserStore } from '../stores/user';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';

    const userStore = useUserStore();

</script>

<template>
    <div id="MainLayout">
        <HeaderComponent></HeaderComponent>

        <div class="lg:pt-[140px] md:pt-[130px] pt-[110px]"></div>

        <div class="min-h-[50vh] mb-[50px]">
            <slot></slot>
        </div>        

        <FooterComponent v-if="!userStore.isLoading"></FooterComponent>
        
    </div>   
    
</template>