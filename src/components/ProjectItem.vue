<script setup>
    import { Icon } from '@iconify/vue';

    const props = defineProps(['project']);
    const { project } = props;

    const emit = defineEmits(['onShowDialogInfo']);

    const fnShowDialogInfo = (id)=>{
        emit('onShowDialogInfo', id);
    }

</script>

<template>

    <div class="self-stretch w-[100%] min-[450px]:w-[50%] sm:w-[33.3%] md:w-[25%] lg:w-[20%] xl:w-[16.66%] group my-1" :data-category="project.category">
        <div class="p-2 w-full h-full">
            <div class="bg-white rounded-md p-1 relative overflow-hidden shadow h-full">
                <div class="h-full flex flex-col">
                    <div class="overflow-hidden">
                        <img :src="project.imagesUrl+project.cover" :alt="'image project '+project.title" class="block w-full h-auto mx-auto group-hover:scale-125 scale-100 transition-all duration-500">
                    </div>
                    <div class="flex flex-col justify-between flex-1">
                        <h4 class="text-center py-1 mt-2 text-base font-semibold text-amber-500"> 
                            {{ project.title }}
                        </h4>
                        <h5 class="text-sm text-center text-indigo-950">
                            {{ project.acronimus }}
                        </h5>
                        <div class="p-1 my-1 flex justify-center items-center flex-wrap">
                            <span class="p-2 m-1 rounded shadow text-xs bg-blue-400 font-semibold text-white flex items-center justify-center text-center">{{ project.type }}</span>
                            <span class="p-2 m-1 rounded shadow text-xs bg-blue-400 font-semibold text-white flex items-center justify-center text-center">{{ project.languaje }}</span>
                            <span class="p-2 m-1 rounded shadow text-xs bg-blue-400 font-semibold text-white flex items-center justify-center text-center">{{ project.kind }}</span>
                        </div>
                    </div>
                </div>
                
                <div class="absolute bottom-0 left-0 w-full h-0 group-hover:h-[100%] transition-all duration-200 opacity-60">
                    <div class="bg-black rounded-md w-full h-full">
                    </div>                
                </div>

                <div class="absolute bottom-0 left-0 w-full h-0 group-hover:h-[100%] transition-all duration-200">
                    <div class="overflow-hidden w-full h-full flex items-center justify-center text-lg text-white p-2">
                        <span class="p-2 m-1 border-solid border-white border-[1px] rounded shadow text-white hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-indigo-950 hover:cursor-pointer" @click="fnShowDialogInfo(project.id)">
                            <Icon icon="ic:outline-info" width="25" />
                            <Icon icon="mdi:eye" width="25" />
                        </span>
                        <!-- <span class="p-2 m-1 border-solid border-white border-[1px] rounded shadow text-white hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-indigo-950  hover:cursor-pointer">                            
                            <Icon icon="grommet-icons:gallery" width="20" />
                            <Icon icon="mdi:eye" width="20" />
                        </span> -->
                        <span class="p-2 m-1 border-solid border-white border-[1px] rounded shadow text-white" :class="{'hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-black hover:cursor-pointer': project.isPublic && project.url}">  
                            <a :href="project.url" class="flex items-center flex-col" v-if="project.isPublic && project.url">                  
                                <Icon icon="iconamoon:link-external-bold" width="25" />
                                <Icon icon="mdi:eye" width="25" />
                            </a>  
                            <span v-else class="flex items-center flex-col">
                                <Icon icon="iconamoon:link-external-bold" width="25" />
                                <Icon icon="mdi:eye-off" width="25"/>
                            </span>                        
                        </span>
                        <span class="p-2 m-1 border-solid border-white border-[1px] rounded shadow text-white" :class="{'hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-black hover:cursor-pointer': project.isPublic && project.github}"> 
                            <a :href="project.github" class="flex items-center flex-col" v-if="project.isPublic && project.github">
                                <Icon icon="mdi:github" width="25" />
                                <Icon icon="mdi:eye" width="25" />
                            </a>    
                            <span v-else class="flex items-center flex-col">
                                <Icon icon="mdi:github" width="25" />
                                <Icon icon="mdi:eye-off" width="25" />
                            </span>                       
                        </span>
                    </div>                
                </div>
            </div>
        </div>
        
    </div>
   
</template>

<style scoped>

</style>