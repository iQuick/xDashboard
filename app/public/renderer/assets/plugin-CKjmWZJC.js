import { d as defineComponent, r as reactive, o as openBlock, c as createElementBlock, n as renderList, F as Fragment, g as resolveComponent, a as createBaseVNode, t as toDisplayString, b as createVNode, w as withCtx, h as createTextVNode, _ as _export_sfc } from "./index-DwLq68ku.js";
const _hoisted_1 = { class: "master" };
const _hoisted_2 = { class: "icon" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "content" };
const _hoisted_5 = { class: "add" };
const _hoisted_6 = { class: "exp" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "plugin",
  setup(__props) {
    const plugins = reactive([
      {
        "icon": "https://oss.laf.xioobu.cn/ozzzkc-public/resource/admin/C5720d_图片1.png",
        "title": "插件1",
        "desc": "插件1的描述，描述信息",
        "toggle": false
      },
      {
        "icon": "https://oss.laf.xioobu.cn/ozzzkc-public/resource/admin/C5720d_图片1.png",
        "title": "插件2",
        "desc": "插件2的描述，描述信息",
        "toggle": false
      },
      {
        "icon": "https://oss.laf.xioobu.cn/ozzzkc-public/resource/admin/C5720d_图片1.png",
        "title": "插件3",
        "desc": "插件3的描述，描述信息",
        "toggle": false
      },
      {
        "icon": "https://oss.laf.xioobu.cn/ozzzkc-public/resource/admin/C5720d_图片1.png",
        "title": "插件4",
        "desc": "插件4的描述，描述信息",
        "toggle": false
      }
    ]);
    const handlerCreatePlugin = () => {
      window.xds.openPlugin();
    };
    return (_ctx, _cache) => {
      const _component_a_button = resolveComponent("a-button");
      return openBlock(true), createElementBlock(Fragment, null, renderList(plugins, (plugin2, key) => {
        return openBlock(), createElementBlock("div", {
          class: "item",
          key
        }, [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("img", {
                src: plugin2.icon,
                draggable: "false"
              }, null, 8, _hoisted_3)
            ]),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", null, toDisplayString(plugin2.title), 1),
              createBaseVNode("div", null, toDisplayString(plugin2.desc), 1)
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_a_button, {
                type: "primary",
                onClick: handlerCreatePlugin
              }, {
                default: withCtx(() => _cache[0] || (_cache[0] = [
                  createTextVNode("添加")
                ])),
                _: 1
              })
            ])
          ]),
          createBaseVNode("details", _hoisted_6, [
            createBaseVNode("summary", null, toDisplayString(plugin2.toggle ? _ctx.$t("collapsed") : _ctx.$t("expanded")), 1)
          ])
        ]);
      }), 128);
    };
  }
});
const plugin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-167ea120"]]);
export {
  plugin as default
};
