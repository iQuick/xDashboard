import {createPinia, defineStore} from "pinia";
import {createPersistedState} from 'pinia-plugin-persistedstate'


export const pinia = createPinia().use(createPersistedState({
    key: id => `x-app-${id}`,
    auto: true,
}));

export type Setting = {
    theme: string
    autoStart: boolean
    showMain: boolean
}

export type Proxy = {
    enable: boolean,
    host: string,
    port: number,
    username: string,
    password: string
}

export const useSettingStore = defineStore('app-setting', {
    state: (): Setting => ({
        theme: 'light',
        autoStart: true,
        showMain: false,
    }),
    getters: {
        getTheme() : string {
            return this.theme;
        },
        getAutoStart() : boolean {
            return this.autoStart;
        },
        getShowMain() : boolean {
            return this.showMain;
        }
    },
    actions: {
        setTheme(theme: string) {
            this.theme = theme;
        },
        setAutoStart(enable: boolean) {
            this.autoStart = enable;
        }
    },
    persist: {
        key: 'setting',
        storage: localStorage,
    },
});

export function useSettingStoreWithOut() {
    return useSettingStore(pinia);
}

export const userProxyStore = defineStore('app-proxy', {
    state: (): Proxy => ({
        enable: false,
        host: '127.0.0.1',
        port: 7890,
        username: '',
        password: ''
    }),
    persist: {
        key: 'proxy',
        storage: localStorage,
    },
})

export function useProxyStoreWithOut() {
    return userProxyStore(pinia);
}
