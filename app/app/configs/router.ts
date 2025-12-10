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
                meta: { menuIndex: 0 }
            },
            {
                path: `dock`,
                component: () => import("@/ui/manager/dock.vue"),
                meta: { menuIndex: 1 }
            },
            {
                path: `dock-detail`,
                component: () => import("@/ui/manager/dock-detail.vue"),
                meta: { menuIndex: 1 }
            },
            {
                path: `plugin`,
                component: () => import("@/ui/manager/plugin.vue"),
                meta: { menuIndex: 2, isPluginRoute: true, depth: 1 }
            },
            {
                path: `plugin-detail/:id`,
                component: () => import("@/ui/manager/plugin-detail.vue"),
                meta: { menuIndex: 2, isPluginRoute: true, depth: 2 }
            },
            {
                path: `proxy`,
                component: () => import("@/ui/manager/proxy.vue"),
                meta: { menuIndex: 3 }
            },
            {
                path: `about`,
                component: () => import("@/ui/manager/about.vue"),
                meta: { menuIndex: 4 }
            },
        ],
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
