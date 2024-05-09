import { reactive, unref, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { d as defineStore } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

defineStore("hnoMyGet", {
  state: () => ({
    infoProvAuthNo: "",
    termsGrpCd: "",
    hnos: [
      {
        hnoNo: "",
        virtlHnoNo: "",
        nm: "",
        moblphonNo: "",
        postNo: "",
        bassAddr: "",
        detailAddr: "",
        addrNcm: ""
      }
    ]
  }),
  actions: {}
});
const useEndDataStore = defineStore("endData", {
  // 상태를 반환하는 함수입니다.
  state: () => ({
    endData: ""
    // "1"이면 발급 | "2"이면 수정 | "3"이면 회원가입완료 |"4"이면 에러 메세지
  }),
  actions: {}
});

const _imports_0 = "data:image/png;base64,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";
const _sfc_main = {
  __name: "completed",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const endDataStore = useEndDataStore();
    const d = reactive({
      data: "",
      btntext: ""
    });
    console.log("endDataStore.endData : ", endDataStore.endData);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass([{
        issuance: unref(endDataStore).endData === "1",
        modification: unref(endDataStore).endData === "2",
        signup: unref(endDataStore).endData === "3",
        error: unref(endDataStore).endData === "4"
      }, "contents"])}" data-v-13c2e625><div data-v-13c2e625><img${ssrRenderAttr("src", _imports_0)} alt="\uD648\uB118\uBC84 \uB370\uC774\uD130 \uC5C6\uC74C" data-v-13c2e625>`);
      if (unref(endDataStore).endData === "1" || unref(endDataStore).endData === "2") {
        _push(`<div data-v-13c2e625> \uD648\uB118\uBC84 ${ssrInterpolate(d.data)}\uC774<br data-v-13c2e625> \uC131\uACF5\uC801\uC73C\uB85C \uC774\uB8E8\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. </div>`);
      } else if (unref(endDataStore).endData === "3") {
        _push(`<div data-v-13c2e625> \uD68C\uC6D0 \uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. <br data-v-13c2e625> \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574 \uD648\uB118\uBC84\uB97C \uBC1C\uAE09\uD574 \uC8FC\uC138\uC694. </div>`);
      } else if (unref(endDataStore).endData === "4") {
        _push(`<div data-v-13c2e625> \uC5D0\uB7EC... </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><button class="bg-w line-active" data-v-13c2e625>${ssrInterpolate(d.btntext)}</button><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/completed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13c2e625"]]);

export { __nuxt_component_1 as _, useEndDataStore as u };
//# sourceMappingURL=completed-C2MLMmuu.mjs.map
