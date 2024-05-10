import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "" + __buildAssetsURL("logo_g.BLfyQKvc.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "login" }, _attrs))} data-v-73a3dd31><header data-v-73a3dd31><div class="inners" data-v-73a3dd31><img${ssrRenderAttr("src", _imports_0)} alt="홈넘버 로고(글씨 회색 버전)" data-v-73a3dd31></div></header><section data-v-73a3dd31><div class="inners" data-v-73a3dd31>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-73a3dd31"]]);
export {
  login as default
};
//# sourceMappingURL=login-DVR-VBjC.js.map
