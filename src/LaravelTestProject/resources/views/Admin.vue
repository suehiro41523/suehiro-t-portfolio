<script setup>
import Header from "../js/components/Header.vue";
import Footer from "../js/components/Footer.vue";
import EditContent from "../js/components/EditContent.vue";
import CreateContent from "../js/components/CreateContent.vue";
import useWorks from "../js/composabe/works.js";
import useDtps from "../js/composabe/dtps.js";
import useBlogs from "../js/composabe/blogs.js";
import { onMounted, ref, watch } from "vue";
import { useHead } from "@unhead/vue";

useHead({
    title: `管理画面 | すえひろのポートフォリオサイト`,
});

const { getWork, work, getWorks, works } = useWorks();
const { getDtp, dtp, getDtps, dtps } = useDtps();
const { getBlog, blog, getBlogs, blogs } = useBlogs();
const loggedIn = ref(false);
const openEdit = ref(false);
const editingId = ref(0);
const id = ref("");
const password = ref("");
const openingCategory = ref("");
onMounted(() => {
    getDtps();
    getWorks();
    getBlogs();
});
watch(openEdit, () => getWorks());
watch(openEdit, () => getDtps());
watch(openEdit, () => getBlogs());
const openCreate = ref(false);

const envId = import.meta.env.VITE_ADMIN_ID;
const envPass = import.meta.env.VITE_ADMIN_PASS;

const clickLogin = () => {
    if (id.value == envId) {
        if (password.value == envPass) {
            console.log("login successed");
            loggedIn.value = true;
        }
    } else {
        window.confirm("パスワードまたはIDが間違っています。");
    }
};
const editContent = (e, cat) => {
    openEdit.value = true;
    openingCategory.value = cat;
    editingId.value = e.id;
    switch (cat) {
        case "work":
            getWork(e.id);
            break;
        case "dtp":
            getDtp(e.id);
            break;
        case "blog":
            getBlog(e.id);
            break;
        default:
            break;
    }
};
const createContent = async (cat) => {
    await (openingCategory.value = cat);
    openCreate.value = !openCreate.value;
};
const closeEdit = async () => {
    openEdit.value = false;
    getWorks();
};

const closeCreate = () => {
    openCreate.value = false;
    getWorks();
};
</script>

<template>
    <Header></Header>
    <main>
        <div v-if="!loggedIn">
            <section class="">
                <div
                    class="mx-auto flex h-[calc(100vh-160px)] flex-col items-center justify-center px-6 py-8 lg:py-0"
                >
                    <div
                        class="bg-white w-full rounded-lg shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
                            <h1
                                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-100"
                            >
                                管理者ログイン
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        for="id"
                                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
                                        >ID</label
                                    >
                                    <input
                                        v-model="id"
                                        autocomplete="off"
                                        type="text"
                                        name="id"
                                        id="id"
                                        class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="your id"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
                                        >パスワード</label
                                    >
                                    <input
                                        v-model="password"
                                        autocomplete="off"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        required=""
                                    />
                                </div>

                                <button
                                    type="submit"
                                    v-on:click.prevent="clickLogin()"
                                    class="text-white w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    ログイン
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div v-if="loggedIn" class="container mx-auto px-4 pt-32 md:px-0">
            <div class="w-[340px]">
                <div class="flex flex-col gap-12">
                    <div>
                        <div class="flex justify-between">
                            <h2 class="text-xl font-bold text-gray-50">
                                Website
                            </h2>
                            <button
                                v-on:click.prevent="createContent('work')"
                                class="rounded-lg bg-green-400 p-2 text-xl text-gray-50"
                            >
                                新規登録
                            </button>
                        </div>
                        <div
                            class="text-lg text-gray-50"
                            v-if="works.length == 0"
                        >
                            Websiteにはコンテンツがありません
                        </div>
                        <ul
                            v-if="works.length !== 0"
                            class="mt-6 flex flex-col gap-6"
                        >
                            <li v-for="work in works">
                                <div
                                    class="flex justify-between rounded-md bg-gray-700 px-3 py-2 text-lg font-bold text-gray-50"
                                    v-on:click="editContent(work, 'work')"
                                >
                                    {{ work.title }}
                                    <img
                                        src="../../public/img/ico-edit.svg"
                                        alt=""
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <h2 class="text-xl font-bold text-gray-50">DTP</h2>
                            <button
                                v-on:click.prevent="createContent('dtp')"
                                class="rounded-lg bg-green-400 p-2 text-xl text-gray-50"
                            >
                                新規登録
                            </button>
                        </div>
                        <div
                            class="text-lg text-gray-50"
                            v-if="dtps.length == 0"
                        >
                            DTPにはコンテンツがありません
                        </div>
                        <ul
                            v-if="dtps.length !== 0"
                            class="mt-6 flex flex-col gap-6"
                        >
                            <li v-for="dtp in dtps">
                                <div
                                    class="flex justify-between rounded-md bg-gray-700 px-3 py-2 text-lg font-bold text-gray-50"
                                    v-on:click="editContent(dtp, 'dtp')"
                                >
                                    {{ dtp.title }}
                                    <img
                                        src="../../public/img/ico-edit.svg"
                                        alt=""
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <h2 class="text-xl font-bold text-gray-50">Blog</h2>
                            <button
                                v-on:click.prevent="createContent('blog')"
                                class="rounded-lg bg-green-400 p-2 text-xl text-gray-50"
                            >
                                新規登録
                            </button>
                        </div>
                        <div
                            class="text-lg text-gray-50"
                            v-if="blogs.length == 0"
                        >
                            blogにはコンテンツがありません
                        </div>
                        <ul
                            v-if="blogs.length !== 0"
                            class="mt-6 flex flex-col gap-6"
                        >
                            <li v-for="blog in blogs">
                                <div
                                    class="flex justify-between rounded-md bg-gray-700 px-3 py-2 text-lg font-bold text-gray-50"
                                    v-on:click="editContent(blog, 'blog')"
                                >
                                    {{ blog.title }}
                                    <img
                                        src="../../public/img/ico-edit.svg"
                                        alt=""
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <CreateContent
                    :openCreate="openCreate"
                    :closeCreate="closeCreate"
                    :openingCategory="openingCategory"
                ></CreateContent>
                <EditContent
                    :openEdit="openEdit"
                    :editingId="editingId"
                    :closeEdit="closeEdit"
                    :openingCategory="openingCategory"
                ></EditContent>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
