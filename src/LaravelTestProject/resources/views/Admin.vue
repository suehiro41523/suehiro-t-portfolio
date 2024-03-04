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
                    class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[calc(100vh-160px)] lg:py-0"
                >
                    <div
                        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1
                                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-100"
                            >
                                管理者ログイン
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        for="id"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                        >ID</label
                                    >
                                    <input
                                        v-model="id"
                                        autocomplete="off"
                                        type="text"
                                        name="id"
                                        id="id"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="your id"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                        >パスワード</label
                                    >
                                    <input
                                        v-model="password"
                                        autocomplete="off"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                </div>

                                <button
                                    type="submit"
                                    v-on:click.prevent="clickLogin()"
                                    class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    ログイン
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div v-if="loggedIn" class="pt-32 container mx-auto md:px-0 px-4">
            <div class="w-[340px]">
                <div class="flex flex-col gap-12">
                    <div>
                        <div class="flex justify-between">
                            <h2 class="text-gray-50 font-bold text-xl">
                                Website
                            </h2>
                            <button
                                v-on:click.prevent="createContent('work')"
                                class="bg-green-400 text-xl text-gray-50 p-2 rounded-lg"
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
                                    class="text-lg font-bold text-gray-50 bg-gray-700 px-3 py-2 rounded-md flex justify-between"
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
                            <h2 class="text-gray-50 font-bold text-xl">DTP</h2>
                            <button
                                v-on:click.prevent="createContent('dtp')"
                                class="bg-green-400 text-xl text-gray-50 p-2 rounded-lg"
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
                                    class="text-lg font-bold text-gray-50 bg-gray-700 px-3 py-2 rounded-md flex justify-between"
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
                            <h2 class="text-gray-50 font-bold text-xl">Blog</h2>
                            <button
                                v-on:click.prevent="createContent('blog')"
                                class="bg-green-400 text-xl text-gray-50 p-2 rounded-lg"
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
                                    class="text-lg font-bold text-gray-50 bg-gray-700 px-3 py-2 rounded-md flex justify-between"
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
