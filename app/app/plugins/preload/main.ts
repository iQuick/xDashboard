import {sendEvent, sendEventSync} from "./index";

window.main = {
    __event__: {},
    hooks: {},
    maximize: () => {
        sendEvent("main:maximize")
    },
    minimize: () => {
        sendEvent("main:minimize")
    },
    show: () => {
        sendEvent("main:show")
    },
    close: () => {
        sendEvent("main:close")
    },
    getInfo: (): any => {
        return sendEventSync("main:get-info")
    },
    getPlugin: (id: string): any => {
        return sendEventSync("main:get-plugin", {
            id
        })
    },
    getPlugins: (): any => {
        return sendEventSync("main:get-plugins")
    },
}

window.plugin = {
    __event__: {},
    hooks: {},
    install: (id: string) => {
        sendEvent("plugin:install", {
            id
        })
    },
    uninstall: (id: string) => {
        sendEvent("plugin:minimize", {
            id
        })
    },
    getInfo: (id: string) => {
        return sendEventSync("plugin:get-info", {
            id
        })
    }
}