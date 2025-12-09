import { app, BrowserWindow, IpcMainEvent } from "electron";

import { createPluginInstanceWindow, getPlugins, uninstallPlugin } from "./plugin";


import { initTray } from "./tray";
import { createMainWindow } from "./main";
import { ipcMain } from 'electron';


// 窗口管理
const MID = "main"
const windows: { [key: string]: BrowserWindow } = {};

app.disableHardwareAcceleration()
app.on("ready", async () => {
    console.log("app ready");
    initTray()
    createMain()
    registerApis()
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow()
    }
});

app.on("window-all-closed", () => {

});

app.on('before-quit', () => {
    unregisterApis()
})


/**
 * 创建主窗口
 * 判断 windows 中是否存在，不存在则创建，存在则激活
 */
const createMain = (): BrowserWindow => {
    const window = createMainWindow()
    windows[MID] = window
    return window
}

/**
 * 创建插件窗口
 * @param id 窗口 id
 * @param name  窗口名称
 */
const createPlugin = (id: string, name: string): BrowserWindow | null => {
    // const window = createPluginWindow(name)
    // windows[id] = window
    // return window
    return null;
}

const createPluginInstance = (pid: string, setting: PluginInstanceSetting): BrowserWindow => {
    const window = createPluginInstanceWindow(setting)
    windows[pid] = window
    return window
}

/**
 * 获取 window
 * @param id
 */
const getWindow = (id: string): BrowserWindow => {
    return windows[id]
}

/**
 * 获取 window 信息
 * @param id
 */
const getWindowInfo = (id: string) => {
    const win = getWindow(id)
    if (win) {
        return {
            name: win.title,
        }
    }
    return {}
}

/**
 * 获取应用信息
 * @returns
 */
const getAppInfo = () => {
    return {
        name: app.name,
        version: app.getVersion(),
    }
}

/**
 * Api 事件监听
 * @param event
 * @param data
 */
const api_listener = (event: IpcMainEvent, data: any) => {
    console.log('api_listener', data)
    const ev = data['event']
    const dt = data['data']
    switch (ev) {
        case "main:func:maximize":
            getWindow('main').maximize()
            break;
        case "main:func:minimize":
            getWindow('main').minimize()
            break;
        case "main:func:close":
            getWindow('main').close()
            break;
        case "main:func:plugin-create":
            const pluginName = dt['pluginName'];
            // createPluginInstance(pluginName);
            break;
        case "main:func:plugin-active":
            // createPluginWindow('demo', 'demo')
            break;
        case "main:func:plugin-deactivate":
            break;
        case "main:get:app-info":
            event.returnValue = getAppInfo()
            break
        case "main:get:plugin-info":
            event.returnValue = getWindowInfo(dt['id'])
            break
        case "main:get:plugins":
            event.returnValue = getPlugins();
            break;
        case "main:func:local-install":
            const localPluginPath = dt['localPluginPath'];
            // 处理本地安装逻辑
            break;
        case "main:func:plugin-uninstall":
            event.returnValue = uninstallPlugin(dt['id']);
            break;
        case "plugin:func:maximize":
            getWindow("demo").maximize()
            break;
        case "plugin:func:minimize":
            getWindow("demo").minimize()
            break;
        case "plugin:func:close":
            getWindow("demo").close()
            break;
        case "plugin:get:plugin-info":
            event.returnValue = getWindowInfo("demo")
            break;
    }
}

const registerApis = () => {
    ipcMain.on('xds-api', api_listener)
}

const unregisterApis = () => {
    ipcMain.off('xds-api', api_listener)
}
