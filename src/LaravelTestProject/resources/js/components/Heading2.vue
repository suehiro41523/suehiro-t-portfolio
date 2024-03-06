<script setup>
defineProps({
    title: String,
    noMargin: Boolean,
});
const capitalize = function (str) {
    if (typeof str !== "string" || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
</script>

<template>
    <h2
        v-if="!noMargin"
        :id="title"
        class="relative mb-20 ml-4 mt-24 w-fit bg-blue-800 py-1 pl-3 pr-6 text-2xl font-bold text-gray-200 before:absolute before:-left-4 before:top-0 before:block before:h-full before:w-[6px] before:bg-blue-800"
    >
        {{ capitalize(title) }}
    </h2>
    <h2
        v-if="noMargin"
        :id="title"
        class="relative mb-3 ml-4 mt-24 w-fit bg-blue-800 py-1 pl-3 pr-6 text-2xl font-bold text-gray-200 before:absolute before:-left-4 before:top-0 before:block before:h-full before:w-[6px] before:bg-blue-800"
    >
        {{ capitalize(title) }}
    </h2>
</template>
