import { d as defineComponent, s as storeToRefs, u as useSettingStoreWithOut, r as reactive, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, e as unref, f as router, g as resolveComponent, h as createTextVNode, t as toDisplayString, i as createBlock, S as Suspense, j as resolveDynamicComponent, T as Transition, k as createCommentVNode, _ as _export_sfc } from "./index-DwLq68ku.js";
const _hoisted_1 = { class: "main" };
const _hoisted_2 = { class: "menu" };
const _hoisted_3 = { class: "content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "main",
  setup(__props) {
    const setting = storeToRefs(useSettingStoreWithOut());
    const active = reactive(["setting"]);
    const changeMenu = (key) => {
      active[0] = key;
      router.push(`/manager/${key}`);
    };
    return (_ctx, _cache) => {
      const _component_a_menu_item = resolveComponent("a-menu-item");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_a_menu, {
            style: { "height": "100%" },
            theme: unref(setting).theme.value,
            "selected-keys": active,
            mode: "vertical",
            onSelect: _cache[0] || (_cache[0] = ({ key }) => changeMenu(key))
          }, {
            default: withCtx(() => [
              createVNode(_component_a_menu_item, { key: "setting" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("settings.setting")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_menu_item, { key: "plugin" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("settings.plugin")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_menu_item, { key: "store" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("settings.store")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_menu_item, { key: "proxy" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("settings.proxy")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_menu_item, { key: "about" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("settings.about")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["theme", "selected-keys"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_RouterView, null, {
            default: withCtx(({ Component }) => [
              Component ? (openBlock(), createBlock(Transition, {
                key: 0,
                name: "fade"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Suspense, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(Component)))
                    ]),
                    _: 2
                  }, 1024))
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const main = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ef77a527"]]);
export {
  main as default
};
