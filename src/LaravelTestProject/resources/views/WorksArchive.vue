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
    <main class="container relative mx-auto min-h-screen px-4 md:px-0">
        <div>
            <Heading2 noMargin title="Works"></Heading2>
            <div class="mb-20 text-3xl font-bold text-gray-50">作品一覧</div>
            <Heading3 title="Webサイト"></Heading3>
            <div
                class="relative mb-6 grid max-w-[100vw] grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3"
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
                            class="w-fit text-ellipsis whitespace-nowrap text-sm font-bold text-gray-50 md:text-base"
                        >
                            {{ work.title }}
                        </p>
                        <img
                            class="aspect-video w-[210px] rounded-md object-cover object-top transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20 lg:w-[288px]"
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
                class="relative mb-6 grid max-w-[100vw] grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3"
            >
                <div
                    class="md:[&:nth-child(3n)]:ml-auto md:[&:nth-child(3n-1)]:mx-auto"
                    v-for="dtp in dtps"
                    @click="router.push('/works-archive/dtp/' + dtp.id)"
                >
                    <p class="font-bold text-gray-50">{{ dtp.title }}</p>
                    <img
                        class="h-[118px] w-[210px] rounded-md object-cover object-top transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20 lg:h-[162px] lg:w-[288px]"
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
