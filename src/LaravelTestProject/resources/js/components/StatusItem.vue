<script setup>
defineProps({
    title: String,
    value: String,
});
</script>

<template>
    <div class="flex flex-col gap-0 text-xs md:flex-row md:gap-4">
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
