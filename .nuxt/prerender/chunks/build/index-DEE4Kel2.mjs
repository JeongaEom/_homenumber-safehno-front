import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { useSSRContext, reactive, unref } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/index.mjs';
import { useRouter } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './checkIconOn-D1SjyewE.mjs';
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
    const d = reactive({
      text: "\uD648\uB118\uBC84",
      selectedhnoNo: [],
      isActive: false,
      sMyHnoYn: "Y"
      // (로그인) 마이 홈넘버 조회
    });
    const myGetStore = reactive({
      infoProvAuthNo: "11111",
      // 정보 제공 승인 번호
      termsGrpCd: "",
      // 약관 그룹 코드
      hnos: [
        {
          hnoNo: "10010001004",
          virtlHnoNo: "0",
          nm: "\uD64D\uAE38\uB3D9",
          moblphonNo: "01012345678",
          postNo: "06735",
          bassAddr: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C \uAC15\uB0A8\uB300\uB85C 241",
          detailAddr: "9\uCE35",
          addrNcm: "\uD68C\uC0AC"
        },
        {
          hnoNo: "10010001005",
          virtlHnoNo: "1",
          nm: "\uD64D\uAE38\uC790",
          moblphonNo: "01012345678",
          postNo: "06735",
          bassAddr: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C \uAC15\uB0A8\uB300\uB85C 241",
          detailAddr: "",
          addrNcm: "\uD68C\uC0AC2"
        },
        {
          hnoNo: "10010001006",
          virtlHnoNo: "2",
          nm: "\uD64D\uAE38\uC7A5",
          moblphonNo: "01012345678",
          postNo: "06735",
          bassAddr: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C \uAC15\uB0A8\uB300\uB85C 241",
          detailAddr: "",
          addrNcm: "\uD68C\uC0AC3"
        }
      ],
      sMyHnoYn: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section data-v-a03dbd2d><div class="top" data-v-a03dbd2d><button class="bg-w line-active" data-v-a03dbd2d>\uD648\uB118\uBC84\uB85C \uC870\uD68C</button><button class="bg-w line-active" data-v-a03dbd2d>\uD648\uB118\uBC84 \uCD94\uAC00</button></div><div class="contents" data-v-a03dbd2d>`);
      if (myGetStore.hnos.length === 0) {
        _push(`<div class="notData" data-v-a03dbd2d><img${ssrRenderAttr("src", _imports_0)} alt="\uD648\uB118\uBC84 \uB370\uC774\uD130 \uC5C6\uC74C" data-v-a03dbd2d><p data-v-a03dbd2d>\uB4F1\uB85D\uB41C \uD648\uB118\uBC84\uAC00</p><p data-v-a03dbd2d>\uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div>`);
      } else {
        _push(`<div class="dataList" data-v-a03dbd2d><ul data-v-a03dbd2d><!--[-->`);
        ssrRenderList(myGetStore.hnos, (item) => {
          _push(`<li data-v-a03dbd2d><div class="${ssrRenderClass(d.selectedhnoNo.includes(item.hnoNo) ? "active-line" : "default-line")}" data-v-a03dbd2d><ul data-v-a03dbd2d><li data-v-a03dbd2d><div data-v-a03dbd2d>${ssrInterpolate(unref(formatNb)(item.hnoNo))}</div><div data-v-a03dbd2d>${ssrInterpolate(item.addrNcm)}</div></li><li data-v-a03dbd2d><div data-v-a03dbd2d>${ssrInterpolate(item.nm)}</div><div data-v-a03dbd2d>${ssrInterpolate(unref(formatNb)(item.moblphonNo))}</div></li><li data-v-a03dbd2d><div data-v-a03dbd2d>${ssrInterpolate(item.postNo)}</div><div data-v-a03dbd2d><div data-v-a03dbd2d>${ssrInterpolate(item.bassAddr)}</div>`);
          if (item.detailAddr) {
            _push(`<div data-v-a03dbd2d>${ssrInterpolate(item.detailAddr)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li></ul><ul data-v-a03dbd2d><li data-v-a03dbd2d><div class="${ssrRenderClass(d.selectedhnoNo.includes(item.hnoNo) ? "red-active" : "default")}" data-v-a03dbd2d> \uC120\uD0DD <span data-v-a03dbd2d>`);
          if (!d.selectedhnoNo.includes(item.hnoNo)) {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="\uBBF8\uC120\uD0DD" data-v-a03dbd2d>`);
          } else {
            _push(`<!---->`);
          }
          if (d.selectedhnoNo.includes(item.hnoNo)) {
            _push(`<img${ssrRenderAttr("src", _imports_2)} alt="\uC120\uD0DD" data-v-a03dbd2d>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span></div></li><li data-v-a03dbd2d><button data-v-a03dbd2d>\uC218\uC815</button></li></ul></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      }
      _push(`</div>`);
      if (myGetStore.hnos.length > 0) {
        _push(`<button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-a03dbd2d> \uB2E4\uC74C </button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test_list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a03dbd2d"]]);

export { index as default };
//# sourceMappingURL=index-DEE4Kel2.mjs.map
