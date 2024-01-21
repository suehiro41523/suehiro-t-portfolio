<script setup>
import { reactive, ref } from "vue";
import useWorks from "../composabe/works.js";

const { error, storeWork } = useWorks();
const form = reactive({
    title: "",
    content: "",
    imgurl: "",
});
const eyecatch = ref();
const src = ref();

const props = defineProps({
    openCreate: Boolean,
    closeCreate: Function,
});
const confirmContent = () => {
    console.log(form);
    const check = window.confirm("下記の内容で投稿しますか？");
    if (check) {
        storeWork(form);
        props.closeCreate();
    }
};

const uploadFile = () => {
    console.log(eyecatch);
    let url = eyecatch.value.files[0];
    src.value = URL.createObjectURL(url);
    form.imgurl = eyecatch.value.files[0].name;
    console.log(form);
    console.log(src);
};
</script>

<template>
    <div v-if="props.openCreate">
        <div
            class="bg-gray-900/10 backdrop-blur-sm absolute top-0 left-0 w-screen h-screen z-10"
        ></div>
        <div
            class="absolute w-[720px] p-6 rounded-lg bg-gray-600 mx-auto top-8 left-1/2 -translate-x-1/2 z-20"
        >
            <h2 class="font-bold text-gray-500 text-xl">新規登録</h2>

            <form @submit.prevent class="mt-6">
                <div class="flex justify-between">
                    <div class="flex flex-col gap-6">
                        <input
                            class="bg-gray-700 text-gray-500 placeholder-gray-500 rounded-md px-4 py-2"
                            placeholder="title"
                            v-model="form.title"
                            type="text"
                        />
                        <textarea
                            class="bg-gray-700 text-gray-500 placeholder-gray-500 rounded-md px-4 py-2"
                            placeholder="作品について記述してください。
Markdown式で記述できます。"
                            v-model="form.content"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <div class="flex flex-col gap-6">
                        <p class="text-xl font-bold text-gray-500">eyecatch</p>
                        <input
                            ref="eyecatch"
                            type="file"
                            @change="uploadFile"
                        />
                        <div class="relative w-[338px] h-[190px] bg-gray-500">
                            <div v-if="eyecatch == null">
                                <img
                                    src="../../../public/img/ico-image.svg"
                                    alt=""
                                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                            <div v-if="eyecatch != null">
                                <img :src="src" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 justify-end mt-6">
                    <div
                        v-on:click="confirmContent"
                        class="text-gray-50 bg-green-500 p-2 rounded-md flex gap-1"
                    >
                        <img src="../../../public/img/ico-update.svg" alt="" />
                        登録
                    </div>
                    <div
                        v-on:click="props.closeCreate"
                        class="text-gray-50 bg-red-500 p-2 rounded-md gap-4"
                    >
                        登録をやめる
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
