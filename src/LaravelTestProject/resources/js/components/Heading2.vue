<script setup>
defineProps({
    title: String,
});
</script>

<template>
    <h2
        class="relative mb-20 mt-24 bg-blue-800 w-fit text-2xl font-bold text-gray-200 py-1 pl-3 pr-6 before:w-[6px] before:h-full before:top-0 before:block before:bg-blue-800 before:absolute before:-left-4 ml-4"
    >
        {{ title }}
    </h2>
</template>
