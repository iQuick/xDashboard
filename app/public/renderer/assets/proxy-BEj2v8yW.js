import { d as defineComponent, s as storeToRefs, p as useProxyStoreWithOut, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createVNode, e as unref, w as withCtx, g as resolveComponent, h as createTextVNode, _ as _export_sfc } from "./index-DwLq68ku.js";
const _hoisted_1 = { class: "item space_between" };
const _hoisted_2 = { class: "item" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "space_row" };
const _hoisted_5 = { class: "space_row" };
const _hoisted_6 = { class: "item" };
const _hoisted_7 = { class: "title" };
const _hoisted_8 = { class: "space_row" };
const _hoisted_9 = { class: "space_row" };
const _hoisted_10 = { class: "test" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "proxy",
  setup(__props) {
    const proxy2 = storeToRefs(useProxyStoreWithOut());
    return (_ctx, _cache) => {
      const _component_a_switch = resolveComponent("a-switch");
      const _component_a_input = resolveComponent("a-input");
      const _component_a_button = resolveComponent("a-button");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", null, toDisplayString(_ctx.$t("proxy.enable")), 1),
          createVNode(_component_a_switch, {
            checked: unref(proxy2).enable.value,
            "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => unref(proxy2).enable.value = $event)
          }, null, 8, ["checked"])
        ]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("proxy.title.proxy")), 1),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", null, toDisplayString(_ctx.$t("proxy.name.host")), 1),
            createVNode(_component_a_input, {
              value: unref(proxy2).host.value,
              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(proxy2).host.value = $event),
              placeholder: _ctx.$t("proxy.placeholder.host")
            }, null, 8, ["value", "placeholder"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", null, toDisplayString(_ctx.$t("proxy.name.port")), 1),
            createVNode(_component_a_input, {
              value: unref(proxy2).port.value,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(proxy2).port.value = $event),
              placeholder: _ctx.$t("proxy.placeholder.port")
            }, null, 8, ["value", "placeholder"])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, toDisplayString(_ctx.$t("proxy.title.authentication")), 1),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", null, toDisplayString(_ctx.$t("proxy.name.username")), 1),
            createVNode(_component_a_input, {
              value: unref(proxy2).username.value,
              "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(proxy2).username.value = $event),
              placeholder: _ctx.$t("proxy.placeholder.username")
            }, null, 8, ["value", "placeholder"])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", null, toDisplayString(_ctx.$t("proxy.name.password")), 1),
            createVNode(_component_a_input, {
              value: unref(proxy2).password.value,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(proxy2).password.value = $event),
              placeholder: _ctx.$t("proxy.placeholder.password")
            }, null, 8, ["value", "placeholder"])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createVNode(_component_a_button, { type: "primary" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("proxy.test")), 1)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const proxy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17ac8efc"]]);
export {
  proxy as default
};
