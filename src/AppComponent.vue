<script setup>
  import { useUserStore } from './stores/user';
  import { useRoute } from 'vue-router';
  import { ref, onMounted, watch } from 'vue';
  import MenuOverlayComponent from './components/MenuOverlayComponent.vue';
  import LoadingComponent from './components/LoadingComponent.vue';

  const userStore = useUserStore();
  const route = useRoute();

  const windowWidth = ref(window.innerWidth);
  userStore.isLoading = true;

  onMounted(()=>{    
    window.addEventListener('resize', ()=> {
      windowWidth.value = window.innerWidth;
    })
  })

  watch(()=>windowWidth.value, ()=>{
    if(windowWidth.value>=767){
      userStore.isMenuOverlay = false;
    }
  })

  watch(()=>route.fullPath, ()=>{
      userStore.isLoading = true;
  })
</script>

<template>
  <LoadingComponent v-if="userStore.isLoading"/>
  <div class="fixed z-[-1] bg-[#f2f2f2] w-full h-[100vh]" />
  <RouterView></RouterView>  
  <MenuOverlayComponent :class="{ 'max-h-[100vh] transition-all duration-200 ease-in visible' : userStore.isMenuOverlay, 'max-h-0 transition-all duration-200 ease-out invisible' : !userStore.isMenuOverlay }" />
</template>
