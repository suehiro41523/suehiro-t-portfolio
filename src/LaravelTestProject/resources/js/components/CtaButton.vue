<script setup>
defineProps({
    text: String,
    link: {
        type: String,
        default: "#",
    },
});
</script>

<template>
    <a class="" :href="link">
        <div
            class="bg-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20 rounded-md font-bold text-gray-700 flex gap-4 px-3 py-2 w-fit"
        >
            <span>{{ text }}</span>
            <img src="../../../public/img/ico-chevron-right.svg" alt="" />
        </div>
    </a>
</template>
