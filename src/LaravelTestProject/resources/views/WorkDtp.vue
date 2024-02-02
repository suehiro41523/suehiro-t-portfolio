<script setup>
import Header from "../js/components/Header.vue";
import Heading2 from "../js/components/Heading2.vue";
import Footer from "../js/components/Footer.vue";
import useDtps from "../js/composabe/dtps.js";
import { watch, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const { getDtp, dtp, getDtps, dtps } = useDtps();

const route = useRoute();
onMounted(() => getDtp(route.params.id));
</script>

<template>
    <Header></Header>
    <main class="container mx-auto">
        <div class="flex flex-col gap-0">
            <Heading2 noMargin title="dtps"></Heading2>
            <h3 class="text-3xl font-bold text-gray-400 ml-4">
                {{ dtp.title }}
            </h3>
            <div class="flex gap-14 mt-14">
                <div class="text-gray-50 bg-gray-700 px-3 py-4 h-fit">
                    {{ dtp.content }}
                </div>
                <img
                    class="max-w-[40%]"
                    :src="
                        'https://suehiro-portfolio.s3.ap-northeast-1.amazonaws.com/images/' +
                        dtp.image
                    "
                    alt=""
                />
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
