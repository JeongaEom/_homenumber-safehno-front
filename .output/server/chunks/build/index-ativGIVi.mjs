import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { useSSRContext, mergeProps, reactive, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { useRouter } from 'vue-router';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

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
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup" }, _attrs))} data-v-6834d8ed><div class="inner" data-v-6834d8ed><div class="top-ct" data-v-6834d8ed><div data-v-6834d8ed>\uC54C\uB9BC</div><div data-v-6834d8ed>X</div></div><div class="body-ct" data-v-6834d8ed>${ssrInterpolate(p.texts)}</div><div class="bottom-ct" data-v-6834d8ed><button class="red-active" data-v-6834d8ed>${ssrInterpolate(p.btntexts)}</button></div></div></div>`);
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
      btntexts: "\uC7AC\uC2DC\uB3C4",
      id: "",
      pwa: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_popup = __nuxt_component_1;
      _push(`<!--[--><div class="tab-btns" data-v-30d45dfc><button class="bg-w line-active" data-v-30d45dfc>\uD68C\uC6D0</button><button class="bg-w line" data-v-30d45dfc>\uD648\uB118\uBC84</button></div><div class="content" data-v-30d45dfc><div class="inner" data-v-30d45dfc><input${ssrRenderAttr("value", d.id)} class="mb-btm-6" type="text" placeholder="\uC544\uC774\uB514" data-v-30d45dfc><input${ssrRenderAttr("value", d.pwd)} class="mb-btm-20" type="password" placeholder="\uD328\uC2A4\uC6CC\uB4DC" data-v-30d45dfc><button class="mb-btm-20 red-active" data-v-30d45dfc> \uB85C\uADF8\uC778 </button><p class="mb-btm-20" data-v-30d45dfc> \uC544\uC774\uB514/\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30\uB294 <br data-v-30d45dfc> \uD648\uB118\uBC84 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uD655\uC778\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.homenumber.co.kr/",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \uBC14\uB85C\uAC00\uAE30 &gt; `);
          } else {
            return [
              createTextVNode(" \uBC14\uB85C\uAC00\uAE30 > ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><button class="bg-g line" data-v-30d45dfc> \uD648\uB118\uBC84 \uD68C\uC6D0\uAC00\uC785 </button></div></div><div class="bottom" data-v-30d45dfc><p data-v-30d45dfc> \uACE0\uAC1D\uB2D8\uC758 \uBC30\uC1A1\uC9C0 \uAC1C\uC778\uC815\uBCF4(\uC774\uB984, \uD734\uB300\uD3F0\uBC88\uD638, \uC8FC\uC18C) \uB300\uC2E0 \uC0AC\uC6A9\uD558\uB294 <br data-v-30d45dfc> 11\uC790\uB9AC \uBCF4\uC548\uBC88\uD638\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC548\uC804\uD558\uAC8C \uC9C0\uCF1C\uB4DC\uB9BD\uB2C8\uB2E4. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/serviceInfo" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC790\uC138\uD788 &gt;`);
          } else {
            return [
              createTextVNode("\uC790\uC138\uD788 >")
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

export { index as default };
//# sourceMappingURL=index-ativGIVi.mjs.map
