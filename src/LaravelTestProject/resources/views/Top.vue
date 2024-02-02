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

const { getWorks, works } = useWorks();
const { getDtps, dtps } = useDtps();
const { getBlogs, blogs } = useBlogs();
onMounted(() => getWorks());
onMounted(() => getDtps());
onMounted(() => getBlogs());
</script>

<template>
    <Header></Header>
    <section class="container min-h-screen mx-auto relative">
        <div
            class="w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <h2 class="text-gray-400 text-2xl leading-8 font-bold">
                すえひろのポートフォリオサイト
            </h2>
            <div
                class="text-gray-400 font-bold leading-7 tracking-[2.7px] text-lg"
            >
                をご覧いただきありがとうございます。
            </div>
        </div>
        <div class="absolute bottom-10">
            <TopWorks></TopWorks>
        </div>

        <div
            class="w-[100px] h-[100px] bg-yellow-200 [filter:blur(72px)] absolute top-1/4 left-1/4"
        ></div>
        <div
            class="w-[100px] h-[100px] bg-gray-600 [filter:blur(72px)] absolute top-3/4 left-1/3"
        ></div>
        <div class="absolute flex gap-[88px] right-1/4 -top-8">
            <div
                class="w-14 h-[446px] bg-purple-600 [filter:blur(43.5px)] rotate-[-30deg]"
            ></div>
            <div
                class="w-[25px] h-[446px] bg-blue-400 [filter:blur(43.5px)] rotate-[-30deg]"
            ></div>
        </div>
    </section>
    <section class="container mx-auto relative mb-20">
        <Heading2 title="about"></Heading2>
        <div
            class="mb-24 relative before:absolute before:top-[30px] before:block before:left-1/4 before:w-[474px] before:h-[474px] before:border-[5px] before:rounded-full before:border-yellow-200 before:[filter:blur(39px)]"
        >
            <Heading3 title="Web技術への思い"></Heading3>
            <div class="flex justify-between relative">
                <div>
                    <div
                        class="text-gray-700 text-xl font-bold px-4 py-3 bg-gray-400 w-fit rounded-lg before:w-4 before:h-[13px] before:bg-gray-400 before:block before:absolute relative ml-5 before:-left-5 before:rounded-[50%] before:top-0 before:-translate-y-1/2"
                    >
                        Web技術を使って社会に貢献したい！
                    </div>
                    <div class="text-gray-100 flex flex-col gap-3 pl-4 mt-3">
                        <span> 良くも悪くも私の原動力はこれに尽きます。 </span>
                        <span class="mt-4">
                            web技術に興味を持ったきっかけは大学生の時に
                        </span>
                        <div
                            class="bg-green-600 w-fit p-1 rounded-xl rounded-tl-none"
                        >
                            最近よく耳にするな〜、触ってみるか。
                        </div>
                        <span> という些細なことでした。 </span>
                        <span>
                            しかし、学習を進めるごとに興味関心は募るばかりです。<br />
                            今の私には企業の技術責任者様のような偉業はないですが、<br />
                            地道にコツコツ研鑽を積み、
                        </span>
                        <span class="font-bold">
                            社会にとって役立つサービスが発信できる人に<br />
                            成っていきたいという気持ちを持って日々励んでおります。
                        </span>
                    </div>
                </div>
                <div
                    class="flex [background-color:rgba(255,255,255,0.06)] p-3 rounded-xl sticky gap-6 items-center h-fit"
                >
                    <div
                        class="w-[120px] h-[152px] rounded-lg px-1 pt-[10] bg-[radial-gradient(86.65%_86.87%_at_57.92%_96.71%,#44337A_0%,#1A202C_100%)]"
                    >
                        <img
                            class="translate-y-[13px] scale-110"
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
        <Heading3 title="これまでの研鑽"></Heading3>
        <div class="text-gray-100 flex gap-8 justify-between">
            <div class="w-1/2 max-w-[535px]">
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
                class="flex flex-col place-content-between relative before:absolute before:w-[2px] before:h-full before:bg-purple-400 before:left-1 before:top-4 after:absolute after:block after:w-[10px] after:h-[400px] after:bg-cyan-400 after:[filter:blur(52px)] after:left-1/2 after:-top-7 after:rotate-45"
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
                class="px-3 py-2 rounded-lg [background-color:rgba(255,255,255,0.08)]"
            >
                これまでの私の経験を詳しくご覧いただくお時間があればぜひ<br />
                私のブログもご覧になってみてください。
            </div>
            <div class="ml-auto">
                <CtaButton text="最近のブログを見る" link="#"></CtaButton>
            </div>
        </div>
    </section>
    <section class="container mx-auto">
        <Heading2 title="works"></Heading2>
        <div class="flex flex-col gap-[100px]">
            <div>
                <Heading3 title="Webサイト"></Heading3>
                <div
                    class="relative before:absolute before:block before:w-[725px] before:h-[24px] before:bg-purple-300 before:top-1/3 before:[filter:blur(65px)]"
                >
                    <div
                        v-if="works.length == 0"
                        class="relative grid grid-cols-3 gap-y-4 mb-6"
                    >
                        <div
                            class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                            v-for="i in 6"
                            :key="i"
                        >
                            <div
                                class="w-[288px] h-[168px] bg-gray-300 rounded-md"
                            ></div>
                        </div>
                    </div>
                    <div class="relative grid grid-cols-3 gap-y-4 mb-6">
                        <div
                            class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                            v-for="(work, i) in works"
                        >
                            <img
                                v-if="i <= 5"
                                class="w-[288px] h-[168px] rounded-md object-cover object-top"
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
                    class="z-10 relative before:absolute before:block before:w-[75px] before:h-[75px] before:bg-green-300 before:top-1/3 before:[filter:blur(65px)] before:left-2/3"
                >
                    <div
                        v-if="dtps.length == 0"
                        class="relative grid grid-cols-3 gap-y-4 mb-6"
                    >
                        <div
                            class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                            v-for="i in 6"
                            :key="i"
                        >
                            <div
                                class="w-[288px] h-[168px] bg-gray-300 rounded-md"
                            ></div>
                        </div>
                    </div>
                    <div class="relative grid grid-cols-3 gap-y-4 mb-6">
                        <div
                            class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                            v-for="(dtp, i) in dtps"
                        >
                            <img
                                v-if="i <= 5"
                                class="w-[288px] h-[168px] rounded-md object-cover object-top"
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
    <section class="container mx-auto">
        <Heading2 title="blog"></Heading2>
        <div>
            <div class="grid grid-cols-3 gap-y-4 mb-6">
                <div
                    v-if="blogs.length == 0"
                    class="relative grid grid-cols-3 gap-y-4 mb-6"
                >
                    <div
                        class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                        v-for="i in 6"
                        :key="i"
                    >
                        <div
                            class="w-[288px] h-[168px] bg-gray-300 rounded-md"
                        ></div>
                    </div>
                </div>
                <div class="relative grid grid-cols-3 gap-y-4 mb-6">
                    <div
                        class="[&:nth-child(3n)]:ml-auto [&:nth-child(3n-1)]:mx-auto"
                        v-for="(blog, i) in blogs"
                    >
                        <div
                            v-if="i <= 5"
                            class="w-[288px] h-[120px] rounded-md object-cover object-top text-gray-50 bg-gray-700 flex flex-col gap-3 px-4 py-2"
                        >
                            <h3 class="text-xl font-bold">
                                {{ blog.title }}
                            </h3>
                            <p class="text-sm">
                                {{ blog.content.substring(0, 54) + "..." }}
                            </p>
                        </div>
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
