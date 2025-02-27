import {join} from "node:path";

import {BrowserWindow} from "electron";

export const initPlugin = () => {
};

export const createPlugin = (name: string) => {
    const path = `file://${join(__dirname, `../plugins/${name}/index.html`)}`
    const ico = join(__dirname, `../plugins/${name}/favicon.ico`)
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        icon: ico,
        title: name,
        frame: true,
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
            preload: join(__dirname, "../preload/index.js"),
        },
    });

    window.removeMenu();
    window.center();
    window.webContents.openDevTools();
    console.log('plugin path : ', path)

    window.loadURL(path, {hash: name});
    return window;
};
