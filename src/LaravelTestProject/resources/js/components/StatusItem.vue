<script setup>
defineProps({
    title: String,
    value: String,
});
</script>

<template>
    <div class="flex gap-4 text-xs">
        <span>
            {{ title }}
        </span>
        <span> : </span>
        <span>
            {{ value }}
        </span>
    </div>
</template>
