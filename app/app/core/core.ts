import {app, BrowserWindow, IpcMainEvent} from "electron";


import {ipcMain} from 'electron';
import * as xds from "./xds";
import * as tray from "./tray";
import * as main from "./main";
import * as plugin from "./plugin";
import * as dock from "./dock";

const MID = "main"

app.disableHardwareAcceleration()
app.on("ready", async () => {
    console.log("app ready");
    createTray()
    createMain()
    registerApis()
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        // createMainWindow()
    }
});

app.on("window-all-closed", () => {

});

app.on('before-quit', () => {
    unregisterApis()
})

const createTray = () => {
    tray.initTray()
}

const createMain = () => {
    const win = xds.createWindow(MID)
    process.argv.some(arg => {
        if (!['--auto-start', '--startup'].includes(arg)) {
            win.show()
        }
    });
}

const registerApis = () => {
    ipcMain.on('xds-api', on_api_event)
}

const unregisterApis = () => {
    ipcMain.off('xds-api', on_api_event)
}


const on_api_event = (event: IpcMainEvent, data: any) => {
    console.log('on main event :', data)
    const e = data['event'].split(":")
    const d = data['data']
    if ('main' == e[0]) {
        main.on_event(e[1], result => {
            event.returnValue = result
        })
    } else if ('plugin' == e[0]) {
        plugin.on_event(e[1], result => {
            event.returnValue = result
        })
    } else if ('dock' == e[0]) {
        dock.on_event(e[1], result => {
            event.returnValue = result
        })
    }
}
