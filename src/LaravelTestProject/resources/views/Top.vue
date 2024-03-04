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
    <section class="container min-h-screen mx-auto relative">
        <div
            class="text-nowrap w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <h2 class="text-gray-400 text-2xl leading-8 font-bold">
                すえひろの
                <br class="lg:hidden" />
                ポートフォリオサイト
            </h2>
            <div
                class="text-gray-400 font-bold leading-7 tracking-[2.7px] text-lg"
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
            class="md:w-[100px] w-[60px] md:h-[100px] h-[60px] bg-yellow-200 [filter:blur(72px)] absolute md:top-1/4 top-1/2 left-1/4"
        ></div>
        <div
            class="w-[100px] h-[100px] bg-gray-600 [filter:blur(72px)] absolute top-3/4 left-1/3"
        ></div>
        <div class="absolute flex gap-[88px] right-1/4 -top-8">
            <div
                class="w-14 md:h-[446px] h-[370px] bg-purple-600 [filter:blur(43.5px)] rotate-[-30deg]"
            ></div>
            <div
                class="w-[25px] md:h-[446px] h-[370px] bg-blue-400 [filter:blur(43.5px)] rotate-[-30deg]"
            ></div>
        </div>
    </section>
    <section
        class="px-2 md:px-0 container mx-auto relative mb-20 md:overflow-x-clip overflow-x-hidden"
    >
        <Heading2 title="about"></Heading2>
        <div
            class="mb-24 relative before:absolute before:top-[30px] before:block before:left-1/4 before:w-[474px] before:h-[474px] before:border-[5px] before:rounded-full before:border-yellow-200 before:[filter:blur(39px)]"
        >
            <Heading3 title="Web技術への思い"></Heading3>
            <div class="flex lg:flex-row flex-col-reverse gap-8 relative">
                <div>
                    <div
                        class="mx-auto md:mx-0 md:ml-5 text-gray-700 md:text-xl text-lg font-bold px-4 py-3 bg-gray-400 w-fit rounded-lg before:w-4 before:h-[13px] before:bg-gray-400 before:block before:absolute relative before:-left-5 before:rounded-[50%] before:top-0 before:-translate-y-1/2"
                    >
                        Web技術を使って
                        <br class="md:hidden" />
                        社会に貢献したい！
                    </div>
                    <div class="text-gray-100 flex flex-col gap-3 pl-4 mt-3">
                        <span> 良くも悪くも私の原動力はこれに尽きます。 </span>
                        <span class="mt-4">
                            web技術に興味を持ったきっかけは
                            <br class="md:hidden" />大学生の時に
                        </span>
                        <div
                            class="bg-green-600 w-fit p-1 rounded-xl rounded-tl-none"
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
                    class="sticky right-0 top-6 mx-auto md:mx-0 flex [background-color:rgba(255,255,255,0.06)] p-3 rounded-xl gap-6 items-center w-fit h-fit"
                >
                    <div
                        class="md:w-[120px] w-[100px] md:h-[160px] h-[133px] rounded-lg px-1 pt-[10] bg-[radial-gradient(86.65%_86.87%_at_57.92%_96.71%,#44337A_0%,#1A202C_100%)]"
                    >
                        <img
                            class="md:translate-y-[20px] translate-y-[13px] md:scale-110 scale-125"
                            src="../../public/img/suehiro-icon.png"
                            alt=""
                        />
                    </div>
                    <div class="text-gray-100">
                        <div class="text-xl font-bold">すえひろ たつや</div>
                        <div class="flex flex-col gap-2 mt-[14px]">
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
            class="mx-auto lg:mx-0 w-fit text-gray-100 flex lg:flex-row flex-col-reverse gap-8 justify-between"
        >
            <div class="lg:w-1/2 max-w-[535px]">
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
                class="w-fit flex flex-col place-content-between relative before:absolute before:w-[2px] before:h-full before:bg-purple-400 before:left-1 before:top-4 after:absolute after:block after:w-[10px] after:h-[400px] after:bg-cyan-400 after:[filter:blur(52px)] after:left-1/2 after:-top-7 after:rotate-45"
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
        class="overflow-hidden bg-gray-900 relative before:absolute before:block before:w-[43px] before:h-[43px] before:bg-green-400 before:[filter:blur(47px)] before:rounded-full before:top-1/2 before:-translate-y-1/2 after:absolute after:block after:w-[43px] after:h-[43px] after:bg-purple-300 after:[filter:blur(47px)] after:rounded-full after:top-0 after:right-0"
    >
        <div class="w-fit text-gray-100 mx-auto py-8 flex flex-col gap-4">
            <div class="px-3">
                と、簡単に私についてまとめてみましたが、<br />
                上記の言葉にまとまるまでに様々な経験と思いをしてきています。
            </div>
            <div
                class="mx-2 px-3 py-2 rounded-lg [background-color:rgba(255,255,255,0.08)]"
            >
                これまでの私の経験を詳しくご覧いただくお時間があればぜひ<br />
                私のブログもご覧になってみてください。
            </div>
            <div class="ml-auto">
                <CtaButton text="最近のブログを見る" link="#blogs"></CtaButton>
            </div>
        </div>
    </section>
    <section class="px-2 md:px-0 container mx-auto">
        <Heading2 title="works"></Heading2>
        <div class="flex flex-col gap-[100px]">
            <div>
                <Heading3 title="Webサイト"></Heading3>
                <div
                    class="relative before:absolute before:block lg:before:w-[725px] md:before:w-[500px] before:w-[200px] before:h-[24px] before:bg-purple-300 lg:before:top-1/3 before:-top-1/4 before:[filter:blur(65px)]"
                >
                    <div
                        v-if="works.length == 0"
                        class="relative grid lg:grid-cols-3 grid-cols-2 gap-y-4 mb-6"
                    >
                        <div
                            class="lg:[&:nth-child(3n)]:ml-auto lg:[&:nth-child(3n-1)]:mx-auto"
                            v-for="i in 6"
                            :key="i"
                        >
                            <div
                                class="aspect-video bg-gray-300 rounded-md"
                            ></div>
                        </div>
                    </div>
                    <div
                        v-if="works.length !== 0"
                        class="relative grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-4 mb-6"
                    >
                        <div
                            class="lg:[&:nth-child(3n)]:ml-auto lg:[&:nth-child(3n-1)]:mx-auto"
                            v-for="work in works.slice(0, 6)"
                            @click="
                                router.push('/works-archive/website/' + work.id)
                            "
                        >
                            <img
                                class="aspect-video rounded-md object-cover object-top hover:cursor-pointer transition duration-300 block hover:shadow-lg hover:shadow-yellow-200/20"
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
                    class="z-10 relative before:absolute before:block before:w-[75px] before:h-[75px] before:bg-green-300 before:top-1/3 before:[filter:blur(65px)] md:before:left-2/3"
                >
                    <div
                        v-if="dtps.length == 0"
                        class="relative grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-4 mb-6"
                    >
                        <div
                            class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                            v-for="i in 6"
                            :key="i"
                        >
                            <div
                                class="aspect-video bg-gray-300 rounded-md"
                            ></div>
                        </div>
                    </div>
                    <div
                        v-if="dtps.length !== 0"
                        class="relative grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-4 mb-6"
                    >
                        <div
                            class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                            v-for="dtp in dtps.slice(0, 6)"
                            @click="router.push('/works-archive/dtp/' + dtp.id)"
                        >
                            <img
                                class="aspect-video rounded-md object-cover object-top hover:cursor-pointer transition duration-300 block hover:shadow-lg hover:shadow-yellow-200/20"
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
    <section class="px-2 md:px-0 container mx-auto">
        <Heading2 title="blogs"></Heading2>
        <div>
            <div
                v-if="blogs.length == 0"
                class="relative grid grid-cols-3 gap-y-4 mb-6"
            >
                <div
                    class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                    v-for="i in 6"
                    :key="i"
                >
                    <div class="aspect-video bg-gray-300 rounded-md"></div>
                </div>
            </div>
            <div
                v-if="blogs.length !== 0"
                class="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 mb-6"
            >
                <div
                    class="lg:lg:w-[288px] w-full [&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto rounded-md object-cover object-top text-gray-50 bg-gray-700 flex flex-col gap-3 px-4 py-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-yellow-200/20"
                    v-for="blog in blogs.slice(0, 6)"
                >
                    <div
                        class=""
                        @click="router.push('blogs-archive/' + blog.id)"
                    >
                        <h3
                            class="text-xl font-bold overflow-hidden whitespace-nowrap text-ellipsis"
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
                            class="text-sm preparsed"
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
