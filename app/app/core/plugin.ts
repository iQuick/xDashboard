import { join } from "node:path";
import { BrowserWindow } from "electron";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { pluginPath, pluginInstancePath } from "./constants";
import { generateUUID } from "../utils/Util";
import { readFileSync } from "node:fs";

export const createPluginInstance = (pluginName: string) => {
    const pluginDir = join(pluginInstancePath, pluginName)
    if (!existsSync(pluginDir)) {
        mkdirSync(pluginDir, { recursive: true })
    }
    const pluginInfo = JSON.parse(readFileSync(join(pluginPath, `${pluginName}.json`), { encoding: 'utf-8' }))
    const id = generateUUID()
    writeFileSync(join(pluginDir, `${id}.json`), JSON.stringify({
        id,
    }))
}

export const createPluginInstanceWindow = (setting: PluginInstanceSetting) => {
    const path = `file://${join(__dirname, `../plugins/${name}/index.html`)}`
    const ico = join(__dirname, `../plugins/${name}/favicon.ico`)
    const window = new BrowserWindow({
        x: setting.x,
        y: setting.y,
        width: setting.width,
        height: setting.height,
        icon: ico,
        title: setting.name,
        frame: false,
        resizable: true,
        hasShadow: false,
        transparent: false,
        skipTaskbar: true,
        fullscreenable: false,
        alwaysOnTop: false,
        vibrancy: "hud",
        visualEffectState: "active",
        webPreferences: {
            webSecurity: false,
            backgroundThrottling: false,
            contextIsolation: false,
            webviewTag: true,
            nodeIntegration: true,
            scrollBounce: true,
            preload: join(__dirname, "../preload/plugin.js"),
        },
    });

    window.removeMenu();
    window.center();
    window.webContents.openDevTools();
    console.log('plugin path : ', path)

    window.loadURL(path, { hash: name });
    return window;
};
