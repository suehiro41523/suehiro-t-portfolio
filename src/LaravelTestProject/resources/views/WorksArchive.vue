<script setup>
import Header from "../js/components/Header.vue";
import Footer from "../js/components/Footer.vue";
import Heading2 from "../js/components/Heading2.vue";
import Heading3 from "../js/components/Heading3.vue";
import useWorks from "../js/composabe/works.js";
import useDtps from "../js/composabe/dtps.js";
import router from "../js/router";
import { onMounted } from "vue";
import { useHead } from "@unhead/vue";

useHead({
    title: "作品アーカイブ | すえひろのポートフォリオサイト",
});

const { getWork, work, getWorks, works } = useWorks();
const { getDtp, dtp, getDtps, dtps } = useDtps();
onMounted(() => getWorks());
onMounted(() => getDtps());
</script>

<template>
    <Header></Header>
    <main class="container md:px-0 px-4 min-h-screen mx-auto relative">
        <div>
            <Heading2 noMargin title="Works"></Heading2>
            <div class="text-gray-50 text-3xl font-bold mb-20">作品一覧</div>
            <Heading3 title="Webサイト"></Heading3>
            <div
                class="relative max-w-[100vw] grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-4 mb-6"
            >
                <div
                    class="md:[&:nth-child(3n)]:ml-auto md:[&:nth-child(3n-1)]:mx-auto"
                    v-for="work in works"
                >
                    <router-link
                        class=""
                        :to="'/works-archive/website/' + work.id"
                    >
                        <p
                            class="w-fit text-gray-50 font-bold md:text-base text-sm whitespace-nowrap text-ellipsis"
                        >
                            {{ work.title }}
                        </p>
                        <img
                            class="lg:w-[288px] w-[210px] aspect-video rounded-md object-cover object-top transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20"
                            :src="
                                'https://suehiro-portfolio.s3.ap-northeast-1.amazonaws.com/images/' +
                                work.image
                            "
                            alt=""
                        />
                    </router-link>
                </div>
            </div>
            <Heading3 title="DTP"></Heading3>
            <div
                class="relative max-w-[100vw] grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-4 mb-6"
            >
                <div
                    class="md:[&:nth-child(3n)]:ml-auto md:[&:nth-child(3n-1)]:mx-auto"
                    v-for="dtp in dtps"
                    @click="router.push('/works-archive/dtp/' + dtp.id)"
                >
                    <p class="text-gray-50 font-bold">{{ dtp.title }}</p>
                    <img
                        class="lg:w-[288px] w-[210px] lg:h-[162px] h-[118px] rounded-md object-cover object-top transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20"
                        :src="
                            'https://suehiro-portfolio.s3.ap-northeast-1.amazonaws.com/images/' +
                            dtp.image
                        "
                        alt=""
                    />
                </div>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
