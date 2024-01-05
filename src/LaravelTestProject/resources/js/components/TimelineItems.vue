<script setup>
defineProps({
    goal: String,
    point: String,
});
</script>

<template>
    <div
        class="py-2 flex gap-8 relative ml-7 before:block before:w-[10px] before:h-[10px] before:bg-purple-400 before:rounded-full before:absolute before:top-[7px] before:-left-7"
    >
        <span>
            {{ goal }}
        </span>
        <div class="text-green-500 flex gap-2">
            <img src="../../../public/img/ico-checkmark.svg" alt="" />
            <span>{{ point }}</span>
        </div>
    </div>
</template>
