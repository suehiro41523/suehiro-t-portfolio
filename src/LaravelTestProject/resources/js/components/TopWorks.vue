<script setup>
import useWorks from "../composabe/works";

import { computed, onMounted } from "vue";

const { getWorks, works } = useWorks();
onMounted(() => getWorks());
</script>

<template>
    <h2
        class="text-xl font-bold text-gray-200 translate-y-3 translate-x-10 w-fit"
    >
        Works
    </h2>
    <div
        v-if="works.length == 0"
        class="[background-color:rgba(255,255,255,0.06)] p-10 rounded-xl w-fit flex gap-10"
    >
        <div class="aspect-video bg-gray-300 rounded-md"></div>
        <div class="aspect-video bg-gray-300 rounded-md"></div>
        <div class="aspect-video bg-gray-300 rounded-md"></div>
    </div>
    <div
        v-if="works.length !== 0"
        class="max-w-5xl mx-4 md:h-auto h-[236px] [background-color:rgba(255,255,255,0.06)] lg:p-10 py-5 rounded-xl md:w-fit w-[calc(100vw-32px)] overflow-x-auto"
    >
        <ul
            class="sm:w-auto w-[912px] sm:pr-0 px-5 h-full flex items-center lg:gap-10 gap-5"
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
