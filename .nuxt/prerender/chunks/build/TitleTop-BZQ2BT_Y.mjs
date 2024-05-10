import { mergeProps, useSSRContext } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAYAAACdbmSKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgBnZM9bsJAEIXfYEtp6RNFW7p0EylKtcoJ9gjkCHTpAicINyA5QZwyTeIqPxWULjdKhKBzCRQss8ggs6wtw2s8Gvnb92Z/CA10LVWHCI9c5sagRw2BYamV10JXUsUh4YPLdqmt6UgAHK8Twh9JcKQXD9D7TpNnqgCsg/AAfVvTscAe1BTYQVKq9oIwcgEYDL7SpAtHLQssPQ7s+uQDrMIF8MDf2Onrz/fkDhVqnQF9zjh2+uLmVg2roN1MNqJxHG1En2OwyaKz+bmI3vgnhf0DjS9FRH86Sw8gq3+d5Rciej0ACdIFg/IKTUHvhS0OeuRExcqg+5Mmg5Nu+SnvKQ/qoInOpjzjrJhxq2ktZMWbM2bwl8G4iHe/Bk7bfS+DF4gBAAAAAElFTkSuQmCC";
const _sfc_main = {
  __name: "TitleTop",
  __ssrInlineRender: true,
  props: {
    link: { type: Boolean, default: false },
    // 이전페이지 사용 여부
    linkAddress: { type: String, default: "" },
    //이전으로 이동 시 링크
    text: { type: String, default: "" }
  },
  setup(__props) {
    useRouter();
    const p = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-top" }, _attrs))} data-v-654e6863><div class="inner" data-v-654e6863>`);
      if (p.link) {
        _push(`<button data-v-654e6863><img${ssrRenderAttr("src", _imports_0)} alt="\uC774\uC804\uD398\uC774\uC9C0\uB85C" data-v-654e6863></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-654e6863>${ssrInterpolate(p.text)}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TitleTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-654e6863"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=TitleTop-BZQ2BT_Y.mjs.map
