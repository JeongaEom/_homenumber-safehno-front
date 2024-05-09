import { _ as __nuxt_component_0 } from "./TitleTop-BZQ2BT_Y.js";
import { reactive, computed, unref, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import "hookable";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { f as formatNb } from "./index-DsWc4Nk_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./app-JHcOLCEC.js";
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
    const linkAddress = computed(() => {
      return d.login ? "/homenumberList" : "/";
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
        linkAddress: linkAddress.value,
        text: d.text
      }, null, _parent));
      _push(`<section data-v-2c30416e><div class="${ssrRenderClass([!d.data ? "no-data" : "", "contents"])}" data-v-2c30416e>`);
      if (!d.data) {
        _push(`<div data-v-2c30416e><input${ssrRenderAttr("value", d.id)} class="mb-btm-6" type="text" placeholder="홈넘버(숫자만)" data-v-2c30416e><input${ssrRenderAttr("value", d.pw)} class="mb-btm-20" type="text" placeholder="보안키" data-v-2c30416e><button class="mb-btm-20 red-active" data-v-2c30416e> 조회 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (d.data) {
        _push(`<div class="dataList" data-v-2c30416e><ul data-v-2c30416e><!--[-->`);
        ssrRenderList(d.list, (item) => {
          _push(`<li data-v-2c30416e><div class="active-line" data-v-2c30416e><ul data-v-2c30416e><li data-v-2c30416e><div data-v-2c30416e>${ssrInterpolate(unref(formatNb)(item.homeNb))}</div><div data-v-2c30416e>${ssrInterpolate(item.info)}</div></li><li data-v-2c30416e><div data-v-2c30416e>${ssrInterpolate(formatName(item.name))}</div><div data-v-2c30416e>${ssrInterpolate(unref(formatNb)(item.hp))}</div></li><li data-v-2c30416e><div data-v-2c30416e>${ssrInterpolate(item.addressNb)}</div><div data-v-2c30416e><div data-v-2c30416e>${ssrInterpolate(item.address)}</div>`);
          if (item.address1) {
            _push(`<div data-v-2c30416e>${ssrInterpolate(item.address1)}</div>`);
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
        _push(`<div class="bottom" data-v-2c30416e><p data-v-2c30416e>찾고자 하시는 본인 혹은 상대방의 홈넘버 및 보안키를 입력하세요. <br data-v-2c30416e>보안키를 모르신다면 상대방에게 문의하세요. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (d.data) {
        _push(`<button class="red-active" data-v-2c30416e> 다음 </button>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c30416e"]]);
export {
  index as default
};
//# sourceMappingURL=index-rBvE_-pj.js.map
