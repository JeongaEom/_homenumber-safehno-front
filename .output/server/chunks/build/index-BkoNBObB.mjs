import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { useSSRContext, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const d = reactive({
      text: "\uD648\uB118\uBC84",
      selectedHomeNb: "",
      isActive: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section data-v-759f0c99><div class="top" data-v-759f0c99><button class="bg-w line-active" data-v-759f0c99>\uD648\uB118\uBC84\uB85C \uC870\uD68C</button><button class="bg-w line-active" data-v-759f0c99>\uD648\uB118\uBC84 \uCD94\uAC00</button></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homenumberList/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-759f0c99"]]);

export { index as default };
//# sourceMappingURL=index-BkoNBObB.mjs.map
