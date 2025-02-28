import {defineStore} from "pinia";
import {pinia} from "../configs/pinia";
import { toCamelCase } from "../utils/Util";

const usePluginStores = {} as { [key: string]: any }

export type PluginInstanceSetting = {
    id: string
    x: number
    y: number
    width: number
    height: number
    theme: string
    isTop: boolean
    isLocked: boolean
}

const createToGetters = <T extends PluginInstanceSetting>(data: T, getters:{ [key: string]: any } = {}) => {
    if (getters == null) {
        getters = {} as any;
    }
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            getters[toCamelCase("get" + key)] = () => data[key];
        }
    }
    return getters;
}

const createToSetters = <T extends PluginInstanceSetting>(data: T, setters:{ [key: string]: any } = {}) => {
    if (setters == null) {
        setters = {} as any;
    }
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            setters[toCamelCase("set" + key)] = (value: any) => { data[key] = value; };
        }
    }
    return setters;
}

export const createPluginInstanceStore = <T extends PluginInstanceSetting>(id: string, data: T, gets:{ [key: string]: any } = {}, sets:{ [key: string]: any } = {}) => {
    const getters = createToGetters(data, gets);
    const setters = createToSetters(data, sets);
    const store = defineStore('plugin-instance-' + id, {
        state: (): T => (data),
        getters: getters as any, 
        actions: setters as any,
        persist: {
            key: 'plugin-instance-' + id,
            storage: localStorage,
        }
    });
    usePluginStores[id] = store;
    return store;
};

export function usePluginInstanceStoreWithOut(id: string) {
    return usePluginStores[id](pinia);
}

