"use strict";
const require$$0 = require("electron");
const node_path = require("node:path");
require("fs");
require("node:fs");
const path = require("path");
require$$0.app.getAppPath();
const userDataPath = require$$0.app.getPath("userData");
node_path.join(userDataPath, "plugin");
node_path.join(userDataPath, "pluginInstance");
const createPluginInstanceWindow = (setting) => {
  const path2 = `file://${node_path.join(__dirname, `../plugins/${name}/index.html`)}`;
  const ico = node_path.join(__dirname, `../plugins/${name}/favicon.ico`);
  const window = new require$$0.BrowserWindow({
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
      preload: node_path.join(__dirname, "../preload/plugin.js")
    }
  });
  window.removeMenu();
  window.center();
  window.webContents.openDevTools();
  console.log("plugin path : ", path2);
  window.loadURL(path2, { hash: name });
  return window;
};
const name$1 = "xDashboard";
const version = "0.0.1";
const main = "public/core/index.js";
const scripts = {
  dev: "electron-vite dev --watch",
  preview: "electron-vite preview",
  build: "electron-vite build && electron-builder build",
  check: "tsc -p tsconfig.node.json && vue-tsc -p tsconfig.web.json --noEmit",
  format: "prettier --cache --write ."
};
const devDependencies = {
  "@ant-design/icons": "^5.3.0",
  "@electron-toolkit/preload": "^2.0.0",
  "@electron-toolkit/tsconfig": "^1.0.1",
  "@electron-toolkit/utils": "^2.0.1",
  "@electron/notarize": "^2.2.0",
  "@iconify-json/ic": "^1.1.17",
  "@intlify/unplugin-vue-i18n": "^1.6.0",
  "@types/node": "^20.10.4",
  "@unocss/preset-icons": "^0.58.0",
  "@unocss/reset": "^0.58.0",
  "@unocss/transformer-directives": "^0.58.0",
  "@vitejs/plugin-vue": "^5.1.2",
  "@vueuse/components": "^10.7.0",
  "@vueuse/core": "^10.7.0",
  electron: "^28.2.1",
  "electron-builder": "^24.9.1",
  "electron-vite": "^1.0.29",
  eslint: "^8.56.0",
  prettier: "^3.1.1",
  sass: "^1.69.5",
  typescript: "^5.3.3",
  vite: "5.4.1",
  vue: "^3.4.37",
  "vue-i18n": "^9.8.0",
  "vue-router": "^4.2.5",
  "vue-tsc": "^1.8.25"
};
const dependencies = {
  "ant-design-vue": "^4.2.3",
  pinia: "^2.1.7",
  "pinia-plugin-persistedstate": "^3.2.3"
};
const engines = {
  node: ">=18.12.0"
};
const pkg = {
  name: name$1,
  version,
  "private": true,
  main,
  scripts,
  devDependencies,
  dependencies,
  engines
};
const trayIcon = path.join(__dirname, "../images/tray.png");
const scanPlugins = () => {
  return [
    {
      label: `插件1`,
      click: () => {
      }
    },
    { type: "separator" },
    {
      label: `插件2`,
      click: () => {
      }
    }
  ];
};
const menus = () => {
  return [
    {
      icon: trayIcon,
      label: `${pkg.name} ${pkg.version}`,
      click: () => {
      }
    },
    { type: "separator" },
    {
      label: `插件`,
      submenu: scanPlugins()
    },
    { type: "separator" },
    {
      label: `重启`,
      click: () => {
        require$$0.app.relaunch();
        require$$0.app.quit();
      }
    },
    {
      label: `退出`,
      role: "quit"
    },
    { type: "separator" },
    {
      label: `关于`,
      click: () => {
      }
    }
  ];
};
const initTray = () => {
  const tray = new require$$0.Tray(require$$0.nativeImage.createFromPath(trayIcon));
  const menu = require$$0.Menu.buildFromTemplate(menus());
  tray.setContextMenu(menu);
};
var dist = {};
Object.defineProperty(dist, "__esModule", { value: true });
var electron = require$$0;
const is = {
  dev: !electron.app.isPackaged
};
const platform = {
  isWindows: process.platform === "win32",
  isMacOS: process.platform === "darwin",
  isLinux: process.platform === "linux"
};
const electronApp = {
  setAppUserModelId(id) {
    if (platform.isWindows)
      electron.app.setAppUserModelId(is.dev ? process.execPath : id);
  },
  setAutoLaunch(auto) {
    if (platform.isLinux)
      return false;
    const isOpenAtLogin = () => {
      return electron.app.getLoginItemSettings().openAtLogin;
    };
    if (isOpenAtLogin() !== auto) {
      electron.app.setLoginItemSettings({
        openAtLogin: auto,
        path: process.execPath
      });
      return isOpenAtLogin() === auto;
    } else {
      return true;
    }
  },
  skipProxy() {
    return electron.session.defaultSession.setProxy({ mode: "direct" });
  }
};
let listeners = [];
let handlers = [];
const ipcHelper = {
  handle(channel, listener) {
    handlers.push(channel);
    electron.ipcMain.handle(channel, listener);
  },
  on(channel, listener) {
    listeners.push(channel);
    electron.ipcMain.on(channel, listener);
    return this;
  },
  removeAllListeners() {
    listeners.forEach((c) => electron.ipcMain.removeAllListeners(c));
    listeners = [];
    return this;
  },
  removeAllHandlers() {
    handlers.forEach((c) => electron.ipcMain.removeHandler(c));
    handlers = [];
  },
  removeListeners(channels) {
    channels.forEach((c) => electron.ipcMain.removeAllListeners(c));
    return this;
  },
  removeHandlers(channels) {
    channels.forEach((c) => electron.ipcMain.removeHandler(c));
  }
};
const optimizer = {
  watchWindowShortcuts(window, shortcutOptions) {
    if (!window)
      return;
    const { webContents } = window;
    const { escToCloseWindow = false, zoom = false } = shortcutOptions || {};
    webContents.on("before-input-event", (event, input) => {
      if (input.type === "keyDown") {
        if (!is.dev) {
          if (input.key === "r" && (input.control || input.meta))
            event.preventDefault();
        } else {
          if (input.code === "F12") {
            if (webContents.isDevToolsOpened()) {
              webContents.closeDevTools();
            } else {
              webContents.openDevTools({ mode: "undocked" });
              console.log("Open dev tool...");
            }
          }
        }
        if (escToCloseWindow) {
          if (input.code === "Escape" && input.key !== "Process") {
            window.close();
            event.preventDefault();
          }
        }
        if (!zoom) {
          if (input.code === "Minus" && (input.control || input.meta))
            event.preventDefault();
          if (input.code === "Equal" && input.shift && (input.control || input.meta))
            event.preventDefault();
        }
      }
    });
  },
  registerFramelessWindowIpc() {
    electron.ipcMain.on("win:invoke", (event, action) => {
      const win = electron.BrowserWindow.fromWebContents(event.sender);
      if (win) {
        if (action === "show") {
          win.show();
        } else if (action === "showInactive") {
          win.showInactive();
        } else if (action === "min") {
          win.minimize();
        } else if (action === "max") {
          const isMaximized = win.isMaximized();
          if (isMaximized) {
            win.unmaximize();
          } else {
            win.maximize();
          }
        } else if (action === "close") {
          win.close();
        }
      }
    });
  }
};
dist.electronApp = electronApp;
dist.ipcHelper = ipcHelper;
var is_1 = dist.is = is;
dist.optimizer = optimizer;
dist.platform = platform;
const createMainWindow = () => {
  const name2 = "xDashboard";
  const ico = node_path.join(__dirname, "../images/favicon.ico");
  const window = new require$$0.BrowserWindow({
    width: 800,
    height: 600,
    icon: ico,
    title: name2,
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
      preload: node_path.join(__dirname, "../preload/index.js")
    }
  });
  window.removeMenu();
  window.webContents.openDevTools();
  if (is_1.dev && process.env["ELECTRON_RENDERER_URL"]) {
    window.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    window.loadFile(node_path.join(__dirname, "../renderer/index.html"), { hash: name2 });
  }
  return window;
};
const MID = "main";
const windows = {};
require$$0.app.disableHardwareAcceleration();
require$$0.app.on("ready", async () => {
  console.log("app ready");
  initTray();
  createMain();
  registerApis();
});
require$$0.app.on("activate", () => {
  if (require$$0.BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
require$$0.app.on("window-all-closed", () => {
});
require$$0.app.on("before-quit", () => {
  unregisterApis();
});
const createMain = () => {
  const window = createMainWindow();
  windows[MID] = window;
  return window;
};
const createPluginInstance = (pid, setting) => {
  const window = createPluginInstanceWindow(setting);
  windows[pid] = window;
  return window;
};
const getWindow = (id) => {
  return windows[id];
};
const getWindowInfo = (id) => {
  const win = getWindow(id);
  if (win) {
    return {
      name: win.title
    };
  }
  return {};
};
const getAppInfo = () => {
  return {
    name: require$$0.app.name,
    version: require$$0.app.getVersion()
  };
};
const api_listener = (event, data) => {
  console.log("api_listener", data);
  const ev = data["event"];
  const dt = data["data"];
  switch (ev) {
    case "main:func:maximize":
      getWindow("main").maximize();
      break;
    case "main:func:minimize":
      getWindow("main").minimize();
      break;
    case "main:func:close":
      getWindow("main").close();
      break;
    case "main:func:plugin-create":
      const pluginName = dt["pluginName"];
      createPluginInstance(pluginName);
      break;
    case "main:func:plugin-active":
      break;
    case "main:func:plugin-deactivate":
      break;
    case "main:get:app-info":
      event.returnValue = getAppInfo();
      break;
    case "main:get:plugin-info":
      event.returnValue = getWindowInfo(dt["id"]);
      break;
    case "plugin:func:maximize":
      getWindow("demo").maximize();
      break;
    case "plugin:func:minimize":
      getWindow("demo").minimize();
      break;
    case "plugin:func:close":
      getWindow("demo").close();
      break;
    case "plugin:get:plugin-info":
      event.returnValue = getWindowInfo("demo");
      break;
    case "main:func:local-install":
      dt["localPluginPath"];
      break;
  }
};
const registerApis = () => {
  require$$0.ipcMain.on("xds-api", api_listener);
};
const unregisterApis = () => {
  require$$0.ipcMain.off("xds-api", api_listener);
};
