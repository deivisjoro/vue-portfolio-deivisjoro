<script setup>

    import { useUserStore } from '../stores/user';
    import { Icon } from '@iconify/vue';

    const userStore = useUserStore();

    

    const scrollToSection = (id)=>{
        const section = document.getElementById(id);
        section.scrollIntoView();
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
        <div id="MainHeader" class="w-full bg-white flex items-center">
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
                                <a href="#HomeSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('HomeSection')" style="--i:1">HOME</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#AboutSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('AboutSection')" style="--i:2">ABOUT</a>
                            </li>
                            <!-- <li class="px-2 py-1">
                                <a href="#" class="hover:text-[#ff4646] hover:border-b py-1 hover:border-[#ff4646]">ABOUT</a>
                            </li> -->
                            <li class="px-2 py-1">
                                <a href="#EducationSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('EducationSection')" style="--i:3">EDUCATION</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#SkillsSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('SkillsSection')" style="--i:4">SKILLS</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#ExperienceSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('ExperienceSection')" style="--i:5">EXPERIENCE</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#ProjectsSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('ProjectsSection')" style="--i:6">PROJECTS</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#ContactSection" class="py-1 hover:text-[#ff4646]" @click.prevent="scrollToSection('ContactSection')" style="--i:7">CONTACT</a>
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
        animation-delay: calc(.1s * var(--i));
    }
</style>