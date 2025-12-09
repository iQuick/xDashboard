import { d as defineComponent, p as ref, o as openBlock, a as createElementBlock, b as createBaseVNode, F as Fragment, n as renderList, g as resolveComponent, t as toDisplayString, k as createCommentVNode, c as createVNode, w as withCtx, u as unref, D as DeleteOutlined, h as createTextVNode, P as PlusOutlined, q as normalizeClass, v as DownOutlined, _ as _export_sfc } from "./index-D6GYwFzo.js";
const _hoisted_1 = { class: "plugin-manager" };
const _hoisted_2 = { class: "plugin-list" };
const _hoisted_3 = ["onClick", "title"];
const _hoisted_4 = { class: "info-card" };
const _hoisted_5 = { class: "plugin-header" };
const _hoisted_6 = { class: "plugin-info" };
const _hoisted_7 = { class: "icon-wrapper" };
const _hoisted_8 = { class: "icon" };
const _hoisted_9 = { class: "details" };
const _hoisted_10 = { class: "title" };
const _hoisted_11 = { class: "desc" };
const _hoisted_12 = { class: "meta" };
const _hoisted_13 = { class: "author" };
const _hoisted_14 = { class: "version" };
const _hoisted_15 = { class: "actions" };
const _hoisted_16 = {
  key: 1,
  class: "instances-card"
};
const _hoisted_17 = { class: "instances" };
const _hoisted_18 = { class: "instance-info" };
const _hoisted_19 = { class: "name" };
const _hoisted_20 = ["onClick"];
const _hoisted_21 = { class: "expand-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "plugin",
  setup(__props) {
    const plugins = ref([
      {
        id: "demo-plugin",
        icon: "🔌",
        title: "Demo Plugin",
        description: "这是一个示例插件，展示插件的基本功能",
        version: "1.0.0",
        instances: [
          { id: "demo-1", name: "Demo 1", isOpen: true },
          { id: "demo-2", name: "Demo 2", isOpen: false }
        ],
        author: "John Doe",
        hasUpdate: true,
        latestVersion: "1.1.0"
      },
      {
        id: "network-monitor",
        icon: "📊",
        title: "网络监控",
        description: "实时监控网络状态、流量统计等",
        version: "1.2.0",
        instances: [
          { id: "net-1", name: "主路由监控", isOpen: true }
        ],
        author: "Jane Smith"
      }
    ]);
    const expandedPlugins = ref(/* @__PURE__ */ new Set());
    const toggleExpand = (pluginId) => {
      if (expandedPlugins.value.has(pluginId)) {
        expandedPlugins.value.delete(pluginId);
      } else {
        expandedPlugins.value.add(pluginId);
      }
    };
    const createInstance = (id) => {
      console.log("Create plugin instance:", id);
    };
    const deleteInstance = (id, instanceId) => {
      console.log("Remove plugin instance :", id, instanceId);
    };
    const uninstallPlugin = (id) => {
      console.log("Uninstallation plugin:", id);
    };
    const updatePlugin = (id) => {
      console.log("Update plugin:", id);
    };
    const toggleInstance = (instanceId, isOpen) => {
      if (isOpen) {
        window.xds.pluginActive(instanceId);
      } else {
        window.xds.pluginDeactivate(instanceId);
      }
    };
    return (_ctx, _cache) => {
      const _component_a_button = resolveComponent("a-button");
      const _component_a_switch = resolveComponent("a-switch");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(plugins.value, (plugin2) => {
            return openBlock(), createElementBlock("div", {
              key: plugin2.id,
              class: "plugin-item"
            }, [
              plugin2.hasUpdate ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "update-badge",
                onClick: ($event) => updatePlugin(plugin2.id),
                title: `点击更新到 ${plugin2.latestVersion}`
              }, " 更新 " + toDisplayString(plugin2.latestVersion), 9, _hoisted_3)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("span", _hoisted_8, toDisplayString(plugin2.icon), 1)
                    ]),
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("h3", _hoisted_10, toDisplayString(plugin2.title), 1),
                      createBaseVNode("p", _hoisted_11, toDisplayString(plugin2.description), 1),
                      createBaseVNode("div", _hoisted_12, [
                        createBaseVNode("span", _hoisted_13, toDisplayString(plugin2.author), 1),
                        createBaseVNode("span", _hoisted_14, "v" + toDisplayString(plugin2.version), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(_component_a_button, {
                      type: "text",
                      danger: "",
                      class: "uninstall-btn",
                      onClick: ($event) => uninstallPlugin(plugin2.id)
                    }, {
                      icon: withCtx(() => [
                        createVNode(unref(DeleteOutlined))
                      ]),
                      default: withCtx(() => [
                        _cache[0] || (_cache[0] = createTextVNode(" 卸载插件 "))
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_a_button, {
                      type: "link",
                      class: "create-btn",
                      onClick: ($event) => createInstance(plugin2.id)
                    }, {
                      icon: withCtx(() => [
                        createVNode(unref(PlusOutlined))
                      ]),
                      default: withCtx(() => [
                        _cache[1] || (_cache[1] = createTextVNode(" 创建实例 "))
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ])
              ]),
              expandedPlugins.value.has(plugin2.id) && plugin2.instances.length ? (openBlock(), createElementBlock("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(plugin2.instances, (instance) => {
                    return openBlock(), createElementBlock("div", {
                      key: instance.id,
                      class: "instance-item"
                    }, [
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("span", _hoisted_19, toDisplayString(instance.name), 1),
                        createVNode(_component_a_switch, {
                          class: "instance-active",
                          size: "small",
                          checked: instance.isOpen,
                          "onUpdate:checked": ($event) => instance.isOpen = $event,
                          onChange: (checked) => toggleInstance(instance.id, checked)
                        }, null, 8, ["checked", "onUpdate:checked", "onChange"])
                      ]),
                      createVNode(_component_a_button, {
                        type: "text",
                        class: "delete-btn",
                        onClick: ($event) => deleteInstance(plugin2.id, instance.id)
                      }, {
                        icon: withCtx(() => [
                          createVNode(unref(DeleteOutlined))
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true),
              plugin2.instances.length ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: "expand-section",
                onClick: ($event) => toggleExpand(plugin2.id)
              }, [
                createBaseVNode("span", _hoisted_21, toDisplayString(expandedPlugins.value.has(plugin2.id) ? "收起" : "展开"), 1),
                createVNode(unref(DownOutlined), {
                  class: normalizeClass(["expand-icon", { expanded: expandedPlugins.value.has(plugin2.id) }])
                }, null, 8, ["class"])
              ], 8, _hoisted_20)) : createCommentVNode("", true)
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const plugin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f03e59e7"]]);
export {
  plugin as default
};
