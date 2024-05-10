import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { _ as __nuxt_component_1 } from './completed-SzWz5WDV.mjs';
import { useSSRContext, reactive, unref } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/server-renderer/index.mjs';
import { a as useEndDataStore } from './auth-CFcwbLIc.mjs';
import { f as formatNb } from './index-DM_dOL8z.mjs';
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
      text: "\uD648\uB118\uBC84 \uC218\uC815",
      isPhone: false,
      isActive: false,
      homeNb: "10010001005",
      isNext: true,
      // true는 휴대폰 인증 | false는 수정
      completed: false,
      isReadOnly: true
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
        _push(`<section data-v-6d8edd22>`);
        if (!d.isNext) {
          _push(`<div class="top" data-v-6d8edd22><div class="input-text" data-v-6d8edd22>\uD648\uB118\uBC84 <span data-v-6d8edd22>*</span></div><div data-v-6d8edd22>${ssrInterpolate(unref(formatNb)(d.homeNb))}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="contents" data-v-6d8edd22>`);
        if (d.isNext) {
          _push(`<div class="phone" data-v-6d8edd22><div data-v-6d8edd22> \uC678\uBD80\uB85C\uBD80\uD130 \uD68C\uC6D0\uB2D8\uC758 \uC815\uBCF4\uB97C \uB354 \uC548\uC804\uD558\uAC8C \uBCF4\uD638\uD558\uAE30 \uC704\uD55C \uBC29\uBC95\uC785\uB2C8\uB2E4.\xA0 \uBCF8\uC778 \uD655\uC778\uC744 \uC704\uD574 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC785\uB825\uD558\uC2E0 \uD734\uB300\uD3F0 \uBC88\uD638\uB85C \uC778\uC99D\uD558\uC5EC \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. </div><div data-v-6d8edd22><ul data-v-6d8edd22><li class="input-text" data-v-6d8edd22>\uD734\uB300\uD3F0 \uBC88\uD638 <span data-v-6d8edd22>*</span></li><li data-v-6d8edd22><div class="input-box" data-v-6d8edd22><input type="text" placeholder=""${ssrIncludeBooleanAttr(d.isReadOnly) ? " readonly" : ""} data-v-6d8edd22><button class="bg-w line" data-v-6d8edd22>\uC778\uC99D\uBC88\uD638 \uC804\uC1A1</button></div></li>`);
          if (d.isPhone) {
            _push(`<li class="input-box" data-v-6d8edd22><div class="input-box" data-v-6d8edd22><input type="text" placeholder="" data-v-6d8edd22><button class="bg-w line" data-v-6d8edd22>\uC778\uC99D\uBC88\uD638 \uD655\uC778</button></div><div data-v-6d8edd22> *3\uBD84 \uC774\uB0B4\uB85C \uC778\uC99D\uBC88\uD638(6\uC790\uB9AC)\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.<br data-v-6d8edd22> *\uC778\uC99D\uBC88\uD638 \uC7AC\uC804\uC1A1\uC740 1\uBD84\uB0B4 1\uD68C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. </div></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!d.isNext) {
          _push(`<div class="modifi" data-v-6d8edd22><div class="inputDatas" data-v-6d8edd22><div class="inner" data-v-6d8edd22><ul data-v-6d8edd22><li data-v-6d8edd22><div class="input-text" data-v-6d8edd22>\uC774\uB984 <span data-v-6d8edd22>*</span></div><div data-v-6d8edd22><input type="text" placeholder="" data-v-6d8edd22></div></li><li data-v-6d8edd22><div class="input-text" data-v-6d8edd22>\uD734\uB300\uD3F0 \uBC88\uD638 <span data-v-6d8edd22>*</span></div><div data-v-6d8edd22><input type="text" placeholder="" data-v-6d8edd22></div></li><li class="addInp" data-v-6d8edd22><div class="input-text" data-v-6d8edd22>\uBC30\uC1A1\uC9C0 \uC8FC\uC18C <span data-v-6d8edd22>*</span></div><div data-v-6d8edd22><ul data-v-6d8edd22><li data-v-6d8edd22><div data-v-6d8edd22><input type="text" placeholder="" disabled data-v-6d8edd22></div><div data-v-6d8edd22><button class="bg-w line" data-v-6d8edd22>\uC6B0\uD3B8\uBC88\uD638 \uCC3E\uAE30</button></div></li><li data-v-6d8edd22><input type="text" placeholder="" disabled data-v-6d8edd22></li><li data-v-6d8edd22><input type="text" placeholder="" data-v-6d8edd22></li></ul></div></li><li data-v-6d8edd22><div class="input-text" data-v-6d8edd22>\uC8FC\uC18C \uBCC4\uCE6D</div><div data-v-6d8edd22><input type="text" placeholder="" data-v-6d8edd22></div></li><li data-v-6d8edd22><div class="input-text" data-v-6d8edd22>\uBCF4\uC548\uD0A4 <span data-v-6d8edd22>*</span></div><div data-v-6d8edd22><input type="text" placeholder="" data-v-6d8edd22></div></li></ul><div class="red" data-v-6d8edd22> \uD648\uB118\uBC84 \uC815\uBCF4\uB97C \uC218\uC815\uD558\uB354\uB77C\uB3C4 \uC774\uC804\uC5D0 \uC8FC\uBB38\uD55C \uBCF4\uC548 \uD0DD\uBC30\uC758 \uBC30\uC1A1\uC9C0 \uC815\uBCF4\uB294 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. </div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-6d8edd22> \uD655\uC778 </button></section>`);
      } else {
        _push(`<!---->`);
      }
      if (d.completed) {
        _push(`<section data-v-6d8edd22>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/modification/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6d8edd22"]]);

export { index as default };
//# sourceMappingURL=index-D4KrX5kY.mjs.map
