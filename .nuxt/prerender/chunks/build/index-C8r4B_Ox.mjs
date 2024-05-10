import { useSSRContext, mergeProps, reactive, computed, watch } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_1 } from './completed-SzWz5WDV.mjs';
import { a as useEndDataStore } from './auth-CFcwbLIc.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-router/dist/vue-router.node.mjs';
import './server.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/h3/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/devalue/index.js';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ufo/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/destr/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/hookable/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/klona/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/scule/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/defu/dist/defu.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ohash/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Workspace/GitLab/homenumber-safehno-front/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/pathe/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unhead/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unctx/dist/index.mjs';

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
        _push(`<div class="subs-title" data-v-789d6944><div data-v-789d6944>${ssrInterpolate(titleText.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!d.completed) {
        _push(`<section data-v-789d6944><div class="contents" data-v-789d6944>`);
        if (d.text === "01") {
          _push(`<div data-v-789d6944><div data-v-789d6944><input type="checkbox"${ssrRenderAttr("id", `checkbox-${d.all}`)} class="custom-checkbox"${ssrIncludeBooleanAttr(Array.isArray(d.all) ? ssrLooseContain(d.all, null) : d.all) ? " checked" : ""} data-v-789d6944><label${ssrRenderAttr("for", `checkbox-${d.all}`)} data-v-789d6944> \uBAA8\uB450 \uD655\uC778, \uB3D9\uC758\uD569\uB2C8\uB2E4. </label></div><!--[-->`);
          ssrRenderList(d.dataList, (item) => {
            var _a;
            _push(`<div class="terms" data-v-789d6944><div class="t-title" data-v-789d6944>${ssrInterpolate(item.toptitle)}</div><div class="textDatas" data-v-789d6944><div class="inner" data-v-789d6944>${(_a = item.data) != null ? _a : ""}</div></div><input type="checkbox"${ssrRenderAttr("id", `checkbox-${item.id}`)} class="custom-checkbox"${ssrIncludeBooleanAttr(Array.isArray(item.checked) ? ssrLooseContain(item.checked, null) : item.checked) ? " checked" : ""} data-v-789d6944><label${ssrRenderAttr("for", `checkbox-${item.id}`)} data-v-789d6944><span class="${ssrRenderClass(item.type === "\uD544\uC218" ? "essential" : "select")}" data-v-789d6944> [${ssrInterpolate(item.type)}]\xA0 </span> ${ssrInterpolate(item.name)}</label></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (d.text === "02") {
          _push(`<div data-v-789d6944><div class="inputDatas" data-v-789d6944><div class="inner" data-v-789d6944><ul data-v-789d6944><li data-v-789d6944><div class="input-text" data-v-789d6944>\uC544\uC774\uB514</div><div data-v-789d6944><ul data-v-789d6944><li data-v-789d6944><div data-v-789d6944><input type="text" placeholder="\uC544\uC774\uB514" data-v-789d6944></div><div data-v-789d6944><button class="bg-w line" data-v-789d6944> \uC911\uBCF5\uD655\uC778 </button></div></li></ul></div></li><li data-v-789d6944><div class="input-text" data-v-789d6944>\uBE44\uBC00\uBC88\uD638 <span data-v-789d6944>*</span></div><div data-v-789d6944><input type="text" placeholder="\uBE44\uBC00\uBC88\uD638" data-v-789d6944></div></li><li data-v-789d6944><div class="input-text" data-v-789d6944>\uBE44\uBC00\uBC88\uD638 \uD655\uC778 <span data-v-789d6944>*</span></div><div data-v-789d6944><input type="text" placeholder="\uBE44\uBC00\uBC88\uD638 \uD655\uC778" data-v-789d6944></div></li><li data-v-789d6944><div class="input-text" data-v-789d6944>\uC774\uBA54\uC77C <span data-v-789d6944>*</span></div><div data-v-789d6944><input type="text" placeholder="\uC774\uBA54\uC77C" data-v-789d6944></div></li></ul></div></div><button class="bg-w line-hp" data-v-789d6944> \uD734\uB300\uD3F0 \uBCF8\uC778 \uC778\uC99D </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-789d6944>${ssrInterpolate(btnText.value)}</button></section>`);
      } else {
        _push(`<!---->`);
      }
      if (d.completed) {
        _push(`<section data-v-789d6944>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-789d6944"]]);

export { index as default };
//# sourceMappingURL=index-C8r4B_Ox.mjs.map
