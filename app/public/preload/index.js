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
    _send("main:func:maximize");
  },
  mainMinimize: () => {
    _send("main:func:minimize");
  },
  mainClose: () => {
    _send("main:func:close");
  },
  pluginCreate: (name) => {
    _send("main:func:plugin-create", {
      "name": name
    });
  },
  pluginActive: (id) => {
    _send("main:func:plugin-active", {
      id
    });
  },
  pluginDeactivate: (id) => {
    _send("main:func:plugin-deactivate", {
      id
    });
  },
  getAppInfo: () => {
    return _sendSync("main:get:app-info");
  },
  getPluginInfo: (id) => {
    return _sendSync("main:get:plugin-info", {
      id
    });
  }
};
