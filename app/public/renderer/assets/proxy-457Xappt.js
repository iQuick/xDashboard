import { d as defineComponent, s as storeToRefs, y as useProxyStoreWithOut, o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, c as createVNode, u as unref, w as withCtx, g as resolveComponent, h as createTextVNode, _ as _export_sfc } from "./index-D6GYwFzo.js";
const _hoisted_1 = { class: "proxy" };
const _hoisted_2 = { class: "card" };
const _hoisted_3 = { class: "switch" };
const _hoisted_4 = { class: "label" };
const _hoisted_5 = { class: "card" };
const _hoisted_6 = { class: "title" };
const _hoisted_7 = { class: "form" };
const _hoisted_8 = { class: "item" };
const _hoisted_9 = { class: "label" };
const _hoisted_10 = { class: "item" };
const _hoisted_11 = { class: "label" };
const _hoisted_12 = { class: "card" };
const _hoisted_13 = { class: "title" };
const _hoisted_14 = { class: "form" };
const _hoisted_15 = { class: "item" };
const _hoisted_16 = { class: "label" };
const _hoisted_17 = { class: "item" };
const _hoisted_18 = { class: "label" };
const _hoisted_19 = { class: "footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "proxy",
  setup(__props) {
    const proxy2 = storeToRefs(useProxyStoreWithOut());
    return (_ctx, _cache) => {
      const _component_a_switch = resolveComponent("a-switch");
      const _component_a_input = resolveComponent("a-input");
      const _component_a_button = resolveComponent("a-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("proxy.enable")), 1),
            createVNode(_component_a_switch, {
              checked: unref(proxy2).enable.value,
              "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => unref(proxy2).enable.value = $event)
            }, null, 8, ["checked"])
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("proxy.title.proxy")), 1),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("proxy.name.host")), 1),
              createVNode(_component_a_input, {
                value: unref(proxy2).host.value,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(proxy2).host.value = $event),
                placeholder: _ctx.$t("proxy.placeholder.host")
              }, null, 8, ["value", "placeholder"])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$t("proxy.name.port")), 1),
              createVNode(_component_a_input, {
                value: unref(proxy2).port.value,
                "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(proxy2).port.value = $event),
                placeholder: _ctx.$t("proxy.placeholder.port")
              }, null, 8, ["value", "placeholder"])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.$t("proxy.title.authentication")), 1),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, toDisplayString(_ctx.$t("proxy.name.username")), 1),
              createVNode(_component_a_input, {
                value: unref(proxy2).username.value,
                "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(proxy2).username.value = $event),
                placeholder: _ctx.$t("proxy.placeholder.username")
              }, null, 8, ["value", "placeholder"])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, toDisplayString(_ctx.$t("proxy.name.password")), 1),
              createVNode(_component_a_input, {
                value: unref(proxy2).password.value,
                "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(proxy2).password.value = $event),
                placeholder: _ctx.$t("proxy.placeholder.password")
              }, null, 8, ["value", "placeholder"])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_19, [
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
const proxy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dab79343"]]);
export {
  proxy as default
};
