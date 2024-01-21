<script setup>
import { onMounted } from "vue";
import useWorks from "../composabe/works.js";

onMounted(() => {
    useWorks();
});
const { getWork, work, getWorks, works } = useWorks();
</script>

<template>
    <main class="min-h-screen flex flex-col justify-between">
        <router-view></router-view>
    </main>
</template>
