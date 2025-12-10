import {app, shell, nativeImage, Menu, Tray} from "electron";

import pkg from "~/package.json";
import trayIcon from "~/public/images/tray.png?asset";
import * as xds from "./xds";


const menus = (): {}[] => {
    return [
        {
            icon: trayIcon,
            label: `${pkg.name} ${pkg.version}`,
            click: () => {
                shell.openExternal(pkg.website)
                    .catch(err => {
                        console.error(err)
                    });
            },
        },
        {type: "separator"},
        {
            label: `打开主界面`,
            click: () => {
                xds.showWindow("main", true)
            },
        },
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
        }
    ];
};

export const initTray = () => {
    const tray = new Tray(nativeImage.createFromPath(trayIcon));
    const menu = Menu.buildFromTemplate(menus());
    tray.setContextMenu(menu);
};
