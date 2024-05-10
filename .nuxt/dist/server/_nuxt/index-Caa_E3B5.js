import { _ as __nuxt_component_0 } from "./TitleTop-BZQ2BT_Y.js";
import { _ as __nuxt_component_1 } from "./completed-B1oLKGwA.js";
import { reactive, useSSRContext } from "vue";
import "hookable";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import "./app-B3aFB6x9.js";
import { a as useEndDataStore } from "./auth-CFcwbLIc.js";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useEndDataStore();
    const d = reactive({
      link: true,
      linkAddress: "/homenumberList",
      text: "홈넘버 발급",
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
        _push(`<section data-v-7568825f><div class="top" data-v-7568825f><div class="inputDatas" data-v-7568825f><div class="inner" data-v-7568825f><div class="input-text" data-v-7568825f>홈넘버 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="NNN" data-v-7568825f> -  <input type="text" placeholder="NNNN" data-v-7568825f> -  <input type="text" placeholder="NNNN" data-v-7568825f>  </div><button class="bg-w line" data-v-7568825f>중복확인</button></div></div></div><div class="contents" data-v-7568825f><div class="inputDatas" data-v-7568825f><div class="inner" data-v-7568825f><ul data-v-7568825f><li data-v-7568825f><div class="input-text" data-v-7568825f>이름 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="이름 입력" data-v-7568825f></div></li><li data-v-7568825f><div class="input-text" data-v-7568825f>휴대폰 번호 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="번호 입력 (배송지 연락처)" data-v-7568825f></div></li><li class="addInp" data-v-7568825f><div class="input-text" data-v-7568825f>배송지 주소 <span data-v-7568825f>*</span></div><div data-v-7568825f><ul data-v-7568825f><li data-v-7568825f><div data-v-7568825f><input type="text" placeholder="우편번호" disabled data-v-7568825f></div><div data-v-7568825f><button class="bg-w line" data-v-7568825f>우편번호 찾기</button></div></li><li data-v-7568825f><input type="text" placeholder="기본주소" disabled data-v-7568825f></li><li data-v-7568825f><input type="text" placeholder="상세 주소 입력" data-v-7568825f></li></ul></div></li><li data-v-7568825f><div class="input-text" data-v-7568825f>주소 별칭</div><div data-v-7568825f><input type="text" placeholder="최대 10자" data-v-7568825f></div></li><li data-v-7568825f><div class="input-text" data-v-7568825f>보안키 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="숫자 4자리" data-v-7568825f></div></li><li data-v-7568825f><div class="input-text" data-v-7568825f>보안키 확인 <span data-v-7568825f>*</span></div><div data-v-7568825f><input type="text" placeholder="숫자 4자리" data-v-7568825f></div></li></ul></div></div></div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-7568825f> 확인 </button></section>`);
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
export {
  index as default
};
//# sourceMappingURL=index-Caa_E3B5.js.map
