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
  console.log("send", event, data);
  electron.ipcRenderer.send("xds-api", {
    event,
    data
  });
};
window.plugin = {
  __event__: {},
  hooks: {},
  maximize: (id) => {
    _send("plugin:func:maximize", {
      id
    });
  },
  minimize: (id) => {
    _send("plugin:func:minimize", {
      id
    });
  },
  close: (id) => {
    _send("plugin:func:close", {
      id
    });
  },
  getPluginInfo: (id) => {
    return _sendSync("plugin:get:plugin-info", {
      id
    });
  }
};
