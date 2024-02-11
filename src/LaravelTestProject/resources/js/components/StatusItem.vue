<script setup>
defineProps({
    title: String,
    value: String,
});
</script>

<template>
    <div class="flex md:flex-row flex-col md:gap-4 gap-0 text-xs">
        <div class="flex">
            <span class="block w-[60px]">
                {{ title }}
            </span>
            <span> : </span>
        </div>
        <span class="font-bold">
            {{ value }}
        </span>
    </div>
</template>
