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
        _send("func:main:maximize")
    },
    mainMinimize: () => {
        _send("func:main:minimize")
    },
    mainClose: () => {
        _send("func:main:close")
    },
    pluginCreate: (name: string) =>{
        _send("func:plugin:create", {
            'name': name
        })
    },
    pluginActive: (id: string) => {
        _send("func:plugin:active", {
            id
        })
    },
    pluginDeactivate: (id: string) => {
        _send("func:plugin:deactivate", {
            id
        })
    },
    getAppInfo: () : any => {
        return _sendSync("get:app-info")
    },
    getWindowInfo: (id: string) : any => {
        return _sendSync("get:window-info", {
            id
        })
    },
}
