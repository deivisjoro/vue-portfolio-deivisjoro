<script setup>

    const props = defineProps(['title', 'category']);
    const { title, category } = props;

</script>

<template>

    <div class="self-stretch w-[50%] sm:w-[33.3%] md:w-[25%] lg:w-[20%] xl:w-[16.66%] group hover:cursor-pointer" :data-category="category">
        <div class="p-2 w-full h-full">
            <div class="bg-white rounded-md p-1 relative overflow-hidden">
                <img src="me.png" alt="image project" class="block w-full h-auto mx-auto group-hover:scale-125 scale-100 transition-all duration-500">
                <div class="absolute bottom-0 left-0 w-full h-0 group-hover:h-[50%] transition-all duration-200">
                    <div class="bg-indigo-950 rounded-md overflow-hidden w-full h-full">
                        <div class="text">
                            <h3>{{ title }}</h3>
                            <p>Mockup, Design, Inspiration </p>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<style scoped>

</style>