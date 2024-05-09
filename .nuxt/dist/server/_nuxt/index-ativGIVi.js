import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { mergeProps, useSSRContext, reactive, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { useRouter } from "vue-router";
import "hookable";
import "./app-B04tNyyy.js";
import "js-cookie";
import "./endData-Q2fq-Kiy.js";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
const _sfc_main$1 = {
  __name: "popup",
  __ssrInlineRender: true,
  props: {
    isVisible: { type: Boolean, default: "" },
    idType: { type: String, default: "" },
    texts: { type: String, default: "" },
    btntexts: { type: String, default: "" }
  },
  emits: ["update:isVisible"],
  setup(__props, { emit: __emit }) {
    const p = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (p.isVisible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup" }, _attrs))} data-v-6834d8ed><div class="inner" data-v-6834d8ed><div class="top-ct" data-v-6834d8ed><div data-v-6834d8ed>알림</div><div data-v-6834d8ed>X</div></div><div class="body-ct" data-v-6834d8ed>${ssrInterpolate(p.texts)}</div><div class="bottom-ct" data-v-6834d8ed><button class="red-active" data-v-6834d8ed>${ssrInterpolate(p.btntexts)}</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6834d8ed"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const d = reactive({
      isOpen: false,
      // popup 열기 여부
      idType: "",
      texts: "",
      btntexts: "재시도",
      id: "",
      pwa: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_popup = __nuxt_component_1;
      _push(`<!--[--><div class="tab-btns" data-v-30d45dfc><button class="bg-w line-active" data-v-30d45dfc>회원</button><button class="bg-w line" data-v-30d45dfc>홈넘버</button></div><div class="content" data-v-30d45dfc><div class="inner" data-v-30d45dfc><input${ssrRenderAttr("value", d.id)} class="mb-btm-6" type="text" placeholder="아이디" data-v-30d45dfc><input${ssrRenderAttr("value", d.pwd)} class="mb-btm-20" type="password" placeholder="패스워드" data-v-30d45dfc><button class="mb-btm-20 red-active" data-v-30d45dfc> 로그인 </button><p class="mb-btm-20" data-v-30d45dfc> 아이디/비밀번호 찾기는 <br data-v-30d45dfc> 홈넘버 사이트에서 확인이 가능합니다. `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.homenumber.co.kr/",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 바로가기 &gt; `);
          } else {
            return [
              createTextVNode(" 바로가기 > ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><button class="bg-g line" data-v-30d45dfc> 홈넘버 회원가입 </button></div></div><div class="bottom" data-v-30d45dfc><p data-v-30d45dfc> 고객님의 배송지 개인정보(이름, 휴대폰번호, 주소) 대신 사용하는 <br data-v-30d45dfc> 11자리 보안번호로 개인정보를 안전하게 지켜드립니다. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/serviceInfo" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`자세히 &gt;`);
          } else {
            return [
              createTextVNode("자세히 >")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_popup, {
        isVisible: d.isOpen,
        idType: d.idType,
        texts: d.texts,
        btntexts: d.btntexts,
        "onUpdate:isVisible": ($event) => d.isOpen = $event
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30d45dfc"]]);
export {
  index as default
};
//# sourceMappingURL=index-ativGIVi.js.map
