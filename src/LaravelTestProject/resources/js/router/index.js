import { createRouter, createWebHistory } from "vue-router";

import Top from "../../views/Top.vue";
import BlogsArchive from "../../views/BlogsArchive.vue";
import Blog from "../../views/Blog.vue";
import WorksArchive from "../../views/WorksArchive.vue";
import WorkWeb from "../../views/WorkWeb.vue";
import WorkDtp from "../../views/WorkDtp.vue";
import Admin from "../../views/Admin.vue";

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
            path: "/blogs-archive/:id",
            component: Blog,
        },
        {
            path: "/works-archive",
            component: WorksArchive,
        },
        {
            path: "/works-archive/website/:id",
            component: WorkWeb,
        },
        {
            path: "/works-archive/dtp/:id",
            component: WorkDtp,
        },
        {
            path: "/admin/",
            component: Admin,
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
