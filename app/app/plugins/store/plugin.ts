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
    source: 'built-in' | 'user';
    instances: any[]; // Defined more strictly if possible
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
            const list = window.main.getPlugins();
            if (Array.isArray(list)) {
                this.plugins = list;
            }
        },
        createInstance(id: string) {
            // @ts-ignore
            window.main.pluginCreate(id);
        },
        // TODO: Implement Uninstall
        uninstallPlugin(id: string) {
            console.log('Uninstall', id);
        }
    }
});

export function usePluginStoreWithOut() {
    return usePluginStore(pinia);
}
