import { join } from "node:path";
import { existsSync, readFileSync, readdirSync, statSync, rmdirSync, rmSync } from "fs";
import { appPath, pluginPath} from "./xds";

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
    const scan = (dir: string, source: 'system' | 'user') => {
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

    scan(join(appPath, 'public/plugins'), 'system');
    scan(pluginPath, 'user');

    // // Scan for instances
    // plugins.forEach(plugin => {
    //     plugin.instances = [];
    //     const instanceDir = join(dockPath, plugin.id);
    //     if (existsSync(instanceDir) && statSync(instanceDir).isDirectory()) {
    //         const instanceFiles = readdirSync(instanceDir);
    //         instanceFiles.forEach(file => {
    //             if (file.endsWith('.json')) {
    //                 try {
    //                     const instanceConfig = JSON.parse(readFileSync(join(instanceDir, file), 'utf-8'));
    //                     plugin.instances.push({
    //                         ...instanceConfig,
    //                         // If name missing in instance config, use plugin name + index?
    //                         // Usually instance config should have name.
    //                         // But createPluginInstance source only writes { id }.
    //                         // We might need to default name.
    //                         name: instanceConfig.name || `${plugin.name} Instance`,
    //                         isOpen: false // TODO: Check if running
    //                     });
    //                 } catch (e) { }
    //             }
    //         });
    //     }
    // });

    return plugins;
}

export const on_event = (event: string, callback: (data: any) => void) => {
}
