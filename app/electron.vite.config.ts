import { resolve } from "node:path";

import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "electron-vite";

export default defineConfig({
    main: {
        publicDir: "public",
        resolve: {
            alias: {
                "~": resolve(),
                "@": resolve("core"),
            },
        },
        build: {
            outDir: "public/core",
            rollupOptions: {
                input: {
                    index: "app/core/core.ts",
                },
            },
        },
    },
    preload: {
        build: {
            outDir: "public/preload",
            rollupOptions: {
                input: {
                    index: "app/plugins/preload/main.ts",
                    dock: "app/plugins/preload/dock.ts",
                },
            },
        },
    },
    renderer: {
        base: './',
        root: "app",
        plugins: [vue(), VueI18nPlugin({})],
        resolve: {
            alias: {
                "~": resolve(),
                "@": resolve("app"),
            },
        },
        build: {
            outDir: "public/renderer",
            rollupOptions: {
                input: {
                    index: "app/index.html",
                },
            },
        },
    },
});
