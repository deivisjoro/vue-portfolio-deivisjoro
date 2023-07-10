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
        class="my-2 py-2 md:pr-0 pr-3 flex items-center justify-start"
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
        <span class="md:hidden inline-block ml-2"> - </span>
    </li>
</template>