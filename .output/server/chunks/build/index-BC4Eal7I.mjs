import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { useSSRContext, reactive } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const d = reactive({
      text: "\uAC1C\uC778\uC815\uBCF4 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758",
      isActive: false,
      dataList: [
        {
          id: "1",
          type: "\uD544\uC218",
          name: "\uAC1C\uC778\uC815\uBCF4 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758",
          data: `
          <div id="checkText">
            <p>\uD68C\uC0AC\uB294 \uC6D0\uCE59\uC801\uC73C\uB85C \uC774\uC6A9\uC790 \uB3D9\uC758 \uC5C6\uC774 \uAC1C\uC778\uC815\uBCF4\uB97C \uC678\uBD80\uC5D0 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p>
            <br/>
            <div class="box">
              <p>\uC774\uC6A9\uC790 \uB3D9\uC758 \uD6C4 \uAC1C\uC778\uC815\uBCF4 \uC81C\uACF5\uC774 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0</p>
              <br/>
              <p> 1) \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574 \uC9C1\uC811 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uAC83\uC5D0 \uB300\uD574 \uB3D9\uC758\uD55C \uACBD\uC6B0\uC774\uBA70, \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C '\uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uB294 \uC790,</p>
            </div>
          </div>
        `
        }
      ],
      modelValue: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section data-v-72260043><div class="contents" data-v-72260043><!--[-->`);
      ssrRenderList(d.dataList, (item) => {
        var _a;
        _push(`<div data-v-72260043><input type="checkbox"${ssrRenderAttr("id", `checkbox-${item.id}`)} class="custom-checkbox"${ssrIncludeBooleanAttr(Array.isArray(d.modelValue) ? ssrLooseContain(d.modelValue, null) : d.modelValue) ? " checked" : ""} data-v-72260043><label${ssrRenderAttr("for", `checkbox-${item.id}`)} data-v-72260043><span class="${ssrRenderClass(item.type === "\uD544\uC218" ? "essential" : "select")}" data-v-72260043> [${ssrInterpolate(item.type)}]\xA0 </span> ${ssrInterpolate(item.name)}</label><div class="textDatas" data-v-72260043><div class="inner" data-v-72260043>${(_a = item.data) != null ? _a : ""}</div></div></div>`);
      });
      _push(`<!--]--><div data-v-72260043><ul data-v-72260043><li data-v-72260043><div data-v-72260043>\uC81C\uACF5\uBC1B\uB294 \uC790</div><div data-v-72260043>(\uC8FC) \uC6B0\uB9AC\uD648\uC1FC\uD551</div></li><li data-v-72260043><div data-v-72260043>\uC81C\uACF5 \uBAA9\uC801</div><div data-v-72260043>\uBCF4\uC548\uD0DD\uBC30</div></li><li data-v-72260043><div data-v-72260043>\uC81C\uACF5 \uD56D\uBAA9</div><div data-v-72260043>\uD648\uB118\uBC84, \uAC00\uC0C1 \uD648\uB118\uBC84, \uC774\uB984, \uD734\uB300\uD3F0 \uBC88\uD638, \uC8FC\uC18C</div></li><li data-v-72260043><div data-v-72260043>\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</div><div data-v-72260043>\uBC30\uC1A1\uC644\uB8CC \uC2DC \uB610\uB294 \uBC95\uC815 \uC758\uBB34 \uBCF4\uC720 \uAE30\uAC04\uAE4C\uC9C0</div></li><li data-v-72260043><div data-v-72260043>\uAC70\uBD80\uAD8C \uBC0F \uBD88\uC774\uC775</div><div data-v-72260043>\uC774\uC6A9\uC790\uB294 \uB3D9\uC758\uB97C \uAC70\uBD80 \uD560 \uC218 \uC788\uC73C\uB098, \uB3D9\uC758\uB97C \uAC70\uBD80\uD558 \uC2E4 \uACBD\uC6B0 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC774 \uC81C\uD55C\uB429\uB2C8\uB2E4.</div></li></ul></div></div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-72260043> \uD655\uC778 </button></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/personalInformation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72260043"]]);

export { index as default };
//# sourceMappingURL=index-BC4Eal7I.mjs.map
