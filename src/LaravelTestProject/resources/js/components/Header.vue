<script setup></script>

<template>
    <header
        class="text-gray-300 container left-1/2 -translate-x-1/2 flex justify-between items-center absolute top-0 z-10"
    >
        <div>
            <router-link to="/">
                <img
                    src="../../..//public/img/logomark.svg"
                    alt="Suehiroのロゴ"
                />
            </router-link>
        </div>
        <nav class="pr-5">
            <ul class="flex gap-6 text-md font-bold">
                <li>
                    <a class="p-2" href="/#about"> About</a>
                </li>
                <li>
                    <a class="p-2" href="/#works"> Works</a>
                </li>
                <li>
                    <a class="p-2" href="/#blogs"> Blog</a>
                </li>
            </ul>
        </nav>
    </header>
</template>
