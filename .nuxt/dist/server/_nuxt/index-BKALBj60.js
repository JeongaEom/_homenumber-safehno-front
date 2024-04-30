import { _ as __nuxt_component_0 } from "./TitleTop-BZQ2BT_Y.js";
import { u as useEndDataStore, _ as __nuxt_component_1 } from "./completed-Dy6r2TBn.js";
import { reactive, unref, useSSRContext } from "vue";
import "hookable";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { f as formaNb } from "./index-DsWc4Nk_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "vue-router";
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
import "./app-JHcOLCEC.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useEndDataStore();
    const d = reactive({
      link: true,
      linkAddress: "/homnumberList",
      text: "홈넘버 수정",
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
        _push(`<section data-v-0e1ceb89>`);
        if (!d.isNext) {
          _push(`<div class="top" data-v-0e1ceb89><div class="input-text" data-v-0e1ceb89>홈넘버 <span data-v-0e1ceb89>*</span></div><div data-v-0e1ceb89>${ssrInterpolate(unref(formaNb)(d.homeNb))}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="contents" data-v-0e1ceb89>`);
        if (d.isNext) {
          _push(`<div class="phone" data-v-0e1ceb89><div data-v-0e1ceb89> 외부로부터 회원님의 정보를 더 안전하게 보호하기 위한 방법입니다.  본인 확인을 위해 회원가입 시 입력하신 휴대폰 번호로 인증하여 주시기 바랍니다. </div><div data-v-0e1ceb89><ul data-v-0e1ceb89><li class="input-text" data-v-0e1ceb89>휴대폰 번호 <span data-v-0e1ceb89>*</span></li><li data-v-0e1ceb89><div class="input-box" data-v-0e1ceb89><input type="text" placeholder=""${ssrIncludeBooleanAttr(d.isReadOnly) ? " readonly" : ""} data-v-0e1ceb89><button class="bg-w line" data-v-0e1ceb89>인증번호 전송</button></div></li>`);
          if (d.isPhone) {
            _push(`<li class="input-box" data-v-0e1ceb89><div class="input-box" data-v-0e1ceb89><input type="text" placeholder="" data-v-0e1ceb89><button class="bg-w line" data-v-0e1ceb89>인증번호 확인</button></div><div data-v-0e1ceb89> *3분 이내로 인증번호(6자리)를 입력해주세요.<br data-v-0e1ceb89> *인증번호 재전송은 1분내 1회만 가능합니다. </div></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!d.isNext) {
          _push(`<div class="modifi" data-v-0e1ceb89><div class="inputDatas" data-v-0e1ceb89><div class="inner" data-v-0e1ceb89><ul data-v-0e1ceb89><li data-v-0e1ceb89><div class="input-text" data-v-0e1ceb89>이름 <span data-v-0e1ceb89>*</span></div><div data-v-0e1ceb89><input type="text" placeholder="" data-v-0e1ceb89></div></li><li data-v-0e1ceb89><div class="input-text" data-v-0e1ceb89>휴대폰 번호 <span data-v-0e1ceb89>*</span></div><div data-v-0e1ceb89><input type="text" placeholder="" data-v-0e1ceb89></div></li><li class="addInp" data-v-0e1ceb89><div class="input-text" data-v-0e1ceb89>배송지 주소 <span data-v-0e1ceb89>*</span></div><div data-v-0e1ceb89><ul data-v-0e1ceb89><li data-v-0e1ceb89><div data-v-0e1ceb89><input type="text" placeholder="" disabled data-v-0e1ceb89></div><div data-v-0e1ceb89><button class="bg-w line" data-v-0e1ceb89>우편번호 찾기</button></div></li><li data-v-0e1ceb89><input type="text" placeholder="" disabled data-v-0e1ceb89></li><li data-v-0e1ceb89><input type="text" placeholder="" data-v-0e1ceb89></li></ul></div></li><li data-v-0e1ceb89><div class="input-text" data-v-0e1ceb89>주소 별칭</div><div data-v-0e1ceb89><input type="text" placeholder="" data-v-0e1ceb89></div></li><li data-v-0e1ceb89><div class="input-text" data-v-0e1ceb89>보안키 <span data-v-0e1ceb89>*</span></div><div data-v-0e1ceb89><input type="text" placeholder="" data-v-0e1ceb89></div></li></ul><div class="red" data-v-0e1ceb89> 홈넘버 정보를 수정하더라도 이전에 주문한 보안 택배의 배송지 정보는 변경되지 않습니다. </div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-0e1ceb89> 확인 </button></section>`);
      } else {
        _push(`<!---->`);
      }
      if (d.completed) {
        _push(`<section data-v-0e1ceb89>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e1ceb89"]]);
export {
  index as default
};
//# sourceMappingURL=index-BKALBj60.js.map
