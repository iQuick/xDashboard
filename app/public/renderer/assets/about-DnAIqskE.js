import { d as defineComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, _ as _export_sfc } from "./index-D6GYwFzo.js";
const _imports_0 = "" + new URL("icon-nKsgQaBP.png", import.meta.url).href;
const _hoisted_1 = { class: "about" };
const _hoisted_2 = { class: "info" };
const _hoisted_3 = { class: "version" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  setup(__props) {
    const appInfo = window.xds.getAppInfo();
    const version = appInfo.version;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "logo" }, [
          createBaseVNode("img", {
            src: _imports_0,
            draggable: "false"
          })
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "title" }, "超级面板", -1)),
          createBaseVNode("div", _hoisted_3, "V" + toDisplayString(unref(version)), 1)
        ])
      ]);
    };
  }
});
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c597b300"]]);
export {
  about as default
};
