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

    const intro = document.querySelector(".intro");
    const logo = document.querySelector(".logo-header");
    const logoSpan = document.querySelectorAll(".logo");
    window.addEventListener("DOMContentLoaded", () => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("appear");
        }, (idx + 1) * 90);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove("appear");
            span.classList.add("fade");
          }, (idx + 1) * 80);
        });
      }, 1500);

      setTimeout(() => {
        intro.style.top = "-100vh";
      }, 2000);

      setTimeout(() => {
        userStore.isIntro = false;
      }, 3000);
    });
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
  <div class="intro">
      <h1 class="logo-header">
          <span class="logo">W</span><span class="logo">e</span><span class="logo">l</span><span
              class="logo">c</span><span class="logo">o</span><span class="logo">m</span><span class="logo">e</span>
      </h1>
  </div>
  <LoadingComponent v-if="userStore.isLoading"/>
  <div class="fixed z-[-1] bg-[#f2f2f2] w-full h-[100vh]" />
  <RouterView></RouterView>  
  <MenuOverlayComponent :class="{ 'max-h-[100vh] transition-all duration-200 ease-in visible' : userStore.isMenuOverlay, 'max-h-0 transition-all duration-200 ease-out invisible' : !userStore.isMenuOverlay }" />
</template>

<style scoped>

.intro {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #1e1b4b;
  transition: 0.7s;
  z-index: 1000;
}

.logo-header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.logo {
  position: relative;
  display: inline-block;
  bottom: -20px;
  opacity: 0;
  font-size: 2rem;
}

.logo.appear {
  bottom: 0;
  opacity: 1;
  transition: ease-in-out 0.5s;
}

.logo.fade {
  bottom: 150px;
  opacity: 0;
  transition: ease-in-out 0.7s;
}

</style>
