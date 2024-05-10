import { _ as __nuxt_component_0 } from "./TitleTop-BZQ2BT_Y.js";
import { reactive, useSSRContext } from "vue";
import "hookable";
import { ssrRenderComponent } from "vue/server-renderer";
import "vue-router";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const d = reactive({
      text: "홈넘버표준창 테스트",
      tokenIssuId: "240411132224EX7G",
      encData: "j1l7oOjyXvGJmukvCRhQwzENMDVS%2B26pKyKUOhhNLC%2FH%2B%2BswQjmG24qgIeyvLYolANUb2FNrfrbC0Hrvy9yCEVXW4XhoNuu%2FPrXChszEKIeDtJz6q%2BOdFD0wHYhF1qftVaV2HyWBb7s8EDYETsTwJrUBOplIxtiJKI275KVynxi24zUp2%2Br7LQXd4PLhk9PVwegFCvlks9ejwVeklteOKg%3D%3D",
      sign: "XHMACEwxMeve3fbicto6uBjT%2FA%2FMoyQ0nZ%2BPqIuNFHw%3D"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section><div class="contents"><button>홈넘버표준창 팝업</button></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test1/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CDxG-kyA.js.map
