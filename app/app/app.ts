/* eslint-disable simple-import-sort/imports */
import {createApp} from "vue";

import i18n from "@/configs/i18n";
import {pinia} from "@/configs/pinia";
import {router} from "@/configs/router";

import App from "./app.vue";
import Antd from "ant-design-vue";

console.log("app start")

const app = createApp(App)
app.use(Antd)
app.use(pinia)
app.use(router)
app.use(i18n)
app.mount("#app");
