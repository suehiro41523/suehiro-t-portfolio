<script setup>
import { reactive, ref, watch, watchEffect } from "vue";
import useWorks from "../composabe/works.js";
import useDtps from "../composabe/dtps.js";
import useBlogs from "../composabe/blogs.js";
import useImages from "../composabe/images.js";

const { storeWork } = useWorks();
const { storeDtp } = useDtps();
const { storeBlog } = useBlogs();
const { storeImage } = useImages();
const form = reactive({
    title: "",
    content: "",
    image: "",
});
const eyecatch = ref();
const src = ref();
const blobImage = ref();

const props = defineProps({
    openCreate: Boolean,
    closeCreate: Function,
    openingCategory: String,
});

const imageSelected = () => {
    const imageFile = eyecatch.value.files[0];
    blobImage.value = URL.createObjectURL(imageFile);
    src.value = imageFile;
    form.image = imageFile.name;
};

const confirmContent = async () => {
    const check = window.confirm("下記の内容で投稿しますか？");
    if (check) {
        switch (props.openingCategory) {
            case "work":
                await storeWork(form);
                await storeImage(src);
                break;
            case "dtp":
                await storeDtp(form);
                await storeImage(src);
                break;
            case "blog":
                const blogForm = {
                    title: form.title,
                    content: form.content,
                };
                await storeBlog(blogForm);
                break;
            default:
                break;
        }
        form.title = "";
        form.content = "";
        form.image = "";
        props.closeCreate();
    }
};
</script>

<template>
    <div v-if="props.openCreate">
        <div
            class="bg-gray-900/10 backdrop-blur-sm fixed top-0 left-0 w-screen h-screen z-10"
        ></div>
        <div
            class="absolute md:w-[720px] p-6 rounded-lg bg-gray-600 mx-auto top-8 left-1/2 -translate-x-1/2 z-20"
        >
            <h2 class="font-bold text-gray-500 text-xl">新規登録</h2>

            <form @submit.prevent class="mt-6" enctype="multipart/form-data">
                <div class="flex md:flex-row flex-col justify-between">
                    <div class="flex flex-col gap-6">
                        <input
                            class="bg-gray-700 text-gray-300 placeholder-gray-500 rounded-md px-4 py-2"
                            placeholder="title"
                            v-model="form.title"
                            type="text"
                        />
                        <textarea
                            class="bg-gray-700 text-gray-300 placeholder-gray-500 rounded-md px-4 py-2"
                            placeholder="作品について記述してください。
Markdown式で記述できます。"
                            v-model="form.content"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>

                    <div
                        v-if="props.openingCategory != 'blog'"
                        class="flex flex-col gap-6"
                    >
                        <input
                            ref="eyecatch"
                            type="file"
                            accept="image/*"
                            @change="imageSelected"
                        />
                        <div
                            class="relative w-[338px] h-[190px] bg-gray-500 overflow-scroll"
                        >
                            <div v-if="eyecatch == null">
                                <img
                                    src="../../../public/img/ico-image.svg"
                                    alt=""
                                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                            <div v-if="eyecatch != null">
                                <img :src="blobImage" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 justify-end mt-6">
                    <button
                        type="submit"
                        @click="confirmContent"
                        class="text-gray-50 bg-green-500 p-2 rounded-md flex gap-1"
                    >
                        <img src="../../../public/img/ico-update.svg" alt="" />
                        登録
                    </button>

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
