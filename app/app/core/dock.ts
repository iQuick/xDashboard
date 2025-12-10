import { join } from "node:path";
import { dockPath } from "./xds";
import { BrowserWindow } from "electron";

export const create = (pluginName: string) => {
    // const pluginDir = join(pluginInstancePath, pluginName)
    // if (!existsSync(pluginDir)) {
    //     mkdirSync(pluginDir, { recursive: true })
    // }
    // const pluginInfo = JSON.parse(readFileSync(join(pluginPath, `${pluginName}.json`), { encoding: 'utf-8' }))
    // const id = generateUUID()
    // writeFileSync(join(pluginDir, `${id}.json`), JSON.stringify({
    //     id,
    // }))
}




export const on_event = (event: string, callback: (data: any) => void) => {
}