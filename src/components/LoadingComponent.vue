<script setup>
    import { Icon } from '@iconify/vue';
</script>

<template>
    <div id="LoadingComponent" class="fixed bg-black bg-opacity-40 inset-0 w-full z-40 flex items-center justify-center h-[100vh] overflow-hidden">
        <div class="p-3 rounded-md bg-black bg-opacity-20">
            <div class="flex justify-center">
                <Icon icon="line-md:loading-alt-loop" color="#fd374f" width="48" />            
            </div>
            <div class="text-center pt-1 text-xl font-bold text-white">
                Cargando...
            </div>
        </div>

    </div>
</template>