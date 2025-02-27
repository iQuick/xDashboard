import { d as defineComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, _ as _export_sfc } from "./index-DwLq68ku.js";
const _imports_0 = "" + new URL("icon-nKsgQaBP.png", import.meta.url).href;
const _hoisted_1 = { class: "container" };
const version = "0.0.1";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "logo" }, [
          createBaseVNode("img", {
            src: _imports_0,
            draggable: "false"
          })
        ], -1)),
        createBaseVNode("div", { class: "info" }, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "title" }, "超级面板", -1)),
          createBaseVNode("div", { class: "version" }, "V" + toDisplayString(version))
        ])
      ]);
    };
  }
});
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fcd26456"]]);
export {
  about as default
};
