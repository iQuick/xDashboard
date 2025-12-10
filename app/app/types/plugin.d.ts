type PluginSetting = {
    id: string
    name: string
}

type DockSetting = {
    id: string
    path: string,
    icon: string,
    name: string,
    width: number,
    height: number,
    x: number,
    y: number,
    resizable: boolean,
    alwaysOnTop: boolean,
}