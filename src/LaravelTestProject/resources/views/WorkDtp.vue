<script setup>
import Header from "../js/components/Header.vue";
import Heading2 from "../js/components/Heading2.vue";
import Footer from "../js/components/Footer.vue";
import useDtps from "../js/composabe/dtps.js";
import { watch, ref, onMounted } from "vue";
import { marked } from "marked";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";

const { getDtp, dtp, getDtps, dtps } = useDtps();

async function appendTitle() {
    await getDtp(route.params.id);
    await useHead({
        title: `${dtp.value.title} | すえひろのポートフォリオサイト`,
    });
}
appendTitle();
marked.setOptions({
    breaks: true,
});
const parsedDtp = () => {
    try {
        return marked.parse(dtp.value.content);
    } catch (error) {
        setTimeout(() => {
            return marked.parse(dtp.value.content);
        }, 500);
    }
};

const route = useRoute();
onMounted(() => getDtp(route.params.id));
</script>

<template>
    <Header></Header>
    <main class="container mx-auto">
        <div class="flex flex-col gap-0 px-4 md:px-0">
            <Heading2 noMargin title="dtps"></Heading2>
            <h3 class="ml-4 text-3xl font-bold text-gray-400">
                {{ dtp.title }}
            </h3>
            <div class="mt-14 flex flex-col gap-14 md:flex-row">
                <div
                    v-html="parsedDtp()"
                    class="parsed h-fit bg-gray-700 px-3 py-4 text-gray-50"
                ></div>
                <img
                    class="md:max-w-[40%]"
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
