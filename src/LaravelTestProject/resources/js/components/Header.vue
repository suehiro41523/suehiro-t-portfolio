<script setup></script>

<template>
    <header
        class="container absolute left-1/2 top-0 z-10 flex -translate-x-1/2 items-center justify-between text-gray-300"
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
            <ul class="text-md flex gap-6 font-bold">
                <li>
                    <a
                        target="_blank"
                        class="block p-2"
                        href="https://github.com/suehiro41523/suehiro-t-portfolio"
                    >
                        <img
                            src="../../../public/img/github-mark-white.svg"
                            alt=""
                        />
                    </a>
                </li>
                <li>
                    <a class="block p-2" href="/#about"> About</a>
                </li>
                <li>
                    <a class="block p-2" href="/#works"> Works</a>
                </li>
                <li>
                    <a class="block p-2" href="/#blogs"> Blog</a>
                </li>
            </ul>
        </nav>
    </header>
</template>
