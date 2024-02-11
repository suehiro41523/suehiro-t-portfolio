<script setup>
defineProps({
    title: String,
});
</script>

<template>
    <h3
        class="mb-10 text-gray-100 text-xl font-bold relative ml-4 before:-left-4 before:block before:absolute before:w-[6px] before:h-full before:bg-gray-100"
    >
        {{ title }}
    </h3>
</template>
