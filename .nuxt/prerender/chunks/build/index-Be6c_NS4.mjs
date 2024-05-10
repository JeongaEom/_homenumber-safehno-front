import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { useSSRContext, reactive, unref } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/index.mjs';
import { useRouter } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './checkIconOn-D1SjyewE.mjs';
import { u as useHnoMyGetStore } from './auth-CFcwbLIc.mjs';
import { f as formatNb } from './index-CJQT2Hhj.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/h3/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/devalue/index.js';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ufo/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
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
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unctx/dist/index.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const myGetStore = useHnoMyGetStore();
    const d = reactive({
      text: "\uD648\uB118\uBC84",
      selectedHomeNb: "",
      isActive: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section data-v-83b0c86a><div class="top" data-v-83b0c86a><button class="bg-w line-active" data-v-83b0c86a>\uD648\uB118\uBC84\uB85C \uC870\uD68C</button><button class="bg-w line-active" data-v-83b0c86a>\uD648\uB118\uBC84 \uCD94\uAC00</button></div><div class="contents" data-v-83b0c86a>`);
      if (unref(myGetStore).hnos.length === 0) {
        _push(`<div class="notData" data-v-83b0c86a><img${ssrRenderAttr("src", _imports_0)} alt="\uD648\uB118\uBC84 \uB370\uC774\uD130 \uC5C6\uC74C" data-v-83b0c86a><p data-v-83b0c86a>\uB4F1\uB85D\uB41C \uD648\uB118\uBC84\uAC00</p><p data-v-83b0c86a>\uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div>`);
      } else {
        _push(`<div class="dataList" data-v-83b0c86a><ul data-v-83b0c86a><!--[-->`);
        ssrRenderList(unref(myGetStore).hnos, (item) => {
          _push(`<li data-v-83b0c86a><div class="${ssrRenderClass(item.virtlHnoNo === d.selectedHomeNb ? "active-line" : "default-line")}" data-v-83b0c86a><ul data-v-83b0c86a><li data-v-83b0c86a><div data-v-83b0c86a>${ssrInterpolate(unref(formatNb)(item.hnoNo))}</div><div data-v-83b0c86a>${ssrInterpolate(item.addrNcm)}</div></li><li data-v-83b0c86a><div data-v-83b0c86a>${ssrInterpolate(item.nm)}</div><div data-v-83b0c86a>${ssrInterpolate(unref(formatNb)(item.moblphonNo))}</div></li><li data-v-83b0c86a><div data-v-83b0c86a>${ssrInterpolate(item.postNo)}</div><div data-v-83b0c86a><div data-v-83b0c86a>${ssrInterpolate(item.bassAddr)}</div>`);
          if (item.detailAddr) {
            _push(`<div data-v-83b0c86a>${ssrInterpolate(item.detailAddr)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li></ul><ul data-v-83b0c86a><li data-v-83b0c86a><div class="${ssrRenderClass(item.virtlHnoNo === d.selectedHomeNb ? "red-active" : "default")}" data-v-83b0c86a> \uC120\uD0DD <span data-v-83b0c86a>`);
          if (item.virtlHnoNo) {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="\uBBF8\uC120\uD0DD" data-v-83b0c86a>`);
          } else {
            _push(`<!---->`);
          }
          if (item.virtlHnoNo) {
            _push(`<img${ssrRenderAttr("src", _imports_2)} alt="\uC120\uD0DD" data-v-83b0c86a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span></div></li><li data-v-83b0c86a><button data-v-83b0c86a>\uC218\uC815</button></li></ul></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      }
      _push(`</div>`);
      if (unref(myGetStore).hnos.length > 0) {
        _push(`<button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-83b0c86a> \uB2E4\uC74C </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homenumberList/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-83b0c86a"]]);

export { index as default };
//# sourceMappingURL=index-Be6c_NS4.mjs.map
