<script setup>

    import { useUserStore } from '../stores/user';
    import { Icon } from '@iconify/vue';

    const userStore = useUserStore();

</script>

<template>
    <div id="HeaderComponent" class="w-full fixed z-50">

        <div id="TopMenu" class="w-full bg-indigo-950 border-b md:block hidden">
            <ul class="flex items-center justify-end text-sm text-white font-light px-2 h-8 max-w-[1200px]">
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
                                <a href="#" class="py-1 hover:text-[#ff4646]">HOME</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#" class="py-1 hover:text-[#ff4646]">ABOUT</a>
                            </li>
                            <!-- <li class="px-2 py-1">
                                <a href="#" class="hover:text-[#ff4646] hover:border-b py-1 hover:border-[#ff4646]">ABOUT</a>
                            </li> -->
                            <li class="px-2 py-1">
                                <a href="#" class="py-1 hover:text-[#ff4646]">EDUCATION</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#" class="py-1 hover:text-[#ff4646]">SKILLS</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#" class="py-1 hover:text-[#ff4646]">EXPERIENCE</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#" class="py-1 hover:text-[#ff4646]">PROJECTS</a>
                            </li>
                            <li class="px-2 py-1">
                                <a href="#" class="py-1 hover:text-[#ff4646]">CONTACT</a>
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
</style>