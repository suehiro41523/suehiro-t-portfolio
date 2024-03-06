<script setup>
import useWorks from "../composabe/works";

import { computed, onMounted } from "vue";

const { getWorks, works } = useWorks();
onMounted(() => getWorks());
</script>

<template>
    <h2
        class="w-fit translate-x-10 translate-y-3 text-xl font-bold text-gray-200"
    >
        Works
    </h2>
    <div
        v-if="works.length == 0"
        class="flex w-fit gap-10 rounded-xl p-10 [background-color:rgba(255,255,255,0.06)]"
    >
        <div class="aspect-video rounded-md bg-gray-300"></div>
        <div class="aspect-video rounded-md bg-gray-300"></div>
        <div class="aspect-video rounded-md bg-gray-300"></div>
    </div>
    <div
        v-if="works.length !== 0"
        class="mx-4 h-[236px] w-[calc(100vw-32px)] max-w-5xl overflow-x-auto rounded-xl py-5 [background-color:rgba(255,255,255,0.06)] md:h-auto md:w-fit lg:p-10"
    >
        <ul
            class="flex h-full w-[912px] items-center gap-5 px-5 sm:w-auto sm:pr-0 lg:gap-10"
        >
            <li
                class="aspect-video h-fit flex-1"
                v-for="(work, i) in works.slice(0, 3)"
            >
                <img
                    class="aspect-video rounded-md object-cover object-top"
                    :src="
                        'https://suehiro-portfolio.s3.ap-northeast-1.amazonaws.com/images/' +
                        work.image
                    "
                    alt=""
                />
            </li>
        </ul>
    </div>
</template>
