<script setup>

    import { useUserStore } from '../stores/user';
    import { Icon } from '@iconify/vue';

    const userStore = useUserStore();
    

    const scrollToSection = (id)=>{
        const section = document.getElementsByClassName(id);
        section[0].scrollIntoView();
    }

</script>

<template>
    <div id="HeaderComponent" class="w-full fixed z-50 h-[115px]">

        <div id="TopMenu" class="w-full bg-indigo-950 border-b md:block hidden">
            <ul class="flex items-center justify-end text-sm text-white font-light px-2 h-8 max-w-[1200px] mx-auto">
                <li class="border-r border-r-gray-400 px-3 hover:text-amber-500">
                    <a href="#">
                        <Icon icon="ph:linkedin-logo" width="18" />
                    </a>
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-amber-500">
                    <a href="#">
                        <Icon icon="mdi:github" width="18" />
                    </a>
                </li>                
                <li class="border-r border-r-gray-400 px-3 hover:text-amber-500">
                    <a href="#">
                        <Icon icon="ic:outline-nights-stay" width="18" />
                    </a>
                </li>                
            </ul>
        </div>
        <div id="MainHeader" class="w-full bg-white flex items-center shadow-md">
            <div class="flex justify-between gap-10 max-w-[1200px] w-full px-3 py-3 mx-auto items-center">
                <RouterLink to="/" class="min-w-[100px]">
                    <img src="/logo-black.png" alt="logo deivisjoro" width="100" />
                </RouterLink>
                
                <button @click="userStore.isMenuOverlay=true" class="md:hidden block rounded-full p-1.5 hover:bg-gray-200">
                    <Icon icon="grommet-icons:menu" width="24" />                    
                </button>

                <div class="w-full flex items-center pr-2 md:flex hidden">
                    <nav id="MainMenu" class="w-full flex items-center justify-end px-2">
                        <ul class="flex items-center text-sm font-semibold text-indigo-950">
                            <li class="px-2 py-1">
                                <a href="#HomeSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('HomeSection')" style="--i:1" :style="{ animationDelay: userStore.isIntro ? (2+(0.1*1))+'s' : (0.1*1)+'s' }">HOME</a>
                            </li>                            
                            <li class="px-2 py-1">
                                <a href="#ProjectsSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('ProjectsSection')" style="--i:2" :style="{ animationDelay: userStore.isIntro ? (2+(0.1*2))+'s' : (0.1*2)+'s' }">PROJECTS</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#EducationSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('EducationSection')" style="--i:3" :style="{ animationDelay: userStore.isIntro ? (2+(0.1*3))+'s' : (0.1*3)+'s' }">EDUCATION</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#SkillsSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('SkillsSection')" style="--i:4" :style="{ animationDelay: userStore.isIntro ? (2+(0.1*4))+'s' : (0.1*4)+'s' }">SKILLS</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#ExperienceSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('ExperienceSection')" style="--i:5" :style="{ animationDelay: userStore.isIntro ? (2+(0.1*5))+'s' : (0.1*5)+'s' }">EXPERIENCE</a>
                            </li>
                            
                            <li class="px-2 py-1">
                                <a href="#AboutSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('AboutSection')" style="--i:6" :style="{ animationDelay: userStore.isIntro ? (2+(0.1*6))+'s' : (0.1*6)+'s' }">ABOUT</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#ContactSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('ContactSection')" style="--i:7" :style="{ animationDelay: userStore.isIntro ? (2+(0.1*7))+'s' : (0.1*7)+'s' }">CONTACT</a>
                            </li>                        
                        </ul>                    
                    </nav>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
    #MainMenu ul a:after{
        display:block;
        content: '';
        border-bottom: solid 3px #ff4646;  
        transform: scaleX(0);  
        transition: transform 350ms ease-in-out;
        transform-origin:  0% 50%;

    }

    #MainMenu ul a:hover:after{
        transform: scaleX(1); 
    }

    #MainMenu ul a.active:after{
        transform: scaleX(1); 
    }

    @keyframes slideTop {
        0% {
            opacity: 0;
            transform: translateY(100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    #MainMenu a{
        display: inline-block;
        opacity: 0;
        animation: slideTop .5s ease forwards;
        transform: translateY(100px);
        /* animation-delay: calc((0.1s * var(--i)) + attr(data-intro)); */
        
    }
</style>