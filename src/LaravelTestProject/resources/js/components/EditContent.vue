<script setup>
import { onMounted } from "vue";
import useWorks from "../composabe/works.js";

const props = defineProps({
    editingId: Number,
    openEdit: Boolean,
    closeEdit: Function,
});
const confirmContent = () => {
    const check = window.confirm("下記の内容で更新しますか？");
    if (check) {
        props.closeEdit();
    }
};
const { getWork, work } = useWorks();
onMounted(() => {
    getWork(1);
});
</script>

<template>
    <div v-if="props.openEdit">
        <div
            class="bg-gray-900/10 backdrop-blur-sm absolute top-0 left-0 w-screen h-screen z-10"
        ></div>
        <div
            class="absolute w-[720px] p-6 rounded-lg bg-gray-600 mx-auto top-8 left-1/2 -translate-x-1/2 z-20"
        >
            <h2 class="font-bold text-gray-500 text-xl">更新</h2>

            <form @submit.prevent class="mt-6">
                <div class="flex justify-between">
                    <div class="flex flex-col gap-6">
                        <input
                            class="bg-gray-700 text-gray-500 placeholder-gray-500 rounded-md px-4 py-2"
                            placeholder="title"
                            type="text"
                            v-model="work.title"
                        />
                        <textarea
                            class="bg-gray-700 text-gray-500 placeholder-gray-500 rounded-md px-4 py-2"
                            placeholder="作品について記述してください。
Markdown式で記述できます。"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            v-model="work.content"
                        ></textarea>
                    </div>
                    <div class="flex flex-col gap-6">
                        <p class="text-xl font-bold text-gray-500">eyecatch</p>
                        <div class="w-[338px]">
                            <img :src="work.imgurl" alt="" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
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
                            v-on:click="props.closeEdit()"
                            class="text-gray-50 border border-solid border-red-500 p-2 rounded-md"
                        >
                            更新をやめる
                        </div>
                    </div>
                    <div
                        v-on:click=""
                        class="text-gray-50 bg-red-500 p-2 rounded-md w-fit ml-auto"
                    >
                        投稿を削除
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
