<script setup>
defineProps({
    title: String,
});
const capitalize = function (str) {
    if (typeof str !== "string" || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
</script>

<template>
    <h2
        :id="title"
        class="relative mb-20 mt-24 bg-blue-800 w-fit text-2xl font-bold text-gray-200 py-1 pl-3 pr-6 before:w-[6px] before:h-full before:top-0 before:block before:bg-blue-800 before:absolute before:-left-4 ml-4"
    >
        {{ capitalize(title) }}
    </h2>
</template>
