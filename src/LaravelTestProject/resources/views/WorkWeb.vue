<script setup>
import Header from "../js/components/Header.vue";
import Heading2 from "../js/components/Heading2.vue";
import Footer from "../js/components/Footer.vue";
import useWorks from "../js/composabe/works.js";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import { useHead } from "@unhead/vue";

const { getWork, work, getWorks, works } = useWorks();
async function appendTitle() {
    await getWork(route.params.id);
    await useHead({
        title: `${work.value.title} | すえひろのポートフォリオサイト`,
    });
}
appendTitle();

marked.setOptions({
    breaks: true,
});
const parsedWork = () => {
    try {
        return marked.parse(work.value.content);
    } catch (error) {
        setTimeout(() => {
            return marked.parse(work.value.content);
        }, 500);
    }
};

const route = useRoute();
onMounted(() => getWork(route.params.id));
</script>

<template>
    <Header></Header>
    <main class="container mx-auto">
        <div class="flex flex-col gap-0 px-4">
            <Heading2 noMargin title="Works"></Heading2>
            <h3 class="ml-4 text-3xl font-bold text-gray-400">
                {{ work.title }}
            </h3>
            <div class="mt-14 flex flex-col gap-14 md:flex-row">
                <div
                    v-html="parsedWork()"
                    class="parsed h-fit bg-gray-700 px-3 py-4 text-gray-50"
                ></div>
                <img
                    class="md:max-w-[40%]"
                    :src="
                        'https://suehiro-portfolio.s3.ap-northeast-1.amazonaws.com/images/' +
                        work.image
                    "
                    alt=""
                />
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
