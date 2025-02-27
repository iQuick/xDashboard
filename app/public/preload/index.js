"use strict";
const electron = require("electron");
const _sendSync = (event, data = null) => {
  const result = electron.ipcRenderer.sendSync("xds-api", {
    event,
    data
  });
  if (result instanceof Error) {
    console.log("Error", result);
  }
  return result;
};
const _send = (event, data = null) => {
  electron.ipcRenderer.send("xds-api", {
    event,
    data
  });
};
window.xds = {
  __event__: {},
  hooks: {},
  mainMaximize: () => {
    _send("func:main:maximize");
  },
  mainMinimize: () => {
    _send("func:main:minimize");
  },
  mainClose: () => {
    _send("func:main:close");
  },
  pluginCreate: (name) => {
    _send("func:plugin:create", {
      "name": name
    });
  },
  pluginActive: (id) => {
    _send("func:plugin:active", {
      id
    });
  },
  pluginDeactivate: (id) => {
    _send("func:plugin:deactivate", {
      id
    });
  },
  getAppInfo: () => {
    return _sendSync("get:app-info");
  },
  getWindowInfo: (id) => {
    return _sendSync("get:window-info", {
      id
    });
  }
};
