<script setup>
    import { useUserStore } from "../stores/user";
    import { useRouter } from 'vue-router';
    import { Icon } from '@iconify/vue';

    const userStore = useUserStore();
    const router = useRouter();

    const goTo = (url) => {
        userStore.isMenuOverlay = false;
        return router.push(`/${url}`);
    }

    const scrollToSection = (id)=>{
        const section = document.getElementsByClassName(id);
        userStore.isMenuOverlay = false;
        section[0].scrollIntoView();
    }

</script>

<template>
    
    <div id="MenuOverlayComponent" class="fixed z-50 bottom-0 h-full w-full bg-white overflow-scroll">
        <div class="w-full flex items-center justify-between py-3 px-3 shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] fixed z-[52] bg-white h-[80px] max-h-[80px]">
            <RouterLink to="/" @click="userStore.isMenuOverlay=false">
                <img src="/logo-black.png" alt="logo deivisjoro dev" width="100">
            </RouterLink >

            <button @click="userStore.isMenuOverlay=false" class="rounded-full p-1.5 hover:bg-gray-200">
                <Icon icon="line-md:close" width="24" />
            </button>
        </div>
        <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]"></div>
        <div class="w-full flex items-center justify-between pt-5 z-[51]">
            <nav id="MainMenuMobile" class="w-full px-4">
                <ul class="w-full font-semibold text-indigo-950">
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">                             
                            <a href="#" @click.prevent="scrollToSection('HomeSection')" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="line-md:home-md" width="24" class="mr-2" /> HOME
                                </div>                                
                            </a>
                        </div>

                    </li>
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">
                            <a href="#" @click.prevent="scrollToSection('AboutSection')" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="line-md:account-alert" width="24" class="mr-2" /> ABOUT
                                </div>                                
                            </a>
                        </div>
                    </li>
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">
                            <a href="#" @click.prevent="scrollToSection('EducationSection')" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="basil:university-outline" width="24" class="mr-2" /> EDUCATION
                                </div>                                
                            </a>
                        </div>
                    </li>
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">
                            <a href="#" @click.prevent="scrollToSection('SkillsSection')" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="ic:baseline-add-task" width="24" class="mr-2" /> SKILLS
                                </div>                                
                            </a>
                        </div>
                    </li>
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">
                            <a href="#" @click.prevent="scrollToSection('ExperienceSection')" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="bi:person-workspace" width="24" class="mr-2" /> EXPERIENCE
                                </div>                                
                            </a>
                        </div>
                    </li>
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">
                            <a href="#" @click.prevent="scrollToSection('ProjectsSection')" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="mdi:projector-screen-outline" width="24" class="mr-2" /> PROJECTS
                                </div>                                
                            </a>
                        </div>
                    </li>
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">
                            <a href="#" @click.prevent="scrollToSection('ContactSection')" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="ic:outline-contact-phone" width="24" class="mr-2" /> CONTACT
                                </div>                                
                            </a>
                        </div>
                    </li>
                </ul>
                <ul class="w-full font-semibold text-indigo-950">
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">
                            <a href="#" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="ph:linkedin-logo" width="24" class="mr-2" /> LINKEDIN
                                </div>                                
                            </a>
                        </div>
                    </li>
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">
                            <a href="#" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="mdi:github" width="24" class="mr-2" /> GITHUB
                                </div>                                
                            </a>
                        </div>
                    </li>
                    <li class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100">
                        <div class="flex items-center text-[16px] font-semibold">
                            <a href="#" class="hover:text-[#ff4646] py-1 pl-4">
                                <div class="flex">
                                    <Icon icon="ic:outline-nights-stay" width="24" class="mr-2" /> DARK MODE
                                </div>                                
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</template>

<style scoped>
    #MainMenuMobile ul a:after{
        display:block;
        content: '';
        border-bottom: solid 3px #ff4646;  
        transform: scaleX(0);  
        transition: transform 350ms ease-in-out;
        transform-origin:  0% 50%;
    }

    #MainMenuMobile ul a:hover:after{
        transform: scaleX(1); 
    }
</style>