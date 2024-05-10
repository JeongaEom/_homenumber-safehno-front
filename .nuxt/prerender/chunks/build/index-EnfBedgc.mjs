import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { _ as __nuxt_component_1 } from './completed-SzWz5WDV.mjs';
import { useSSRContext, reactive } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/server-renderer/index.mjs';
import { a as useEndDataStore } from './auth-CFcwbLIc.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-router/dist/vue-router.node.mjs';
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
    useEndDataStore();
    const d = reactive({
      link: true,
      linkAddress: "/homenumberList",
      text: "\uD648\uB118\uBC84 \uBC1C\uAE09",
      isActive: false,
      completed: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      const _component_completed = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        link: d.link,
        linkAddress: d.linkAddress,
        text: d.text
      }, null, _parent));
      if (!d.completed) {
        _push(`<section data-v-7568825f><div class="top" data-v-7568825f><div class="inputDatas" data-v-7568825f><div class="inner" data-v-7568825f><div class="input-text" data-v-7568825f>\uD648\uB118\uBC84 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="NNN" data-v-7568825f>\xA0-\xA0 <input type="text" placeholder="NNNN" data-v-7568825f>\xA0-\xA0 <input type="text" placeholder="NNNN" data-v-7568825f>\xA0 </div><button class="bg-w line" data-v-7568825f>\uC911\uBCF5\uD655\uC778</button></div></div></div><div class="contents" data-v-7568825f><div class="inputDatas" data-v-7568825f><div class="inner" data-v-7568825f><ul data-v-7568825f><li data-v-7568825f><div class="input-text" data-v-7568825f>\uC774\uB984 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="\uC774\uB984 \uC785\uB825" data-v-7568825f></div></li><li data-v-7568825f><div class="input-text" data-v-7568825f>\uD734\uB300\uD3F0 \uBC88\uD638 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="\uBC88\uD638 \uC785\uB825 (\uBC30\uC1A1\uC9C0 \uC5F0\uB77D\uCC98)" data-v-7568825f></div></li><li class="addInp" data-v-7568825f><div class="input-text" data-v-7568825f>\uBC30\uC1A1\uC9C0 \uC8FC\uC18C <span data-v-7568825f>*</span></div><div data-v-7568825f><ul data-v-7568825f><li data-v-7568825f><div data-v-7568825f><input type="text" placeholder="\uC6B0\uD3B8\uBC88\uD638" disabled data-v-7568825f></div><div data-v-7568825f><button class="bg-w line" data-v-7568825f>\uC6B0\uD3B8\uBC88\uD638 \uCC3E\uAE30</button></div></li><li data-v-7568825f><input type="text" placeholder="\uAE30\uBCF8\uC8FC\uC18C" disabled data-v-7568825f></li><li data-v-7568825f><input type="text" placeholder="\uC0C1\uC138 \uC8FC\uC18C \uC785\uB825" data-v-7568825f></li></ul></div></li><li data-v-7568825f><div class="input-text" data-v-7568825f>\uC8FC\uC18C \uBCC4\uCE6D</div><div data-v-7568825f><input type="text" placeholder="\uCD5C\uB300 10\uC790" data-v-7568825f></div></li><li data-v-7568825f><div class="input-text" data-v-7568825f>\uBCF4\uC548\uD0A4 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="\uC22B\uC790 4\uC790\uB9AC" data-v-7568825f></div></li><li data-v-7568825f><div class="input-text" data-v-7568825f>\uBCF4\uC548\uD0A4 \uD655\uC778 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="\uC22B\uC790 4\uC790\uB9AC" data-v-7568825f></div></li></ul></div></div></div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-7568825f> \uD655\uC778 </button></section>`);
      } else {
        _push(`<!---->`);
      }
      if (d.completed) {
        _push(`<section data-v-7568825f>`);
        _push(ssrRenderComponent(_component_completed, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/issuance/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7568825f"]]);

export { index as default };
//# sourceMappingURL=index-EnfBedgc.mjs.map
