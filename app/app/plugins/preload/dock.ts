import {sendEvent, sendEventSync} from "./index";


window.dock = {
    __event__: {},
    hooks: {},
    maximize: (id: string) => {
        sendEvent("dock:maximize", {
            id
        })
    },
    minimize: (id: string) => {
        sendEvent("dock:minimize", {
            id
        })
    },
    show: (id: string) => {
        sendEvent("dock:show", {
            id
        })
    },
    close: (id: string) => {
        sendEvent("dock:close", {
            id
        })
    },
    getSettings: (id: string) => {
        return sendEventSync("dock:get-settings", {
            id
        })
    }
}
