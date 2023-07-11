<script setup>

    import { Icon } from '@iconify/vue';

    const props = defineProps(['title', 'icon', 'iconColor', 'experience', 'category', 'level', 'items', 'iconsItems']);
    const { title, icon, iconColor, experience, category, level, items, iconsItems } = props;

</script>

<template>
    
    <div class="flex flex-col justify-center items-center grow relative left-0 duration-500 min-w-[100%] sm:min-w-[50%] md:min-w-[32%] lg:min-w-[24%] xl:min-w-[19%] mx-auto self-stretch">
            <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white undefined">
                <div class="h-full w-full flex flex-col justify-between">
                    <div>
                        <div class="w-full flex items-center justify-center text-indigo-950">
                            <Icon :icon="icon" width="40%" :color="iconColor" />  
                        </div>
                        <div class="mb-2 flex items-center justify-between px-1 md:items-start">
                            <div class="mb-2">
                                <p class="text-lg font-bold text-[#1b254b]"> {{ title }} </p>
                                <p class="mt-1 text-sm font-medium text-gray-[#a7b1d2]md:mt-2">{{ category }}</p>
                            </div>
                            <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                                <span class="z-10 -mr-2 h-8 w-8 rounded-full border-solid border-[1px] border-indigo-900 bg-white overflow-hidden" v-for="iconItem in iconsItems" :key="iconItem">
                                    <Icon :icon="iconItem.name" :color="iconItem.color ? iconItem.color : ''" width="100%" /> 
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between h-full">
                        <div class="flex flex-wrap">
                            <span class="flex items-center justify-center rounded-xl text-white mx-1 text-xs px-2 my-1 bg-indigo-950" v-for="item in items" :key="item">
                                {{ item }}
                            </span>
                        </div>
                        <div class="mt-2">
                            <div class="flex items-center justify-between">
                                <div class="flex w-full items-center bg-stone-200 h-[10px] my-2 mr-5">
                                    <div class="bg-green-600 h-[10px]" :style="`width:${level}%`">
            
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <div class="bg-green-600 text-white px-1 h-[30px] relative rounded-md before:absolute before:content-[''] before:w-[10px] before:h-[10px] before:bg-green-600 before:rotate-45 before:top-[10px] before:left-[-5px] flex items-center">
                                        <span class="ml-1">{{ level }}%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between md:items-center lg:justify-between ">
                                <div class="flex">
                                    <p class="!mb-0 text-sm font-bold text-[#422afb]">Experience {{ experience }}<span>+</span> years </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

</template>