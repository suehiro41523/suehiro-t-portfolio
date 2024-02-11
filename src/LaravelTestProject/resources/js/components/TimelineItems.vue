<script setup>
defineProps({
    goal: String,
    point: String,
});
</script>

<template>
    <div
        class="w-fit lg:py-2 mb-3 flex lg:flex-row flex-col lg:gap-8 gap-2 relative ml-7 before:block before:w-[10px] before:h-[10px] before:bg-purple-400 before:rounded-full before:absolute before:top-[7px] before:-left-7"
    >
        <span>
            {{ goal }}
        </span>
        <div class="text-green-500 flex items-center gap-2">
            <img
                class="w-4 h-4"
                src="../../../public/img/ico-checkmark.svg"
                alt=""
            />
            <span>{{ point }}</span>
        </div>
    </div>
</template>
