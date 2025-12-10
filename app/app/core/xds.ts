import { app, BrowserWindow } from "electron";
import { join } from "node:path";
import { is } from "@electron-toolkit/utils";
import pkg from "~/package.json";

export const appPath = app.getAppPath();
export const userDataPath = app.getPath("userData");
export const pluginPath = join(userDataPath, "plugins");
export const dockPath = join(userDataPath, "docks");

// 窗口管理
const _windows: { [key: string]: BrowserWindow } = {};


export const getAppInfo = () => {
    return {
        name: app.name,
        version: app.getVersion(),
    }
}

export const getWindowInfo = (id: string) => {
    const win = getWindow(id)
    if (win) {
        return {
            name: win.title,
        }
    }
    return {}
}

export const getWindow = (id: string): BrowserWindow => {
    return _windows[id]
}

export const createWindow = (id: string): BrowserWindow => {
    if (!id) {
        throw new Error("The window id must exist")
    }
    if (id in _windows) {
        return _windows[id];
    }
    const win = id == 'main' ? createMainWindow() : createMainWindow()
    win.on('closed', () => {
        delete _windows[id]
    })
    _windows[id] = win;
    return win;
}

export const showWindow = (id: string, force: boolean = false) => {
    if (id in _windows) {
        _windows[id].show()
        return
    }
    if (force) {
        createWindow(id).show()
    }
}

export const hideWindow = (id: string) => {
    if (id in _windows) {
        _windows[id].hide()
    }
}

export const closeWindow = (id: string) => {
    getWindow(id).close()
}

export const createMainWindow = () => {
    const name = `${pkg.name} v${pkg.version}`;
    const ico = join(__dirname, '../images/favicon.ico');
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        icon: ico,
        title: name,
        frame: false,
        resizable: true,
        hasShadow: true,
        transparent: false,
        skipTaskbar: false,
        fullscreenable: false,
        alwaysOnTop: false,
        vibrancy: "hud",
        show: false,
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
        window.loadFile(join(__dirname, "../renderer/index.html"));
    }
    return window;
};

export const createDockWindow = (id: string, setting: DockSetting) => {
    // const path = `file://${join(__dirname, `../plugins/${name}/index.html`)}`
    // const ico = join(__dirname, `../plugins/${name}/favicon.ico`)
    const window = new BrowserWindow({
        x: setting.x,
        y: setting.y,
        width: setting.width,
        height: setting.height,
        icon: setting.icon,
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
            preload: join(__dirname, "../preload/dock.js"),
        },
    });

    window.removeMenu();
    window.loadURL(setting.path);
    return window;
};