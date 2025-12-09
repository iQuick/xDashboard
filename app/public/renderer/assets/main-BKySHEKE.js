import { c as createVNode, I as Icon, d as defineComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, C as CloseOutlined, _ as _export_sfc, s as storeToRefs, e as useSettingStoreWithOut, r as reactive, w as withCtx, f as router, g as resolveComponent, h as createTextVNode, i as createBlock, j as resolveDynamicComponent, T as Transition, k as createCommentVNode } from "./index-D6GYwFzo.js";
var MinusOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, "name": "minus", "theme": "outlined" };
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
var MinusOutlined = function MinusOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(Icon, _objectSpread({}, p, {
    "icon": MinusOutlined$1
  }), null);
};
MinusOutlined.displayName = "MinusOutlined";
MinusOutlined.inheritAttrs = false;
const _hoisted_1$1 = { class: "header" };
const _hoisted_2$1 = { class: "left" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = { class: "title" };
const _hoisted_5 = { class: "right" };
const _hoisted_6 = { class: "window-controls" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Topbar",
  props: {
    logo: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const handleMinimize = () => {
      window.xds.mainMinimize();
    };
    const handleClose = () => {
      window.xds.mainClose();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("img", {
            src: props.logo,
            class: "logo",
            alt: "logo"
          }, null, 8, _hoisted_3$1),
          createBaseVNode("h1", _hoisted_4$1, toDisplayString(props.title), 1)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("button", {
              class: "control-btn minimize",
              onClick: handleMinimize
            }, [
              createVNode(unref(MinusOutlined))
            ]),
            createBaseVNode("button", {
              class: "control-btn close",
              onClick: handleClose
            }, [
              createVNode(unref(CloseOutlined))
            ])
          ])
        ])
      ]);
    };
  }
});
const Topbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6e953c2d"]]);
const _hoisted_1 = { class: "main" };
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "menu" };
const _hoisted_4 = { class: "content" };
const logo = "@/assets/images/icon.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "main",
  setup(__props) {
    const main2 = window.xds.getPluginInfo("main");
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
        createVNode(Topbar, {
          logo,
          title: unref(main2).name
        }, null, 8, ["title"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_a_menu, {
              class: "a-menu-item",
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
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_RouterView, null, {
              default: withCtx(({ Component }) => [
                Component ? (openBlock(), createBlock(Transition, {
                  key: 0,
                  name: "fade"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(Component)))
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const main = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dd1770a0"]]);
export {
  main as default
};
