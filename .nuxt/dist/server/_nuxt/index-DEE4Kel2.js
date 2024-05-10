import { _ as __nuxt_component_0 } from "./TitleTop-BZQ2BT_Y.js";
import { reactive, unref, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import "hookable";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from "./checkIconOn-D1SjyewE.js";
import { f as formatNb } from "./index-CJQT2Hhj.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./app-B3aFB6x9.js";
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
    const d = reactive({
      text: "홈넘버",
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
          nm: "홍길동",
          moblphonNo: "01012345678",
          postNo: "06735",
          bassAddr: "서울특별시 서초구 강남대로 241",
          detailAddr: "9층",
          addrNcm: "회사"
        },
        {
          hnoNo: "10010001005",
          virtlHnoNo: "1",
          nm: "홍길자",
          moblphonNo: "01012345678",
          postNo: "06735",
          bassAddr: "서울특별시 서초구 강남대로 241",
          detailAddr: "",
          addrNcm: "회사2"
        },
        {
          hnoNo: "10010001006",
          virtlHnoNo: "2",
          nm: "홍길장",
          moblphonNo: "01012345678",
          postNo: "06735",
          bassAddr: "서울특별시 서초구 강남대로 241",
          detailAddr: "",
          addrNcm: "회사3"
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
      _push(`<section data-v-a03dbd2d><div class="top" data-v-a03dbd2d><button class="bg-w line-active" data-v-a03dbd2d>홈넘버로 조회</button><button class="bg-w line-active" data-v-a03dbd2d>홈넘버 추가</button></div><div class="contents" data-v-a03dbd2d>`);
      if (myGetStore.hnos.length === 0) {
        _push(`<div class="notData" data-v-a03dbd2d><img${ssrRenderAttr("src", _imports_0)} alt="홈넘버 데이터 없음" data-v-a03dbd2d><p data-v-a03dbd2d>등록된 홈넘버가</p><p data-v-a03dbd2d>존재하지 않습니다.</p></div>`);
      } else {
        _push(`<div class="dataList" data-v-a03dbd2d><ul data-v-a03dbd2d><!--[-->`);
        ssrRenderList(myGetStore.hnos, (item) => {
          _push(`<li data-v-a03dbd2d><div class="${ssrRenderClass(d.selectedhnoNo.includes(item.hnoNo) ? "active-line" : "default-line")}" data-v-a03dbd2d><ul data-v-a03dbd2d><li data-v-a03dbd2d><div data-v-a03dbd2d>${ssrInterpolate(unref(formatNb)(item.hnoNo))}</div><div data-v-a03dbd2d>${ssrInterpolate(item.addrNcm)}</div></li><li data-v-a03dbd2d><div data-v-a03dbd2d>${ssrInterpolate(item.nm)}</div><div data-v-a03dbd2d>${ssrInterpolate(unref(formatNb)(item.moblphonNo))}</div></li><li data-v-a03dbd2d><div data-v-a03dbd2d>${ssrInterpolate(item.postNo)}</div><div data-v-a03dbd2d><div data-v-a03dbd2d>${ssrInterpolate(item.bassAddr)}</div>`);
          if (item.detailAddr) {
            _push(`<div data-v-a03dbd2d>${ssrInterpolate(item.detailAddr)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li></ul><ul data-v-a03dbd2d><li data-v-a03dbd2d><div class="${ssrRenderClass(d.selectedhnoNo.includes(item.hnoNo) ? "red-active" : "default")}" data-v-a03dbd2d> 선택 <span data-v-a03dbd2d>`);
          if (!d.selectedhnoNo.includes(item.hnoNo)) {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="미선택" data-v-a03dbd2d>`);
          } else {
            _push(`<!---->`);
          }
          if (d.selectedhnoNo.includes(item.hnoNo)) {
            _push(`<img${ssrRenderAttr("src", _imports_2)} alt="선택" data-v-a03dbd2d>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span></div></li><li data-v-a03dbd2d><button data-v-a03dbd2d>수정</button></li></ul></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      }
      _push(`</div>`);
      if (myGetStore.hnos.length > 0) {
        _push(`<button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-a03dbd2d> 다음 </button>`);
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
export {
  index as default
};
//# sourceMappingURL=index-DEE4Kel2.js.map
