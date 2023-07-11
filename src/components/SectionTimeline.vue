<script setup>

    import SectionTimelineItem from './SectionTimelineItem.vue';

    const props = defineProps(['description', 'items'])

    const { description, items } = props;

</script>

<template>
    
    <div class="md:ml-10 ml-5">
        <h3 class="text-red-500 underline py-4 text-xl font-semibold">
            {{ description }}
        </h3>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <SectionTimelineItem v-for="item in items" :key="item" :item="item" />
        </ol>
    </div>
</template>