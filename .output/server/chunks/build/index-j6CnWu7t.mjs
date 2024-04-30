import { useSSRContext, mergeProps, reactive, computed, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useEndDataStore, _ as __nuxt_component_1 } from './completed-Dy6r2TBn.mjs';
import 'vue-router';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main$1 = {
  __name: "TitleSignup",
  __ssrInlineRender: true,
  props: {
    text: { type: String, default: "" }
  },
  setup(__props) {
    const p = __props;
    const d = {
      topList: [
        { nb: "01", title: "\uC774\uC6A9\uC57D\uAD00 \uB3D9\uC758" },
        { nb: "02", title: "\uD68C\uC6D0\uC815\uBCF4 \uC785\uB825" },
        { nb: "03", title: "\uAC00\uC785 \uC644\uB8CC" }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-sign" }, _attrs))} data-v-cb5ffa9e><div data-v-cb5ffa9e><ul data-v-cb5ffa9e><!--[-->`);
      ssrRenderList(d.topList, (item) => {
        _push(`<li class="${ssrRenderClass({
          active: p.text === item.nb,
          next: p.text > item.nb
        })}" data-v-cb5ffa9e><div class="next-title" data-v-cb5ffa9e><div class="basic" data-v-cb5ffa9e>${ssrInterpolate(item.nb)}</div><div class="text-title" data-v-cb5ffa9e>${ssrInterpolate(item.title)}</div></div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TitleSignup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cb5ffa9e"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useEndDataStore();
    const d = reactive({
      text: "01",
      all: "0",
      dataList: [
        {
          id: "1",
          toptitle: "\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC57D\uAD00",
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
        `,
          checked: false
        },
        {
          id: "2",
          toptitle: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uB3D9\uC758",
          type: "\uC120\uD0DD",
          name: "\uAC1C\uC778\uC815\uBCF4 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC7582",
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
        `,
          checked: false
        }
      ],
      isActive: "",
      completed: false
    });
    const titleText = computed(() => d.text === "01" ? "\uC774\uC6A9\uC57D\uAD00 \uB3D9\uC758" : "\uD68C\uC6D0\uC815\uBCF4 \uC785\uB825");
    const btnText = computed(() => d.text === "01" ? "\uB2E4\uC74C" : "\uD655\uC778");
    const allRequiredChecked = computed(() => {
      return d.dataList.filter((item) => item.type === "\uD544\uC218").every((item) => item.checked);
    });
    watch(allRequiredChecked, (newVal) => {
      d.isActive = newVal;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleSignup = __nuxt_component_0;
      const _component_completed = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleSignup, {
        text: d.text
      }, null, _parent));
      if (d.text !== "03") {
        _push(`<div class="subs-title" data-v-b101be62><div data-v-b101be62>${ssrInterpolate(titleText.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!d.completed) {
        _push(`<section data-v-b101be62><div class="contents" data-v-b101be62>`);
        if (d.text === "01") {
          _push(`<div data-v-b101be62><div data-v-b101be62><input type="checkbox"${ssrRenderAttr("id", `checkbox-${d.all}`)} class="custom-checkbox"${ssrIncludeBooleanAttr(Array.isArray(d.all) ? ssrLooseContain(d.all, null) : d.all) ? " checked" : ""} data-v-b101be62><label${ssrRenderAttr("for", `checkbox-${d.all}`)} data-v-b101be62> \uBAA8\uB450 \uD655\uC778, \uB3D9\uC758\uD569\uB2C8\uB2E4. </label></div><!--[-->`);
          ssrRenderList(d.dataList, (item) => {
            var _a;
            _push(`<div class="terms" data-v-b101be62><div class="t-title" data-v-b101be62>${ssrInterpolate(item.toptitle)}</div><div class="textDatas" data-v-b101be62><div class="inner" data-v-b101be62>${(_a = item.data) != null ? _a : ""}</div></div><input type="checkbox"${ssrRenderAttr("id", `checkbox-${item.id}`)} class="custom-checkbox"${ssrIncludeBooleanAttr(Array.isArray(item.checked) ? ssrLooseContain(item.checked, null) : item.checked) ? " checked" : ""} data-v-b101be62><label${ssrRenderAttr("for", `checkbox-${item.id}`)} data-v-b101be62><span class="${ssrRenderClass(item.type === "\uD544\uC218" ? "essential" : "select")}" data-v-b101be62> [${ssrInterpolate(item.type)}]\xA0 </span> ${ssrInterpolate(item.name)}</label></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (d.text === "02") {
          _push(`<div data-v-b101be62><div class="inputDatas" data-v-b101be62><div class="inner" data-v-b101be62><ul data-v-b101be62><li data-v-b101be62><div class="input-text" data-v-b101be62>\uC544\uC774\uB514</div><div data-v-b101be62><ul data-v-b101be62><li data-v-b101be62><div data-v-b101be62><input type="text" placeholder="\uC544\uC774\uB514" data-v-b101be62></div><div data-v-b101be62><button class="bg-w line" data-v-b101be62> \uC911\uBCF5\uD655\uC778 </button></div></li></ul></div></li><li data-v-b101be62><div class="input-text" data-v-b101be62>\uBE44\uBC00\uBC88\uD638 <span data-v-b101be62>*</span></div><div data-v-b101be62><input type="text" placeholder="\uBE44\uBC00\uBC88\uD638" data-v-b101be62></div></li><li data-v-b101be62><div class="input-text" data-v-b101be62>\uBE44\uBC00\uBC88\uD638 \uD655\uC778 <span data-v-b101be62>*</span></div><div data-v-b101be62><input type="text" placeholder="\uBE44\uBC00\uBC88\uD638 \uD655\uC778" data-v-b101be62></div></li><li data-v-b101be62><div class="input-text" data-v-b101be62>\uC774\uBA54\uC77C <span data-v-b101be62>*</span></div><div data-v-b101be62><input type="text" placeholder="\uC774\uBA54\uC77C" data-v-b101be62></div></li></ul></div></div><button class="bg-w line-hp" data-v-b101be62> \uD734\uB300\uD3F0 \uBCF8\uC778 \uC778\uC99D </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-b101be62>${ssrInterpolate(btnText.value)}</button></section>`);
      } else {
        _push(`<!---->`);
      }
      if (d.completed) {
        _push(`<section data-v-b101be62>`);
        _push(ssrRenderComponent(_component_completed, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b101be62"]]);

export { index as default };
//# sourceMappingURL=index-j6CnWu7t.mjs.map
