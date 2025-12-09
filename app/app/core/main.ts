import {join} from "node:path";

import {is} from "@electron-toolkit/utils";
import {BrowserWindow} from "electron";

export const createMainWindow = () => {
    const name = "xDashboard";
    const ico = join(__dirname, '../images/favicon.ico');
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        icon: ico,
        title: name,
        frame: false,
        resizable: false,
        hasShadow: true,
        transparent: false,
        skipTaskbar: false,
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
    window.webContents.openDevTools();

    if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
        window.loadURL(process.env["ELECTRON_RENDERER_URL"]);
    } else {
        window.loadFile(join(__dirname, "../renderer/index.html"), {hash: name});
    }
    return window;
};
