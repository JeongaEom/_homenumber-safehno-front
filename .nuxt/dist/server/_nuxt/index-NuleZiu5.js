import { _ as __nuxt_component_0 } from "./TitleTop-BZQ2BT_Y.js";
import { reactive, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import "hookable";
import { ssrRenderComponent } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    useRouter();
    const d = reactive({
      text: "홈넘버 새창 테스트(업체)"
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
        const Data = await fetchMockData();
        const width = 480;
        const height = 820;
        const left = (void 0).screen.width / 2 - width / 2;
        const top = (void 0).screen.height / 2 - height / 2;
        const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;
        const url = `http://localhost:3002?data=${encodeURIComponent(JSON.stringify(Data))}`;
        (void 0).open(url, "_blank", windowFeatures);
        console.log("데이터 전송 성공:", Data);
      } catch (error) {
        console.error("데이터 전송 실패:", error);
      }
    };
    __expose({ eventClick });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section><div class="contents"><button> 테스트 </button></div></section><!--]-->`);
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
//# sourceMappingURL=index-NuleZiu5.js.map
