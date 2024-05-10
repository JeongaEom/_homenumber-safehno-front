import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { useSSRContext, reactive, unref } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/index.mjs';
import { useRouter } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/server-renderer/index.mjs';
import { f as formatNb } from './index-DM_dOL8z.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const d = reactive({
      link: true,
      linkAddress: "/login",
      text: "\uD648\uB118\uBC84\uB85C \uC870\uD68C",
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
          info: "\uD68C\uC0AC",
          name: "\uD64D\uAE38\uB3D9",
          hp: "01012345678",
          addressNb: "06735",
          address: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C \uAC15\uB0A8\uB300\uB85C 241",
          address1: "9\uCE35"
        },
        {
          homeNb: "10010001005",
          info: "\uD68C\uC0AC2",
          name: "\uD64D\uAE38\uC790",
          hp: "01012345678",
          addressNb: "06735",
          address: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C \uAC15\uB0A8\uB300\uB85C 241"
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
        _push(`<div data-v-eb1e6d19><input${ssrRenderAttr("value", d.id)} class="mb-btm-6" type="text" placeholder="\uD648\uB118\uBC84(\uC22B\uC790\uB9CC)" data-v-eb1e6d19><input${ssrRenderAttr("value", d.pw)} class="mb-btm-20" type="text" placeholder="\uBCF4\uC548\uD0A4" data-v-eb1e6d19><button class="mb-btm-20 red-active" data-v-eb1e6d19> \uC870\uD68C </button></div>`);
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
        _push(`<div class="bottom" data-v-eb1e6d19><p data-v-eb1e6d19>\uCC3E\uACE0\uC790 \uD558\uC2DC\uB294 \uBCF8\uC778 \uD639\uC740 \uC0C1\uB300\uBC29\uC758 \uD648\uB118\uBC84 \uBC0F \uBCF4\uC548\uD0A4\uB97C \uC785\uB825\uD558\uC138\uC694. <br data-v-eb1e6d19>\uBCF4\uC548\uD0A4\uB97C \uBAA8\uB974\uC2E0\uB2E4\uBA74 \uC0C1\uB300\uBC29\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (d.data) {
        _push(`<button class="red-active" data-v-eb1e6d19> \uB2E4\uC74C </button>`);
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

export { index as default };
//# sourceMappingURL=index-DlAa7kW4.mjs.map
