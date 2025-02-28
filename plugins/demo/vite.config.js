import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tlayout from 'xdash-desp'

export default defineConfig({
    plugins: [
        vue(),
        tlayout()
    ],
    base: "./",
    build: {
        sourcemap: false,
        emptyOutDir: true,
        copyPublicDir: true,
        outDir: '../../app/public/plugins/demo',
    },
})
