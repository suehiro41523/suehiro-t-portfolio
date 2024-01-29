<script setup>
import Header from "../js/components/Header.vue";
import Footer from "../js/components/Footer.vue";
import EditContent from "../js/components/EditContent.vue";
import CreateContent from "../js/components/CreateContent.vue";
import useWorks from "../js/composabe/works.js";

import { onMounted, ref, watch, Suspense } from "vue";

const { errors, getWork, work, getWorks, works } = useWorks();
const loggedIn = ref(true);
const openEdit = ref(false);
const editingId = ref(null);
onMounted(() => {
    getWorks();
});
// 最新のデータを取得したいが、watchで無限ループが発生し、too many requestを引き起こす。#課題
watch(openEdit, () => getWorks());
const openCreate = ref(false);

const testId = {
    id: "suehiro",
    password: "pass",
};

const clickLogin = (e) => {
    console.log(id.value);
    console.log(password.value);
    if (testId.id == id.value) {
        if (testId.password == password.value) {
            loggedIn.value = !loggedIn.value;
        }
    }
    if (testId.id == id.value) {
        console.log("id is correct");
    } else {
        console.log("id is wrong");
    }
    if (testId.password == password.value) {
        console.log("pass is correct");
    } else {
        console.log("pass is wrong");
    }
};
const editContent = (e) => {
    openEdit.value = true;
    console.log(openEdit);

    editingId.value = e.id;
    getWork(e.id);
};
const createContent = (e) => {
    openCreate.value = !openCreate.value;
};
const closeEdit = () => {
    openEdit.value = false;
    getWorks();
    console.log("closeEdit has been ran");
};

const closeCreate = () => {
    openCreate.value = false;
    getWorks();
    console.log("closeCreate has been ran");
};
</script>

<template>
    <Header></Header>
    <section>
        <div v-if="!loggedIn">
            <div class="flex flex-col">
                <section class="">
                    <div
                        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
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
        </div>
        <div class="pt-32 container mx-auto">
            <div class="w-[340px]">
                <div class="flex justify-between">
                    <h2 class="text-gray-50 font-bold text-xl">Website</h2>
                    <button
                        v-on:click.prevent="createContent('work')"
                        class="bg-green-400 text-xl text-gray-50 p-2 rounded-lg"
                    >
                        新規登録
                    </button>
                </div>
                <ul class="mt-6 flex flex-col gap-6">
                    <li v-for="work in works">
                        <div
                            class="text-lg font-bold text-gray-50 bg-gray-700 px-3 py-2 rounded-md flex justify-between"
                            v-on:click="editContent(work)"
                        >
                            {{ work.title }}
                            <img src="../../public/img/ico-edit.svg" alt="" />
                        </div>
                    </li>
                </ul>
                <EditContent
                    :openEdit="openEdit"
                    :editingId="editingId"
                    :closeEdit="closeEdit"
                ></EditContent>
                <CreateContent
                    :openCreate="openCreate"
                    :closeCreate="closeCreate"
                ></CreateContent>
            </div>
        </div>
    </section>
    <Footer></Footer>
</template>
