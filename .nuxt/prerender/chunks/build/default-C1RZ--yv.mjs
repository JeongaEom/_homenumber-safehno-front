import { a as buildAssetsURL } from '../_/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, mergeProps } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/h3/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/devalue/index.js';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ufo/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/destr/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/hookable/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/klona/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/scule/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/defu/dist/defu.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ohash/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Workspace/GitLab/homenumber-safehno-front/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/pathe/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unhead/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/@unhead/shared/dist/index.mjs';

const _imports_0 = "" + buildAssetsURL("logo_w.Dx69ksGH.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-e74f10b0><div class="inners" data-v-e74f10b0><img${ssrRenderAttr("src", _imports_0)} alt="\uD648\uB118\uBC84 \uB85C\uACE0(\uAE00\uC528 \uD654\uC774\uD2B8 \uBC84\uC804)" data-v-e74f10b0></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e74f10b0"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "default" }, _attrs))} data-v-7a0b35b6>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7a0b35b6"]]);

export { _default as default };
//# sourceMappingURL=default-C1RZ--yv.mjs.map
