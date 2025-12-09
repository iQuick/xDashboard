import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tlayout from 'xdash-desp'
import {copySetting} from './util/utils'

const outDir = '../../app/public/plugins/demo'

export default defineConfig({
    plugins: [
        vue(),
        tlayout(),
        copySetting(__dirname, outDir)
    ],
    base: "./",
    build: {
        sourcemap: false,
        emptyOutDir: true,
        copyPublicDir: true,
        outDir: outDir,
    },
})
