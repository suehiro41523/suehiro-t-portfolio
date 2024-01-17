<script setup>
import Header from "../js/components/Header.vue";
import Footer from "../js/components/Footer.vue";

import { ref } from "vue";

const loggedIn = ref(true);
const openContent = ref(false);

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
            console.log(loggedIn.value);
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
const clickAddContent = (e) => {
    console.log(e + "clicked");
    openContent.value = !openContent.value;
    console.log(openContent.value);
};
const closeContent = () => (openContent.value = false);
const confirmContent = () => {
    window.confirm("下記の内容で更新しますか？");
    closeContent();
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
            <div class="flex justify-between w-[340px]">
                <h2 class="text-gray-50 font-bold text-xl">Blog</h2>
                <button
                    v-on:click.prevent="clickAddContent('blog')"
                    class="bg-green-400 text-xl text-gray-50 p-2 rounded-lg"
                >
                    新規登録
                </button>
            </div>
        </div>
        <div class="" v-if="openContent">
            <div
                class="bg-gray-900/10 backdrop-blur-sm absolute top-0 left-0 w-screen h-screen z-10"
            ></div>
            <div
                class="absolute w-[720px] p-6 rounded-lg bg-gray-600 mx-auto top-8 left-1/2 -translate-x-1/2 z-20"
            >
                <h2 class="font-bold text-gray-500 text-xl">新しい投稿</h2>
                <form @submit.prevent class="mt-6">
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-6">
                            <input
                                class="bg-gray-700 text-gray-500 placeholder-gray-500 rounded-md px-4 py-2"
                                placeholder="title"
                                type="text"
                            />
                            <textarea
                                class="bg-gray-700 text-gray-500 placeholder-gray-500 rounded-md px-4 py-2"
                                placeholder="作品について記述してください。
Markdown式で記述できます。"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <div class="flex flex-col gap-6">
                            <p class="text-xl font-bold text-gray-500">
                                eyecatch
                            </p>
                            <div
                                class="relative w-[338px] h-[190px] bg-gray-500"
                            >
                                <img
                                    src="../../public/img/ico-image.svg"
                                    alt=""
                                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-4 justify-end">
                        <div
                            v-on:click="confirmContent"
                            class="text-gray-50 bg-green-500 p-2 rounded-md flex gap-1"
                        >
                            <img src="../../public/img/ico-update.svg" alt="" />
                            更新
                        </div>
                        <div
                            v-on:click="closeContent"
                            class="text-gray-50 bg-red-500 p-2 rounded-md"
                        >
                            更新をやめる
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <Footer></Footer>
</template>
