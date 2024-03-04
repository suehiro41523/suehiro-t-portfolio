<script setup>
import Header from "../js/components/Header.vue";
import Footer from "../js/components/Footer.vue";
import Heading2 from "../js/components/Heading2.vue";
import Heading3 from "../js/components/Heading3.vue";
import useBlogs from "../js/composabe/blogs.js";
import { onMounted } from "vue";
import { marked } from "marked";
import { useHead } from "@unhead/vue";

useHead({
    title: "ブログアーカイブ | すえひろのポートフォリオサイト",
});
const { getBlog, blog, getBlogs, blogs } = useBlogs();

onMounted(() => getBlogs());
</script>

<template>
    <Header></Header>
    <main class="container px-4 md:px-0 min-h-screen mx-auto relative">
        <Heading2 title="blogs"></Heading2>
        <div
            class="relative md:px-0 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 mb-6"
        >
            <div class="" v-for="(blog, i) in blogs">
                <router-link :to="'/blogs-archive/' + blog.id">
                    <div
                        class="lg:w-[288px] md:w-[210px] h-full rounded-md object-cover object-top transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20 text-gray-50 bg-gray-700 flex flex-col gap-3 px-4 py-2"
                    >
                        <p class="text-xl font-bold">
                            {{ blog.title }}
                        </p>
                        <p
                            v-html="
                                marked
                                    .parse(blog.content)
                                    .match(
                                        /[^\<\>]+(?=\<[^\<\>]+\>)|[^\<\>]+$/g,
                                    )
                                    .toString()
                                    .substring(0, 60) + '...'
                            "
                            class="text-gray-50 text-sm"
                        ></p>
                    </div>
                </router-link>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
