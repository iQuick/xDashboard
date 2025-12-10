import {ipcRenderer} from 'electron'

export const sendEventSync = (event, data: any = null) => {
    const result = ipcRenderer.sendSync("xds-api", {
        event, data
    })
    if (result instanceof Error) {
        console.log("Error", result)
    }
    return result;
}

export const sendEvent = (event, data: any = null) => {
    ipcRenderer.send("xds-api", {
        event, data
    })
}


