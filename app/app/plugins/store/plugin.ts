import { defineStore } from 'pinia';
import { pinia } from '@/configs/pinia';

export interface Plugin {
    id: string;
    name: string;
    version: string;
    description: string;
    author: string;
    width?: number;
    height?: number;
    dir: string;
    source: 'system' | 'user';
    instances: any[]; // Defined more strictly if possible
    logo?: string;
    hasUpdate?: boolean;
    latestVersion?: string;
    // Add other fields from setting.json if needed
    [key: string]: any;
}

export const usePluginStore = defineStore('plugin', {
    state: () => ({
        plugins: [] as Plugin[],
    }),
    actions: {
        fetchPlugins() {
            // @ts-ignore
            const list = window.plugin.getPlugins();
            if (Array.isArray(list)) {
                this.plugins = list;
            }
        },
        getPluginById(id: string): Plugin | undefined {
            return this.plugins.find(plugin => plugin.id === id);
        },
        createInstance(id: string) {
            // @ts-ignore
            window.main.pluginCreate(id);
        },
        // TODO: Implement Uninstall
        uninstallPlugin(id: string) {
            console.log('Uninstall', id);
            // @ts-ignore
            // window.plugin.uninstallPlugin(id);
        },
        updatePlugin(id: string) {
            console.log('Update plugin:', id);
            // @ts-ignore
            // window.plugin.updatePlugin(id);
        }
    }
});

export function usePluginStoreWithOut() {
    return usePluginStore(pinia);
}
