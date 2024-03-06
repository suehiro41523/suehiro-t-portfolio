<script setup>
defineProps({
    title: String,
});
</script>

<template>
    <h3
        class="relative mb-10 ml-4 text-xl font-bold text-gray-100 before:absolute before:-left-4 before:block before:h-full before:w-[6px] before:bg-gray-100"
    >
        {{ title }}
    </h3>
</template>
