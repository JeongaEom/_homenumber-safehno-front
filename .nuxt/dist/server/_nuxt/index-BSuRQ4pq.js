import { _ as __nuxt_component_0 } from "./TitleTop-BZQ2BT_Y.js";
import { reactive, unref, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import "hookable";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from "./checkIconOn-D1SjyewE.js";
import "./app-DnF4hRe1.js";
import { u as useHnoMyGetStore } from "./auth-CFcwbLIc.js";
import { f as formatNb } from "./index-DM_dOL8z.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "../server.mjs";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "ufo";
import "radix3";
import "@vue/devtools-api";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const myGetStore = useHnoMyGetStore();
    const d = reactive({
      text: "홈넘버",
      selectedHomeNb: "",
      isActive: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section data-v-83b0c86a><div class="top" data-v-83b0c86a><button class="bg-w line-active" data-v-83b0c86a>홈넘버로 조회</button><button class="bg-w line-active" data-v-83b0c86a>홈넘버 추가</button></div><div class="contents" data-v-83b0c86a>`);
      if (unref(myGetStore).hnos.length === 0) {
        _push(`<div class="notData" data-v-83b0c86a><img${ssrRenderAttr("src", _imports_0)} alt="홈넘버 데이터 없음" data-v-83b0c86a><p data-v-83b0c86a>등록된 홈넘버가</p><p data-v-83b0c86a>존재하지 않습니다.</p></div>`);
      } else {
        _push(`<div class="dataList" data-v-83b0c86a><ul data-v-83b0c86a><!--[-->`);
        ssrRenderList(unref(myGetStore).hnos, (item) => {
          _push(`<li data-v-83b0c86a><div class="${ssrRenderClass(item.virtlHnoNo === d.selectedHomeNb ? "active-line" : "default-line")}" data-v-83b0c86a><ul data-v-83b0c86a><li data-v-83b0c86a><div data-v-83b0c86a>${ssrInterpolate(unref(formatNb)(item.hnoNo))}</div><div data-v-83b0c86a>${ssrInterpolate(item.addrNcm)}</div></li><li data-v-83b0c86a><div data-v-83b0c86a>${ssrInterpolate(item.nm)}</div><div data-v-83b0c86a>${ssrInterpolate(unref(formatNb)(item.moblphonNo))}</div></li><li data-v-83b0c86a><div data-v-83b0c86a>${ssrInterpolate(item.postNo)}</div><div data-v-83b0c86a><div data-v-83b0c86a>${ssrInterpolate(item.bassAddr)}</div>`);
          if (item.detailAddr) {
            _push(`<div data-v-83b0c86a>${ssrInterpolate(item.detailAddr)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li></ul><ul data-v-83b0c86a><li data-v-83b0c86a><div class="${ssrRenderClass(item.virtlHnoNo === d.selectedHomeNb ? "red-active" : "default")}" data-v-83b0c86a> 선택 <span data-v-83b0c86a>`);
          if (item.virtlHnoNo) {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="미선택" data-v-83b0c86a>`);
          } else {
            _push(`<!---->`);
          }
          if (item.virtlHnoNo) {
            _push(`<img${ssrRenderAttr("src", _imports_2)} alt="선택" data-v-83b0c86a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span></div></li><li data-v-83b0c86a><button data-v-83b0c86a>수정</button></li></ul></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      }
      _push(`</div>`);
      if (unref(myGetStore).hnos.length > 0) {
        _push(`<button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-83b0c86a> 다음 </button>`);
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
export {
  index as default
};
//# sourceMappingURL=index-BSuRQ4pq.js.map
