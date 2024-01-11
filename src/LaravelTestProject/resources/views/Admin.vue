<script setup>
import Header from "../js/components/Header.vue";
import Footer from "../js/components/Footer.vue";

import { ref } from "vue";

const loggedIn = ref(false);

const testId = {
    id: "suehiro",
    password: "pass",
};

const clickHandler = (e) => {
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
</script>

<template>
    <Header></Header>
    <main>
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
                                        v-on:click.prevent="clickHandler()"
                                        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>
