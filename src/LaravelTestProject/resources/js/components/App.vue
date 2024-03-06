<script setup>
import { onMounted } from "vue";
import useWorks from "../composabe/works.js";

onMounted(() => {
    useWorks();
});
</script>

<template>
    <main class="flex min-h-screen flex-col justify-between">
        <router-view></router-view>
    </main>
</template>
