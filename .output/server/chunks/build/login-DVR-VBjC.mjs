import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + buildAssetsURL("logo_g.BLfyQKvc.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "login" }, _attrs))} data-v-73a3dd31><header data-v-73a3dd31><div class="inners" data-v-73a3dd31><img${ssrRenderAttr("src", _imports_0)} alt="\uD648\uB118\uBC84 \uB85C\uACE0(\uAE00\uC528 \uD68C\uC0C9 \uBC84\uC804)" data-v-73a3dd31></div></header><section data-v-73a3dd31><div class="inners" data-v-73a3dd31>`);
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

export { login as default };
//# sourceMappingURL=login-DVR-VBjC.mjs.map
