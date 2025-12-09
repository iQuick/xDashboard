import {electronAPI} from '@electron-toolkit/preload'
import {contextBridge, ipcRenderer, shell} from 'electron'

// contextBridge.exposeInMainWorld('api', electronAPI.ipcRenderer)

const _sendSync = (event, data: any = null) => {
    const result = ipcRenderer.sendSync("xds-api", {
        event, data
    })
    if (result instanceof Error) {
        console.log("Error", result)
    }
    return result;
}

const _send = (event, data: any = null) => {
    console.log("send", event, data)
    ipcRenderer.send("xds-api", {
        event, data
    })
}

window.plugin = {
    __event__: {},
    hooks: {},
    maximize: (id: string) => {
        _send("plugin:func:maximize", {
            id
        })
    },
    minimize: (id: string) => {
        _send("plugin:func:minimize", {
            id
        })
    },
    close: (id: string) => {
        _send("plugin:func:close", {
            id
        })
    },
    getPluginInfo: (id: string) => {
        return _sendSync("plugin:get:plugin-info", {
            id
        })
    }
}
