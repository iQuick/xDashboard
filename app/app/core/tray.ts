import { app, BrowserWindow, Menu, nativeImage, shell, Tray } from "electron";

import pkg from "~/package.json";
import trayIcon from "~/public/images/tray.png?asset";

const scanPlugins = () => {
  return [
    {
      label: `插件1`,
      click: () => {
      },
    },
    { type: "separator" },
    {
      label: `插件2`,
      click: () => {
      },
    },
  ]
}

const menus = (): {}[] => {
  return [
    {
      icon: trayIcon,
      label: `${pkg.name} ${pkg.version}`,
      click: () => {
        // shell.openExternal("https://xioobu.cn/");
      },
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
        app.relaunch();
        app.quit();
      },
    },
    {
      label: `退出`,
      role: "quit",
    },
    { type: "separator" },
    {
      label: `关于`,
      click: () => {
      },
    },
  ];
};

export const initTray = () => {
  const tray = new Tray(nativeImage.createFromPath(trayIcon));
  const menu = Menu.buildFromTemplate(menus());
  tray.setContextMenu(menu);
};
