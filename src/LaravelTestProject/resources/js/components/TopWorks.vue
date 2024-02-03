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
        <div class="w-[288px] h-[168px] bg-gray-300 rounded-md"></div>
        <div class="w-[288px] h-[168px] bg-gray-300 rounded-md"></div>
        <div class="w-[288px] h-[168px] bg-gray-300 rounded-md"></div>
    </div>
    <div
        v-if="works.length !== 0"
        class="[background-color:rgba(255,255,255,0.06)] p-10 rounded-xl w-fit"
    >
        <ul class="flex gap-10">
            <li v-for="(work, i) in works.slice(0, 3)">
                <img
                    class="w-[288px] h-[168px] rounded-md object-cover object-top"
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
