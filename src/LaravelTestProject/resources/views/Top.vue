<script setup>
import Header from "../js/components/Header.vue";
import Footer from "../js/components/Footer.vue";
import TopWorks from "../js/components/TopWorks.vue";
import Heading2 from "../js/components/Heading2.vue";
import Heading3 from "../js/components/Heading3.vue";
import StatusItem from "../js/components/StatusItem.vue";
import TimelineItems from "../js/components/TimelineItems.vue";
import CtaButton from "../js/components/CtaButton.vue";

import useWorks from "../js/composabe/works";
import useDtps from "../js/composabe/dtps";
import useBlogs from "../js/composabe/blogs";
import { onMounted } from "vue";
import { useHead } from "@unhead/vue";
import router from "../js/router";
import { marked } from "marked";

useHead({
    title: "すえひろのポートフォリオサイト",
});

const { getWorks, works } = useWorks();
const { getDtps, dtps } = useDtps();
const { getBlogs, blogs } = useBlogs();
onMounted(() => getWorks());
onMounted(() => getDtps());
onMounted(() => getBlogs());

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
    <section class="container relative mx-auto min-h-screen">
        <div
            class="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 text-nowrap"
        >
            <h2 class="text-2xl font-bold leading-8 text-gray-400">
                すえひろの
                <br class="lg:hidden" />
                ポートフォリオサイト
            </h2>
            <div
                class="text-lg font-bold leading-7 tracking-[2.7px] text-gray-400"
            >
                をご覧いただき
                <br class="lg:hidden" />
                ありがとうございます。
            </div>
        </div>
        <div class="absolute bottom-5 sm:bottom-10">
            <TopWorks></TopWorks>
        </div>

        <div
            class="absolute left-1/4 top-1/2 h-[60px] w-[60px] bg-yellow-200 [filter:blur(72px)] md:top-1/4 md:h-[100px] md:w-[100px]"
        ></div>
        <div
            class="absolute left-1/3 top-3/4 h-[100px] w-[100px] bg-gray-600 [filter:blur(72px)]"
        ></div>
        <div class="absolute -top-8 right-1/4 flex gap-[88px]">
            <div
                class="h-[370px] w-14 rotate-[-30deg] bg-purple-600 [filter:blur(43.5px)] md:h-[446px]"
            ></div>
            <div
                class="h-[370px] w-[25px] rotate-[-30deg] bg-blue-400 [filter:blur(43.5px)] md:h-[446px]"
            ></div>
        </div>
    </section>
    <section
        class="container relative mx-auto mb-20 overflow-x-hidden px-2 md:overflow-x-clip md:px-0"
    >
        <Heading2 title="about"></Heading2>
        <div
            class="relative mb-24 before:absolute before:left-1/4 before:top-[30px] before:block before:h-[474px] before:w-[474px] before:rounded-full before:border-[5px] before:border-yellow-200 before:[filter:blur(39px)]"
        >
            <Heading3 title="Web技術への思い"></Heading3>
            <div class="relative flex flex-col-reverse gap-8 lg:flex-row">
                <div>
                    <div
                        class="relative mx-auto w-fit rounded-lg bg-gray-400 px-4 py-3 text-lg font-bold text-gray-700 before:absolute before:-left-5 before:top-0 before:block before:h-[13px] before:w-4 before:-translate-y-1/2 before:rounded-[50%] before:bg-gray-400 md:mx-0 md:ml-5 md:text-xl"
                    >
                        Web技術を使って
                        <br class="md:hidden" />
                        社会に貢献したい！
                    </div>
                    <div class="mt-3 flex flex-col gap-3 pl-4 text-gray-100">
                        <span> 良くも悪くも私の原動力はこれに尽きます。 </span>
                        <span class="mt-4">
                            web技術に興味を持ったきっかけは
                            <br class="md:hidden" />大学生の時に
                        </span>
                        <div
                            class="w-fit rounded-xl rounded-tl-none bg-green-600 p-1"
                        >
                            最近よく耳にするな〜、触ってみるか。
                        </div>
                        <span> という些細なことでした。 </span>
                        <span>
                            しかし、学習を進めるごとに
                            <br class="md:hidden" />
                            興味関心は募るばかりです。<br />
                            今の私には企業の技術責任者様のような
                            <br class="md:hidden" />
                            偉業はないですが、<br />
                            地道にコツコツ研鑽を積み、
                        </span>
                        <span class="font-bold">
                            社会にとって役立つサービスが発信できる人に<br />
                            成っていきたいという気持ちを持って日々励んでおります。
                        </span>
                    </div>
                </div>
                <div
                    class="right-0 top-6 mx-auto flex h-fit w-fit items-center gap-6 rounded-xl p-3 [background-color:rgba(255,255,255,0.06)] md:mx-0 lg:sticky"
                >
                    <div
                        class="h-[133px] w-[100px] rounded-lg bg-[radial-gradient(86.65%_86.87%_at_57.92%_96.71%,#44337A_0%,#1A202C_100%)] px-1 pt-[10] md:h-[160px] md:w-[120px]"
                    >
                        <img
                            class="translate-y-[13px] scale-125 md:translate-y-[20px] md:scale-110"
                            src="../../public/img/suehiro-icon.png"
                            alt=""
                        />
                    </div>
                    <div class="text-gray-100">
                        <div class="text-xl font-bold">すえひろ たつや</div>
                        <div class="mt-[14px] flex flex-col gap-2">
                            <StatusItem
                                title="現拠点"
                                value="広島県 - 広島市"
                            ></StatusItem>
                            <StatusItem
                                title="最終学歴"
                                value="長崎県立大学経営学部"
                            ></StatusItem>
                            <StatusItem
                                title="好きなこと"
                                value="デザイン、写真撮影、料理"
                            ></StatusItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Heading3 title="これまでの学習"></Heading3>
        <div
            class="mx-auto flex w-fit flex-col-reverse justify-between gap-8 text-gray-100 lg:mx-0 lg:flex-row"
        >
            <div class="max-w-[535px] lg:w-1/2">
                当たり前と言えば当たり前ですが、<br />
                私は定期的に目標の立て直しをして技術力の向上を図っています。<br />
                <br />
                主となる目標を立てるごとに湧き出る疑問<br />
                を解消しながら着々と技術を身につけてきています。<br />
                <br />
                今はバックエンドの技術、組織での動き方を知るために基本情報技術者試験の合格を目標に学習を進めております。<br />
                <br />
                今の直近の大きな目標は<br />
                webアプリの全容を理解して制作に参加することです。
            </div>
            <div
                class="relative flex w-fit flex-col place-content-between before:absolute before:left-1 before:top-4 before:h-full before:w-[2px] before:bg-purple-400 after:absolute after:-top-7 after:left-1/2 after:block after:h-[400px] after:w-[10px] after:rotate-45 after:bg-cyan-400 after:[filter:blur(52px)]"
            >
                <TimelineItems
                    goal="HTMLを理解する"
                    point="httpって？"
                ></TimelineItems
                ><TimelineItems
                    goal="CSSフレームワークを使って1ページ作ってみる"
                    point="cdnって？"
                ></TimelineItems
                ><TimelineItems
                    goal="JavaScriptを理解する"
                    point="nodejsとCommonJSは違うの？"
                ></TimelineItems
                ><TimelineItems
                    goal="ライブラリを導入してみる"
                    point="ターミナル？npmって？"
                ></TimelineItems>
                <TimelineItems
                    goal="LaravelとVueでサイトを作ってみる"
                    point="artisanコマンドでデータベースの作成？"
                ></TimelineItems>
            </div>
        </div>
    </section>
    <section
        class="relative overflow-hidden bg-gray-900 before:absolute before:top-1/2 before:block before:h-[43px] before:w-[43px] before:-translate-y-1/2 before:rounded-full before:bg-green-400 before:[filter:blur(47px)] after:absolute after:right-0 after:top-0 after:block after:h-[43px] after:w-[43px] after:rounded-full after:bg-purple-300 after:[filter:blur(47px)]"
    >
        <div class="mx-auto flex w-fit flex-col gap-4 py-8 text-gray-100">
            <div class="px-3">
                と、簡単に私についてまとめてみましたが、<br />
                上記の言葉にまとまるまでに様々な経験と思いをしてきています。
            </div>
            <div
                class="mx-2 rounded-lg px-3 py-2 [background-color:rgba(255,255,255,0.08)]"
            >
                これまでの私の経験を詳しくご覧いただくお時間があればぜひ<br />
                私のブログもご覧になってみてください。
            </div>
            <div class="ml-auto">
                <CtaButton text="最近のブログを見る" link="#blogs"></CtaButton>
            </div>
        </div>
    </section>
    <section class="container mx-auto px-2 md:px-0">
        <Heading2 title="works"></Heading2>
        <div class="flex flex-col gap-[100px]">
            <div>
                <Heading3 title="Webサイト"></Heading3>
                <div
                    class="relative before:absolute before:-top-1/4 before:block before:h-[24px] before:w-[200px] before:bg-purple-300 before:[filter:blur(65px)] md:before:w-[500px] lg:before:top-1/3 lg:before:w-[725px]"
                >
                    <div
                        v-if="works.length == 0"
                        class="relative mb-6 grid grid-cols-2 gap-y-4 lg:grid-cols-3"
                    >
                        <div
                            class="lg:[&:nth-child(3n)]:ml-auto lg:[&:nth-child(3n-1)]:mx-auto"
                            v-for="i in 6"
                            :key="i"
                        >
                            <div
                                class="aspect-video rounded-md bg-gray-300"
                            ></div>
                        </div>
                    </div>
                    <div
                        v-if="works.length !== 0"
                        class="relative mb-6 grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-3"
                    >
                        <div
                            class="lg:[&:nth-child(3n)]:ml-auto lg:[&:nth-child(3n-1)]:mx-auto"
                            v-for="work in works.slice(0, 6)"
                            @click="
                                router.push('/works-archive/website/' + work.id)
                            "
                        >
                            <img
                                class="block aspect-video rounded-md object-cover object-top transition duration-300 hover:cursor-pointer hover:shadow-lg hover:shadow-yellow-200/20"
                                :src="
                                    'https://suehiro-portfolio.s3.ap-northeast-1.amazonaws.com/images/' +
                                    work.image
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Heading3 title="DTP"></Heading3>
                <div
                    class="relative z-10 before:absolute before:top-1/3 before:block before:h-[75px] before:w-[75px] before:bg-green-300 before:[filter:blur(65px)] md:before:left-2/3"
                >
                    <div
                        v-if="dtps.length == 0"
                        class="relative mb-6 grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-3"
                    >
                        <div
                            class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                            v-for="i in 6"
                            :key="i"
                        >
                            <div
                                class="aspect-video rounded-md bg-gray-300"
                            ></div>
                        </div>
                    </div>
                    <div
                        v-if="dtps.length !== 0"
                        class="relative mb-6 grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-3"
                    >
                        <div
                            class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                            v-for="dtp in dtps.slice(0, 6)"
                            @click="router.push('/works-archive/dtp/' + dtp.id)"
                        >
                            <img
                                class="block aspect-video rounded-md object-cover object-top transition duration-300 hover:cursor-pointer hover:shadow-lg hover:shadow-yellow-200/20"
                                :src="
                                    'https://suehiro-portfolio.s3.ap-northeast-1.amazonaws.com/images/' +
                                    dtp.image
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="ml-auto w-fit">
                <CtaButton
                    text="作品一覧をみる"
                    link="/works-archive"
                ></CtaButton>
            </div>
        </div>
    </section>
    <section class="container mx-auto px-2 md:px-0">
        <Heading2 title="blogs"></Heading2>
        <div>
            <div
                v-if="blogs.length == 0"
                class="relative mb-6 grid grid-cols-3 gap-y-4"
            >
                <div
                    class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                    v-for="i in 6"
                    :key="i"
                >
                    <div class="aspect-video rounded-md bg-gray-300"></div>
                </div>
            </div>
            <div
                v-if="blogs.length !== 0"
                class="relative mb-6 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
            >
                <div
                    class="flex w-full cursor-pointer flex-col gap-3 rounded-md bg-gray-700 object-cover object-top px-4 py-2 text-gray-50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20 lg:lg:w-[288px] [&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                    v-for="blog in blogs.slice(0, 6)"
                >
                    <div
                        class=""
                        @click="router.push('blogs-archive/' + blog.id)"
                    >
                        <h3
                            class="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold"
                        >
                            {{ blog.title }}
                        </h3>
                        <span
                            v-on:click.prevent
                            v-html="
                                marked
                                    .parse(blog.content)
                                    .match(
                                        /[^\<\>]+(?=\<[^\<\>]+\>)|[^\<\>]+$/g, // HTMLから文字のみ抽出
                                    )
                                    .toString()
                                    .substring(0, 54) + '...'
                            "
                            class="preparsed text-sm"
                        ></span>
                    </div>
                </div>
            </div>
            <div class="ml-auto w-fit">
                <CtaButton
                    text="ブログ一覧をみる"
                    link="/blogs-archive"
                ></CtaButton>
            </div>
        </div>
    </section>
    <Footer></Footer>
</template>
