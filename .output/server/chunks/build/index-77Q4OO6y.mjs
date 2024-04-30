import { reactive, useSSRContext } from 'vue';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    reactive({
      token: "",
      tokenIssu: "",
      tokenIssuId: "240411132224EX7G",
      encData: "j1l7oOjyXvGJmukvCRhQw6pVGACNQ8CpjRycl+oglPdzOk4NqK3ol94cpZuVlvlNUtOh/YNr+6Xtc5Q8WHv3qquTRTgNlaMy9b3CR6O4AxbAGvVkRNtzo9C26wmMez3BIwrT/2S7TDR+bppobVFcnw==",
      sign: "mL3BWUrR7dflijDl/3HUuihL40cICf6FbO8CZCWf45U="
    });
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-77Q4OO6y.mjs.map
