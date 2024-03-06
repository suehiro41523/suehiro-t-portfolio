<script setup>
defineProps({
    goal: String,
    point: String,
});
</script>

<template>
    <div
        class="relative mb-3 ml-7 flex w-fit flex-col gap-2 before:absolute before:-left-7 before:top-[7px] before:block before:h-[10px] before:w-[10px] before:rounded-full before:bg-purple-400 lg:flex-row lg:gap-8 lg:py-2"
    >
        <span>
            {{ goal }}
        </span>
        <div class="flex items-center gap-2 text-green-500">
            <img
                class="h-4 w-4"
                src="../../../public/img/ico-checkmark.svg"
                alt=""
            />
            <span>{{ point }}</span>
        </div>
    </div>
</template>
