<script setup>

    import { toRefs } from 'vue';

    const props = defineProps(['itemActive', 'text', 'item']);
    const emit = defineEmits(['openView']);

    const {itemActive, text, item} = toRefs(props);

    const fnClick = () => {
        emit('openView', Number(item.value));
    }

</script>

<template>
    <li
        class="my-2 pl-2 md:pr-4 pr-1 flex items-center justify-start"
        :class="{
        'text-indigo-950 border-solid md:border-r border-b border-red-500 md:border-r-4 md:border-b-0 border-b-4 active':
            itemActive === Number(item),
        }"
    >
        <a
        href=""
        @click.prevent="fnClick"
        class="hover:text-indigo-950 flex items-center justify-start text-left"
        >{{ text }}</a
        >        
    </li>
    <span class="md:hidden inline-block ml-2 flex items-center"> - </span>
</template>