import * as xds from "./xds";

const _WID = "main"

export const on_event = (event: string, callback: (data: any) => void) => {
    switch (event) {
        case "maximize":
            xds.getWindow(_WID).maximize()
            break;
        case "minimize":
            xds.getWindow(_WID).minimize()
            break;
        case "close":
            xds.closeWindow(_WID)
            break;
        case "show":
            xds.showWindow(_WID)
            break;
        case "get-info":
            callback(xds.getAppInfo())
            break;
    }
}