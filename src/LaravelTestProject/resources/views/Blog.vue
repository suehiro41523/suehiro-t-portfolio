<script setup>
import Header from "../js/components/Header.vue";
import Heading2 from "../js/components/Heading2.vue";
import Footer from "../js/components/Footer.vue";
import useBlogs from "../js/composabe/blogs";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { marked } from "marked";
const { getBlog, blog, getBlogs, blogs } = useBlogs();
import { useHead } from "@unhead/vue";

const route = useRoute();

async function appendTitle() {
    await getBlog(route.params.id);
    await useHead({
        title: `${blog.value.title} | すえひろのポートフォリオサイト`,
    });
}
appendTitle();
onMounted(() => getBlog(route.params.id));

marked.setOptions({
    breaks: true,
});
const parsedBlog = () => {
    try {
        return marked.parse(blog.value.content);
    } catch (error) {
        setTimeout(() => {
            return marked.parse(blog.value.content);
        }, 500);
    }
};
</script>

<template>
    <Header></Header>
    <main class="container mx-auto">
        <div class="flex flex-col gap-0">
            <Heading2 noMargin title="dtps"></Heading2>
            <h3 class="text-3xl font-bold text-gray-400 ml-4">
                {{ blog.title }}
            </h3>
            <div class="flex gap-14 mt-14">
                <div
                    class="text-gray-50 bg-gray-700 px-3 py-4 h-fit parsed"
                    v-html="parsedBlog()"
                ></div>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
