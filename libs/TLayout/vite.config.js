import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UnoCSS(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'TLayout',
            formats: ['es', 'umd', 'cjs'],
            fileName: (format) => {
                if (format === 'es') return 'index.mjs';
                if (format === 'cjs') return 'index.cjs';
                return 'index.js';
            },
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                dir: 'dist',
                sourcemap: true,
                exports: 'named'
            }
        },
        minify: false, // 禁用所有压缩 (JS 和 CSS)
    }
});
