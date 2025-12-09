import { app } from "electron";
import { join } from "node:path";

export const appPath = app.getAppPath();
export const userDataPath = app.getPath("userData");
export const pluginPath = join(userDataPath, "plugin");
export const pluginInstancePath = join(userDataPath, "pluginInstance");
