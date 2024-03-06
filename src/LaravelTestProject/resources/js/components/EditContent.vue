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
                    getWork(props.editingId);
                    break;

                case "dtp":
                    getDtp(props.editingId);
                    break;

                case "blog":
                    getBlog(props.editingId);
                    break;
                default:
                    break;
            }
        }
    },
);

const confirmContent = async () => {
    const check = window.confirm("下記の内容で更新しますか？");
    switch (props.openingCategory) {
        case "work":
            await (form.title = work.value.title);
            await (form.content = work.value.content);
            await (form.image == "" ? (form.image = work.value.image) : false);
            await (blobImage.value = "");
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
    const imageFile = eyecatch.value.files[0];
    blobImage.value = URL.createObjectURL(imageFile);
    src.value = imageFile;
    form.image = imageFile.name;
};
</script>

<template>
    <div v-if="props.openEdit">
        <div
            class="fixed left-0 top-0 z-10 h-screen w-screen overflow-scroll bg-gray-900/10 py-8 backdrop-blur-sm"
        >
            <div
                class="relative z-20 mx-auto rounded-lg bg-gray-600 p-6 md:w-[720px]"
            >
                <h2 class="text-xl font-bold text-gray-500">更新</h2>

                <form
                    @submit.prevent
                    class="mt-6"
                    enctype="multipart/form-data"
                >
                    <div
                        class="flex flex-col justify-between gap-4 md:flex-row md:gap-0"
                    >
                        <div class="flex flex-col gap-6">
                            <input
                                v-if="props.openingCategory == 'work'"
                                class="rounded-md bg-gray-700 px-4 py-2 text-gray-300 placeholder-gray-500"
                                placeholder="title"
                                type="text"
                                v-model="work.title"
                            />
                            <input
                                v-if="props.openingCategory == 'dtp'"
                                class="rounded-md bg-gray-700 px-4 py-2 text-gray-300 placeholder-gray-500"
                                placeholder="title"
                                type="text"
                                v-model="dtp.title"
                            />
                            <input
                                v-if="props.openingCategory == 'blog'"
                                class="rounded-md bg-gray-700 px-4 py-2 text-gray-300 placeholder-gray-500"
                                placeholder="title"
                                type="text"
                                v-model="blog.title"
                            />

                            <textarea
                                v-if="props.openingCategory == 'work'"
                                class="resize-y rounded-md bg-gray-700 px-4 py-2 text-gray-300 placeholder-gray-500"
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
                                class="resize-y rounded-md bg-gray-700 px-4 py-2 text-gray-300 placeholder-gray-500"
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
                                class="resize-y rounded-md bg-gray-700 px-4 py-2 text-gray-300 placeholder-gray-500"
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
                        <div class="flex justify-end gap-4">
                            <div
                                v-on:click="confirmContent"
                                class="flex gap-1 text-nowrap rounded-md bg-green-500 p-2 text-gray-50"
                            >
                                <img
                                    src="../../../public/img/ico-update.svg"
                                    alt=""
                                />
                                更新
                            </div>
                            <div
                                v-on:click="closeEdit"
                                class="rounded-md bg-red-500 p-2 text-gray-50"
                            >
                                更新をやめる
                            </div>
                        </div>
                        <div
                            v-on:click="deleteContent"
                            class="ml-auto w-fit rounded-md border border-solid border-red-500 p-2 text-gray-50"
                        >
                            投稿を削除
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
