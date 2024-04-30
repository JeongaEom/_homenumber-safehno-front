import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { u as useEndDataStore, _ as __nuxt_component_1 } from './completed-Dy6r2TBn.mjs';
import { useSSRContext, reactive } from 'vue';
import { ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useEndDataStore();
    const d = reactive({
      link: true,
      linkAddress: "/homnumberList",
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
        _push(`<section data-v-33be13bc><div class="top" data-v-33be13bc><div class="inputDatas" data-v-33be13bc><div class="inner" data-v-33be13bc><div class="input-text" data-v-33be13bc>\uD648\uB118\uBC84 <span data-v-33be13bc>*</span></div><div data-v-33be13bc><input type="text" placeholder="NNN" data-v-33be13bc>\xA0-\xA0 <input type="text" placeholder="NNNN" data-v-33be13bc>\xA0-\xA0 <input type="text" placeholder="NNNN" data-v-33be13bc>\xA0 </div><button class="bg-w line" data-v-33be13bc>\uC911\uBCF5\uD655\uC778</button></div></div></div><div class="contents" data-v-33be13bc><div class="inputDatas" data-v-33be13bc><div class="inner" data-v-33be13bc><ul data-v-33be13bc><li data-v-33be13bc><div class="input-text" data-v-33be13bc>\uC774\uB984 <span data-v-33be13bc>*</span></div><div data-v-33be13bc><input type="text" placeholder="\uC774\uB984 \uC785\uB825" data-v-33be13bc></div></li><li data-v-33be13bc><div class="input-text" data-v-33be13bc>\uD734\uB300\uD3F0 \uBC88\uD638 <span data-v-33be13bc>*</span></div><div data-v-33be13bc><input type="text" placeholder="\uBC88\uD638 \uC785\uB825 (\uBC30\uC1A1\uC9C0 \uC5F0\uB77D\uCC98)" data-v-33be13bc></div></li><li class="addInp" data-v-33be13bc><div class="input-text" data-v-33be13bc>\uBC30\uC1A1\uC9C0 \uC8FC\uC18C <span data-v-33be13bc>*</span></div><div data-v-33be13bc><ul data-v-33be13bc><li data-v-33be13bc><div data-v-33be13bc><input type="text" placeholder="\uC6B0\uD3B8\uBC88\uD638" disabled data-v-33be13bc></div><div data-v-33be13bc><button class="bg-w line" data-v-33be13bc>\uC6B0\uD3B8\uBC88\uD638 \uCC3E\uAE30</button></div></li><li data-v-33be13bc><input type="text" placeholder="\uAE30\uBCF8\uC8FC\uC18C" disabled data-v-33be13bc></li><li data-v-33be13bc><input type="text" placeholder="\uC0C1\uC138 \uC8FC\uC18C \uC785\uB825" data-v-33be13bc></li></ul></div></li><li data-v-33be13bc><div class="input-text" data-v-33be13bc>\uC8FC\uC18C \uBCC4\uCE6D</div><div data-v-33be13bc><input type="text" placeholder="\uCD5C\uB300 10\uC790" data-v-33be13bc></div></li><li data-v-33be13bc><div class="input-text" data-v-33be13bc>\uBCF4\uC548\uD0A4 <span data-v-33be13bc>*</span></div><div data-v-33be13bc><input type="text" placeholder="\uC22B\uC790 4\uC790\uB9AC" data-v-33be13bc></div></li><li data-v-33be13bc><div class="input-text" data-v-33be13bc>\uBCF4\uC548\uD0A4 \uD655\uC778 <span data-v-33be13bc>*</span></div><div data-v-33be13bc><input type="text" placeholder="\uC22B\uC790 4\uC790\uB9AC" data-v-33be13bc></div></li></ul></div></div></div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-33be13bc> \uD655\uC778 </button></section>`);
      } else {
        _push(`<!---->`);
      }
      if (d.completed) {
        _push(`<section data-v-33be13bc>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33be13bc"]]);

export { index as default };
//# sourceMappingURL=index-CYemfikp.mjs.map
