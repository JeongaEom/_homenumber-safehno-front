import { _ as __nuxt_component_0 } from "./TitleTop-BZQ2BT_Y.js";
import { reactive, unref, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import "hookable";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
      link: true,
      linkAddress: "/login",
      text: "홈넘버로 조회",
      login: true,
      // (임시) 로그인 여부
      data: false,
      // false 홈넘버, 보안키 입력 | true 홈넘버 조회 리스트
      id: "",
      pw: "",
      list: [
        // (임시)
        {
          homeNb: "10010001004",
          info: "회사",
          name: "홍길동",
          hp: "01012345678",
          addressNb: "06735",
          address: "서울특별시 서초구 강남대로 241",
          address1: "9층"
        },
        {
          homeNb: "10010001005",
          info: "회사2",
          name: "홍길자",
          hp: "01012345678",
          addressNb: "06735",
          address: "서울특별시 서초구 강남대로 241"
        }
      ]
    });
    const formatName = (name) => {
      if (name.length < 2) {
        return name;
      }
      return name.substring(0, 1) + "*" + name.substring(2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        link: d.link,
        linkAddress: d.linkAddress,
        text: d.text
      }, null, _parent));
      _push(`<section data-v-eb1e6d19><div class="${ssrRenderClass([!d.data ? "no-data" : "", "contents"])}" data-v-eb1e6d19>`);
      if (!d.data) {
        _push(`<div data-v-eb1e6d19><input${ssrRenderAttr("value", d.id)} class="mb-btm-6" type="text" placeholder="홈넘버(숫자만)" data-v-eb1e6d19><input${ssrRenderAttr("value", d.pw)} class="mb-btm-20" type="text" placeholder="보안키" data-v-eb1e6d19><button class="mb-btm-20 red-active" data-v-eb1e6d19> 조회 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (d.data) {
        _push(`<div class="dataList" data-v-eb1e6d19><ul data-v-eb1e6d19><!--[-->`);
        ssrRenderList(d.list, (item) => {
          _push(`<li data-v-eb1e6d19><div class="active-line" data-v-eb1e6d19><ul data-v-eb1e6d19><li data-v-eb1e6d19><div data-v-eb1e6d19>${ssrInterpolate(unref(formatNb)(item.homeNb))}</div><div data-v-eb1e6d19>${ssrInterpolate(item.info)}</div></li><li data-v-eb1e6d19><div data-v-eb1e6d19>${ssrInterpolate(formatName(item.name))}</div><div data-v-eb1e6d19>${ssrInterpolate(unref(formatNb)(item.hp))}</div></li><li data-v-eb1e6d19><div data-v-eb1e6d19>${ssrInterpolate(item.addressNb)}</div><div data-v-eb1e6d19><div data-v-eb1e6d19>${ssrInterpolate(item.address)}</div>`);
          if (item.address1) {
            _push(`<div data-v-eb1e6d19>${ssrInterpolate(item.address1)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li></ul></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!d.data) {
        _push(`<div class="bottom" data-v-eb1e6d19><p data-v-eb1e6d19>찾고자 하시는 본인 혹은 상대방의 홈넘버 및 보안키를 입력하세요. <br data-v-eb1e6d19>보안키를 모르신다면 상대방에게 문의하세요. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (d.data) {
        _push(`<button class="red-active" data-v-eb1e6d19> 다음 </button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homenumberInquiry/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb1e6d19"]]);
export {
  index as default
};
//# sourceMappingURL=index-BgvrcfJT.js.map
