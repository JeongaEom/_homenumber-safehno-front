import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { reactive, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { ssrRenderComponent } from 'vue/server-renderer';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    useRouter();
    const d = reactive({
      text: "\uD648\uB118\uBC84 \uC0C8\uCC3D \uD14C\uC2A4\uD2B8(\uC5C5\uCCB4)"
    });
    const fetchMockData = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            tokenIssuId: "240411132224EX7G",
            encData: "j1l7oOjyXvGJmukvCRhQw6pVGACNQ8CpjRycl+oglPdzOk4NqK3ol94cpZuVlvlNUtOh/YNr+6Xtc5Q8WHv3qquTRTgNlaMy9b3CR6O4AxbAGvVkRNtzo9C26wmMez3BIwrT/2S7TDR+bppobVFcnw==",
            sign: "mL3BWUrR7dflijDl/3HUuihL40cICf6FbO8CZCWf45U="
          });
        }, 1e3);
      });
    };
    const eventClick = async () => {
      try {
        const responseData = await fetchMockData();
        const width = 480;
        const height = 820;
        const left = (void 0).screen.width / 2 - width / 2;
        const top = (void 0).screen.height / 2 - height / 2;
        const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;
        const url = `http://localhost:3002?data=${encodeURIComponent(JSON.stringify(responseData))}`;
        (void 0).open(url, "_blank", windowFeatures);
        console.log("\uB370\uC774\uD130 \uC804\uC1A1 \uC131\uACF5:", responseData);
      } catch (error) {
        console.error("\uB370\uC774\uD130 \uC804\uC1A1 \uC2E4\uD328:", error);
      }
    };
    __expose({ eventClick });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section><div class="contents"><button> \uD14C\uC2A4\uD2B8 </button></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BRFt0lLr.mjs.map
