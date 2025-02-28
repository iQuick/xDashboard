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
    ipcRenderer.send("xds-api", {
        event, data
    })
}

window.xds = {
    __event__: {},
    hooks: {},
    mainMaximize: () => {
        _send("main:func:maximize")
    },
    mainMinimize: () => {
        _send("main:func:minimize")
    },
    mainClose: () => {
        _send("main:func:close")
    },
    pluginCreate: (name: string) =>{
        _send("main:func:plugin-create", {
            'name': name
        })
    },
    pluginActive: (id: string) => {
        _send("main:func:plugin-active", {
            id
        })
    },
    pluginDeactivate: (id: string) => {
        _send("main:func:plugin-deactivate", {
            id
        })
    },
    getAppInfo: () : any => {
        return _sendSync("main:get:app-info")
    },
    getPluginInfo: (id: string) : any => {
        return _sendSync("main:get:plugin-info", {
            id
        })
    },
}
