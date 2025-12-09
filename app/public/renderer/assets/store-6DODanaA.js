import { c as createVNode, I as Icon, d as defineComponent, p as ref, o as openBlock, a as createElementBlock, b as createBaseVNode, F as Fragment, n as renderList, g as resolveComponent, w as withCtx, u as unref, D as DeleteOutlined, k as createCommentVNode, t as toDisplayString, i as createBlock, x as DownloadOutlined, h as createTextVNode, q as normalizeClass, _ as _export_sfc } from "./index-D6GYwFzo.js";
var SyncOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z" } }] }, "name": "sync", "theme": "outlined" };
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SyncOutlined = function SyncOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(Icon, _objectSpread({}, p, {
    "icon": SyncOutlined$1
  }), null);
};
SyncOutlined.displayName = "SyncOutlined";
SyncOutlined.inheritAttrs = false;
const _hoisted_1 = { class: "store" };
const _hoisted_2 = { class: "grid" };
const _hoisted_3 = {
  key: 0,
  class: "card-actions"
};
const _hoisted_4 = ["title"];
const _hoisted_5 = { class: "header" };
const _hoisted_6 = { class: "icon" };
const _hoisted_7 = { class: "title" };
const _hoisted_8 = { class: "content" };
const _hoisted_9 = { class: "desc" };
const _hoisted_10 = { class: "meta" };
const _hoisted_11 = { class: "author" };
const _hoisted_12 = { class: "version" };
const _hoisted_13 = { class: "actions" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "store",
  setup(__props) {
    const plugins = ref([
      {
        id: "demo-plugin",
        icon: "🔌",
        title: "Demo Plugin",
        description: "这是一个示例插件，展示插件的基本功能",
        version: "1.0.0",
        author: "XDash Team",
        downloads: 1234,
        installed: true,
        hasUpdate: true,
        latestVersion: "1.1.0"
      },
      {
        id: "network-monitor",
        icon: "📊",
        title: "网络监控",
        description: "实时监控网络状态、流量统计等",
        version: "1.2.0",
        author: "NetWatch",
        downloads: 3456
      },
      {
        id: "network-monitor",
        icon: "📊",
        title: "网络监控",
        description: "实时监控网络状态、流量统计等",
        version: "1.2.0",
        author: "NetWatch",
        downloads: 3456
      },
      {
        id: "network-monitor",
        icon: "📊",
        title: "网络监控",
        description: "实时监控网络状态、流量统计等",
        version: "1.2.0",
        author: "NetWatch",
        downloads: 3456
      },
      {
        id: "network-monitor",
        icon: "📊",
        title: "网络监控",
        description: "实时监控网络状态、流量统计等",
        version: "1.2.0",
        author: "NetWatch",
        downloads: 3456
      },
      {
        id: "network-monitor",
        icon: "📊",
        title: "网络监控",
        description: "实时监控网络状态、流量统计等",
        version: "1.2.0",
        author: "NetWatch",
        downloads: 3456
      }
    ]);
    const handlePluginAction = (plugin) => {
      if (plugin.installed && plugin.hasUpdate) {
        console.log("更新插件:", plugin.id);
      } else {
        console.log("安装插件:", plugin.id);
      }
    };
    const uninstallPlugin = (e, plugin) => {
      e.stopPropagation();
      console.log("卸载插件:", plugin.id);
    };
    const createPlugin = () => {
    };
    const installLocalPlugin = () => {
    };
    return (_ctx, _cache) => {
      const _component_a_button = resolveComponent("a-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", { class: "action-container" }, [
          createBaseVNode("div", { class: "action-buttons" }, [
            createBaseVNode("div", { class: "button-group" }, [
              createBaseVNode("div", {
                class: "custom-button primary",
                onClick: createPlugin
              }, "开发插件"),
              _cache[0] || (_cache[0] = createBaseVNode("p", { class: "description" }, " 允许用户创建新的插件实例，扩展应用功能。 ", -1))
            ]),
            createBaseVNode("div", { class: "button-group" }, [
              createBaseVNode("div", {
                class: "custom-button default",
                onClick: installLocalPlugin
              }, "本地安装"),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "description" }, " 从本地文件系统安装插件，方便用户使用自定义插件。 ", -1))
            ])
          ])
        ]),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "divider" }, null, -1)),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(plugins.value, (plugin) => {
            return openBlock(), createElementBlock("div", {
              key: plugin.id,
              class: "card"
            }, [
              plugin.installed ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(_component_a_button, {
                  type: "text",
                  class: "uninstall-btn",
                  onClick: (e) => uninstallPlugin(e, plugin)
                }, {
                  icon: withCtx(() => [
                    createVNode(unref(DeleteOutlined))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])) : createCommentVNode("", true),
              plugin.installed && plugin.hasUpdate ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: "update-badge",
                title: `可更新到 ${plugin.latestVersion}`
              }, " 可更新 ", 8, _hoisted_4)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, toDisplayString(plugin.icon), 1),
                createBaseVNode("h3", _hoisted_7, toDisplayString(plugin.title), 1)
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("p", _hoisted_9, toDisplayString(plugin.description), 1),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("span", _hoisted_11, toDisplayString(plugin.author), 1),
                  createBaseVNode("span", _hoisted_12, "v" + toDisplayString(plugin.version), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(_component_a_button, {
                  type: plugin.installed && plugin.hasUpdate ? "default" : "primary",
                  class: normalizeClass(["action-btn", { "update-btn": plugin.installed && plugin.hasUpdate }]),
                  onClick: ($event) => handlePluginAction(plugin)
                }, {
                  icon: withCtx(() => [
                    !plugin.installed ? (openBlock(), createBlock(unref(DownloadOutlined), { key: 0 })) : plugin.hasUpdate ? (openBlock(), createBlock(unref(SyncOutlined), { key: 1 })) : createCommentVNode("", true)
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(plugin.installed && plugin.hasUpdate ? "更新" : "安装"), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "class", "onClick"])
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const store = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-204e20f5"]]);
export {
  store as default
};
