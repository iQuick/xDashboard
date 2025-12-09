import { join } from "node:path";
import { BrowserWindow } from "electron";
import { existsSync, mkdirSync, writeFileSync, readFileSync, readdirSync, statSync, rmdirSync, rmSync } from "fs";
import { pluginPath, pluginInstancePath, appPath } from "./constants";
import { generateUUID } from "../utils/Util";

export const uninstallPlugin = (pluginId: string): boolean => {
    // Only allow uninstalling from user plugin path
    const targetDir = join(pluginPath, pluginId);
    if (existsSync(targetDir)) {
        try {
            rmSync(targetDir, { recursive: true, force: true });
            return true;
        } catch (e) {
            console.error(`Failed to uninstall plugin ${pluginId}`, e);
            return false;
        }
    }
    // If not in user path (e.g. built-in), return false
    return false;
}

export const getPlugins = () => {
    const plugins: any[] = [];
    // Built-in plugins path (adjust based on build structure, assuming public/plugins relative to app root or bundled)
    // In dev: app/public/plugins. In prod: resources/app/public/plugins or similar.
    // Using appPath + public/plugins for now. 
    // Note: In electron-vite, public folder content is often copied to out/renderer or accessed via path.
    // Let's try join(appPath, 'public/plugins') first.
    const builtInPath = join(appPath, 'public/plugins');

    // User plugins path
    const userPath = pluginPath;

    const scan = (dir: string, source: 'built-in' | 'user') => {
        if (!existsSync(dir)) return;
        const items = readdirSync(dir);
        items.forEach(item => {
            const itemPath = join(dir, item);
            if (statSync(itemPath).isDirectory()) {
                const settingPath = join(itemPath, 'setting.json');
                if (existsSync(settingPath)) {
                    try {
                        const config = JSON.parse(readFileSync(settingPath, 'utf-8'));
                        plugins.push({
                            ...config,
                            id: item,
                            dir: itemPath,
                            source,
                            logo: config.logo ? `file://${join(itemPath, config.logo)}` : undefined
                        });
                    } catch (e) {
                        console.error(`Failed to load plugin at ${itemPath}`, e);
                    }
                }
            }
        });
    };

    scan(builtInPath, 'built-in');
    scan(userPath, 'user');

    // Scan for instances
    plugins.forEach(plugin => {
        plugin.instances = [];
        const instanceDir = join(pluginInstancePath, plugin.id);
        if (existsSync(instanceDir) && statSync(instanceDir).isDirectory()) {
            const instanceFiles = readdirSync(instanceDir);
            instanceFiles.forEach(file => {
                if (file.endsWith('.json')) {
                    try {
                        const instanceConfig = JSON.parse(readFileSync(join(instanceDir, file), 'utf-8'));
                        plugin.instances.push({
                            ...instanceConfig,
                            // If name missing in instance config, use plugin name + index? 
                            // Usually instance config should have name. 
                            // But createPluginInstance source only writes { id }.
                            // We might need to default name.
                            name: instanceConfig.name || `${plugin.name} Instance`,
                            isOpen: false // TODO: Check if running
                        });
                    } catch (e) { }
                }
            });
        }
    });

    return plugins;
}

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
