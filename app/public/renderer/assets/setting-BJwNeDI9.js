import { d as defineComponent, s as storeToRefs, u as useSettingStoreWithOut, l as watch, m as onMounted, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, e as unref, g as resolveComponent, F as Fragment, n as renderList, h as createTextVNode, t as toDisplayString, _ as _export_sfc } from "./index-DwLq68ku.js";
const _hoisted_1 = { class: "item" };
const _hoisted_2 = { class: "item" };
const _hoisted_3 = { class: "item" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setting",
  setup(__props) {
    const setting2 = storeToRefs(useSettingStoreWithOut());
    const themes = ["light", "dark"];
    watch(setting2.theme, (newValue) => {
      setTheme(newValue);
    });
    onMounted(() => {
      setTheme(setting2.theme.value);
    });
    const setTheme = (theme) => {
      document.documentElement.classList.remove(...themes);
      document.documentElement.classList.add(theme);
    };
    return (_ctx, _cache) => {
      const _component_a_select_option = resolveComponent("a-select-option");
      const _component_a_select = resolveComponent("a-select");
      const _component_a_switch = resolveComponent("a-switch");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[3] || (_cache[3] = createBaseVNode("span", null, "主题", -1)),
          createVNode(_component_a_select, {
            style: { "width": "80px" },
            value: unref(setting2).theme.value,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(setting2).theme.value = $event)
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(themes, (name, key) => {
                return createVNode(_component_a_select_option, {
                  value: name,
                  key
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t(`themes.${name}`)), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ]),
            _: 1
          }, 8, ["value"])
        ]),
        createBaseVNode("div", _hoisted_2, [
          _cache[4] || (_cache[4] = createBaseVNode("span", null, "开机自启动", -1)),
          createVNode(_component_a_switch, {
            checked: unref(setting2).autoStart.value,
            "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => unref(setting2).autoStart.value = $event)
          }, null, 8, ["checked"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          _cache[5] || (_cache[5] = createBaseVNode("span", null, "系统启动时不显示主窗口", -1)),
          createVNode(_component_a_switch, {
            checked: unref(setting2).showMain.value,
            "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => unref(setting2).showMain.value = $event)
          }, null, 8, ["checked"])
        ])
      ]);
    };
  }
});
const setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ed9b9b0"]]);
export {
  setting as default
};
