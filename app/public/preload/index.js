"use strict";
const index = require("./chunks/index-D3PXazZq.js");
require("electron");
window.main = {
  __event__: {},
  hooks: {},
  maximize: () => {
    index.sendEvent("main:maximize");
  },
  minimize: () => {
    index.sendEvent("main:minimize");
  },
  show: () => {
    index.sendEvent("main:show");
  },
  close: () => {
    index.sendEvent("main:close");
  },
  getInfo: () => {
    return index.sendEventSync("main:get-info");
  }
};
window.plugin = {
  __event__: {},
  hooks: {},
  install: (id) => {
    index.sendEvent("plugin:install", {
      id
    });
  },
  uninstall: (id) => {
    index.sendEvent("plugin:uninstall", {
      id
    });
  },
  getInfo: (id) => {
    return index.sendEventSync("plugin:get-info", {
      id
    });
  },
  getPlugin: (id) => {
    return index.sendEventSync("plugin:get-plugin", {
      id
    });
  },
  getPlugins: () => {
    return index.sendEventSync("plugin:get-plugins");
  }
};
