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
            class="flex w-fit gap-4 rounded-md bg-gray-500 px-3 py-2 font-bold text-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20"
        >
            <span>{{ text }}</span>
            <img src="../../../public/img/ico-chevron-right.svg" alt="" />
        </div>
    </a>
</template>
