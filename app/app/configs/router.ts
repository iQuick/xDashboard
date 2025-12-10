import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: `/`,
        redirect: `/manager/setting`,
    },
    {
        path: `/manager`,
        component: () => import("@/ui/main.vue"),
        children: [
            {
                path: `setting`,
                component: () => import("@/ui/manager/setting.vue"),
            },
            {
                path: `dock`,
                component: () => import("@/ui/manager/dock.vue"),
            },
            {
                path: `dock-detail`,
                component: () => import("@/ui/manager/dock-detail.vue"),
            },
            {
                path: `plugin`,
                component: () => import("@/ui/manager/plugin.vue"),
            },
            {
                path: `plugin-detail/:id`,
                component: () => import("@/ui/manager/plugin-detail.vue"),
            },
            {
                path: `store`,
                component: () => import("@/ui/manager/store.vue"),
            },
            {
                path: `proxy`,
                component: () => import("@/ui/manager/proxy.vue"),
            },
            {
                path: `about`,
                component: () => import("@/ui/manager/about.vue"),
            },
        ],
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
