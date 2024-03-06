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
    <main class="container relative mx-auto min-h-screen px-4 md:px-0">
        <Heading2 title="blogs"></Heading2>
        <div
            class="relative mb-6 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:px-0"
        >
            <div class="" v-for="(blog, i) in blogs">
                <router-link :to="'/blogs-archive/' + blog.id">
                    <div
                        class="flex h-full flex-col gap-3 rounded-md bg-gray-700 object-cover object-top px-4 py-2 text-gray-50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20 md:w-[210px] lg:w-[288px]"
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
                            class="text-sm text-gray-50"
                        ></p>
                    </div>
                </router-link>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
