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
            class="fixed left-0 top-0 z-10 h-screen w-screen bg-gray-900/10 backdrop-blur-sm"
        ></div>
        <div
            class="absolute left-1/2 top-8 z-20 mx-auto -translate-x-1/2 rounded-lg bg-gray-600 p-6 md:w-[720px]"
        >
            <h2 class="text-xl font-bold text-gray-500">新規登録</h2>

            <form @submit.prevent class="mt-6" enctype="multipart/form-data">
                <div class="flex flex-col justify-between md:flex-row">
                    <div class="flex flex-col gap-6">
                        <input
                            class="rounded-md bg-gray-700 px-4 py-2 text-gray-300 placeholder-gray-500"
                            placeholder="title"
                            v-model="form.title"
                            type="text"
                        />
                        <textarea
                            class="rounded-md bg-gray-700 px-4 py-2 text-gray-300 placeholder-gray-500"
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
                            class="relative h-[190px] w-[338px] overflow-scroll bg-gray-500"
                        >
                            <div v-if="eyecatch == null">
                                <img
                                    src="../../../public/img/ico-image.svg"
                                    alt=""
                                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                            <div v-if="eyecatch != null">
                                <img :src="blobImage" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex justify-end gap-4">
                    <button
                        type="submit"
                        @click="confirmContent"
                        class="flex gap-1 rounded-md bg-green-500 p-2 text-gray-50"
                    >
                        <img src="../../../public/img/ico-update.svg" alt="" />
                        登録
                    </button>

                    <div
                        v-on:click="props.closeCreate"
                        class="gap-4 rounded-md bg-red-500 p-2 text-gray-50"
                    >
                        登録をやめる
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
