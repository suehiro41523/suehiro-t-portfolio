import { createRouter, createWebHistory } from "vue-router";

import Top from "../../views/Top.vue";
import BlogsArchive from "../../views/BlogsArchive.vue";
import Blog from "../../views/Blog.vue";
import WorksArchive from "../../views/WorksArchive.vue";
import Work from "../../views/Work.vue";

const router = createRouter({
    history: createWebHistory(), //import.meta.env.BASE_URL
    routes: [
        {
            path: "/",
            component: Top,
            meta: { title: "末廣のポートフォリオサイト" },
        },
        {
            path: "/blogs-archive",
            component: BlogsArchive,
        },
        {
            path: "/blog/:id",
            component: Blog,
        },
        {
            path: "/works-archive",
            component: WorksArchive,
        },
        {
            path: "/works/:id",
            component: Work,
        },
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({ left: 0, top: 0 });
    //         }, 500);
    //     });
    // },
});

export default router;
