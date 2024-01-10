<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
    <Header menuLists=""></Header>
    <main class="min-h-screen">
        <router-view></router-view>
    </main>
    <Footer></Footer>
</template>
