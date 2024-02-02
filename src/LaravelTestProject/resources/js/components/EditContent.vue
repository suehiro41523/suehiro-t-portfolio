<script setup>
import { watch, ref, reactive } from "vue";
import useWorks from "../composabe/works.js";
import useDtps from "../composabe/dtps.js";
import useBlogs from "../composabe/blogs.js";
import useImages from "../composabe/images.js";

const props = defineProps({
    editingId: Number,
    openEdit: Boolean,
    closeEdit: Function,
    openingCategory: String,
});
const { getWork, work, getWorks, updateWork, destroyWork } = useWorks();
const { getDtp, dtp, getDtps, updateDtp, destroyDtp } = useDtps();
const { getBlog, blog, getBlogs, updateBlog, destroyBlog } = useBlogs();
const { storeImage } = useImages();
const form = reactive({
    title: "",
    content: "",
    image: "",
});
const eyecatch = ref("");
const src = ref("");
const blobImage = ref("");

watch(
    () => props.openEdit,
    () => {
        if (props.openEdit == true) {
            switch (props.openingCategory) {
                case "work":
                    console.log("work getting");
                    getWork(props.editingId);
                    break;

                case "dtp":
                    console.log("dtp getting");
                    getDtp(props.editingId);
                    break;

                case "blog":
                    console.log("blog getting");
                    getBlog(props.editingId);
                    break;
                default:
                    console.log("nothing getting");
                    break;
            }
        }
    }
);

const confirmContent = async () => {
    const check = window.confirm("下記の内容で更新しますか？");
    switch (props.openingCategory) {
        case "work":
            await (form.title = work.value.title);
            await (form.content = work.value.content);
            await (form.image == "" ? (form.image = work.value.image) : false);
            await (blobImage.value = "");
            await console.log(form);
            await console.log(props.editingId);
            await console.log(work);
            if (check) {
                updateWork(props.editingId, form);
                if (src.value !== "") {
                    storeImage(src);
                }
                props.closeEdit();
                getWorks();
            }
            break;

        case "dtp":
            await (form.title = dtp.value.title);
            await (form.content = dtp.value.content);
            await (form.image == "" ? (form.image = dtp.value.image) : false);
            await (blobImage.value = "");
            await console.log(form);
            await console.log(props.editingId);
            await console.log(dtp);
            if (check) {
                updateDtp(props.editingId, form);
                if (src.value !== "") {
                    storeImage(src);
                }
                props.closeEdit();
                getDtps();
            }
            break;

        case "blog":
            await (form.title = blog.value.title);
            await (form.content = blog.value.content);
            await console.log(form);
            await console.log(props.editingId);
            await console.log(blog);
            if (check) {
                updateBlog(props.editingId, form);
                if (src.value !== "") {
                    storeImage(src);
                }
                props.closeEdit();
                getBlogs();
            }
            break;
        default:
            break;
    }
};
const closeEdit = () => {
    (form.title = ""),
        (form.content = ""),
        (form.image = ""),
        (blobImage.value = "");

    props.closeEdit();
};
const deleteContent = async () => {
    const check = window.confirm("本当に記事を削除しますか？");
    if (check) {
        switch (props.openingCategory) {
            case "work":
                await destroyWork(props.editingId);
                break;
            case "dtp":
                await destroyDtp(props.editingId);
                break;
            case "blog":
                await destroyBlog(props.editingId);
                break;
            default:
                break;
        }

        closeEdit();
    }
};

const imageSelected = () => {
    console.log(eyecatch);
    const imageFile = eyecatch.value.files[0];
    blobImage.value = URL.createObjectURL(imageFile);
    src.value = imageFile;
    form.image = imageFile.name;
};
</script>

<template>
    <div v-if="props.openEdit">
        <div
            class="bg-gray-900/10 backdrop-blur-sm absolute top-0 left-0 py-8 w-screen h-screen z-10 overflow-scroll"
        >
            <div
                class="relative w-[720px] p-6 rounded-lg bg-gray-600 mx-auto z-20"
            >
                <h2 class="font-bold text-gray-500 text-xl">更新</h2>

                <form
                    @submit.prevent
                    class="mt-6"
                    enctype="multipart/form-data"
                >
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-6">
                            <input
                                v-if="props.openingCategory == 'work'"
                                class="bg-gray-700 text-gray-300 placeholder-gray-500 rounded-md px-4 py-2"
                                placeholder="title"
                                type="text"
                                v-model="work.title"
                            />
                            <input
                                v-if="props.openingCategory == 'dtp'"
                                class="bg-gray-700 text-gray-300 placeholder-gray-500 rounded-md px-4 py-2"
                                placeholder="title"
                                type="text"
                                v-model="dtp.title"
                            />
                            <input
                                v-if="props.openingCategory == 'blog'"
                                class="bg-gray-700 text-gray-300 placeholder-gray-500 rounded-md px-4 py-2"
                                placeholder="title"
                                type="text"
                                v-model="blog.title"
                            />

                            <textarea
                                v-if="props.openingCategory == 'work'"
                                class="bg-gray-700 text-gray-300 placeholder-gray-500 rounded-md px-4 py-2 resize-y"
                                placeholder="作品について記述してください。
Markdown式で記述できます。"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                v-model="work.content"
                            ></textarea>
                            <textarea
                                v-if="props.openingCategory == 'dtp'"
                                class="bg-gray-700 text-gray-300 placeholder-gray-500 rounded-md px-4 py-2 resize-y"
                                placeholder="作品について記述してください。
Markdown式で記述できます。"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                v-model="dtp.content"
                            ></textarea>
                            <textarea
                                v-if="props.openingCategory == 'blog'"
                                class="bg-gray-700 text-gray-300 placeholder-gray-500 rounded-md px-4 py-2 resize-y"
                                placeholder="作品について記述してください。
Markdown式で記述できます。"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                v-model="blog.content"
                            ></textarea>
                        </div>
                        <div class="flex flex-col gap-6">
                            <div class="w-[338px]">
                                <img
                                    v-if="
                                        blobImage == '' &&
                                        props.openingCategory == 'work'
                                    "
                                    :src="
                                        'https://suehiro-portfolio.s3.ap-northeast-1.amazonaws.com/images/' +
                                        work.image
                                    "
                                    alt=""
                                />
                                <img
                                    v-if="
                                        blobImage == '' &&
                                        props.openingCategory == 'dtp'
                                    "
                                    :src="
                                        'https://suehiro-portfolio.s3.ap-northeast-1.amazonaws.com/images/' +
                                        dtp.image
                                    "
                                    alt=""
                                />
                                <img
                                    v-if="blobImage !== ''"
                                    :src="blobImage"
                                    alt=""
                                />
                            </div>
                            <div
                                class="flex flex-col text-gray-50"
                                v-if="props.openingCategory !== 'blog'"
                            >
                                <label for="changeImage">画像を変更する</label>
                                <input
                                    type="file"
                                    id="changeImage"
                                    ref="eyecatch"
                                    @change="imageSelected"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 pt-4">
                        <div class="flex gap-4 justify-end">
                            <div
                                v-on:click="confirmContent"
                                class="text-gray-50 bg-green-500 p-2 rounded-md flex gap-1 text-nowrap"
                            >
                                <img
                                    src="../../../public/img/ico-update.svg"
                                    alt=""
                                />
                                更新
                            </div>
                            <div
                                v-on:click="closeEdit"
                                class="text-gray-50 bg-red-500 p-2 rounded-md"
                            >
                                更新をやめる
                            </div>
                        </div>
                        <div
                            v-on:click="deleteContent"
                            class="text-gray-50 border border-solid border-red-500 p-2 rounded-md w-fit ml-auto"
                        >
                            投稿を削除
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
